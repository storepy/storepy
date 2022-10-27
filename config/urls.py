import random
import hashlib
import requests


from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.http import JsonResponse

from shopy.shop import views
from miq.analytics.models import Visitor
from miq.analytics.utils import get_ip

cache = {}


def get_vid(ip, ua):
    return hashlib.shake_128(bytes(f'{ip}{ua}', encoding='utf-8')).hexdigest(4)


def set_cache_key(key, size=99):
    keys = cache.keys()
    if(len(keys) > size):
        cache.pop(random.choice(keys, None))

    cache[key] = True


def beacon_view(request):
    ua = request.META.get('HTTP_USER_AGENT')
    ip = get_ip(request)
    response = JsonResponse({'status': 'ok'})

    key = get_vid(ip, ua)
    if key in cache:
        return JsonResponse({'status': 'ok'})

    set_cache_key(key)

    visitor = Visitor.objects.filter(ip=ip, user_agent=ua).order_by('created')
    if not visitor.exists():
        return response

    visitor = visitor.first()
    if visitor.is_parsed:
        return response

    # r = requests.get('https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY&ip={ip}')

    fields = 'as,asname,org,country,countryCode,region,regionName,currency,timezone,city,zip,status,message,isp,proxy,mobile'

    r = requests.get(f'http://ip-api.com/json/{ip}', params={'fields': fields})
    if r.status_code != 200 or not r.json().get('status') != 'success':
        return response

    data = r.json()
    field_names = [f.name for f in visitor._meta.local_fields]
    for k, v in data.items():
        if not v or k not in field_names:
            continue
        setattr(visitor, k, v)

    visitor.asfullname = data.get('as')
    visitor.is_parsed = True
    visitor.save()

    # for key, value in request.POST.items():
    #     if key == 'csrfmiddlewaretoken':
    #         continue

    return response


urlpatterns = [
    path('miq/', admin.site.urls),
]

urlpatterns += [
    path('', include('shopy.store.urls', namespace='shopystore')),
    path('', include('shopy.shop.urls', namespace='shopy')),
    path('', include('shopy.sales.urls', namespace='sales')),
    path('', include('miqpartners.urls', namespace='miqpartners')),
]

# Must be last

urlpatterns += [
    path('', include('miq.analytics.urls', namespace='analytics')),
    path('', include('miq.staff.urls', namespace='staff')),

    # !! careful when moving this !!
    path('', include('miq.honeypot.urls', namespace='honeypot')),
    # !!

    path('beat/', beacon_view, name='beat'),

    path('', include('miq.core.urls', namespace='miq')),
    path('', views.IndexView.as_view(), name='index'),
]

urlpatterns += [
    path('robots.txt', TemplateView.as_view(
        template_name="core/robots.txt",
        content_type="text/plain"), name="robots_file"),



]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
