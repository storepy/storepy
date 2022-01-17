import logging

from django.db import models
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin

logger = logging.getLogger(__name__)


class OrderItem(BaseModelMixin):
    class Meta:
        ordering = ('-created',)
        verbose_name = _('Order Item')
        verbose_name_plural = _('Order Items')

    order = models.ForeignKey(
        'orders.Order', related_name='items',
        on_delete=models.PROTECT, null=True, blank=True)

    product = models.ForeignKey(
        'shop.Product', on_delete=models.PROTECT,
        related_name='items')

    price = models.DecimalField(
        max_digits=10, decimal_places=2,
        null=True, blank=True
    )
    size = models.ForeignKey(
        'shop.ProductSize', related_name='ordered',
        on_delete=models.SET_NULL, null=True)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.product}'

    def get_cost(self):
        return self.price * self.quantity


class Order(BaseModelMixin):

    def __str__(self):
        return f'{self.site} Shop'

    class Meta:
        ordering = ('-created',)
        verbose_name = _('Shop settings')
        verbose_name_plural = _('Shop settings')
