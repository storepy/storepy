import json

from django.utils.text import capfirst


def product_to_jsonld(product, site=None) -> str:
    info = {
        "@context": "http://schema.org", "@type": "Product",
        "name": capfirst(product.page.title),
        "description": product.description,
    }

    if cat := product.category:
        info['category'] = capfirst(cat.name)

    if cover := product.cover:
        # TODO full url
        info['image'] = [cover.src.url]

    if (images := product.images) and images.exists():
        imgs = info.get('image', [])
        imgs.extend([img.src.url for img in images.all()])
        info["image"] = imgs

    price = product.retail_price
    if product.is_on_sale:
        price = product.sale_price

    info["offers"] = {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": f'{price}',
        # "url": f'http://{site.domain}{product.detail_url}',
        # "itemCondition": "http://schema.org/NewCondition",
        # "availability": "http://schema.org/InStock",
        # "seller": {
        #     "@type": "Organization",
        #     "name": capfirst(site.name)
        # }
    }

    # "brand": {
    #     "@type": "Thing",
    #     "name": capfirst(site.name)
    # }

    return json.dumps(info)
