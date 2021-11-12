
from django.db import models
# from django.db.models import Count


class ProductQueryset(models.QuerySet):

    def draft(self):
        return self.exclude(slug__in=self.published().values_list('slug', flat=True))

    def published(self):
        return self.exclude(category__isnull=True)\
            .filter(
                category__page__is_published=True,
                page__is_published=True)
        # .exclude(price__isnull=True)\
        # .annotate(tiers_count=Count('price__tiers'))\
        # .exclude(price__scheme='TIER', tiers_count=0)


class ProductManager(models.Manager):

    def draft(self):
        return self.get_queryset().draft()

    def published(self):
        return self.get_queryset().published()

    def get_queryset(self, *args, **kwargs):
        return ProductQueryset(self.model, *args, using=self._db, **kwargs)\
            .select_related('page', 'category', 'cover')\
            .prefetch_related('images')


class ProductPageManager(models.Manager):

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs)
        # .filter(product__isnull=False)


class ProductCategoryPageManager(models.Manager):

    def get_queryset(self, *args, **kwargs):
        return super().get_queryset(*args, **kwargs)
        # .filter(product_category__isnull=False)
