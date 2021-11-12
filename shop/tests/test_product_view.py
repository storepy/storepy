from django.test import TestCase

from shop.tests.utils import ShopMixin


class TestProductView(ShopMixin, TestCase):
    title = 'This is an article'

    def setUp(self) -> None:
        super().setUp()

    def test_product_404(self):
        pass
