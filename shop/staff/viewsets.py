import logging
# from pprint import pprint

from django.utils.text import slugify
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

from shop.models import Category, Product, ProductAttribute, ProductImage, SupplierOrder, ProductStages
from miq.staff.serializers import PageSerializer
from shop.staff.serializers import (
    ProductSerializer, ProductListSerializer,
    ProductAttributeSerializer, ProductPageSerializer,
    CategorySerializer, CategoryPageSerializer,
    SupplierOrderSerializer,
)


from .crawler import Crawler

log = logging.getLogger(__name__)


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

    def create_page(self, label, title):
        page_ser = self.page_serializer(
            data={'label': label, 'title': title, 'slug_public': slugify(title)})
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

    @action(methods=['patch'], detail=True, url_path=r'swap-cover')
    def swap_cover(self, request, *args, **kwargs):
        obj = self.get_object()
        img_slug = request.data.get('slug')
        if not img_slug:
            raise serializers.ValidationError({'slug': _('Image slug required')})

        img = obj.images.filter(slug=img_slug).first()
        if img:
            cover = obj.cover
            if cover:
                cover_alt_text = cover.alt_text
                cover_position = cover.position
                cover_caption = cover.caption

                cover.alt_text = img.alt_text
                cover.position = img.position
                cover.caption = img.caption
                cover.save()
                obj.images.add(cover)

                img.alt_text = cover_alt_text
                img.position = cover_position
                img.caption = cover_caption
                img.save()

            obj.cover = img
            obj.images.remove(img)
            obj.save()

        return self.retrieve(self, request, *args, **kwargs)

    @action(methods=['patch'], detail=True, url_path=r'publish')
    def publish(self, request, *args, **kwargs):
        obj = self.get_object()
        page = obj.page
        obj_id = obj.id

        if page and (unpublish := self.request.data.get('unpublish', False)) and unpublish is True:
            page.is_published = False
            page.save()
            log.info(f'Unpublished product [{obj_id}]')
            return self.retrieve(self, request, *args, **kwargs)

        if not obj.retail_price:
            log.error(f'Cannot publish [{obj_id}]: retail price required')
            raise serializers.ValidationError(
                {'retail_price': _('Retail price required')})

        category = obj.category
        if not category or not category.page:
            log.error(f'Cannot publish [{obj_id}]: No category or no category page')
            raise serializers.ValidationError({'category': _('Category required')})

        if not category.page.is_published:
            log.error(f'Cannot publish [{obj_id}]: Category is unpublished')
            raise serializers.ValidationError({'category': _('Unpublished')})

        if not page:
            log.error(f'Cannot publish [{obj_id}]: product has no page')
            raise serializers.ValidationError({'page': _('Page required')})

        page.is_published = True
        if not page.dt_published:
            page.dt_published = timezone.now()
        page.save()
        log.info(f'Published product [{obj_id}]')

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

    def get_serializer_class(self):
        if self.action == 'list':
            return ProductListSerializer

        return ProductSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        params = self.request.query_params

        if(order_slug := params.get('supplier_order_slug')):
            if order_slug == '':
                return qs.none()
            qs = qs.filter(supplier_orders__slug=order_slug)

        if(cat := params.get('cat')) and cat != '':
            qs = qs.filter(category__slug=cat)

        if(presale := params.get('presale')) and presale != '':
            qs = qs.filter(is_pre_sale=True)

        if(sale := params.get('sale')) and sale != '':
            qs = qs.filter(is_on_sale=True)

        if(published := params.get('published')) and published != '':
            if published == 'include':
                qs = qs.published()
            if published == 'exclude':
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

    def get_queryset(self):
        return super().get_queryset().products_count().order_by('-created')

    def perform_create(self, ser):
        name = self.request.data.get('name')
        ser.save(page=self.create_page(name, name))


"""
SUPPLIER ORDER
"""


class SupplierOrderViewset(Mixin, viewsets.ModelViewSet):
    lookup_field = 'slug'
    queryset = SupplierOrder.objects.all()
    serializer_class = SupplierOrderSerializer
    parser_classes = (JSONParser, )
    permission_classes = (IsAdminUser, DjangoModelPermissions)

    #

    crawler = Crawler()

    @action(methods=['post'], detail=True, url_path=r'shein')
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
            # retail_price=float(p_data.get('cost')) * (5 / 4) * 1000
            retail_price = int(float(p_data.get('cost')) * 2 * 1000)
            product = Product.objects.create(
                page=page, name=p_name, description=p_data.get('description', ''),
                supplier_item_id=goods_id, retail_price=retail_price,
                supplier_item_sn=p_data.get('productCode', ''),
                supplier_item_cost=p_data.get('cost'),
                supplier_name=p_data.get('brand', 'shein'),
                supplier_item_cost_currency=p_data.get('cost_currency'),
                supplier_item_url=url, supplier_item_category=p_data.get('category')
            )

        self.add_product_attributes(product, p_data)
        self.add_product_images(product, p_data)

        product.save()

        order = self.get_object()
        if not order.items.filter(slug=product.slug).exists():
            order.items.add(product)

        return Response(ProductSerializer(instance=product).data, status=201)

    def retrieve(self, *args, **kwargs):
        r = super().retrieve(*args, **kwargs)
        r.data['categories'] = self.get_category_options()
        r.data['stages'] = ProductStages
        return r

    def add_product_images(self, product, product_data: dict):
        name = product_data.get('name')
        img_data = {
            'site': get_current_site(self.request),
            'user': self.request.user,
        }
        position = 1
        if (cover := product_data.get('cover')) and (res := download_img_from_url(cover)) and res.status_code == 200:
            if product.cover:
                product.cover.delete()

            product.cover = ProductImage.objects.create(
                **img_data, alt_text=name, position=position,
                src=img_file_from_response(res, None, get_file_ext(cover))
            )

        if imgs := product_data.get('imgs'):
            product.images.all().delete()
            position = 1
            for url in imgs:
                res = download_img_from_url(url)
                if not res or res.status_code != 200:
                    continue

                position += 1
                img = ProductImage.objects.create(
                    **img_data, alt_text=f'{name} {position}', position=position,
                    src=img_file_from_response(res, None, get_file_ext(url))
                )
                product.images.add(img)

    def add_product_attributes(self, product, product_data: dict):
        attrs = product.attributes
        for _attr in product_data.get('attrs'):  # type: dict
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
