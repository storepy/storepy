from rest_framework import serializers

from shop.models import Category
from shop.models import Product, ProductImage
from .cat_ser import CategorySerializer
from .serializers import CoverMixin, ProductAttributeSerializer, ProductImageSerializer, ProductPageSerializer


class Mixin(CoverMixin):
    image_serializer = ProductImageSerializer

    def get_category_data(self, obj):
        if not obj.category:
            return
        return CategorySerializer(obj.category).data

    def get_images_data(self, obj):
        return ProductImageSerializer(
            obj.images.order_by('position', 'created'),
            many=True
        ).data

    def get_add_to_cart_count(self, obj):
        return obj.cart_items.count()


class ProductListSerializer(Mixin, serializers.ModelSerializer):
    class Meta:
        model = Product
        read_only_fields = (
            'slug', 'category_data', 'cover_data',
            'add_to_cart_count',
            #
            'supplier_name', 'supplier_item_id', 'supplier_item_category',
            'supplier_item_url', 'supplier_item_cost_currency',
        )
        fields = (
            *read_only_fields,
            'name', 'description', 'category', 'cover',
            'retail_price', 'is_on_sale', 'sale_price',
            'is_pre_sale', 'is_pre_sale_text', 'cost', 'images', 'position',
            'supplier_item_cost',
        )

    cover = serializers.SlugRelatedField(
        slug_field="slug", queryset=ProductImage.objects.all(), required=False)
    cover_data = serializers.SerializerMethodField(required=False)

    category = serializers.SlugRelatedField(
        slug_field="slug", queryset=Category.objects.all(), required=False)
    category_data = serializers.SerializerMethodField(required=False)

    add_to_cart_count = serializers.SerializerMethodField(required=False)


class ProductSerializer(ProductListSerializer):
    class Meta(ProductListSerializer.Meta):
        read_only_fields = (
            'slug', 'page', 'category_data', 'cover_data', 'images_data',
            'attributes', 'add_to_cart_count',
            #
            'supplier_name', 'supplier_item_id', 'supplier_item_category',
            'supplier_item_url', 'supplier_item_cost_currency',
            #
            'next_slug', 'prev_slug', 'created', 'updated',
        )
        fields = (
            *read_only_fields,
            'name', 'description', 'category', 'cover',
            'retail_price', 'is_on_sale', 'sale_price',
            'is_pre_sale', 'is_pre_sale_text', 'cost', 'images', 'position',
            'supplier_item_cost',
        )

    page = ProductPageSerializer(required=False)
    attributes = ProductAttributeSerializer(required=False, many=True)
    images = serializers.SlugRelatedField(
        slug_field="slug", queryset=ProductImage.objects.all(),
        many=True, required=False
    )
    images_data = serializers.SerializerMethodField(required=False)

    def get_category_data(self, obj):
        if not obj.category:
            return
        return CategorySerializer(obj.category).data

    def get_images_data(self, obj):
        return ProductImageSerializer(
            obj.images.order_by('position', 'created'),
            many=True
        ).data

    def get_add_to_cart_count(self, obj):
        return obj.cart_items.count()
