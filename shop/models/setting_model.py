from django.db import models
from django.conf import settings
from django.contrib.sites.models import Site

from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin


class ShopSetting(BaseModelMixin):
    site = models.OneToOneField(
        Site, verbose_name=_("Site"),
        on_delete=models.CASCADE, default=settings.SITE_ID,
        related_name='shop')

    # currency
    # delivery

    def __str__(self):
        return f'{self.site} Shop'

    class Meta:
        ordering = ('-created',)
        verbose_name = _('Shop settings')
        verbose_name_plural = _('Shop settings')
