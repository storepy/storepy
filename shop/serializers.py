import re
from django.db import models
from django.utils.text import capfirst
from django.utils.text import Truncator
# from django.contrib.humanize import intcomma

from miq import models as miqModel

# from miq.serializers import PublicImageSerializer


def image_to_dict(img: 'models.Model') -> dict:
    return {
        'src': img.src.url,
        'src_mobile': img.src_mobile.url if img.src_mobile else None,
        'thumb': img.thumb.url if img.thumb else None,
        'thumb_sq': img.thumb_sq.url if img.thumb_sq else None,
        'caption': img.caption,
        'alt_text': img.alt_text,
        'height': img.height, 'width': img.width,
        'height_mobile': img.height_mobile, 'width_mobile': img.width_mobile,

    }


def serialize_product_image(product: 'models.Model', img: 'miqModel.Image') -> dict:
    if not img:
        return

    data = image_to_dict(img)

    if hasattr(product, 'name') and product.name:
        data['title'] = product.name
        data['aria_label'] = product.name

        if not data.get('alt_text'):
            data['alt_text'] = product.name

    return data


def serialize_product_price(price):
    def intcomma(value):
        value = f'{value}'
        return re.sub(r"^(-?\d+)(\d{3})", r'\g<1>,\g<2>', value)
    return {
        'amount': price,
        'amountWithSymbol': f'{intcomma(int(price))} CFA' if price else ''
    }


def product_to_dict(product: 'models.Model', __many__: bool = False) -> dict:
    data = {
        'slug': product.page.slug_public,
        'url': product.detail_path(),
        'name': capfirst(product.name),
        'name_truncated': capfirst(Truncator(product.name).chars(30)),
        'description': product.description,
        #

        'retail_price': serialize_product_price(product.retail_price),
        'is_on_sale': product.is_on_sale,
        'sale_price': serialize_product_price(product.sale_price),
        #
        'cover': serialize_product_image(product, product.cover)
    }

    if not __many__:
        attrs = product.attributes.all()
        data.update({
            'is_pre_sale': product.is_pre_sale,
            'is_pre_sale_text': product.is_pre_sale_text,
            #
            'images': [serialize_product_image(product, img) for img in product.images.active()],
            'has_attributes': attrs.exists(),
            'attributes': [{'name': capfirst(attr.name), 'value': attr.value} for attr in attrs]

        })

    return data


"""
CATEGORY
"""


def category_to_dict(cat: 'models.Model') -> dict:
    return {
        'name': capfirst(cat.name),
        'name_truncated': capfirst(Truncator(cat.name).chars(30)),
        'slug': cat.page.slug_public,
        'url': cat.detail_path(),
        'cover': serialize_product_image(cat, cat.cover),
        'description': cat.description,
        # 'is_published': cat.page.is_published
    }
