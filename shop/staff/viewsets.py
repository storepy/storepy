
from django.utils.translation import gettext_lazy as _
# from django.contrib.sites.shortcuts import get_current_site

from rest_framework.decorators import action
# from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from rest_framework import viewsets, serializers
# from rest_framework import viewsets, serializers, status, mixins
from rest_framework.parsers import JSONParser

from miq.mixins import StaffLoginRequired
from miq.permissions import DjangoModelPermissions
# from core.payments.views import PriceViewSetMixin

from shop.models import Category
from shop.models import Product

from shop.staff.serializers import (
    ProductSerializer, ProductPageSerializer,
    CategorySerializer, CategoryPageSerializer,
    #  ProductPriceSerializer
)


class Mixin(StaffLoginRequired):
    pass


# class ProductViewset(Mixin, PriceViewSetMixin, viewsets.ModelViewSet):
class StaffProductViewset(Mixin, viewsets.ModelViewSet):
    lookup_field = 'slug'
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    parser_classes = (JSONParser, )
    permission_classes = (IsAdminUser, DjangoModelPermissions)

    # price_serializer = ProductPriceSerializer

    @action(methods=['post', 'patch'], detail=True, url_path=r'category')
    def category(self, request, *args, **kwargs):
        data = request.data
        instance = self.get_object()
        if request.method == 'POST':
            cat_slug = data.get('category')
            if not cat_slug:
                raise serializers.ValidationError({'category': _('Slug required')})
            instance.category = Category.objects.get(slug=cat_slug)
            instance.save()
            return self.retrieve(self, request, *args, **kwargs)

        ser = CategorySerializer(instance.category, data=data, partial=True)
        ser.is_valid(raise_exception=True)
        ser.save()
        return self.retrieve(self, request, *args, **kwargs)

    @action(methods=['patch'], detail=True, url_path=r'page')
    def page(self, request, *args, **kwargs):
        ser = ProductPageSerializer(
            self.get_object().page, data=request.data, partial=True
        )
        ser.is_valid(raise_exception=True)
        ser.save()
        return self.retrieve(self, request, *args, **kwargs)

    def retrieve(self, *args, **kwargs):
        r = super().retrieve(*args, **kwargs)
        # r.data['categories'] = CategorySerializer(
        #     Category.objects.all(), many=True).data
        return r

    def perform_create(self, ser):
        page_ser = ProductPageSerializer(data={
            'label': self.request.data.get('name'), 'title': self.request.data.get('name'), }
        )
        page_ser.is_valid(raise_exception=True)
        ser.save(page=page_ser.save())


"""
CATEGORY
"""


class StaffCategoryViewset(Mixin, viewsets.ModelViewSet):
    lookup_field = 'slug'
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    parser_classes = (JSONParser, )
    permission_classes = (IsAdminUser, DjangoModelPermissions)

    def perform_create(self, ser):
        page_ser = CategoryPageSerializer(
            data={
                'label': self.request.data.get('name'), 'title': self.request.data.get('name'),
            }
        )
        page_ser.is_valid(raise_exception=True)
        ser.save(page=page_ser.save())
