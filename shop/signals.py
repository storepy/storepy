
from django.dispatch import receiver
from django.db.models import signals

from miq.models import Image
from .models import Product, Category


@receiver(signals.pre_delete, sender=Product)
def on_product_will_be_deleted(sender, instance, **kwargs):
    if cover := instance.cover:
        # proxy issue
        Image.objects.get(id=cover.id).delete()

    if (attrs := instance.attributes) and attrs.exists():
        attrs.all().delete()

    if (imgs := instance.images) and imgs.exists():
        imgs.all().delete()


@receiver(signals.post_delete, sender=Product)
def on_product_was_deleted(sender, instance, ** kwargs):
    # protect: cannot delete a product with a page
    if page := instance.page:
        page.delete()


@receiver(signals.post_delete, sender=Category)
def on_category_was_deleted(sender, instance, **kwargs):
    if page := instance.page:
        page.delete()

    if cover := instance.cover:
        cover.delete()


@receiver(signals.pre_save, sender=Product)
def on_product_will_save(sender, instance, **kwargs):
    if instance.pk:
        name = instance.name
        if((old := sender.objects.get(pk=instance.pk)) and old.name != name):
            if instance.cover:
                instance.cover.alt_text = name
                instance.cover.save()

            if (img_qs := instance.images) and img_qs.exists():
                img_qs.update_alt_texts(name, with_position=True)
