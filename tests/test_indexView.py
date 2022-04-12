from django.test import LiveServerTestCase
from selenium import webdriver

from miq.tests.mixins import TestMixin
from miq.staff.tests import LoginPage


class Mixin(TestMixin):
    pass


class TestLogin(Mixin, LiveServerTestCase):
    def setUp(self) -> None:
        super().setUp()
        self.site
        self.domain = self.live_server_url

    def test_login_success(self):
        # self.get_user()
        with webdriver.Chrome() as driver:
            # url = self.domain + self.login_path
            url = self.domain
            # driver.get(url)
            # driver.save_screenshot('index.png')

            self.set_live()
            # driver.get(url)
            # driver.save_screenshot('index-2.png')

            page = LoginPage(driver, domain=self.domain).get()
            # page = page.get()
            # print(page.login_path)
            # page = LoginPage(driver).get()
            # page.driver.save_screenshot('index-3.png')
            # act_page = page.login(self.username, self.password)

            # assert 'AccountView' in act_page.driver.page_source
            # assert 'UserNav' in act_page.driver.page_source
