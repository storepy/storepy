
from django.shortcuts import get_list_or_404, get_object_or_404
from django.contrib.sites.shortcuts import get_current_site

from miq.models import Index
from miq.serializers import serialize_context_pagination

from miq.views.generic import ListView, DetailView, TemplateView

from .serializers import product_to_dict, category_to_dict
from .models import Product, Category


def serialize_section(section):
    type = section.type
    data = {
        'type': type,
        'html': section.html,
        'title': section.title,
        'text': section.text,
    }
    return data


class IndexView(TemplateView):
    template_name = 'shop/index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        site = get_current_site(self.request)
        page = Index.objects.filter(site=site).first()
        if not page:
            return context

        context['page'] = page
        context['sections'] = page.sections.exclude(html='')
        context['title'] = page.title

        self.update_sharedData(context, {
            'page': {
                # 'sections': [get_section_serializer(section.type)(section).data for section in page.sections.all()[:10]]
                'sections': [serialize_section(section) for section in page.sections.all()[:10]]
            }
        })

        # context['articles'] = Article.objects.published().order_by(
        #     '-page__dt_published')[:8]

        return context


class ProductView(DetailView):
    model = Product
    template_name = 'shop/product.html'

    def get_object(self, *args, **kwargs):
        return get_object_or_404(
            Product.objects.published(),
            category__page__slug_public=self.kwargs.get('category_page_slug_public'),
            page__slug_public=self.kwargs.get('page_slug_public')
        )

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        obj = context.get('object')
        if obj:
            context['title'] = obj.page.title
            context['description'] = obj.description

            self.update_sharedData(context, {'product': product_to_dict(obj)})

        return context


class ListViewMixin:
    def object_list_pagination_to_dict(self, __context: dict) -> dict:
        return {
            'object_list': [product_to_dict(item, True) for item in __context.get('object_list')],
            'pagination': serialize_context_pagination(self.request, __context)
        }


class ProductsView(ListViewMixin, ListView):
    model = Product
    template_name = 'shop/products.html'
    context_object_name = 'products'
    paginate_by = 16

    # TODO
    queryset = Product.objects.published()

    def get_context_data(self, **kwargs) -> dict:
        context = super().get_context_data(**kwargs)
        data = self.object_list_pagination_to_dict(context)
        data.update({
            'categories': [category_to_dict(cat) for cat in Category.objects.published()[:20]]
        })

        self.update_sharedData(context, data)
        return context

    def get_queryset(self):
        qs = super().get_queryset()
        if (q := self.request.GET.get('q')) and q != '':
            qs = qs.by_name(q)

        return qs


class CategoryView(ListViewMixin, ListView):
    model = Product
    category = None
    template_name = 'shop/products.html'

    def get_context_data(self, **kwargs) -> dict:
        ctx = super().get_context_data(**kwargs)

        # SEO
        ctx['title'] = self.category.page.title

        # sD
        data = self.object_list_pagination_to_dict(ctx)
        data.update({
            'page_label': self.category.name
        })
        self.update_sharedData(ctx, data)

        return ctx

    def get_queryset(self):
        sp = self.kwargs.get('category_page_slug_public')
        self.category = get_object_or_404(
            Category, page__slug_public=sp, page__is_published=True)
        return get_list_or_404(
            Product.objects.published(),
            category__page__slug_public=sp
        )
