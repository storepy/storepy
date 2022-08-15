"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[43],{5658:function(e,n,t){t.d(n,{s:function(){return o},u:function(){return l}});var r=t(8312),i=t(7498),s=t(3896),c=t(8136),u=["cartInstance","itemSlug"],l=function(e){var n=e.cartInstance,t=e.itemSlug,l=(0,r.Z)(e,u);return t?(0,c.jsx)(i.pu,{renderHeader:function(){return(0,c.jsx)("div",{children:"Supprimer ce produit"})},renderFooter:function(e){var r=e.setOpen;return(0,c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,c.jsx)(i.zx,{onClick:function(){return r(!1)},children:"Annuler"}),(0,c.jsx)(i.zx,{onClick:function(){return n.destroyItem(t).then((function(e){var n;null===l||void 0===l||null===(n=l.onSuccess)||void 0===n||n.call(l,e)})).catch((function(e){var n;null===l||void 0===l||null===(n=l.onError)||void 0===n||n.call(l,e)}))},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,c.jsx)("div",{className:"p-3",children:"Voulez-vous supprimer ce produit"})},className:(0,s.UT)(["cart-item-delete-button btn-danger-3"]),children:(0,c.jsx)(i.PJ.rF,{})}):null},o=function(e){var n=e.instance,t=e.onSuccess,r=e.onError,u=e.label;return(0,c.jsxs)(i.pu,{renderHeader:function(){return(0,c.jsx)("div",{children:"Supprimer ce panier"})},renderFooter:function(e){var s=e.setOpen;return(0,c.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,c.jsx)(i.zx,{onClick:function(){return s(!1)},children:"Annuler"}),(0,c.jsx)(i.zx,{onClick:function(){return function(e){n.destroy().then((function(n){null===t||void 0===t||t(n),null===e||void 0===e||e(!1)})).catch((function(e){return null===r||void 0===r?void 0:r(e)}))}(s)},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,c.jsx)("div",{className:"p-3",children:"Are you sure you want to delete this"})},className:(0,s.UT)(["cart-delete-button btn-danger-3",e.className]),children:[(0,c.jsx)(i.PJ.rF,{}),u&&(0,c.jsx)("span",{className:"label",children:u})]})}},606:function(e,n,t){t.d(n,{n:function(){return a},q:function(){return d}});var r=t(8312),i=t(8519),s=(t(2411),t(2887)),c=t(3896),u=t(4113),l=t(8136),o=["product","width","height"],a=function(e){var n=e.product,t=e.size;return(0,l.jsxs)("div",{className:"d-flex align-items-center",children:[(0,l.jsx)(d,{product:n,width:60,height:60}),(0,l.jsxs)("div",{className:"flex-1 rounded p-1 ",children:[(0,l.jsx)("div",{className:"fw-bold",children:(0,c.bI)(null===n||void 0===n?void 0:n.name,0,25)}),(0,l.jsx)(u._S,(0,i.Z)((0,i.Z)({},n),{},{inline:!0})),t&&(0,l.jsxs)("div",{children:[(0,l.jsx)("span",{className:"me-1",children:"Size:"}),(0,l.jsx)("span",{className:"text-sm",children:null===t||void 0===t?void 0:t.name})]})]})]})},d=function(e){var n=e.product,t=e.width,c=e.height,u=(0,r.Z)(e,o);return null!==n&&void 0!==n&&n.slug?(0,l.jsx)("div",(0,i.Z)((0,i.Z)({},u),{},{style:{width:t,height:c},children:(0,l.jsx)(s.ZP.Img.Square,(0,i.Z)((0,i.Z)({slug:"slug",src:"src"},n.cover_data),{},{className:"rounded"}))})):null}},5511:function(e,n,t){t.d(n,{A:function(){return a}});var r=t(8519),i=t(1135),s=t(7411),c=t(2518),u=t(2485),l=t(2887),o=function(e){(0,c.Z)(t,e);var n=(0,u.Z)(t);function t(){return(0,i.Z)(this,t),n.apply(this,arguments)}return(0,s.Z)(t,[{key:"addItems",value:function(e){return this.post("".concat(this._path,"items/"),{sizeSlug:e})}},{key:"addItem",value:function(e,n,t){return this.post("".concat(this._path,"item/").concat(e,"/"),{size:n,qty:t})}},{key:"updateItem",value:function(e,n){return this.post("".concat(this._path,"item/").concat(e,"/"),(0,r.Z)({},n),{timeout:5e3})}},{key:"destroyItem",value:function(e){return this.delete("".concat(this._path,"item/").concat(e,"/"),{timeout:5e3})}}]),t}(l.x5),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.eR)(e,"carts",o)}},6043:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(8312),i=(t(2411),t(1408)),s=t(2887),c=t(2134),u=t(3896),l=t(4113),o=t(7498),a=t(5511),d=t(606),h=t(5658),v=t(8136),m=["res","loading","refresh"];function f(){var e,n=(0,c.QT)((function(){return(0,a.A)().list()})),t=n.res,f=n.loading,p=n.refresh;(0,r.Z)(n,m);if(f)return(0,v.jsx)(o.gb,{});var x=new u.HM(t);return x.isSuccess?(0,v.jsx)(s.ZP.View,{className:"sales-index-view",children:null===(e=x.items)||void 0===e?void 0:e.map((function(e){var n=e||{},t=n.customer_data,r=void 0===t?{}:t,s=n.items,c=void 0===s?[]:s,m=(0,a.A)(e);return(0,v.jsx)(o.Zb,{style:{marginBottom:12},actions:(0,v.jsx)(h.s,{instance:m,onSuccess:function(){return p()}}),title:(0,v.jsx)("div",{className:"",children:"".concat(null===r||void 0===r?void 0:r.first_name," ").concat(null===r||void 0===r?void 0:r.last_name)}),text:new Date(null===m||void 0===m?void 0:m.created).toLocaleDateString(void 0,{day:"2-digit",weekday:"short",month:"short",year:"2-digit"}),footer:e.products.length>0&&(0,v.jsx)("div",{className:"fw-bold",children:(0,v.jsx)(l._S,{retail_price_data:(null===e||void 0===e?void 0:e.total)||(null===e||void 0===e?void 0:e.subtotal)})}),className:"mb-1",children:(0,v.jsx)(i.rU,{to:"cart/".concat(e.slug,"/"),children:(0,v.jsx)(o.j6,{className:"cart-items-preview",style:{marginBottom:0},children:c.map((function(e){return(0,v.jsx)("div",{children:(0,v.jsx)(d.q,{product:e.product,width:48,height:48})},(0,u.Vj)())}))})})},e.slug)}))}):null}}}]);
//# sourceMappingURL=43.083e0e38.chunk.js.map