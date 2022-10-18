
from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static
from django.views.generic import TemplateView

from shopy.shop import views

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

    path('', include('miq.core.urls', namespace='miq')),
    path('', views.IndexView.as_view(), name='index'),
]

urlpatterns += [
    path('robots.txt', TemplateView.as_view(
        template_name="core/robots.txt",
        content_type="text/plain"), name="robots_file"),



]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
