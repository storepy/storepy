from rest_framework import status
from rest_framework.test import APITestCase

from shop.models import ProductPage
from shop.tests.utils import ShopMixin


class TestStaffProductViewSet(ShopMixin, APITestCase):

    def setUp(self) -> None:
        super().setUp()

        self.site
        self.user = self.create_staffuser(self.username, self.password)
        self.client.login(
            username=self.username,
            password=self.password)

    def test_patch_product(self):
        self.add_user_perm(self.user, 'add_product')
        r = self.client.post(
            self.get_product_list_path(), {'name': 'my product'}, format="json"
        )
        slug = r.data.get('slug')
        new_data = {'name': 'my patched product', 'description': 'My description'}

        # perm required
        self.assertEqual(
            self.client.patch(
                self.get_product_detail_path(r.data.get('slug')),
                new_data, format="json"
            ).status_code,
            status.HTTP_403_FORBIDDEN)

        self.add_user_perm(self.user, 'change_product')
        r = self.client.patch(
            self.get_product_detail_path(slug),
            new_data, format="json"
        )
        self.assertEqual(r.data.get('name'), new_data.get('name'))
        self.assertIsNotNone(r.data.get('description'))
        self.assertIsNone(r.data.get('category'))

        """
        category
        """
        self.add_user_perm(self.user, 'add_category')
        r = self.client.post(
            self.get_category_list_path(), {'name': 'a cat'}, format="json"
        )

        cat_slug = r.data.get('slug')
        r = self.client.post(
            self.get_product_category_path(slug),
            {'category': cat_slug}, format="json"
        )
        self.assertEqual(r.status_code, status.HTTP_200_OK)
        self.assertIsNotNone(r.data.get('category'))

        r = self.client.patch(
            self.get_product_category_path(slug), {'name': 'new cat', 'description': 'A desc'}, format="json"
        )
        self.assertEqual(r.data.get('category').get('description'), 'A desc')

        """
        page
        """
        r = self.client.patch(
            self.get_product_page_path(slug),
            {'title': 'This is SEO'}, format="json"
        )
        self.assertEqual(r.data.get('page').get('title'), 'This is SEO')
        print(r.data)

    def test_post_product(self):
        self.assertEqual(
            self.client.post(
                self.get_product_list_path(), {'name': 'my product'}, format="json"
            ).status_code,
            status.HTTP_403_FORBIDDEN)

        self.add_user_perm(self.user, 'add_product')
        self.assertTrue(self.user.has_perm('shop.add_product'))

        r = self.client.post(
            self.get_product_list_path(), {'name': 'my product'}, format="json"
        )
        self.assertEqual(r.status_code, status.HTTP_201_CREATED)
        self.assertIn('page', r.data.keys())

        page = ProductPage.objects.filter(shop_product__slug=r.data.get('slug'))
        self.assertTrue(page.exists())

        page = page.first()
        self.assertEqual(page.source, 'shop_product')
        self.assertEqual(page.title, r.data.get('name'))


# shop/tests/test_staff_product_viewset::TestStaffProductViewSet::test_post_product