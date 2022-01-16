
from django.db import models
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin

from .managers import SupplierOrderManager


class ProductStage(models.TextChoices):
    A_VIRTUAL = 'A_VIRTUAL', _('Virtual stock')  # just added to shop
    B_SUPPLIER_TRANSIT = 'B_SUPPLIER_TRANSIT', _('Ordered from supplier')
    C_INSTORE_WAREHOUSE = 'C_INSTORE_WAREHOUSE', _('Received from supplier')
    D_INSTORE_TRANSIT = 'D_INSTORE_TRANSIT', _('In transit to store')
    E_INSTORE = 'E_INSTORE', _('Available for purchase')


class SupplierOrder(BaseModelMixin):
    name = models.CharField(_("Name"), max_length=99, default='New order')
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
