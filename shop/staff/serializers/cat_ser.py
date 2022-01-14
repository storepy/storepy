from rest_framework import serializers

from miq.models import Image
from miq.staff.serializers import PageSerializer

from shop.models import Category, CategoryPage
from .serializers import CoverMixin


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
            'products_count', 'next_slug', 'prev_slug', 'created', 'updated'
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
    products_count = serializers.SerializerMethodField(required=False)
    products_count = serializers.SerializerMethodField(required=False)

    def get_products_count(self, obj):
        products = obj.products.all()
        return {
            'total': products.count(),
            'published': products.published().count()
        }
