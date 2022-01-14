from rest_framework import serializers

from miq.models import Image
from miq.auth.serializers import ImageSerializer
from miq.staff.serializers import PageSerializer

from shop.models import Category, CategoryPage


class CategoryPageSerializer(PageSerializer):
    class Meta(PageSerializer.Meta):
        model = CategoryPage
        read_only_fields = ('slug', 'dt_published')
        fields = (
            'slug_public', 'title', 'label', 'is_published',
            *read_only_fields,
        )


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        read_only_fields = (
            'slug', 'page', 'cover_data',
            'products_count', 'published_count', 'draft_count',
            'next_slug', 'prev_slug', 'created', 'updated'
        )
        fields = (
            'name', 'description', 'cover', 'position',
            *read_only_fields
        )

    page = CategoryPageSerializer(required=False)
    cover = serializers.SlugRelatedField(
        slug_field="slug", queryset=Image.objects.all(), required=False
    )
    cover_data = ImageSerializer(source='cover', read_only=True)
    products_count = serializers.IntegerField(read_only=True)
    published_count = serializers.IntegerField(read_only=True)
    draft_count = serializers.IntegerField(read_only=True)
