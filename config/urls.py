
from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

from shopy.shop import views

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    # path('', include('orders.urls', namespace='orders')),
    path('', include('shopy.store.urls', namespace='shopystore')),
    path('', include('shopy.shop.urls', namespace='shopy')),
    # path('', include('shopy.orders.urls', namespace='shopyorders')),
    # path('', include('miqsocial.urls', namespace='miqsocial')),
]

# Must be last

urlpatterns += [
    path('', include('miq.staff.urls', namespace='staff')),
    path('', include('miq.core.urls', namespace='miq')),
    path('', views.IndexView.as_view(), name='index'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
