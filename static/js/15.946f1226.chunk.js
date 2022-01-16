(this["webpackJsonp@store/clientjs"]=this["webpackJsonp@store/clientjs"]||[]).push([[15],{344:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var c={base:"/staff/shop/",orderUpdate:function(e){return this.update(this.orderList(),e)},orderList:function(){return this.list("orders/")},productUpdate:function(e,t){return this.update(this.productList(),e,t)},productList:function(){return this.list("products/")},categoryList:function(){return this.list("categories/")},categoryUpdate:function(e){return this.update(this.categoryList(),e)},update:function(e,t,r){return r?"".concat(e).concat(t,"/?").concat(r):"".concat(e).concat(t,"/")},list:function(e){return"".concat(this.base).concat(e)}},o={order:{update_success:"Order updated.",update_error:"Could not update order."},product:{create_success:"Product created.",create_error:"Could not create product.",update_success:"Product updated.",update_error:"Could not update product.",publish_success:"Product published.",unpublish_success:"Product unpublished.",publish_error:"Could not publish product.",publish_error_retail_price:"You can not publish a product without price.",publish_error_category:"You can not publish a product without category.",publish_error_page:"You can not publish a product without page",delete_success:"Product deleted",delete_error:"Could not delete product.",cover_create_success:"Product cover added.",cover_update_success:"Product cover updated.",cover_update_error:"Could not upload cover image.",cover_delete_success:"Product cover deleted.",page_update_success:"Product page updated.",page_update_error:"Could not update page."},wrong:"Something went wrong.",default:"Something went awfully wrong!"}},382:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return j}));var c=r(1),o=r(2),s=r(10),u=r(9),n=r(3),a=r(5),i=r(344),d=r(0),p=Object(o.lazy)((function(){return r.e(9).then(r.bind(null,361))})),l=Object(o.lazy)((function(){return r.e(12).then(r.bind(null,363))})),b=Object(o.lazy)((function(){return r.e(8).then(r.bind(null,364))}));function j(e){var t=Object(a.y)(),r=e.match,j=r.path,h=r.url;return Object(d.jsx)(a.x,{context:t,children:Object(d.jsx)(o.Suspense,{fallback:Object(d.jsx)(a.q,{}),children:Object(d.jsxs)(s.c,{children:[Object(d.jsx)(u.e,{path:"".concat(i.b.orderList()),render:function(e){return Object(d.jsx)(b,Object(c.a)({back:Object(n.g)(h)},e))},requiredPerms:["shop.view_supplierorder"]}),Object(d.jsx)(u.e,{path:"".concat(i.b.categoryList()),render:function(e){return Object(d.jsx)(l,Object(c.a)({back:Object(n.g)(h)},e))},requiredPerms:["shop.view_category"]}),Object(d.jsx)(u.e,{path:"".concat(i.b.productList()),render:function(e){return Object(d.jsx)(p,Object(c.a)({back:Object(n.g)(h)},e))},requiredPerms:["shop.view_product"]}),Object(d.jsx)(u.e,{path:j,requiredPerms:["shop.view_product"],children:Object(d.jsxs)(u.g,{title:"Store",back:"/staff/",className:"miq-container-fluid",children:[Object(d.jsx)(u.g.Section,{title:"Carts",actions:Object(d.jsx)(u.d,{to:Object(n.g)("".concat(j,"carts")),label:"View carts",requiredPerms:["shop.view_cart"],className:"btn-primary-3"})}),Object(d.jsx)(u.g.Section,{title:"Supplier Orders",actions:Object(d.jsx)(u.d,{to:Object(n.g)("".concat(j,"orders")),label:"View orders",requiredPerms:["shop.view_supplierorder"],className:"btn-primary-3"})}),Object(d.jsx)(u.g.Section,{title:"Products",actions:Object(d.jsx)(u.d,{to:Object(n.g)("".concat(j,"products")),label:"View products",requiredPerms:["shop.view_product"],className:"btn-primary-3"})}),Object(d.jsx)(u.g.Section,{title:"Categories",actions:Object(d.jsx)(u.d,{to:Object(n.g)("".concat(j,"categories")),label:"View categories",requiredPerms:["shop.view_category"],className:"btn-primary-3"})})]})})]})})})}}}]);
//# sourceMappingURL=15.946f1226.chunk.js.map