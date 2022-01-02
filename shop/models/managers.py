
from django.db import models
from django.db.models.functions import Concat

from miq.models.page_mod import PageManager


class ProductQueryset(models.QuerySet):
    def by_name(self, value):
        if not isinstance(value, str):
            return self.none()

        keys = (
            'name', 'description', 'category__name',
            'category__description', 'attributes__value'
        )

        return self.annotate(
            values=Concat(*keys, output_field=models.CharField())
        ).filter(values__icontains=value.lower())\
            .order_by('name').distinct('name')

    def draft(self):
        return self.exclude(slug__in=self.published().values_list('slug', flat=True))

    def published(self):
        """
        Products that have a retail price, a category, and whose page and category page are published
        """
        return self\
            .exclude(retail_price__isnull=True)\
            .exclude(category__isnull=True, category__page__slug_public__isnull=True)\
            .filter(category__page__is_published=True, page__is_published=True)
        # .annotate(tiers_count=Count('price__tiers'))\
        # .exclude(price__scheme='TIER', tiers_count=0)


class ManagerMixin:
    def draft(self):
        return self.get_queryset().draft()

    def published(self):
        return self.get_queryset().published()


class ProductManager(ManagerMixin, models.Manager):

    def get_queryset(self, *args, **kwargs):
        return ProductQueryset(self.model, *args, using=self._db, **kwargs)\
            .select_related('page', 'category', 'cover')\
            .prefetch_related('images')


class CategoryQuerySet(models.QuerySet):
    def draft(self):
        return self.exclude(slug__in=self.published().values_list('slug', flat=True))

    def published(self):
        """
        Categories with a public slug and is_published is True
        """
        return self\
            .exclude(page__slug_public__isnull=True)\
            .filter(page__is_published=True)


class CategoryManager(ManagerMixin, models.Manager):
    def get_queryset(self):
        return CategoryQuerySet(self.model, using=self._db)\
            .select_related('page', 'cover')


class ProductPageManager(PageManager):
    pass


class ProductCategoryPageManager(PageManager):
    pass
