from decimal import Decimal


from django.db import models
from django.urls import reverse_lazy
from django.utils.text import capfirst
# from django.utils.text import slugify
from django.core.validators import MinValueValidator
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin

from .managers import ProductManager
from .category_model import Category
from .proxies import ProductImage, ProductPage, CategoryPage

__all__ = [
    'Product', 'Category', 'ProductSize', 'ProductAttribute',
    'ProductImage', 'ProductPage', 'CategoryPage'
]


class ProductSize(BaseModelMixin):
    class Meta:
        ordering = ('created', 'name')
        verbose_name = 'Product size'
        verbose_name_plural = 'Product sizes'

        constraints = [
            models.UniqueConstraint(
                fields=['product', 'name', 'code'], name='unique_product_size_name_code',
            )
        ]

    product = models.ForeignKey(
        'Product', related_name='sizes', on_delete=models.CASCADE)

    name = models.CharField(max_length=20, help_text='Select size')
    code = models.CharField(max_length=10, )
    quantity = models.PositiveIntegerField(
        default=1, help_text='Enter quantity',
        validators=[MinValueValidator(0)])


class Product(BaseModelMixin):
    category = models.ForeignKey(
        Category, related_name='products',
        null=True, blank=True,
        on_delete=models.PROTECT)

    """
    PAGE
    """

    page = models.OneToOneField(
        ProductPage, on_delete=models.PROTECT,
        blank=True, null=True, related_name='shop_product')

    """
    PRICING
    """

    retail_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True,
        validators=[MinValueValidator(Decimal('0.01'))])

    is_pre_sale = models.BooleanField(_("Available for pre sale"), default=False)
    is_pre_sale_text = models.TextField(
        _("Pre sale description"), null=True, blank=True)
    # is_pre_sale_dt = models.DateTimeField(
    #     _("Availability date time"), blank=True, null=True)

    is_on_sale = models.BooleanField(_("Is on sale"), default=False)
    sale_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True,
        validators=[MinValueValidator(0)])

    """
    DETAILS
    """

    name = models.CharField(_("Name"), max_length=99)
    description = models.TextField(_("Description"), null=True, blank=True)

    """
    IMAGES
    """

    cover = models.OneToOneField(
        ProductImage, verbose_name=_("Cover"), on_delete=models.SET_NULL, blank=True, null=True
    )
    # Limit to 10
    images = models.ManyToManyField(
        ProductImage, blank=True,
        related_name='shop_products'
    )

    """
    CONFIG
    """

    # use to group similar items with different colors
    color_group_pk = models.CharField(
        _("Color group identifier"), max_length=99,
        null=True, blank=True
    )
    position = models.PositiveIntegerField(default=1)

    """
    SUPPLIER & PURCHASE DATA
    """

    supplier_name = models.CharField(
        _("Supplier brand name"), max_length=99, null=True, blank=True)

    supplier_item_id = models.CharField(
        _("Supplier identifier"), max_length=99,
        null=True, blank=True, unique=True
    )
    supplier_item_category = models.CharField(
        _("Supplier category"), max_length=99, null=True, blank=True)
    supplier_item_url = models.URLField(
        _("Supplier url"), max_length=500, null=True, blank=True)
    supplier_item_cost = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True,
        help_text='Single item cost')
    supplier_item_cost_currency = models.CharField(
        _("Currency"), max_length=10, null=True, blank=True)

    cost = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True,
        help_text='FOB Price, excluding inbound shipping, taxes '
        'and others costs')

    objects = ProductManager()

    def __str__(self):
        return capfirst(f'{self.name}')

    class Meta:
        verbose_name = _('Product')
        verbose_name_plural = _('Products')
        ordering = ('position', '-created', 'name')
        indexes = [
            models.Index(fields=['name', ], name='shop_product_name_idx'),
        ]

    def detail_path(self):
        if not self.category.page or not self.category.page.slug_public or not self.page.slug_public or not self.page.is_published:
            return
        return reverse_lazy('shop:product', args=[self.category.page.slug_public, self.page.slug_public])

    def title(self):
        if self.page:
            return self.page.title or ''
        return self.name or ''


class ProductAttribute(BaseModelMixin):
    class Meta:
        ordering = ('created', 'name')
        verbose_name = 'Product attribute'
        verbose_name_plural = 'Product attributes'

        constraints = [
            models.UniqueConstraint(
                fields=['product', 'name'], name='unique_product_attribute_name',
            )
        ]

    product = models.ForeignKey(
        'Product', related_name='attributes', on_delete=models.CASCADE)

    name = models.CharField(max_length=30, help_text=_('Name'))
    value = models.CharField(max_length=99, help_text=_('Value'))

    def save(self, *args, **kwargs):
        self.name = self.name.lower()
        super().save(*args, **kwargs)
