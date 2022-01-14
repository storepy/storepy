from rest_framework import serializers

from shop.models import Product, ProductImage, Category
from shop.serializers import serialize_product_price
from .cat_ser import CategorySerializer
from .serializers import ProductAttributeSerializer, ProductImageSerializer, ProductPageSerializer


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        read_only_fields = (
            'slug', 'page', 'category_data', 'cover_data', 'detail_path',
            'retail_price_data', 'sale_price_data', 'add_to_cart_count',
            #
            'supplier_name', 'supplier_item_id', 'supplier_item_category',
            'supplier_item_url', 'supplier_item_cost_currency',
        )
        fields = (
            *read_only_fields,
            'name', 'description', 'category', 'cover',
            'retail_price', 'is_on_sale', 'sale_price',
            'is_pre_sale', 'is_pre_sale_text', 'position',
            'supplier_item_cost',
        )
    page = ProductPageSerializer(read_only=True)
    cover = serializers.SlugRelatedField(
        slug_field="slug", queryset=ProductImage.objects.all(), required=False)
    cover_data = ProductImageSerializer(source='cover', read_only=True)

    category = serializers.SlugRelatedField(
        slug_field="slug", queryset=Category.objects.all(), required=False)
    category_data = CategorySerializer(source='category', read_only=True)
    detail_path = serializers.CharField(read_only=True)

    add_to_cart_count = serializers.IntegerField(
        source='cart_items.count', read_only=True)

    retail_price_data = serializers.SerializerMethodField(read_only=True)
    sale_price_data = serializers.SerializerMethodField(read_only=True)

    def get_retail_price_data(self, obj):
        return serialize_product_price(obj.retail_price)

    def get_sale_price_data(self, obj):
        return serialize_product_price(obj.sale_price)


class ProductSerializer(ProductListSerializer):
    class Meta(ProductListSerializer.Meta):
        read_only_fields = (
            'slug', 'page', 'category_data', 'cover_data', 'images_data',
            'attributes', 'retail_price_data', 'sale_price_data', 'add_to_cart_count',
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

    attributes = ProductAttributeSerializer(many=True, read_only=True)
    images = serializers.SlugRelatedField(
        slug_field="slug", queryset=ProductImage.objects.all(),
        many=True, required=False
    )
    images_data = ProductImageSerializer(source='images', many=True, read_only=True)
