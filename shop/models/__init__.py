from decimal import Decimal

from django.db import models
from django.urls import reverse_lazy
from django.utils.text import capfirst
# from django.utils.text import slugify
from django.core.validators import MinValueValidator
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin
from miq.utils import get_text_choices

from .managers import ProductManager, SupplierOrderManager
from .category_model import Category
from .cart_model import Lead, Cart, CartProduct
from .proxies import ProductImage, ProductPage, CategoryPage

__all__ = (
    'Product', 'ProductSize', 'ProductAttribute', 'ProductImage', 'ProductPage', 'ProductStages',
    'Category', 'CategoryPage',
    'Lead', 'Cart', 'CartProduct',
    'SupplierOrder'
)


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

    sku = models.CharField(
        _("Sku"), max_length=99,
        null=True, blank=True, unique=True
    )
    product = models.ForeignKey(
        'Product', related_name='sizes', on_delete=models.CASCADE)

    name = models.CharField(max_length=20, help_text='Select size')
    code = models.CharField(max_length=10, )
    quantity = models.PositiveIntegerField(
        default=1, help_text='Enter quantity',
        validators=[MinValueValidator(0)])


class ProductStage(models.TextChoices):
    A_VIRTUAL = 'A_VIRTUAL', _('Virtual stock')  # just added to shop
    B_SUPPLIER_TRANSIT = 'B_SUPPLIER_TRANSIT', _('Ordered from supplier')
    C_INSTORE_WAREHOUSE = 'C_INSTORE_WAREHOUSE', _('Received from supplier')
    D_INSTORE_TRANSIT = 'D_INSTORE_TRANSIT', _('In transit to store')
    E_INSTORE = 'E_INSTORE', _('Available for purchase')


ProductStages = get_text_choices(ProductStage)


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
    is_pre_sale_dt = models.DateTimeField(
        _("Availability date time"), blank=True, null=True)

    is_on_sale = models.BooleanField(_("Is on sale"), default=False)
    sale_price = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True,
        validators=[MinValueValidator(0)])

    """
    DETAILS
    """

    name = models.CharField(_("Name"), max_length=99)
    description = models.TextField(_("Description"), null=True, blank=True)
    stage = models.CharField(
        verbose_name=_('Stage'),
        max_length=50, choices=ProductStage.choices,
        default=ProductStage.A_VIRTUAL)

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
        _("Supplier item identifier"), max_length=99,
        null=True, blank=True, unique=True
    )
    supplier_item_sn = models.CharField(
        _("Supplier item serial number"), max_length=99,
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
    supplier_order_id = models.CharField(
        _("Supplier order ID"), max_length=99,
        null=True, blank=True,
    )

    cost = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True,
        help_text='FOB Price, excluding inbound shipping, taxes '
        'and others costs')

    objects = ProductManager()

    def get_price(self):
        if self.is_on_sale:
            return self.sale_price
        return self.retail_price

    def is_published(self):
        if self.page:
            return self.page.is_published
        return False

    def next_slug(self):
        try:
            return self.get_next_by_created().slug
        except Exception:
            return

    def prev_slug(self):
        try:
            return self.get_previous_by_created().slug
        except Exception:
            return

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
        if not self.category or not self.category.page or not self.category.page.slug_public \
                or not self.page.slug_public or not self.page.is_published:
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


class SupplierOrder(BaseModelMixin):
    order_id = models.CharField(_("Order ID"), max_length=99, blank=True, null=True)
    currency = models.CharField(_("Currency"), max_length=50, null=True, blank=True)
    items_stage = models.CharField(
        verbose_name=_('Stage'),
        max_length=50, choices=ProductStage.choices,
        default=ProductStage.A_VIRTUAL)

    is_paid = models.BooleanField(_("Is paid"), default=False)
    is_paid_dt = models.DateTimeField(_("Date of payment"), blank=True, null=True)
    is_fulfilled_dt = models.DateTimeField(
        _("Date of fulfillment"), blank=True, null=True)

    total_cost = models.DecimalField(
        max_digits=10, decimal_places=2, null=True, blank=True,
        help_text='FOB Price, excluding inbound shipping, taxes '
        'and others costs')

    items = models.ManyToManyField(
        "shop.Product", verbose_name=_("Products"),
        related_name='supplier_orders',
        blank=True)

    objects = SupplierOrderManager()

    class Meta:
        verbose_name = _('Supplier Order')
        verbose_name_plural = _('Supplier Orders')
        ordering = ('-created',)
