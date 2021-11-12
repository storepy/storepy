from django.contrib import admin

from .models import (
    Product, ProductPage, ProductImage,
    Category, CategoryPage
    # ProductPrice,
    # ProductCategoryPage,
)

admin.site.register(ProductPage)
admin.site.register(ProductImage)
# admin.site.register(ProductPrice)

admin.site.register(Category)
admin.site.register(CategoryPage)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    model = Product
