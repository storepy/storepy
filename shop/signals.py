from django.dispatch import receiver
from django.db.models import signals


from .models import Product, Category


@receiver(signals.post_delete, sender=Product)
def on_product_will_be_deleted(sender, **kwargs):
    instance = kwargs.get('instance')
    instance.page.delete()


@receiver(signals.post_delete, sender=Category)
def on_cat_will_be_deleted(sender, **kwargs):
    instance = kwargs.get('instance')
    instance.page.delete()


@receiver(signals.pre_save, sender=Product)
def on_product_will_save(sender, instance, **kwargs):
    if instance.pk:
        if(old := sender.objects.get(pk=instance.pk)):
            if (old.name != instance.name):
                if instance.cover:
                    instance.cover.alt_text = instance.name
                    instance.cover.save()


#     if not Setting.objects.filter(site=instance).exists():
#         Setting.objects.create(site=instance)
