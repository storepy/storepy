"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[889],{474:function(t,e,n){n.d(e,{A:function(){return l}});var i=n(3872),r=n(5561),a=n(1253),s=n(4733),c=n(2562),d=n(5789),u=5e3,o=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"createdDt",get:function(){var t;return null!==(t=this.data)&&void 0!==t&&t.created?new Date(this.data.created).toLocaleDateString(void 0,{day:"2-digit",weekday:"short",month:"short",year:"2-digit"}):null}},{key:"canDestroy",get:function(){var t,e;return 0===(null===this||void 0===this||null===(t=this.data)||void 0===t||null===(e=t.products)||void 0===e?void 0:e.length)}},{key:"mark_paid",value:function(){return this.post("".concat(this._path,"pay/"),{},{timeout:u})}},{key:"place",value:function(){return this.post("".concat(this._path,"place/"),{},{timeout:u})}},{key:"addItems",value:function(t){return this.post("".concat(this._path,"products/"),t)}},{key:"addItem",value:function(t,e){return this.post("".concat(this._path,"product/").concat(t,"/"),e)}},{key:"updateItem",value:function(t,e){return this.post("".concat(this._path,"item/").concat(t,"/"),(0,i.Z)({},e),{timeout:u})}},{key:"destroyItem",value:function(t){return this.delete("".concat(this._path,"item/").concat(t,"/"),{timeout:u})}}]),n}(d.x5),l=(0,d.QY)("carts",o)},6889:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var i=n(4384),r=n(3872),a=n(5492),s=n(3251),c=n(7406),d=n(9996),u=n(5789),o=n(9474),l=n(2050),h=n(810),m=n(3088),p=n(474),v=n(7494),f=n(7532),x=n(9450),j=n(7457),g=["cart"];function y(){var t;(0,o.jr)("Add items to cart - Sales");var e=(0,d.UO)().cartSlug,n=c.useContext(x.h2),i=n.cart_data,f=n.products,g=void 0===f?[]:f,y=c.useState([]),N=(0,s.Z)(y,2),_=N[0],b=N[1];if(e!==(null===i||void 0===i?void 0:i.slug)||!n.isLoaded)return(0,j.jsx)(l.gb,{});var z=(0,p.A)(i||{}),w=(null===z||void 0===z||null===(t=z.items)||void 0===t?void 0:t.map((function(t){return t.size})))||[];return(0,j.jsx)(l.cv,{style:{zIndex:1e4},className:"bg-white p-4 rounded",header:(0,j.jsx)(k,{cart:z,selected:_}),footer:(0,j.jsx)("div",{className:"miq-container center",children:(0,j.jsx)("div",{className:"d-flex justify-content-center bg-white p-2",children:(0,j.jsx)("div",{children:(0,j.jsx)(l.zx,{disabled:0===_.length,onClick:function(){return function(){var t=_.map((function(t){return{product_slug:t.meta_slug,size:t.sizeSlug,quantity:1}}));0!==t.length&&z.addItems(t).then((function(t){b([]),n.updateData({cart_data:t.data})})).catch((function(t){}))}()},className:"btn-primary btn-md fw-bold",children:"Ajouter"})})})}),children:(0,j.jsx)(u.ZP.Section,{header:(0,j.jsx)("div",{className:"p-2",children:(0,j.jsx)(m.ir,{fields:[]})}),className:"miq-container center px-1",children:g.length>0?(0,j.jsx)(j.Fragment,{children:g.map((function(t){var e=t.sizes;return(void 0===e?[]:e).filter((function(t){return t.quantity>=1})).filter((function(t){return!w.includes(t.slug)})).map((function(e){var n=_.find((function(t){return t.sizeSlug===(null===e||void 0===e?void 0:e.slug)})),i=Boolean(n);return(0,j.jsxs)("div",{className:"d-flex align-items-center mb-1 border-1 rounded",style:{padding:6},onClick:function(){b(i?function(t){return t.filter((function(t){return t.sizeSlug!=(null===e||void 0===e?void 0:e.slug)}))}:[(0,r.Z)((0,r.Z)({},t),{},{sizeSlug:e.slug})].concat((0,a.Z)(_)))},children:[(0,j.jsx)("div",{className:"flex-1",children:(0,j.jsx)(v.n,{product:t,size:e})}),(0,j.jsx)("div",{style:{minWidth:24,marginLeft:3,marginRight:6},children:(0,j.jsx)("input",{type:"checkbox",name:"selected",className:"me-2",checked:i,onChange:function(){}})})]},(0,h.Vj)())}))}))}):(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{className:"text-center",children:[(0,j.jsx)("div",{className:"text-md",children:"Aucun produit trouv\xe9"}),(0,j.jsx)("div",{className:"text-muted",children:"Re-\xe9ssayez votre recherche avec des mots-cl\xe9s plus pr\xe9cis."})]})})})})}var k=function(t){var e,n=t.cart,r=(0,i.Z)(t,g).selected,a=void 0===r?[]:r;return(0,j.jsxs)("div",{className:"cart-add-item-view-header miq-container center px-1 pt-2",children:[(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)("div",{className:"me-1",children:(0,j.jsx)(l.QJ,{to:(0,f.Sm)(n),title:"Annuler",prefix:"miq-staff",children:"\xab"})}),(0,j.jsx)(l.M$,{title:(0,j.jsx)("span",{className:"mt-2",children:"Ajouter des produits au panier"}),text:"Tap on a product to add to the cart/ Cliquez sur un produit pour l'ajouter au panier"})]}),(0,j.jsxs)(l.j6,{className:"cart-items-preview",style:{minHeight:48,paddingBottom:0},children:[null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(t){return(0,j.jsx)("div",{children:(0,j.jsx)(v.q,{product:t.product,width:48,height:48})},(0,h.Vj)())})),a.map((function(t){return(0,j.jsx)("div",{children:(0,j.jsx)(v.q,{product:t,width:48,height:48})},(0,h.Vj)())}))]})]})}}}]);
//# sourceMappingURL=889.ef546d52.chunk.js.map