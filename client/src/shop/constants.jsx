export const SHOP_PATHS = {
  base: '/staff/shop/',

  orderUpdate: function (slug) {
    return this.update(this.orderList(), slug);
  },
  orderList: function () {
    return this.list('orders/');
  },

  productUpdate: function (slug) {
    return this.update(this.productList(), slug);
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

  update: function (path, slug) {
    return `${path}${slug}/`;
  },
  list: function (path) {
    return `${this.base}${path}`;
  },
};
