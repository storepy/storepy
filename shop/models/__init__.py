
from django.db import models
from django.urls import reverse_lazy
from django.utils.text import capfirst, slugify
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin

from .managers import ProductManager
from .category_model import Category
from .proxies import ProductImage, ProductPage, CategoryPage

__all__ = [
    'Product', 'Category',
    'ProductImage', 'ProductPage', 'CategoryPage'
]


class Product(BaseModelMixin):
    category = models.ForeignKey(
        Category, related_name='products',
        null=True, blank=True,
        on_delete=models.SET_NULL)

    page = models.OneToOneField(
        ProductPage, on_delete=models.PROTECT,
        blank=True, null=True, related_name='shop_product')

    # price = models.OneToOneField(
    #     'ProductPrice',
    #     on_delete=models.SET_NULL,
    #     blank=True, null=True
    # )

    name = models.CharField(_("Name"), max_length=99)
    description = models.TextField(_("Description"), null=True, blank=True)
    slug_public = models.SlugField(
        max_length=100, unique=True, db_index=True, null=True, blank=True
    )

    cover = models.OneToOneField(
        ProductImage, verbose_name=_("Cover"), on_delete=models.SET_NULL, blank=True, null=True
    )
    # Limit to 10
    images = models.ManyToManyField(
        ProductImage, blank=True,
        related_name='shop_products'
    )

    position = models.PositiveIntegerField(default=1)

    objects = ProductManager()

    def __str__(self):
        return capfirst(f'{self.name}')

    def save(self, *args, **kwargs):
        if not self.slug_public:
            self.slug_public = self.name

        self.slug_public = slugify(self.slug_public)

        super().save(*args, **kwargs)

    class Meta:
        verbose_name = _('Product')
        verbose_name_plural = _('Products')
        ordering = ('position', '-created', 'name')
        indexes = [models.Index(fields=['category', 'slug'])]

    @property
    def detail_path(self):
        return reverse_lazy('shop:product', args=[self.category.slug, self.slug_public])

    def title(self):
        if self.page:
            return self.page.title or ''
        return self.name or ''
