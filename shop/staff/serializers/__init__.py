
from rest_framework import serializers

from miq.models import Image
from miq.auth.serializers import ImageSerializer
from miq.staff.serializers import PageSerializer

from shop.models import Category, CategoryPage, ProductAttribute
from shop.models import Product, ProductPage, ProductImage


class CoverMixin(object):
    image_serializer = ImageSerializer

    def get_cover_data(self, obj):
        if not obj.cover:
            return
        return self.image_serializer(obj.cover).data


#
# CATEGORY
#

class CategoryPageSerializer(PageSerializer):
    class Meta(PageSerializer.Meta):
        model = CategoryPage
        read_only_fields = ('slug', 'dt_published')
        fields = (
            'slug_public', 'title', 'label', 'is_published',
            *read_only_fields,
        )


class CategorySerializer(CoverMixin, serializers.ModelSerializer):
    class Meta:
        model = Category
        read_only_fields = (
            'slug', 'page', 'cover_data',
            'products_count', 'created', 'updated'
        )
        fields = (
            'name', 'description', 'cover', 'position',
            *read_only_fields
        )

    page = CategoryPageSerializer(required=False)
    cover = serializers.SlugRelatedField(
        slug_field="slug", queryset=Image.objects.all(), required=False
    )
    cover_data = serializers.SerializerMethodField(required=False)
    products_count = serializers.SerializerMethodField(required=False)

    def get_products_count(self, obj):
        products = obj.products.all()
        return {
            'total': products.count(),
            'published': products.published().count()
        }


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
            'attributes',
            #
            'supplier_name', 'supplier_item_id', 'supplier_item_category',
            'supplier_item_url', 'supplier_item_cost', 'supplier_item_cost_currency',
            #
            'created', 'updated',
        )
        fields = (
            *read_only_fields,
            'name', 'description', 'category', 'cover',
            'retail_price', 'is_on_sale', 'sale_price',
            'is_pre_sale', 'is_pre_sale_text', 'cost', 'images', 'position',
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

    def get_category_data(self, obj):
        if not obj.category:
            return
        return CategorySerializer(obj.category).data

    def get_images_data(self, obj):
        return ProductImageSerializer(
            obj.images.order_by('position', 'created'),
            many=True
        ).data
