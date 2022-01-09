
from django.shortcuts import get_list_or_404, get_object_or_404
from django.contrib.sites.shortcuts import get_current_site

from miq.models import Index
from miq.serializers import serialize_context_pagination

from miq.views.generic import ListView, DetailView, TemplateView

from shop.utils import product_to_jsonld

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


def get_published_categories():
    return Category.objects.published().has_products().order_by('position', 'created')


class ProductView(DetailView):
    model = Product
    template_name = 'shop/product.django.html'

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
            context['jsonld'] = product_to_jsonld(obj, self.request)

            self.update_sharedData(
                context,
                {
                    'product': product_to_dict(obj),
                    'breadcrumbs': [
                        {'label': 'Accueil', 'path': '/'},
                        {'label': 'Catalogue', 'path': '/shop/'},
                        {'label': obj.category.name, 'path': obj.category.detail_path()},
                    ],
                }
            )

        return context


class ListViewMixin:
    def object_list_pagination_to_dict(self, __context: dict) -> dict:
        return {
            'object_list': [product_to_dict(item, True) for item in __context.get('object_list')],
            'pagination': serialize_context_pagination(self.request, __context)
        }


class ProductsView(ListViewMixin, ListView):
    model = Product
    template_name = 'shop/products.django.html'
    context_object_name = 'products'
    paginate_by = 16
    page_label = None

    # TODO
    queryset = Product.objects.published()

    def get_context_data(self, **kwargs) -> dict:
        context = super().get_context_data(**kwargs)

        breadcrumbs = [{'label': 'Accueil', 'path': '/'}]
        if self.request.GET.get('sale', self.request.GET.get('q')):
            breadcrumbs.append({'label': 'Catalogue', 'path': '/shop/'},)

        data = self.object_list_pagination_to_dict(context)
        if self.page_label:
            data['page_label'] = self.page_label

        data.update({
            'breadcrumbs': breadcrumbs,
            'categories': [category_to_dict(cat) for cat in get_published_categories()]
        })

        self.update_sharedData(context, data)
        return context

    def get_queryset(self):
        qs = super().get_queryset()
        params = self.request.GET
        if (sale := params.get('sale')) and sale == 'all':
            qs = qs.is_on_sale()
            self.page_label = 'Soldes'

        if (q := self.request.GET.get('q')) and q != '':
            qs = qs.by_name(q)

        if (price := self.request.GET.get('price')) and price in ['5000', '10000', '25000', '50000']:
            qs = qs.by_price(price)

        return qs


class CategoryView(ListViewMixin, ListView):
    model = Product
    category = None
    template_name = 'shop/products.django.html'

    def get_context_data(self, **kwargs) -> dict:
        ctx = super().get_context_data(**kwargs)

        # SEO
        ctx['title'] = self.category.page.title

        # sD
        data = self.object_list_pagination_to_dict(ctx)
        data.update({
            'page_label': self.category.name,
            'breadcrumbs': [
                {'label': 'Accueil', 'path': '/'},
                {'label': 'Catalogue', 'path': '/shop/'},
            ],
        })
        self.update_sharedData(ctx, data)

        return ctx

    def get_queryset(self):
        sp = self.kwargs.get('category_page_slug_public')
        self.category = get_object_or_404(
            Category.objects.published().has_products(),
            page__slug_public=sp)
        return get_list_or_404(
            Product.objects.published(),
            category__page__slug_public=sp
        )


class IndexView(TemplateView):
    template_name = 'shop/index.django.html'

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)

        site = get_current_site(self.request)
        page = Index.objects.filter(site=site).first()
        if not page:
            return ctx

        ctx['page'] = page
        ctx['sections'] = page.sections.exclude(html='')
        ctx['title'] = page.title

        if new_products := Product.objects.published().is_new().slice(count=4):
            ctx['new_products'] = new_products

        if sale_products := Product.objects.published().is_on_sale().slice(count=4):
            ctx['sale_products'] = sale_products

        if categories := get_published_categories():
            ctx['categories'] = categories

        # ctx['occasions'] = Category.objects.published().order_by('created')[:10]

        ctx['brands'] = [
            {'name': 'Shein', 'logo': ''},
            {'name': 'PrettyLittleThing', 'logo': ''},
            {'name': 'Missguided', 'logo': ''},
            {'name': 'Fashionnova', 'logo': ''},
            {'asos': 'Macys', 'logo': ''},
            {'name': 'Macys', 'logo': ''},
        ]

        # self.update_sharedData(ctx, {
        #     'page': {
        #         # 'sections': [get_section_serializer(section.type)(section).data for section in page.sections.all()[:10]]
        #         'sections': [serialize_section(section) for section in page.sections.all()[:10]]
        #     }
        # })

        return ctx
