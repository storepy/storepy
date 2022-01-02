
from django.contrib.sites.middleware import CurrentSiteMiddleware
from django.contrib.sites.shortcuts import get_current_site

from miq.serializers import PublicImageSerializer

from .models import Category


class StoreMiddleware(CurrentSiteMiddleware):
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        self.process_request(request)

        response = self.get_response(request)
        return response

    def process_request(self, request):
        request.site = get_current_site(request)

    def process_view(self, request, view_func, view_args, view_kwargs):
        pass

    def process_template_response(self, request, response):

        ctx = response.context_data
        if not ctx:
            return response

        if 'sharedData' not in ctx.keys():
            ctx['sharedData'] = {}

        ctx.get('sharedData').update({
            'store_categories': [
                {
                    'name': cat.name,
                    'detail_url': cat.detail_url,
                    'cover': PublicImageSerializer(cat.cover).data,
                }
                for cat in Category.objects.filter(page__is_published=True)
            ]
        })

        return response
