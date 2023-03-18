"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[577],{474:function(t,e,n){n.d(e,{A:function(){return d}});var a=n(3872),c=n(5561),s=n(1253),i=n(4733),o=n(2562),r=n(5789),u=5e3,l=function(t){(0,i.Z)(n,t);var e=(0,o.Z)(n);function n(){return(0,c.Z)(this,n),e.apply(this,arguments)}return(0,s.Z)(n,[{key:"createdDt",get:function(){var t;return null!==(t=this.data)&&void 0!==t&&t.created?new Date(this.data.created).toLocaleDateString(void 0,{day:"2-digit",weekday:"short",month:"short",year:"2-digit"}):null}},{key:"canDestroy",get:function(){var t,e;return 0===(null===this||void 0===this||null===(t=this.data)||void 0===t||null===(e=t.products)||void 0===e?void 0:e.length)}},{key:"mark_paid",value:function(){return this.post("".concat(this._path,"pay/"),{},{timeout:u})}},{key:"place",value:function(){return this.post("".concat(this._path,"place/"),{},{timeout:u})}},{key:"postDiscount",value:function(t){return this.post("".concat(this._path,"discount/"),t)}},{key:"destroyDiscount",value:function(t){return this.delete("".concat(this._path,"discount/").concat(t,"/"))}},{key:"addItems",value:function(t){return this.post("".concat(this._path,"products/"),t)}},{key:"addItem",value:function(t,e){return this.post("".concat(this._path,"product/").concat(t,"/"),e)}},{key:"updateItem",value:function(t,e){return this.post("".concat(this._path,"item/").concat(t,"/"),(0,a.Z)({},e),{timeout:u})}},{key:"destroyItem",value:function(t){return this.delete("".concat(this._path,"item/").concat(t,"/"),{timeout:u})}}]),n}(r.x5),d=(0,r.QY)("carts",l)},7577:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var a=n(3251),c=n(7406),s=n(9996),i=n(5789),o=n(474),r=n(1340),u=n(2444),l=n(9474),d=n(7457);function h(){(0,l.jr)("Add cart - Sales");var t=(0,s.s0)(),e=c.useState(),n=(0,a.Z)(e,2),h=n[0],f=n[1],m=function(e){(0,o.A)({}).create({customer:e.slug}).then((function(e){var n=e.data;return t("/staff/sales/carts/".concat(n.slug,"/"))})).catch((function(t){console.log(t)}))};return(0,d.jsx)(i.ZP.View,{title:"Ajouter une commande",back:"/staff/sales/",children:(0,d.jsx)("div",{className:"d-flex justify-content-center my-3",children:(0,d.jsx)("div",{className:"w-md-65",children:(0,d.jsx)(i.ZP.Section,{title:"Client",text:"Selectionez ou ajoutez un noubeau client",headerCN:"mb-4",children:h&&h.slug?(0,d.jsxs)("div",{className:"",children:[(0,d.jsx)(u.CustomerCard,{data:h}),(0,d.jsxs)("div",{className:"d-flex justify-content-between mt-4",children:[(0,d.jsx)(r.zx,{className:"btn btn-round",onClick:function(){return f(void 0)},children:(0,d.jsx)(r.PJ.Xd,{})}),(0,d.jsx)(r.zx,{onClick:function(){m(h)},className:"btn btn-primary-3",children:"Continuer \xbb"})]})]}):(0,d.jsx)(u.CustomerForm,{allowSuggestions:!0,fields:["first_name","last_name","phone","email"],onSubmit:function(t){var e=t.e,n=t.form;e.preventDefault(),(0,u.Customer)().create(n.values).then((function(t){var e=t.data;m(e)})).catch((function(t){n.handleError(t)}))},onSuccess:function(t){t.data},onCustomerSelect:f,children:(0,d.jsx)("div",{className:"d-flex justify-content-center my-4",children:(0,d.jsx)(r.zx,{type:"submit",className:"btn btn-md btn-primary fw-bold",children:"Continuer \xbb"})})})})})})})}}}]);
//# sourceMappingURL=577.552afa6b.chunk.js.map