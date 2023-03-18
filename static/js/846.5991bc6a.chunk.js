"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[846],{474:function(e,t,n){n.d(t,{A:function(){return u}});var i=n(3872),r=n(5561),s=n(1253),a=n(4733),c=n(2562),l=n(5789),o=5e3,d=function(e){(0,a.Z)(n,e);var t=(0,c.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,s.Z)(n,[{key:"createdDt",get:function(){var e;return null!==(e=this.data)&&void 0!==e&&e.created?new Date(this.data.created).toLocaleDateString(void 0,{day:"2-digit",weekday:"short",month:"short",year:"2-digit"}):null}},{key:"canDestroy",get:function(){var e,t;return 0===(null===this||void 0===this||null===(e=this.data)||void 0===e||null===(t=e.products)||void 0===t?void 0:t.length)}},{key:"mark_paid",value:function(){return this.post("".concat(this._path,"pay/"),{},{timeout:o})}},{key:"place",value:function(){return this.post("".concat(this._path,"place/"),{},{timeout:o})}},{key:"postDiscount",value:function(e){return this.post("".concat(this._path,"discount/"),e)}},{key:"destroyDiscount",value:function(e){return this.delete("".concat(this._path,"discount/").concat(e,"/"))}},{key:"addItems",value:function(e){return this.post("".concat(this._path,"products/"),e)}},{key:"addItem",value:function(e,t){return this.post("".concat(this._path,"product/").concat(e,"/"),t)}},{key:"updateItem",value:function(e,t){return this.post("".concat(this._path,"item/").concat(e,"/"),(0,i.Z)({},t),{timeout:o})}},{key:"destroyItem",value:function(e){return this.delete("".concat(this._path,"item/").concat(e,"/"),{timeout:o})}}]),n}(l.x5),u=(0,l.QY)("carts",d)},7846:function(e,t,n){n.r(t),n.d(t,{ProductAddForm:function(){return _},default:function(){return Z}});var i=n(4384),r=n(3872),s=n(7406),a=n(9996),c=n(9157),l=n(5789),o=n(9576),d=n(9474),u=n(810),m=n(1340),h=n(3088),f=n(474),v=n(2444),x=n(7494),p=n(9450),j=n(7532),b=n(4803),y=n(7457),N=["item","onItemClick"],g=s.lazy((function(){return n.e(221).then(n.bind(n,8221))}));function Z(){var e,t,n,i,o,h;(0,d.jr)("Place cart - Sales");var N=(0,a.UO)().cartSlug,Z=s.useContext(p.h2),_=Z.cart_data,k=(0,a.s0)();if(N!==(null===_||void 0===_?void 0:_.slug)||!Z.isLoaded)return(0,y.jsx)(m.gb,{});var w=(0,f.A)(_||{});return null!==w&&void 0!==w&&w.is_placed?(0,y.jsx)(g,{cart:w,onUpdate:function(e){Z.updateKey("cart_data",(0,r.Z)((0,r.Z)({},_),e.data))},onSuccess:function(){k("../")}}):(0,y.jsx)(l.ZP.View,{title:"Panier",text:"Verifiez les informations du client et du panier avant de confirmer. Un panier sans produits ne peut pas \xeatre confirm\xe9.",actions:(0,y.jsxs)("div",{className:"d-flex align-items-center",children:[(0,y.jsx)("div",{className:"me-1",children:(0,y.jsx)(b.Bj,{instance:w,onSuccess:function(e){Z.updateKey("cart_data",(0,r.Z)((0,r.Z)({},_),e.data))}})}),(0,y.jsx)(c.rU,{to:"/staff/sales/carts/".concat(null===w||void 0===w?void 0:w.slug,"/items/"),className:"btn-primary-2 btn-round",title:"Ajouter des produits",children:(0,y.jsx)(m.PJ.HB,{})})]}),back:"/staff/sales/carts",headerCN:"miq-container center",children:(0,y.jsxs)("div",{className:"miq-container center",children:[(0,y.jsx)(l.ZP.Section,{border:!0,title:"Client",children:(0,y.jsx)(v.CustomerCard,{data:w.customer_data})}),(0,y.jsx)(l.ZP.Section,{border:!0,title:"Panier (".concat(null===w||void 0===w||null===(e=w.products)||void 0===e?void 0:e.length," produits)"),footer:(0,y.jsxs)("div",{className:"",children:[(0,y.jsx)("div",{className:"d-flex justify-content-between",children:(0,y.jsx)(x.e2,{label:"Sous-total",amount:null===w||void 0===w?void 0:w.subtotal})}),w.discounts&&w.discounts.length>0&&(null===w||void 0===w||null===(t=w.discounts)||void 0===t?void 0:t.map((function(e){return(0,y.jsx)(b.Xu,{cart:w,item:e,onSuccess:function(e){return Z.updateKey("cart_data",(0,r.Z)((0,r.Z)({},_),e.data))},className:"d-flex justify-content-between"},e.slug)}))),(0,y.jsx)("div",{className:"d-flex justify-content-between",children:(0,y.jsx)(x.e2,{bold:!0,label:"Total",amount:null===w||void 0===w?void 0:w.total})})]}),children:w&&null!==w&&void 0!==w&&w.items&&(null===w||void 0===w||null===(n=w.items)||void 0===n?void 0:n.length)>0?(0,y.jsx)(y.Fragment,{children:null===(i=w.items)||void 0===i?void 0:i.map((function(e){return(0,y.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,y.jsx)(x.nG,(0,r.Z)((0,r.Z)({},e),{},{size:e.size_data})),(0,y.jsx)("div",{children:(0,y.jsx)(j.uf,{cartInstance:w,itemSlug:null===e||void 0===e?void 0:e.slug,onSuccess:function(e){Z.updateData({cart_data:e.data})}})})]},(0,u.Vj)())}))}):(0,y.jsx)(y.Fragment,{children:"Ajouter"})}),(0,y.jsx)("div",{className:"text-center",children:(0,y.jsx)(m.zx,{onClick:function(){w.place().then((function(e){Z.updateData({cart_data:e.data})})).catch((function(e){return console.log(e)}))},disabled:(null!==(o=null===w||void 0===w||null===(h=w.products)||void 0===h?void 0:h.length)&&void 0!==o?o:0)<=0,className:"btn-primary btn-md fw-bold w-50",title:"Confirmer le panier",children:"Confirmer"})})]})})}var _=function(e){var t,n=e.item,s=e.onItemClick,a=((0,i.Z)(e,N),(0,o.cI)({quantity:1,size:""}));if(null===n||void 0===n||!n.slug)return null;var c=n.sizes,d=void 0===c?[]:c,m=n.cover_data,f=n.name;return(0,y.jsx)(o.ZP,{context:a,onSubmit:function(e){e.preventDefault(),s(n,a.values.size,a.values.quantity).catch((function(e){a.handleError(e)}))},children:(0,y.jsx)(l.ZP.Section,{border:!0,header:(0,y.jsxs)("div",{className:"d-flex",children:[(0,y.jsx)("div",{style:{minWidth:34,maxWidth:50},className:"me-1",children:(0,y.jsx)(l.ZP.Img.Thumb,(0,r.Z)((0,r.Z)({src:"src"},m),{},{className:"rounded"}))}),(0,y.jsxs)("div",{className:"flex-1",title:f,children:[(0,y.jsx)("div",{className:"text-ellipsis text-sm",children:(0,y.jsx)("span",{className:"me-1 fw-bold",children:(0,u.bI)(f,0,45)})}),(0,y.jsxs)("div",{className:"d-flex flex-column flex-md-ro justify-content-between",children:[(0,y.jsxs)("div",{className:"d-grid grid-md-2 gap-1 flex-1",children:[(0,y.jsx)(h.D8,{required:!0,sizes:d.filter((function(e){return e.quantity>0})),error:a.errors.size}),(0,y.jsx)(h.PI,{max:(null===(t=d.find((function(e){return e.slug===a.values.size})))||void 0===t?void 0:t.quantity)||0,min:1})]}),(0,y.jsx)("div",{className:"text-right",children:(0,y.jsx)(o.ZP.Submit,{className:"btn btn-primary-2 btn-md fw-bold",children:"Ajouter"})})]})]})]}),actions:(0,y.jsx)(h._S,(0,r.Z)((0,r.Z)({},n),{},{className:"d-flex flex-wrap"})),className:"mb-1"})})}},4803:function(e,t,n){n.d(t,{Bj:function(){return d},Xu:function(){return u},sZ:function(){return m}});var i=n(4384),r=(n(7406),n(5789)),s=n(3088),a=n(9576),c=n(1340),l=n(7457),o=["item","cart"],d=function(e){var t=(0,a.cI)({description:"",amt:""}),n=e.instance,i=e.onSuccess,r=e.onError,s=n.products.length<=0,o=function(e){t.setValues({description:"",amt:""}),e(!1)};return(0,l.jsx)(a.ZP,{context:t,onSubmit:function(e){return e.preventDefault()},className:"cart-discount-form",children:(0,l.jsx)(c.pu,{disabled:s,modal:{width:"md",bodyCN:"cart-discount-modal-body"},title:s?"Ajouter un produit avant de pouvoir ajouter une r\xe9duction":"Ajouter une r\xe9duction",renderHeader:function(){return(0,l.jsxs)("div",{className:"fw-bold p-1 d-flex align-items-center",children:[(0,l.jsx)(c.PJ.Xb,{className:"btn-round"}),(0,l.jsx)("div",{children:"Ajouter une r\xe9duction"})]})},renderFooter:function(e){var s=e.setOpen;return(0,l.jsxs)("div",{className:"d-flex justify-content-between align-items-center p-2",children:[(0,l.jsx)(c.zx,{onClick:function(){return o(s)},children:"Annuler"}),(0,l.jsx)(a.ZP.Submit,{onClick:function(e){e.preventDefault(),n.postDiscount(t.values).then((function(e){o(s),null===i||void 0===i||i(e)})).catch((function(e){t.handleError(e),null===r||void 0===r||r(e)}))},className:"btn-primary fw-bold w-50",children:"Ajouter"})]})},render:function(){return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"p-2",children:[(0,l.jsx)(a.ZP.Field,{label:"Description",text:"",error:t.errors.description,children:(0,l.jsx)(a.ZP.Text,{placeholder:"D\xe9crivez la r\xe9duction ...",required:!0,name:"description",minLength:4,maxLength:80})}),(0,l.jsx)(a.ZP.Field,{label:"Montant",text:"",error:t.errors.amt,children:(0,l.jsx)(a.ZP.Text,{"aria-describedby":"sale_price_label",min:"0",step:"0.01",required:!0,placeholder:"Entrez le montant de la r\xe9duction ...",type:"number",name:"amt"})})]})})},className:"btn-primary-3 btn-round fw-bold",children:(0,l.jsx)(c.PJ.Xb,{})})})},u=function(e){var t=e.item,n=e.cart,s=(0,i.Z)(e,o);return(0,l.jsx)(c.o,{editView:function(e){var i=e.setEdit;return(0,l.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[(0,l.jsxs)("div",{className:"color-red-400 me-1",children:["Supprimer ",(0,l.jsx)("span",{className:"fw-bold",children:t.description.slice(0,30)}),"?"]}),(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsx)(r.ZP.Button,{onClick:function(){n.destroyDiscount(t.slug).then((function(e){var t;i(!1),null===s||void 0===s||null===(t=s.onSuccess)||void 0===t||t.call(s,e)})).catch((function(e){var t;return null===s||void 0===s||null===(t=s.onError)||void 0===t?void 0:t.call(s,e)}))},className:"btn-danger",children:"Supprimer"}),(0,l.jsx)(c.zx,{onClick:function(){return i(!1)},className:"ms-1 btn-round",title:"Annuler",children:"x"})]})]})},className:s.className,children:(0,l.jsx)(m,{item:t})})},m=function(e){var t=e.item;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("span",{className:"discount-item-description",children:t.description.slice(0,30)}),(0,l.jsxs)("span",{className:"discount-item-price d-flex color-green-500",children:["-",(0,l.jsx)(s._S,{retail_price_data:t.amt_data})]})]})}}}]);
//# sourceMappingURL=846.5991bc6a.chunk.js.map