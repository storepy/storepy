from django.db import models
# from django.conf import settings
# from django.contrib.sites.models import Site

# from django.db.models.functions import Concat
# from django.contrib.auth import get_user_model
from django.utils.text import capfirst
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin

from .proxies import CategoryPage

# Navbar
# class CategoryGroup(BaseModelMixin):
#     name = models.CharField(_("Name"), max_length=99, )


class Category(BaseModelMixin):
    # new arrivals, best sellers, dresses, tops, lingerie, bodysuits, romper, accessories, SALE

    page = models.OneToOneField(
        CategoryPage, on_delete=models.PROTECT, blank=True,
        related_name='shop_category')

    name = models.CharField(max_length=100, db_index=True)
    description = models.TextField(_("Description"), null=True, blank=True)

    position = models.PositiveIntegerField(default=1)

    def __str__(self):
        return capfirst(self.name)

    def save(self, *args, **kwargs):
        # if not hasattr(self, 'page') or not self.page:
        #     self.page = CategoryPage.objects.create(
        #         title=f'{self.name}', label=f'Product Category: {self.name}')
        super().save(*args, **kwargs)

    class Meta:
        ordering = ('position', 'name', '-created')
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
