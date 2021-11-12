from django.urls import reverse_lazy

from miq.tests.mixins import TestMixin

# from shop.models import Product, Category


class ShopMixin(TestMixin):

    def get_product_category_path(self, slug):
        return reverse_lazy('shop:product-category', args=[slug])

    def get_product_page_path(self, slug):
        return reverse_lazy('shop:product-page', args=[slug])

    def get_product_detail_path(self, slug):
        return reverse_lazy('shop:product-detail', args=[slug])

    def get_product_list_path(self):
        return reverse_lazy('shop:product-list')

    def get_category_detail_path(self, slug):
        return reverse_lazy('shop:category-detail', args=[slug])

    def get_category_list_path(self):
        return reverse_lazy('shop:category-list')
