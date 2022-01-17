import logging

from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin

logger = logging.getLogger(__name__)

User = get_user_model()
logger = logging.getLogger(__name__)


class Customer(BaseModelMixin):
    user = models.OneToOneField(User, null=True, on_delete=models.SET_NULL)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.user.username if self.user else self.email

    class Meta:
        ordering = ('-created',)
        verbose_name = _('Customer')
        verbose_name_plural = _('Customers')
