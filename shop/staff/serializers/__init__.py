
from rest_framework import serializers

from miq.mixins import ModelSerializerMixin
from miq.auth.serializers import ImageSerializer
from miq.staff.serializers import PageSerializer

# from miqpay.serializers import PriceSerializer

from shop.models import Category, CategoryPage
from shop.models import Product, ProductPage, ProductImage


#
# CATEGORY
#

class CategoryPageSerializer(PageSerializer):
    class Meta(PageSerializer.Meta):
        model = CategoryPage
        read_only_fields = ('slug', 'dt_published')
        fields = ('slug_public', 'title', 'label', 'is_published', *read_only_fields,)


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        read_only_fields = ('slug', 'page', 'created', 'updated')
        fields = (
            'name', 'description', 'position',
            *read_only_fields
        )

    page = CategoryPageSerializer(required=False)


#
# PRODUCT
#

# class ProductPriceSerializer(PriceSerializer):
#     class Meta(PriceSerializer.Meta):
#         model = ProductPrice


class ProductPageSerializer(PageSerializer):
    class Meta(PageSerializer.Meta):
        model = ProductPage
        read_only_fields = ('slug', 'dt_published')
        fields = ('title', 'is_published', *read_only_fields,)


class ProductImageSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ProductImage


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        read_only_fields = (
            'slug', 'page', 'category', 'cover_data', 'images_data', 'created', 'updated',
        )
        fields = (
            'name', 'description', 'cover', 'slug_public',
            # 'price',
            'images', 'position', *read_only_fields
        )

    # price = ProductPriceSerializer(read_only=True)
    cover = serializers.SlugRelatedField(
        slug_field="slug", queryset=ProductImage.objects.all(), required=False
    )
    cover_data = serializers.SerializerMethodField(required=False)
    page = ProductPageSerializer(required=False)
    category = CategorySerializer(required=False)

    images = serializers.SlugRelatedField(
        slug_field="slug", queryset=ProductImage.objects.all(), many=True, required=False
    )
    images_data = serializers.SerializerMethodField(required=False)

    def get_cover_data(self, obj):
        if not obj.cover:
            return
        return ProductImageSerializer(obj.cover).data

    def get_images_data(self, obj):
        return ProductImageSerializer(obj.images.order_by('position', 'created'), many=True).data
