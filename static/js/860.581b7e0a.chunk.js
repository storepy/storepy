"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[860],{7860:function(e,n,r){r.r(n),r.d(n,{SupplierOrder:function(){return m.e},default:function(){return f}});var s=r(2551),t=r(3872),i=r(7406),c=r(3041),l=r(8427),a=r(5789),d=r(9474),o=r(810),u=r(2050),m=r(683),h=r(7457),x=function(e){var n=e.instance,r=e.onSuccess,s=e.onError,t=e.label;return(0,h.jsxs)(u.pu,{renderHeader:function(){return(0,h.jsxs)("div",{children:["Supprimer '",n.name,"'"]})},renderFooter:function(e){var t=e.setOpen;return(0,h.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,h.jsx)(u.zx,{onClick:function(){return t(!1)},children:"Annuler"}),(0,h.jsx)(u.zx,{onClick:function(){return function(e){n.destroy().then((function(n){null===e||void 0===e||e(!1),null===r||void 0===r||r(n)})).catch((function(e){return null===s||void 0===s?void 0:s(e)}))}(t)},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,h.jsx)("div",{className:"p-3",children:"Are you sure you want to delete this"})},className:(0,o.UT)(["s-order-delete-button btn-danger-3",e.className]),children:[(0,h.jsx)(u.PJ.rF,{}),t&&(0,h.jsx)("span",{className:"label",children:t})]})},j=function(e){var n=e.label,r=void 0===n?"Add order":n;return(0,h.jsx)(a.ZP.Button,{onClick:function(){(0,m.e)().create({}).then((function(n){var r;return null===e||void 0===e||null===(r=e.onSuccess)||void 0===r?void 0:r.call(e,n)})).catch((function(e){}))},className:e.className,requiredPerms:["store.add_supplierorder"],title:"Add a new order",children:r})},p=function(e){var n=e.amountWithSymbol;return(0,h.jsx)("div",{className:"miq-price",children:n})},v=function(e){var n=e.item,r=e.removeItem,s=n||{},i=s.name,c=void 0===i?"New order":i,l=s.slug,d=s.is_paid,j=s.items,v=s.items_revenue,f=s.supplier;return(0,h.jsxs)(u.iA.Tr,{children:[(0,h.jsxs)(u.iA.Td,{children:[(0,h.jsx)(a.ZP.Link,{to:"".concat(l,"/"),className:"",children:(0,h.jsx)("div",{className:(0,o.UT)(["fw-bold text-ellipsis",d&&"text-line-through"]),children:c})}),(0,h.jsx)("span",{className:"text-sm",children:n.avg_cost})]}),(0,h.jsx)(u.iA.Td,{children:null===j||void 0===j?void 0:j.length}),(0,h.jsx)(u.iA.Td,{children:f}),(0,h.jsx)(u.iA.Td,{children:(0,h.jsx)(p,(0,t.Z)({},n.total_cost_data))}),(0,h.jsx)(u.iA.Td,{children:(0,h.jsx)(p,(0,t.Z)({},v))}),(0,h.jsx)(u.iA.Td,{children:(0,h.jsx)(x,{instance:(0,m.e)(n),onSuccess:function(){return null===r||void 0===r?void 0:r({slug:l})}})})]})};function f(){var e=(0,c.s0)(),n=(0,l.lr)(),r=(0,s.Z)(n,1)[0].get("page"),o=(0,d.QT)((function(){return(0,m.e)().list({params:{page:r}})}),{refreshDeps:[r],onSuccess:function(){document.title="Supplier orders - Store"}}),x=o.res,p=o.removeItem,f=new d.F6(x);if(!f.isSuccess)return null;var A=f.items;return(0,h.jsx)(a.ZP.View,{title:"Supplier Orders",back:"/staff/store/",actions:(0,h.jsx)(j,{onSuccess:function(n){var r=n.data;return e("".concat(r.slug,"/"))},className:"btn-primary-3"}),requiredPerms:["store.view_supplierorder"],children:Boolean(A.length)?(0,h.jsx)(a.ZP.Section,{mainCN:"d-grid",mainStyle:{overflowX:"auto"},footer:(0,h.jsx)(u.tl,(0,t.Z)((0,t.Z)({},f.pagination),{},{component:a.ZP.Link,to:!0})),children:(0,h.jsx)(u.iA,{border:!0,items:A,header:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.iA.Th,{}),(0,h.jsx)(u.iA.Th,{children:"Items"}),(0,h.jsx)(u.iA.Th,{children:"Supplier"}),(0,h.jsx)(u.iA.Th,{children:"Total Cost"}),(0,h.jsx)(u.iA.Th,{children:"Est. Revenue"}),(0,h.jsx)(u.iA.Th,{})]}),renderItem:function(e){return(0,i.createElement)(v,{item:e,removeItem:p,key:e.slug})},className:"w-100"})}):(0,h.jsx)("div",{className:"p-4",children:(0,h.jsxs)("div",{className:"text-center",children:[(0,h.jsx)("div",{className:"mb-4 text-md",children:"Add a supplier order to get started."}),(0,h.jsx)(j,{onSuccess:function(n){var r=n.data;return e("".concat(r.slug,"/"))},label:"Add an order",className:"btn-md btn-primary fw-bold"})]})})})}}}]);
//# sourceMappingURL=860.581b7e0a.chunk.js.map