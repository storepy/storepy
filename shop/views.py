from django.utils.translation import gettext_lazy as _
from http import HTTPStatus
from django.forms import ModelForm
import json
# from pprint import pprint

from django import http

from django.shortcuts import get_list_or_404, get_object_or_404
from django.contrib.sites.shortcuts import get_current_site

from miq.models import Index
from miq.serializers import serialize_context_pagination

from miq.views.generic import CreateView, ListView, DetailView, TemplateView
from shop.models.cart_model import CartProduct


from shop.utils import product_to_jsonld

from .serializers import cart_to_dict, product_to_dict, category_to_dict
from .models import Product, Category, Cart, Lead

JsonResponse = http.JsonResponse


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


"""
MIXINS
"""


class ViewMixin:
    def get_cart_items(self):
        session = self.get_session()

        if cart := Cart.objects.filter(slug=session.get('CID', '')).first():
            return cart_to_dict(cart)

    def get_session(self):
        session = self.request.session
        if not session.session_key:
            try:
                self.request.session.save()
                return self.request.session
            except Exception as e:
                pass

        return session

    def object_list_pagination_to_dict(self, __context: dict) -> dict:
        return {
            'object_list': [product_to_dict(item, True) for item in __context.get('object_list')],
            'pagination': serialize_context_pagination(self.request, __context)
        }


"""
PRODUCT VIEWS
"""


class ProductView(ViewMixin, DetailView):
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
        if not obj:
            return context

        context['title'] = obj.page.title
        context['description'] = obj.description
        context['jsonld'] = product_to_jsonld(obj, self.request)

        data = {
            'product': product_to_dict(obj),
            'breadcrumbs': [
                {'label': 'Accueil', 'path': '/'},
                {'label': 'Catalogue', 'path': '/shop/'},
                {'label': obj.category.name, 'path': obj.category.detail_path()},
            ],
        }

        if cart := self.get_cart_items():
            data['cart'] = cart

        self.update_sharedData(context, data)

        return context


class ProductsView(ViewMixin, ListView):
    model = Product
    template_name = 'shop/products.django.html'
    context_object_name = 'products'
    paginate_by = 16
    page_label = None

    # TODO
    queryset = Product.objects.published().order_by('stage', 'position', '-created', 'name')

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


"""
CATEGORY VIEW
"""


class CategoryView(ViewMixin, ListView):
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


"""
INDEX VIEW
"""


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


"""
CART VIEWS
"""


class LeadCreateForm(ModelForm):
    class Meta:
        model = Lead
        fields = ('name', 'number', 'email', 'ig_handle')
        error_messages = {
            'name': {'required': _("Veuillez entrer votre nom et prénom."), },
            'number': {'required': _("Veuillez entrer votre numéro de téléphone."), },
            'email': {'invalid': _("Veuillez entrer une adresse email valide"), },
        }


class CartView(ViewMixin, TemplateView):
    model = Lead
    form_class = LeadCreateForm
    template_name = 'shop/cart.django.html'

    def patch(self, *args: tuple, **kwargs: dict):
        slug = self.kwargs.get('slug')
        if not slug:
            return JsonResponse({'cart': 'Required'}, status=HTTPStatus.BAD_REQUEST)

        cart = Cart.objects.filter(slug=slug).first()
        if not cart:
            return JsonResponse({'cart': 'Invalid'}, status=HTTPStatus.BAD_REQUEST)

        data = self.request_to_json()
        action = data.get('action')

        if not action or action not in ['delete', 'update', 'add']:
            return JsonResponse({'action': 'Invalid'}, status=HTTPStatus.BAD_REQUEST)

        item_slug = data.get('slug', '')
        size = data.get('size')

        if action == 'add' and (prod := Product.objects.filter(page__slug_public=item_slug).first()):
            cart.products.add(prod, through_defaults={'size': size})
            return JsonResponse(cart_to_dict(cart), status=HTTPStatus.OK)

        item = cart.items.filter(slug=item_slug).first()
        if not item:
            return JsonResponse({'item': 'Invalid'}, status=HTTPStatus.BAD_REQUEST)

        if action == 'delete':
            item.delete()

        if action == 'update':
            cart.update_size(item_slug, size)

        return JsonResponse(cart_to_dict(cart), status=HTTPStatus.OK)

    def post(self, request: 'http.HttpRequest', *args, **kwargs) -> 'JsonResponse':

        session = self.get_session()
        form_data = self.request_to_json()

        lead = None
        lid = session.get('LID', None)
        if lid:
            lead = Lead.objects.filter(slug=lid).first()

        if not lead:
            form = self.form_class(data=form_data)
            if not form.is_valid():
                errors = self.form_errors_to_json(form)
                return JsonResponse(errors, status=HTTPStatus.BAD_REQUEST)

            lead = form.save()
            session['LID'] = f'{lead.slug}'
            session.modified = True

        cart = None
        cid = session.get('CID', None)
        if cid:
            cart = Cart.objects.filter(slug=cid).first()

        if not cart:
            cart = Cart.objects.create(lead=lead)
            session['CID'] = f'{cart.slug}'
            session.modified = True

        if (prod_slug := form_data.get('product')) and (prod := Product.objects.filter(page__slug_public=prod_slug).first()):
            cart.products.add(
                prod, through_defaults={'size': form_data.get('size', '')})

        return JsonResponse(cart_to_dict(cart), status=HTTPStatus.CREATED)

    def get_context_data(self, **kwargs):
        ctx = super().get_context_data(**kwargs)

        if self.request.method != "GET":
            return ctx

        data = {}
        if cart := self.get_cart_items():
            data['cart'] = cart

        self.update_sharedData(ctx, data)
        return ctx

    def form_errors_to_json(self, form):
        errors = form.errors.get_json_data(escape_html=False)
        self.errors = errors.get('__all__')
        return errors

    def request_to_json(self):
        try:
            return json.loads(self.request.body)
        except Exception:
            return {}
