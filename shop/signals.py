

from django.dispatch import receiver
from django.db.models import signals
from django.contrib.sites.models import Site

from .models import Product, Category


@receiver(signals.post_delete, sender=Product)
def on_product_will_be_deleted(sender, **kwargs):
    instance = kwargs.get('instance')
    instance.page.delete()


@receiver(signals.post_delete, sender=Category)
def on_cat_will_be_deleted(sender, **kwargs):
    instance = kwargs.get('instance')
    instance.page.delete()


# @receiver(signals.post_save, sender=Site)
# def on_site_did_save(sender, **kwargs):
#     instance = kwargs.get('instance')

#     if not Setting.objects.filter(site=instance).exists():
#         Setting.objects.create(site=instance)
