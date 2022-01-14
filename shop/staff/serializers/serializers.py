
from rest_framework import serializers

from miq.auth.serializers import ImageSerializer
from miq.staff.serializers import PageSerializer

from shop.models import ProductAttribute, ProductPage, ProductImage


class ProductAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAttribute
        read_only_fields = ('slug',)
        fields = ('name', 'value', *read_only_fields)


class ProductPageSerializer(PageSerializer):
    class Meta(PageSerializer.Meta):
        model = ProductPage

        # Publish through viewset action
        read_only_fields = ('slug', 'is_published', 'dt_published')
        fields = ('slug_public', 'title', *read_only_fields,)


class ProductImageSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ProductImage
