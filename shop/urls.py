from django.conf import settings
from django.urls import path, include

from rest_framework import routers

from .staff.viewsets import StaffProductViewset, StaffCategoryViewset, SupplierOrderViewset

from . import views


app_name = 'shop'

auth_router = routers.DefaultRouter()
auth_router.register(r'products', StaffProductViewset)
auth_router.register(r'categories', StaffCategoryViewset)
auth_router.register(r'orders', SupplierOrderViewset)


urlpatterns = [
    path(f'{settings.API_PATH}/', include(auth_router.urls)),

    path('shop/cart/', views.CartView.as_view(), name='cart'),
    path('shop/cart/<slug:slug>/', views.CartView.as_view(), name='cart_update'),

    path(
        'shop/<slug:category_page_slug_public>/',
        views.CategoryView.as_view(), name='category'),

    path(
        'shop/<slug:category_page_slug_public>/<slug:page_slug_public>/',
        views.ProductView.as_view(), name='product'),

    path('shop/', views.ProductsView.as_view(), name='products'),
]
