"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[494],{8494:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var s=i(6009),n=i(2411),r=i(2887),l=i(7498),d=i(9002),o=i(1408),c=i(3896),a=i(8136);function u(){var e,t,i,u=n.useContext(d.h2),v=u.isLoaded,p=u.products,x=u.orders,j=u.cats,m=u.shopy_settings,g=u.hits,f=(0,o.lr)();(0,s.Z)(f,1)[0].get("tab");return v?(0,a.jsxs)(r.ZP.View,{title:"Shop",back:"/staff/",actions:(0,a.jsx)(r.ZP.NavLink,{to:"settings/",className:"btn btn-round btn-secondary-3",title:"Shop settings",children:(0,a.jsx)(l.PJ.lk,{})}),children:[(0,a.jsx)(r.ZP.Section,{children:(0,a.jsxs)("div",{className:"d-grid grid-2 grid-sm-3 grid-md-4 grid-lg-6",children:[(null===m||void 0===m||null===(e=m.config)||void 0===e?void 0:e.has_suppliers)&&(0,a.jsx)(h,{title:"Supplier Orders",tab:"./",link:{to:"orders/",text:"View all orders",perms:["store.view_supplierorder"]},children:(0,a.jsx)("h3",{children:(null===x||void 0===x?void 0:x.count)||0})}),(0,a.jsx)(h,{title:"Products",tab:"./?tab=products",link:{to:"products",text:"View all products",perms:["store.view_product"]},children:(0,a.jsx)("h3",{children:(null===p||void 0===p?void 0:p.count)||0})}),(0,a.jsx)(h,{tab:"./?tab=categories",title:"Categories",link:{to:"categories",text:"View all categories",perms:["store.view_category"]},children:(0,a.jsx)("h3",{children:(null===j||void 0===j?void 0:j.count)||0})})]})}),null===g||void 0===g?void 0:g.map((function(e){return(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsx)("span",{children:e.created__date}),(0,a.jsx)("div",{className:"text-ellipsis",children:e.path}),(0,a.jsx)("span",{children:e.count})]},(0,c.Vj)())})),(0,a.jsx)(r.ZP.Section,{title:"Top Categories",className:"my-2",children:null===j||void 0===j||null===(t=j.cat_count)||void 0===t||null===(i=t.filter((function(e){return e.category__name})))||void 0===i?void 0:i.map((function(e,t){var i=e.category__name,s=e.count;return(0,a.jsxs)("div",{children:[i,": ",s]},t)}))})]}):null}var h=function(e){var t=e.children,i=e.title,s=e.link,n=e.tab,l=void 0===n?"./":n,d=s.to;return(0,a.jsxs)("div",{className:"card-link mb-3",children:[(0,a.jsxs)(r.ZP.NavLink,{to:l,children:[i&&(0,a.jsx)("div",{className:"card-link-title",children:i}),t]}),(0,a.jsx)(r.ZP.Link,{to:d,requiredPerms:s.perms,children:(null===s||void 0===s?void 0:s.text)&&"".concat(s.text," \xbb")})]})}}}]);
//# sourceMappingURL=494.f546cb60.chunk.js.map