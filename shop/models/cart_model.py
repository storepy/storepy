from django.db import models
from django.core.validators import MinLengthValidator
from django.utils.translation import gettext_lazy as _

from miq.models import BaseModelMixin


__all__ = ('Lead', 'Cart', 'CartProduct')


class Lead(BaseModelMixin):
    name = models.CharField(
        _("Name"), max_length=99,
        validators=[
            MinLengthValidator(4, message=_("Veuillez entrer votre nom et prénom."))
        ],
    )
    number = models.CharField(
        _("Number"), max_length=50,
        validators=[MinLengthValidator(4, message=_(
            "Veuillez entrer votre numéro de téléphone."))]
    )
    email = models.EmailField(
        _("Email"), max_length=254,
        null=True, blank=True)
    ig_handle = models.CharField(
        _("Instagram"), max_length=99,
        null=True, blank=True)


class Cart(BaseModelMixin):
    lead = models.ForeignKey(
        "shop.Lead", verbose_name=_("Cart"),
        on_delete=models.SET_NULL, blank=True, null=True
    )
    products = models.ManyToManyField(
        "shop.Product", verbose_name=_("Products"),
        through='shop.CartProduct')

    def get_subtotal(self):
        return sum(product.get_price() for product in self.products.all())

    def update_size(self, slug, size):
        item = self.items.filter(slug=slug).first()
        if not item:
            return False
        item.size = size
        item.save()
        return True

    def __str__(self):
        return f'Cart {self.id}'

    class Meta:
        ordering = ('-created',)
        verbose_name = _('Shop Cart')
        verbose_name_plural = _('Shop Cart')


class CartProduct(BaseModelMixin):
    product = models.ForeignKey(
        "shop.Product", verbose_name=_("Product"),
        related_name='cart_items',
        on_delete=models.CASCADE
    )
    cart = models.ForeignKey(
        "shop.Cart", verbose_name=_("Cart"),
        related_name='items',
        on_delete=models.CASCADE)

    size = models.CharField(
        _("Size"), max_length=50,
        null=True, blank=True,
    )
