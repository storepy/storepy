from django.db import models
from django.conf import settings
from django.contrib.sites.models import Site

# from django.db.models.functions import Concat
# from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin
# from miq.utils import truncate_str

# Create your models here.

# Navbar
# class CategoryGroup(BaseModelMixin):
#     name = models.CharField(_("Name"), max_length=99, )


class ShopSetting(BaseModelMixin):
    site = models.OneToOneField(
        Site, verbose_name=_("Site"),
        on_delete=models.CASCADE, default=settings.SITE_ID,
        related_name='shop')

    # whatsap, contact phone,

    # is_active = models.BooleanField(_("Activate your shop"), default=False)

    # Product Images: images size(w x h),
    # is_active = models.BooleanField(_("Activate your shop"), default=False)

    def __str__(self):
        return f'{self.site} shop'

    class Meta:
        ordering = ('-created',)
        verbose_name = _('Shop setting')
        verbose_name_plural = _('Shop settings')
