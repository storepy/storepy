export const SHOP_PATHS = {
  base: '/staff/shop/',

  orderUpdate: function (slug) {
    return this.update(this.orderList(), slug);
  },
  orderList: function () {
    return this.list('orders/');
  },

  productUpdate: function (slug, query) {
    return this.update(this.productList(), slug, query);
  },
  productList: function () {
    return this.list('products/');
  },

  categoryList: function () {
    return this.list('categories/');
  },
  categoryUpdate: function (slug) {
    return this.update(this.categoryList(), slug);
  },

  update: function (path, slug, query) {
    if (query) return `${path}${slug}/?${query}`;
    return `${path}${slug}/`;
  },
  list: function (path) {
    return `${this.base}${path}`;
  },
};

export const SHOP_MSGS = {
  order: {
    update_success: 'Order updated.',
    update_error: 'Could not update order.',
  },
  product: {
    create_success: 'Product created.',
    create_error: 'Could not create product.',

    update_success: 'Product updated.',
    update_error: 'Could not update product.',

    publish_success: 'Product published.',
    unpublish_success: 'Product unpublished.',
    publish_error: 'Could not publish product.',
    publish_error_retail_price: 'You can not publish a product without price.',
    publish_error_category: 'You can not publish a product without category.',
    publish_error_page: 'You can not publish a product without page',

    delete_success: 'Product deleted',
    delete_error: 'Could not delete product.',

    cover_create_success: 'Product cover added.',
    cover_update_success: 'Product cover updated.',
    cover_update_error: 'Could not upload cover image.',
    cover_delete_success: 'Product cover deleted.',

    page_update_success: 'Product page updated.',
    page_update_error: 'Could not update page.',
  },
  wrong: 'Something went wrong.',
  default: 'Something went awfully wrong!',
};
