from django.shortcuts import get_object_or_404
from django.contrib.sites.shortcuts import get_current_site

# from apps.blog.models import Article
from miq.models import Index
from miq.serializers import PublicImageSerializer
from miq.views.generic import ListView, DetailView, TemplateView

from .models import Product, Category


class IndexView(TemplateView):
    template_name = 'shop/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        site = get_current_site(self.request)
        page = Index.objects.filter(site=site).first()
        if not page:
            return context

        context['page'] = page
        context['title'] = page.title

        # context['articles'] = Article.objects.published().order_by(
        #     '-page__dt_published')[:8]

        return context


class ProductView(DetailView):
    model = Product
    template_name = 'shop/product.html'

    def get_object(self, *args, **kwargs):
        return get_object_or_404(
            Product.objects.published(),
            category__slug=self.kwargs.get('category_slug'),
            slug_public=self.kwargs.get('page_slug_public')
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        obj = context.get('object')
        if obj:
            context['title'] = obj.page.title
            context['description'] = obj.description

            product_json = {
                'name': obj.name.upper(),
                'description': obj.description,
                'cover': PublicImageSerializer(obj.cover).data,
                'images': PublicImageSerializer(obj.images.all(), many=True).data
            }

            self.update_sharedData(context, {'product': product_json})

        return context


class ProductsView(ListView):
    model = Product
    template_name = 'shop/products.html'
    context_object_name = 'products'
    # TODO
    queryset = Product.objects.published


class CategoryView(DetailView):
    model = Category
    template_name = 'shop/category.html'
