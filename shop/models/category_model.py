from django.db import models
from django.urls import reverse_lazy
from django.utils.text import capfirst
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin

from .managers import CategoryManager
from .proxies import CategoryPage


class Category(BaseModelMixin):
    # new arrivals, best sellers, dresses, tops, lingerie, bodysuits, romper, accessories, SALE

    page = models.OneToOneField(
        CategoryPage, on_delete=models.PROTECT, blank=True,
        related_name='shop_category')

    cover = models.OneToOneField(
        'miq.Image', verbose_name=_("Cover"), on_delete=models.SET_NULL, blank=True, null=True
    )

    name = models.CharField(max_length=100, db_index=True)
    description = models.TextField(_("Description"), null=True, blank=True)
    position = models.PositiveIntegerField(default=1)

    objects = CategoryManager()

    def __str__(self):
        return capfirst(self.name)

    def detail_path(self) -> str:
        if not self.page or not self.page.slug_public or not self.page.is_published:
            return
        return reverse_lazy('shop:category', args=[self.page.slug_public])

    class Meta:
        ordering = ('position', '-created', 'name')
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'
