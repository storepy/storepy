
from django.contrib import admin
from django.conf import settings
from django.urls import path, include
from django.conf.urls.static import static

from miq.staff.views import StaffLoginView
from shop.views import IndexView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('staff/', include('miq.staff.urls', namespace='staff')),
    path('staff/', StaffLoginView.as_view(), name='stafflogin'),
]

urlpatterns += [
    path('', include('shop.urls', namespace='shop')),
]

# Must be last
urlpatterns += [
    path('', include('miq.urls', namespace='miq')),
    path('', IndexView.as_view(), name='index'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
