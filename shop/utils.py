import json
import re

from django.utils.text import capfirst
from django.utils.text import Truncator
from django.utils.safestring import mark_safe
from django.contrib.sites.shortcuts import get_current_site

# https://www.facebook.com/business/help/120325381656392?id=725943027795860


def img_to_jsonld(request, img, *, is_dict=True):
    src = img.src
    data = {
        "@context": "http://schema.org", "@type": "ImageObject",
        'caption': img.caption or '',
        'contentUrl': request.build_absolute_uri(src.url),
        'width': src.width,
        'height': src.height,
    }

    if not is_dict:
        return mark_safe(json.dumps(data))
    return data


def brand_to_jsonld(request, site, *, is_dict=True):
    data = {
        "@context": "http://schema.org", "@type": "Brand",
        "name": capfirst(site.name),
        # TODO: can be spoofed
        "url": request.get_host()
    }
    if (hasattr(site, 'settings')) and (setting := site.settings):
        if (logo := setting.logo):
            data['logo'] = img_to_jsonld(request, logo)

    if not is_dict:
        return mark_safe(json.dumps(data))
    return data


def product_to_jsonld(product, request) -> str:
    site = get_current_site(request)
    build_uri = request.build_absolute_uri
    url = build_uri(product.detail_path())

    info = {
        "@context": "http://schema.org", "@type": "Product",
        "brand": brand_to_jsonld(request, site),
        "productID": Truncator(product.page.slug_public).chars(100),
        "name": capfirst(Truncator(product.name).chars(150)),
        "url": url,
    }

    if (description := product.description):
        info["description"] = Truncator(description).chars(9999) or ''

    if cat := product.category:
        info["category"] = capfirst(cat.name)

    if cover := product.cover:
        info["image"] = [img_to_jsonld(request, cover)]

    if (images := product.images) and images.exists():
        imgs = info.get('image', [])
        imgs.extend([img_to_jsonld(request, img) for img in images.all()[:20]])

    if (color := product.attributes.filter(name='color')) and color.exists():
        info["color"] = color.first().value

    currency = "XOF"
    price = f'{intcomma(int(product.retail_price))}'

    if product.is_on_sale:
        price = f"{intcomma(int(product.sale_price))}"

    info["offers"] = {
        "@type": "Offer",
        "priceCurrency": currency,
        "price": price,
        "url": url,
        "itemCondition": "http://schema.org/NewCondition",
        "availability": "http://schema.org/InStock",
        "seller": brand_to_jsonld(request, site)
    }

    return mark_safe(json.dumps(info))


def intcomma(value):
    value = f'{value}'
    return re.sub(r"^(-?\d+)(\d{3})", r'\g<1>,\g<2>', value)
