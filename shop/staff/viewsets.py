from pprint import pprint
from django import http
from django.utils import timezone
from django.contrib.sites.shortcuts import get_current_site
from django.db import IntegrityError
from django.utils.translation import gettext_lazy as _

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import viewsets, serializers
from rest_framework.permissions import IsAdminUser
from rest_framework.pagination import PageNumberPagination
# from rest_framework import status, mixins

from miq.utils import get_file_ext
from miq.mixins import StaffLoginRequired
from miq.permissions import DjangoModelPermissions
from miq.utils import download_img_from_url, img_file_from_response

from shop.models import Category, Product, ProductAttribute, ProductImage

from shop.staff.serializers import (
    PageSerializer,
    ProductAttributeSerializer,
    ProductSerializer, ProductPageSerializer,
    CategorySerializer, CategoryPageSerializer,
)

# from .shein import (
#     shein_product_id_from_url,
#     get_shein_product_data, shein_data_to_product_dict
# )

from .crawler import Crawler


class Mixin(StaffLoginRequired):
    page_serializer = PageSerializer

    @action(methods=['patch'], detail=True, url_path=r'page')
    def page(self, request, *args, **kwargs):
        ser = self.page_serializer(
            self.get_object().page, data=request.data, partial=True
        )
        ser.is_valid(raise_exception=True)
        ser.save()
        return self.retrieve(self, request, *args, **kwargs)


class Paginator(PageNumberPagination):
    page_size = 11


class StaffProductViewset(Mixin, viewsets.ModelViewSet):
    lookup_field = 'slug'  # type: str
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = (JSONParser, )
    permission_classes = (IsAdminUser, DjangoModelPermissions)
    page_serializer = ProductPageSerializer
    pagination_class = Paginator
    #
    crawler = Crawler()

    @action(methods=['post'], detail=False, url_path=r'shein')
    def shein(self, request: 'http.HttpRequest', *args: tuple, **kwargs: dict) -> 'Response':
        url = request.data.get('url')  # type: str
        if not url:
            raise serializers.ValidationError({'url': _('url required')})

        p_data = self.crawler.shein_url_to_data(url)
        if not isinstance(p_data, dict):
            raise serializers.ValidationError(
                {'data': _('can not perform this action')}
            )

        qs = Product.objects
        p_name = p_data.get('name')
        goods_id = p_data.get('id')
        if qs.filter(supplier_item_id=goods_id).exists():
            product = Product.objects.get(supplier_item_id=goods_id)
        else:
            page = self.create_page(p_name, p_name)
            product = Product.objects.create(
                page=page, name=p_name, supplier_item_id=goods_id,
                retail_price=float(p_data.get('cost')) * (5 / 2) * 1000)

        product.description = p_data.get('description', '')
        product.supplier_name = p_data.get('brand', 'shein')
        product.supplier_item_cost = p_data.get('cost')
        product.supplier_item_cost_currency = p_data.get('cost_currency')
        product.supplier_item_category = p_data.get('category')
        product.supplier_item_url = url

        attrs = product.attributes
        for _attr in p_data.get('attrs'):  # type: dict
            name = _attr.get('name').lower()  # type: str
            value = _attr.get('value')  # type: str
            if attrs.filter(name=name).exists():
                attr = attrs.get(name=name)  # type: ProductAttribute
                if attr.value != value:
                    attr.value = value
                    attr.save()

            else:
                attr = ProductAttribute\
                    .objects.create(product=product, name=name, value=value)

        img_data = {
            'site': get_current_site(self.request),
            'user': self.request.user,
        }
        position = 1
        if (cover := p_data.get('cover')) and (res := download_img_from_url(cover)) and res.status_code == 200:
            if product.cover:
                product.cover.delete()

            product.cover = ProductImage.objects.create(
                **img_data, alt_text=p_name, position=position,
                src=img_file_from_response(res, None, get_file_ext(cover))
            )

        if imgs := p_data.get('imgs'):
            product.images.all().delete()
            position = 1
            for url in imgs:
                res = download_img_from_url(url)
                if not res or res.status_code != 200:
                    continue

                position += 1
                img = ProductImage.objects.create(
                    **img_data, alt_text=f'{p_name} {position}', position=position,
                    src=img_file_from_response(res, None, get_file_ext(url))
                )
                product.images.add(img)

        product.save()
        data = ProductSerializer(product).data
        data['categories'] = self.get_category_options()

        return Response(data=data)

    @action(methods=['patch'], detail=True, url_path=r'publish')
    def publish(self, request, *args, **kwargs):
        obj = self.get_object()

        if not obj.retail_price:
            raise serializers.ValidationError(
                {'retail_price': _('Retail price required')})

        category = obj.category
        if not category or not category.page:
            raise serializers.ValidationError({'category': _('Category required')})

        if not category.page.is_published:
            raise serializers.ValidationError({'category': _('Unpublished')})

        page = obj.page
        if not page:
            raise serializers.ValidationError({'page': _('Page required')})

        page.is_published = True
        if not page.dt_published:
            page.dt_published = timezone.now()
        page.save()

        return self.retrieve(self, request, *args, **kwargs)

    @action(methods=['post', 'patch', 'delete'], detail=True, url_path=r'attribute/(?P<attr_slug>[\w-]+)')
    def attribute(self, request, *args, attr_slug=None, ** kwargs):
        product = self.get_object()
        data = request.data
        if request.method == 'POST':
            try:
                attr = ProductAttribute.objects.create(
                    product=product, name=data.get('name'), value=data.get('value'),)
            except IntegrityError:
                raise serializers.ValidationError(
                    {'name': 'This attribute already exists'})

            return self.retrieve(self, request, *args, **kwargs)

        if not attr_slug:
            raise serializers.ValidationError(
                {'attr_slug': _('Attribute slug required')})

        attr = product.attributes.filter(slug=attr_slug).first()
        if not attr:
            raise serializers.ValidationError(
                {'attr_slug': _('Invalid attribute slug')}, code='invalid')

        if request.method == 'PATCH':
            ser = ProductAttributeSerializer(attr, data=request.data, partial=True)
            try:
                ser.is_valid(raise_exception=True)
                ser.save()
            except Exception:
                raise serializers.ValidationError(
                    {'name': 'This attribute already exists'})

        if request.method == 'DELETE':
            attr.delete()

        return self.retrieve(self, request, *args, **kwargs)

    def get_queryset(self):
        qs = super().get_queryset()
        params = self.request.query_params
        if(status := params.get('status')) and status != '':
            if status == 'published':
                qs = qs.published()
            if status == 'draft':
                qs = qs.draft()
        return qs

    def list(self, request, *args, **kwargs):
        r = super().list(request, *args, **kwargs)
        r.data['categories'] = self.get_category_options()
        return r

    def retrieve(self, *args, **kwargs):
        r = super().retrieve(*args, **kwargs)
        r.data['categories'] = self.get_category_options()
        return r

    def perform_create(self, ser):
        name = self.request.data.get('name')
        ser.save(page=self.create_page(name, name))

    def create_page(self, label, title):
        page_ser = self.page_serializer(data={'label': label, 'title': title, })
        page_ser.is_valid(raise_exception=True)
        return page_ser.save()

    def get_category_options(self) -> dict:
        cats = Category.objects.all()
        return {
            'count': cats.count(),
            'items': [
                {
                    'label': cat.name,
                    'slug': cat.slug,
                    'value': cat.slug
                } for cat in cats
            ]
        }


"""
CATEGORY
"""


class StaffCategoryViewset(Mixin, viewsets.ModelViewSet):
    lookup_field = 'slug'
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    parser_classes = (JSONParser, )
    permission_classes = (IsAdminUser, DjangoModelPermissions)

    page_serializer = CategoryPageSerializer

    def perform_create(self, ser):
        page_ser = self.page_serializer(
            data={
                'label': self.request.data.get('name'), 'title': self.request.data.get('name'),
            }
        )
        page_ser.is_valid(raise_exception=True)
        ser.save(page=page_ser.save())
