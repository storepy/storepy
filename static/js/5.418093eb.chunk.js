(this["webpackJsonp@store/client"]=this["webpackJsonp@store/client"]||[]).push([[5],{333:function(t,e,c){"use strict";c.d(e,"a",(function(){return i}));var a=c(17),n=c(28),s=c(22),r=c(21),i=new(function(t){Object(s.a)(c,t);var e=Object(r.a)(c);function c(){return Object(a.a)(this,c),e.apply(this,arguments)}return Object(n.a)(c,[{key:"publish",value:function(t){return this.patchPath("".concat(this.path).concat(t,"/publish/"),{})}},{key:"getSheinProductData",value:function(t){return this.postPath("".concat(this.path,"shein/"),t,{timeout:1e4})}},{key:"postAttribute",value:function(t,e){return this.postPath("".concat(this.path).concat(t,"/attribute/new/"),e)}},{key:"patchAttribute",value:function(t,e,c,a){return this.patchPath("".concat(this.path).concat(t,"/attribute/").concat(e,"/"),c,a)}},{key:"deleteAttribute",value:function(t,e){return this.deletePath("".concat(this.path).concat(t,"/attribute/").concat(e,"/"))}},{key:"patchPage",value:function(t,e,c){return this.patchPath("".concat(this.path).concat(t,"/page/"),e,c)}}]),c}(c(3).e))("products/")},345:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return x}));var a=c(1),n=c(25),s=c(9),r=c(2),i=c(23),u=c(10),l=(c(346),c(13)),o=c(11),b=c(3),d=c(5),j=c(333),h=c(0),p=Object(r.lazy)((function(){return c.e(11).then(c.bind(null,348))})),O=Object(r.lazy)((function(){return c.e(12).then(c.bind(null,350))})),m=function(t){var e=Object(r.useState)({}),c=Object(s.a)(e,2),u=c[0],p=c[1],O=Object(r.useContext)(l.a).perms,m=t.location.search;Object(r.useEffect)((function(){var t=new URLSearchParams(m);Object(n.a)(t.values()).filter((function(t){return t})).length||(t=null),j.a.list(t).then((function(t){p(t)})).catch((function(t){}))}),[m]);var x=Object(o.l)(O.perms,["shop.add_product"]);return Object(h.jsx)(o.g,{title:"Products",back:t.back,actions:Object(h.jsx)(o.d,{label:"Add product",to:"".concat(Object(b.f)(t.match.url),"new/"),disabled:!x,className:"btn-primary"}),children:(null===u||void 0===u?void 0:u.results)&&Object(h.jsx)(o.g.Section,{className:"product-table mb-3",children:Object(h.jsx)(d.n,{className:"w-100",items:u.results,renderItem:function(e){var c;return Object(h.jsxs)(d.t.Tr,{className:"border-bottom",children:[Object(h.jsx)(d.t.Td,{className:"",children:Object(h.jsx)(d.j,Object(a.a)(Object(a.a)({},e.cover_data),{},{className:"rounded"}))}),Object(h.jsxs)(d.t.Td,{className:"",children:[Object(h.jsx)(i.b,{to:"".concat(Object(b.f)(t.match.url)).concat(e.slug,"/"),children:Object(h.jsx)("div",{className:"fw-bold",title:e.name,children:e.name})}),Object(h.jsxs)("div",{className:"text-muted text-sm",children:[e.category_data&&Object(h.jsx)("span",{className:"me-1",children:e.category_data.name}),e.is_pre_sale&&Object(h.jsx)("span",{className:"me-1",children:"Pre sale"})]})]}),Object(h.jsx)(d.t.Td,{className:"d-none d-md-table-cell text-sm text-center"}),Object(h.jsx)(d.t.Td,{className:"",children:e.is_on_sale?Object(h.jsx)("span",{className:"text-danger",children:e.sale_price}):Object(h.jsx)("span",{className:"",children:e.retail_price})}),Object(h.jsx)(d.t.Td,{className:"d-none d-md-table-cell text-sm text-center",children:Object(h.jsx)(o.i,{is_published:null===e||void 0===e||null===(c=e.page)||void 0===c?void 0:c.is_published,pill:!0})})]},e.slug)},pagination:{count:u.count,next:u.next,previous:u.previous}})})})};function x(t){var e=t.match,c=e.path,n=e.url;return Object(h.jsxs)(u.c,{children:[Object(h.jsx)(o.e,{path:"".concat(c,"new/"),render:function(t){return Object(h.jsx)(p,Object(a.a)({back:Object(b.f)(n)},t))},requiredPerms:["shop.add_product"]}),Object(h.jsx)(o.e,{path:"".concat(c,":prodSlug/"),render:function(t){return Object(h.jsx)(O,Object(a.a)({back:Object(b.f)(n)},t))},requiredPerms:["shop.change_product"]}),Object(h.jsx)(o.e,{requiredPerms:["shop.view_product"],render:function(e){return Object(h.jsx)(m,Object(a.a)(Object(a.a)({},e),{},{back:t.back}))}})]})}},346:function(t,e,c){}}]);
//# sourceMappingURL=5.418093eb.chunk.js.map