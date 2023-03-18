from django.test import LiveServerTestCase
# from selenium import webdriver

# from miq.tests.utils import get_or_create_site

driver_path = '/Users/marqetintl/Dropbox/MIQ/projects/chromedriver'


class Mixin:
    pass


class TestIndexView(Mixin, LiveServerTestCase):

    # fixtures = ['st.json']

    def setUp(self) -> None:
        super().setUp()

    # def test_home_is_not_live_html(self):
    #     site = get_or_create_site()

    #     r = self.client.get('/')
    #     ctx = r.context
