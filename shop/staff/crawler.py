from pprint import pprint
import re
import json
import requests
from bs4 import BeautifulSoup
from django.utils.text import capfirst

from miq.utils import clean_img_url, get_dict_key


KEYS_MAP = {
    'brand': {'asos': 'brand__name'},
    'id': {'asos': 'id', 'shein': 'detail__goods_id'},
    'sku': {'plt': 'sku'},
    'productCode': {'asos': 'productCode'},
    #
    'category': {'asos': 'productType__name', 'shein': 'currentCat__cat_name'},
    'name': {'asos': 'name', 'plt': 'name', 'shein': 'detail__goods_name'},
    'description': {'plt': 'description'},
    #
    'cover': {'plt': 'image', 'shein': 'detail__original_img'},
    #
    'gender': {'asos': 'gender'},
    'availability': {'plt': 'offers__availability'},
    'attrs__couleur': {'plt': 'color'},
    #
    'sale_price': {'shein': 'detail__salePrice__amount'},
    'retail_price': {'shein': 'detail__retailPrice__amount'},
    'cost': {'plt': 'offers__price', 'asos': 'price__current__value'},

    'cost_currency': {'plt': 'offers__priceCurrency', 'asos': 'price__currency'},
    #
    'is_on_sale': {'shein': 'detail__is_on_sale'},
    'in_stock': {'asos': 'isInStock', 'shein': 'detail__is_stock_enough'},
    'isNoSize': {'asos': 'isNoSize'},
    'isOneSize': {'asos': 'isOneSize'},
}


class Crawler:
    _s = None  # type: 'requests.Session'
    headers = {
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36"
    }

# PLT

    def plt_url_to_data(self, url: str) -> dict:
        page = self.get(url)
        soup = BeautifulSoup(page.text, "html.parser")\
            .find("script", type="application/ld+json")
        text = soup.string.replace('\n', ' ')
        data = self.load_raw_data(json.loads(text), 'plt')
        return data

# ASOS

    def asos_url_to_data(self, url: str) -> dict:
        match = re.search(r'/prd/(\d+)', url)
        if not match:
            return
        id = match.groups()[0]
        if not id:
            return

        api_url = f'https://www.asos.com/api/product/catalogue/v3/products/{id}?store=US&currency=usd'
        raw = self.get(api_url)
        if raw.status_code != 200:
            return

        raw = raw.json()
        data = self.load_raw_data(raw, 'asos')

        if names := raw.get('alternateNames'):
            for name_data in names:
                if name_data.get('locale') == 'fr-FR':
                    data['name'] = name_data.get('title')

        imgs = []
        attrs = []
        for img in raw.get('media', {}).get('images', []):
            if color := img.get('colour'):
                attrs.append({'couleur': capfirst(color.lower())})

            src = clean_img_url(img.get('url'))
            if img.get('isPrimary', False):
                data['cover'] = src
                continue
            imgs.append(src)

        data['imgs'] = imgs
        data['attrs'] = attrs

        if (info := raw.get('info')):
            text = getattr(info, 'aboutMe', '').replace('<br>', '\n') + '\n'\
                + getattr(info, 'sizeAndFit', '').replace('<br>', '\n') + '\n' \
                + getattr(info, 'careInfo', '').replace('<br>', '\n')
            data['description'] = text.replace('</br>', '\n')
        return data

# SHEIN

    def shein_url_to_data(self, url: str):
        goods_id = self.shein_goods_id_from_url(url)
        if not goods_id:
            return

        api_url = f'https://us.shein.com/product-itemv2-{goods_id}.html?_lang=en&_ver=1.1.8'
        r = self.get(api_url)
        if r.status_code != 200:
            print('Request failed with status code', r.status_code, '\n', url, '\n')
            return

        soup = BeautifulSoup(r.text, 'html.parser')\
            .find("script", text=re.compile('productIntroData'))
        if not soup:
            return

        script = soup.string
        start = re.search('productIntroData: ', script)
        end = re.search('abt: {"', script)
        if not start or not end:
            return

        script = script[start.end():end.start()].strip()[:-1]
        raw = json.loads(script)
        data = self.load_raw_data(raw, 'shein')
        data['cost'] = min(data.get('retail_price', 0), data.get('sale_price', 0))

        if currency := get_dict_key(raw, 'detail__retailPrice__amountWithSymbol'):  # type: str
            amt = get_dict_key(raw, 'detail__retailPrice__amount')  # type: str
            data['cost_currency'] = currency.replace(amt, '')

        data['attrs'] = [
            {
                'name': attr.get('attr_name_en', attr.get('attr_name')),
                'value': attr.get('attr_value_en', attr.get('attr_value')),
            } for attr in raw.get('detail', {}).get('productDetails', [])
        ]
        data['imgs'] = [
            clean_img_url(img.get('origin_image'))
            for img in raw.get('goods_imgs').get('detail_image', [])
        ]
        if (cover := data.get('cover')) and isinstance(cover, str):
            data['cover'] = clean_img_url(cover)

        # pprint(data, indent=4)

        return data

    def shein_goods_id_from_url(self, url: str):
        if (match := re.search(r'p-(\d+)', url)) and (groups := match.groups()):
            return groups[0]
        return
#

    def load_raw_data(self, raw: dict, map_key: str) -> dict:
        data = {}
        for key, value in KEYS_MAP.items():
            value = value.get(map_key)
            if not value or '__' in key:
                continue
            data[key] = get_dict_key(raw, value)

        return data

#

    def __init__(self, *args, **kwargs):
        if not kwargs.get('session'):
            self._s = requests.Session()

    def get(self, url: str):
        return self._s.get(url, headers=self.headers)


# c = Crawler()

# url = 'https://www.prettylittlething.fr/robe-moulante-gris-pierre-cotelee-a-col-rond.html'
# # c.plt_url_to_data(url)

# url = 'https://www.asos.com/us/closet-london/closet-london-puff-shoulder-pencil-dress-with-bodice-detail-in-mink/prd/201364766?clr=mink&colourWayId=201364770&cid=19645'
# # c.asos_url_to_data(url)

# url = 'https://fr.shein.com/Lapel-Neck-PU-Blazer-p-4968967-cat-1739.html'
# # c.shein_url_to_data(url)
