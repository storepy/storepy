
from rest_framework import serializers


from miq.auth.serializers import ImageSerializer
from miq.staff.serializers import PageSerializer

from shop.models import Category, ProductAttribute, SupplierOrder
from shop.models import Product, ProductPage, ProductImage
from shop.models import Cart, CartProduct

from .mixins import CoverMixin
from .cat_ser import CategorySerializer, CategoryPageSerializer
from .lead_ser import LeadSerializer

__all__ = (
    'ProductSerializer', 'ProductPageSerializer',
    'ProductImageSerializer', 'ProductAttributeSerializer',
    'CategorySerializer', 'CategoryPageSerializer',
    'CartProductSerializer', 'CartSerializer',
    'LeadSerializer', 'SupplierOrderSerializer'
)

#
# PRODUCT ATTRIBUTE
#


class ProductAttributeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductAttribute
        read_only_fields = ('slug',)
        fields = ('name', 'value', *read_only_fields)

#
# PRODUCT
#


class ProductPageSerializer(PageSerializer):
    class Meta(PageSerializer.Meta):
        model = ProductPage

        # Publish through viewset action
        read_only_fields = ('slug', 'is_published', 'dt_published')
        fields = ('slug_public', 'title', *read_only_fields,)


class ProductImageSerializer(ImageSerializer):
    class Meta(ImageSerializer.Meta):
        model = ProductImage


class ProductSerializer(CoverMixin, serializers.ModelSerializer):
    class Meta:
        model = Product
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

    image_serializer = ProductImageSerializer

    cover = serializers.SlugRelatedField(
        slug_field="slug", queryset=ProductImage.objects.all(), required=False
    )
    cover_data = serializers.SerializerMethodField(required=False)
    category = serializers.SlugRelatedField(
        slug_field="slug", queryset=Category.objects.all(), required=False
    )
    category_data = serializers.SerializerMethodField(required=False)
    page = ProductPageSerializer(required=False)

    attributes = ProductAttributeSerializer(required=False, many=True)

    images = serializers.SlugRelatedField(
        slug_field="slug", queryset=ProductImage.objects.all(),
        many=True, required=False
    )
    images_data = serializers.SerializerMethodField(required=False)
    add_to_cart_count = serializers.SerializerMethodField(required=False)

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


"""
CART
"""


class CartProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartProduct
        read_only_fields = ('slug', 'product', 'size', 'created', 'updated')
        fields = read_only_fields

    product = ProductSerializer(many=True, required=False)


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        read_only_fields = (
            'slug', 'lead', 'items',
            # 'subtotal',
            'created', 'updated'
        )
        fields = read_only_fields

    lead = LeadSerializer(required=False)
    items = CartProductSerializer(many=True, required=False)


"""
SUPPLIER ORDER
"""


class SupplierOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupplierOrder
        read_only_fields = ('slug',)
        fields = (
            'order_id', 'items_stage', 'items',
            'currency', 'is_paid', 'is_paid_dt', 'is_fulfilled_dt', 'total_cost',
            *read_only_fields
        )

    items = ProductSerializer(many=True, required=False)
