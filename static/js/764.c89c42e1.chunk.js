"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[764],{8764:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var s=t(3872),r=t(7406),i=t(2521),c=t(5789),l=t(810),a=t(9450),o=t(2050),u=t(8907),d=t(5484),m=t(7457),x=function(e){var n=e.instance,t=e.onSuccess,s=e.onError,r=e.label;return(0,m.jsxs)(o.pu,{title:n.canDestroy?"Delete this customer":"Can't delete this customer",renderHeader:function(){return(0,m.jsx)("div",{children:"Supprimer ce client"})},renderFooter:function(e){var r=e.setOpen;return(0,m.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,m.jsx)(o.zx,{onClick:function(){return r(!1)},children:"Annuler"}),(0,m.jsx)(c.ZP.Button,{onClick:function(){return function(e){n.destroy().then((function(n){null===e||void 0===e||e(!1),null===t||void 0===t||t(n)})).catch((function(n){null===e||void 0===e||e(!1),null===s||void 0===s||s(n)}))}(r)},className:"btn-danger",requiredPerms:["sales.delete_customer"],children:"Supprimer"})]})},render:function(){return(0,m.jsx)("div",{className:"p-3",children:"Veuillez confirmer cette action"})},className:"btn-round cus-delete-button btn-danger-3",children:[(0,m.jsx)(o.PJ.rF,{}),r&&(0,m.jsx)("span",{className:"label",children:r})]})};function f(){var e=r.useContext(a.h2),n=e.customers,t=void 0===n?[]:n,i=e.pagination,u=e.isLoaded,d=e.updateKey;return u?(0,m.jsx)(c.ZP.View,{title:"Clients",back:"/staff/sales/",className:"sales-index-view miq-container",headerCN:"miq-container",footer:i&&(0,m.jsx)("div",{children:(0,m.jsx)(o.tl,(0,s.Z)((0,s.Z)({},i),{},{component:c.ZP.Link,to:!0}))}),children:(0,m.jsx)("div",{className:"d-grid",children:null===t||void 0===t?void 0:t.map((function(e){return(0,m.jsx)(j,{data:e,removeItem:function(){return d("customers",t.filter((function(n){return n.slug!==(null===e||void 0===e?void 0:e.slug)})))}},(0,l.Vj)())}))})}):(0,m.jsx)(o.gb,{})}var j=function(e){var n,t=e.data,s=e.removeItem;return(0,m.jsx)(o.vz,{border:!0,title:(0,m.jsxs)("div",{children:[(0,m.jsx)(u.u,{data:t}),(0,m.jsxs)("div",{className:"text-muted text-sm",children:[(0,m.jsxs)("span",{className:"",title:"Total spent",children:[null!==(n=t.spent)&&void 0!==n?n:"_"," / "]}),(0,m.jsxs)("span",{className:"",title:"Total orders",children:[t.orders_count," order(s)"]})]})]}),actions:(0,m.jsxs)("div",{className:"d-flex",children:[(0,m.jsx)(x,{instance:(0,i.O)(t),onSuccess:s}),(0,m.jsx)(d.f,{data:t,className:"btn btn-primary-3 btn-square ms-1",children:(0,m.jsx)(o.PJ.I8,{})})]}),className:"cust-list-item"})}}}]);
//# sourceMappingURL=764.c89c42e1.chunk.js.map