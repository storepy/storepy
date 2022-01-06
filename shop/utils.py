import json
import re

from django.utils.text import capfirst
from django.utils.text import Truncator
from django.utils.safestring import mark_safe
from django.contrib.sites.shortcuts import get_current_site

# https://www.facebook.com/business/help/120325381656392?id=725943027795860


def product_to_jsonld(product, request) -> str:
    site = get_current_site(request)
    brand_name = capfirst(site.name)
    build_uri = request.build_absolute_uri
    url = build_uri(product.detail_path())

    info = {
        "@context": "http://schema.org", "@type": "Product",
        "brand": brand_name,
        "id": Truncator(product.page.slug_public).chars(100),
        "title": capfirst(Truncator(product.name).chars(150)),
        "link": url,
        "condition": "new",  # new, refurbished, used
    }

    if (description := product.description):
        # rich_text_description
        info["description"] = Truncator(description).chars(9999)

    if cat := product.category:
        info["product_type"] = capfirst(cat.name)
        # info['category'] = capfirst(cat.name)

    if cover := product.cover:
        # TODO full url
        info["image_link"] = [build_uri(cover.src.url)]

    if (images := product.images) and images.exists():
        info["additional_image_link"] = [
            build_uri(img.src.url) for img in images.all()[:20]
        ]

    if (color := product.attributes.filter(name='color')) and color.exists():
        info["color"] = color.first().value

    # gender:[female, male, unisex]
    # material,pattern,size,shipping,google_product_category

    currency = "XOF"
    price = f'{intcomma(int(product.retail_price))} {currency}'

    info["price"] = price
    if product.is_on_sale:
        sale_price = f"{intcomma(int(product.sale_price))} {currency}"
        info["sale_price"] = sale_price
        price = sale_price

    # status:[active, archived]

    info["offers"] = {
        "@type": "Offer",
        "priceCurrency": currency,
        "price": price,
        "url": url,
        "itemCondition": "http://schema.org/NewCondition",
        "availability": "http://schema.org/InStock",
        "seller": {
            "@type": "Organization",
            "name": brand_name
        }
    }

    return mark_safe(json.dumps(info))


def intcomma(value):
    value = f'{value}'
    return re.sub(r"^(-?\d+)(\d{3})", r'\g<1>,\g<2>', value)
