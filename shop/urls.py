from django.conf import settings
from django.urls import path, include

from rest_framework import routers

from .staff.viewsets import StaffProductViewset, StaffCategoryViewset

from . import views


app_name = 'shop'

auth_router = routers.DefaultRouter()
auth_router.register(r'products', StaffProductViewset)
auth_router.register(r'categories', StaffCategoryViewset)


urlpatterns = [
    path(f'{settings.API_PATH}/', include(auth_router.urls)),

    path(
        'shop/<slug:category_page_slug_public>/',
        views.CategoryView.as_view(), name='category'),

    # path(
    #     'all/<slug:slug>/',
    #     views.SaleProductsView.as_view(), name='sale_products'),

    path(
        'shop/<slug:category_page_slug_public>/<slug:page_slug_public>/',
        views.ProductView.as_view(), name='product'),

    path('shop/', views.ProductsView.as_view(), name='products'),
]
