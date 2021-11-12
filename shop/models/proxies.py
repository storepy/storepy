from miq.models import Page, Image


# class ProductPrice(Price):
#     class Meta:
#         proxy = True

#     def save(self, *args, **kwargs):
#         self.source = 'product'

#         super().save(*args, **kwargs)


class ProductImage(Image):
    class Meta:
        proxy = True


class ProductPage(Page):
    class Meta:
        proxy = True

    # objects = ProductPageManager()

    def save(self, *args, **kwargs):
        self.source = 'shop_product'
        super().save(*args, **kwargs)


class CategoryPage(Page):
    class Meta:
        proxy = True

    # objects = ProductCategoryPageManager()

    def save(self, *args, **kwargs):
        self.source = 'shop_category'
        super().save(*args, **kwargs)
