(this["webpackJsonp@store/clientjs"]=this["webpackJsonp@store/clientjs"]||[]).push([[8],{350:function(t,e,c){"use strict";c.d(e,"a",(function(){return u}));var n=c(22),r=c(33),s=c(24),a=c(23),u=new(function(t){Object(s.a)(c,t);var e=Object(a.a)(c);function c(){return Object(n.a)(this,c),e.apply(this,arguments)}return Object(r.a)(c,[{key:"getSheinProductData",value:function(t,e){return this.postPath("".concat(this.path).concat(t,"/shein/"),e,{timeout:1e4})}}]),c}(c(3).f))("orders/")},363:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return f}));var n=c(1),r=c(8),s=c(2),a=c(20),u=c(9),i=c(13),o=c(10),l=c(5),b=c(350),j=c(3),d=c(343),h=(c(364),c(0)),p=Object(s.lazy)((function(){return c.e(5).then(c.bind(null,369))})),O=function(t){var e=Object(s.useState)({}),c=Object(r.a)(e,2),n=c[0],u=c[1],p=Object(s.useState)(!0),O=Object(r.a)(p,2),f=O[0],m=O[1],x=Object(s.useContext)(i.a).perms;Object(s.useEffect)((function(){b.a.list().then((function(t){m(!1),u(t)})).catch((function(t){m(!0)}))}),[]);var g=Object(o.l)(x.perms,["shop.add_supplierorder"]);return f?null:Object(h.jsx)(o.g,{title:"Supplier Orders (".concat(n.count,")"),back:t.back,actions:Object(h.jsx)(l.c,{onClick:function(){b.a.post({}).then((function(e){return t.history.push("".concat(Object(j.g)(t.match.url)).concat(e.slug,"/"))})).catch((function(t){}))},disabled:!g,className:"btn-primary-3",title:g?"Add a new order":"You cannot perform this action",children:"Add order"}),children:(null===n||void 0===n?void 0:n.results)&&Object(h.jsx)(o.g.Section,{className:"category-table mb-3",children:Object(h.jsx)(l.p,{className:"w-100",items:n.results,renderItem:function(t){return Object(h.jsxs)(l.w.Tr,{className:"border-bottom",children:[Object(h.jsx)(l.w.Td,{className:"",children:Object(h.jsx)(a.b,{to:d.b.orderUpdate(t.slug),children:t.slug})}),Object(h.jsx)(l.w.Td,{className:"d-none d-md-table-cell text-sm text-center",children:"2"})]},t.slug)},pagination:{count:n.count,next:n.next,previous:n.previous}})})})};function f(t){var e=t.match,c=e.path,r=e.url;return Object(h.jsxs)(u.c,{children:[Object(h.jsx)(o.e,{path:"".concat(c,":sOrderSlug/"),render:function(t){return Object(h.jsx)(p,Object(n.a)(Object(n.a)({},t),{},{back:Object(j.g)(r)}))},requiredPerms:["shop.change_supplierorder"]}),Object(h.jsx)(o.e,{requiredPerms:["shop.view_supplierorder"],render:function(e){return Object(h.jsx)(O,Object(n.a)(Object(n.a)({},e),{},{back:t.back}))}})]})}},364:function(t,e,c){}}]);
//# sourceMappingURL=8.3c7d7385.chunk.js.map