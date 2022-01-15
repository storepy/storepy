
from rest_framework.serializers import ModelSerializer, SlugRelatedField


from shop.models import Product, Cart, CartProduct, SupplierOrder

from .prod_ser import ProductListSerializer, ProductSerializer
from .cat_ser import CategorySerializer, CategoryPageSerializer
from .lead_ser import LeadSerializer
from .serializers import ProductAttributeSerializer, ProductImageSerializer, ProductPageSerializer


__all__ = (
    'ProductListSerializer', 'ProductSerializer', 'ProductPageSerializer',
    'ProductImageSerializer', 'ProductAttributeSerializer',
    'CategorySerializer', 'CategoryPageSerializer',
    'CartProductSerializer', 'CartSerializer',
    'LeadSerializer', 'SupplierOrderSerializer'
)

#
# PRODUCT ATTRIBUTE
#


"""
CART
"""


class CartProductSerializer(ModelSerializer):
    class Meta:
        model = CartProduct
        read_only_fields = ('slug', 'product', 'size', 'created', 'updated')
        fields = read_only_fields

    product = ProductSerializer(many=True, required=False)


class CartSerializer(ModelSerializer):
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


class SupplierOrderSerializer(ModelSerializer):
    class Meta:
        model = SupplierOrder
        read_only_fields = ('slug', 'items')
        fields = (
            'order_id', 'items_stage',
            'currency', 'is_paid', 'is_paid_dt', 'is_fulfilled_dt', 'total_cost',
            *read_only_fields
        )

    items = SlugRelatedField(
        slug_field="slug", queryset=Product.objects.all(),
        many=True, required=False
    )
