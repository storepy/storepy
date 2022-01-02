from miq.models import Page, Image
from .managers import ProductCategoryPageManager, ProductPageManager


class ProductImage(Image):
    class Meta:
        proxy = True


class ProductPage(Page):
    class Meta:
        proxy = True

    objects = ProductPageManager()

    def save(self, *args, **kwargs):
        self.source = 'shop_product'
        super().save(*args, **kwargs)


class CategoryPage(Page):
    class Meta:
        proxy = True

    objects = ProductCategoryPageManager()

    def save(self, *args, **kwargs):
        self.source = 'shop_category'
        super().save(*args, **kwargs)
