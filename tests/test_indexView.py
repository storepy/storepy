from django.test import LiveServerTestCase
from selenium import webdriver

from miq.core.tests.utils import TestMixin
# from miq.staff.tests import LoginPage
from shopy.store.tests.utils import StoreMixin

driver_path = '/Users/marqetintl/Dropbox/MIQ/projects/chromedriver'


class Mixin(StoreMixin, TestMixin):
    pass


class TestLogin(Mixin, LiveServerTestCase):

    fixtures = ['st.json']

    def setUp(self) -> None:
        super().setUp()
        self.site.save()
        self.domain = self.live_server_url

    def test_shop(self):
        self.set_live()
        # a = self.create_product('A product', 10, published=True)
        # self.add_size_to_product(a, 'small')
        # a.publish()

        # b = self.create_product('B product', 10, published=True)
        # c = self.create_product('C product', 10, published=True)
        # self.add_size_to_product(b, 'small')
        # self.add_size_to_product(c, 'large')

        # b.publish()
        # c.publish()

        with webdriver.Chrome(driver_path) as driver:
            # url = self.domain + self.login_path
            url = self.domain + '/shop/'
            driver.get(url)

            driver.save_screenshot('index.png')

            # driver.get(url)
            # driver.save_screenshot('index-2.png')

            # page = LoginPage(driver, domain=self.domain).get()
            # page = page.get()
            # print(page.login_path)
            # page = LoginPage(driver).get()
            # page.driver.save_screenshot('index-3.png')
            # act_page = page.login(self.username, self.password)

            # assert 'AccountView' in act_page.driver.page_source
            # assert 'UserNav' in act_page.driver.page_source
