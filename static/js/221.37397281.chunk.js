"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[221],{8221:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var s=n(3872),i=n(3251),l=n(4384),a=n(7406),c=n(5789),r=n(810),d=n(9474),o=n(1340),u=n(2444),m=n(4803),x=n(7532),j=n(7494),v=n(7457),f=["cart","onUpdate"];function h(e){var t,n,h,p=e.cart,b=(e.onUpdate,(0,l.Z)(e,f));(0,d.jr)("Mark cart paid - Sales");var N=a.useState(""),P=(0,i.Z)(N,2),Z=P[0],S=P[1];return(0,v.jsx)(c.ZP.View,{title:"Placer la commande",text:"Ne placez la commande que quand le paiement a \xe9t\xe9 \xe9ffectu\xe9",back:"/staff/sales/carts",headerCN:"miq-container center",children:(0,v.jsxs)("div",{className:"miq-container center",children:[Z&&(0,v.jsx)("div",{className:"text-danger p-4 rounded mb-3 text-center ",children:Z}),(0,v.jsxs)(c.ZP.Section,{border:!0,title:"Commande",footer:(0,v.jsxs)("div",{children:[(0,v.jsx)("div",{className:"d-flex justify-content-between",children:(0,v.jsx)(j.e2,{label:"Sous-total",amount:null===p||void 0===p?void 0:p.subtotal})}),p.discounts&&p.discounts.length>0&&(null===p||void 0===p||null===(t=p.discounts)||void 0===t?void 0:t.map((function(e){return(0,v.jsx)("div",{className:"d-flex justify-content-between",children:(0,v.jsx)(m.sZ,{item:e})},e.slug)}))),(0,v.jsx)("div",{className:"d-flex justify-content-between",children:(0,v.jsx)(j.e2,{bold:!0,label:"Total",amount:null===p||void 0===p?void 0:p.total})})]}),children:[(0,v.jsx)(c.ZP.Section,{title:(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)(o.PJ.Ys,{}),(0,v.jsx)("div",{className:"ms-1",children:"Client"})]}),children:(0,v.jsx)(u.CustomerCard,{data:p.customer_data})}),(0,v.jsx)(c.ZP.Section,{title:(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)(o.PJ.P2,{}),(0,v.jsx)("div",{className:"ms-1",children:"Panier (".concat(null===p||void 0===p||null===(n=p.products)||void 0===n?void 0:n.length," produits)")})]}),children:null===(h=p.items)||void 0===h?void 0:h.map((function(e){return(0,v.jsx)("div",{className:"d-flex justify-content-between align-items-center",children:(0,v.jsx)(j.nG,(0,s.Z)((0,s.Z)({},e),{},{size:e.size_data}))},(0,r.Vj)())}))})]}),(0,v.jsx)("div",{className:"text-center",children:(0,v.jsx)(x.lW,{label:"Placer la commande",instance:p,onSuccess:null===b||void 0===b?void 0:b.onSuccess,onError:function(e){if(b.onError)return b.onError(e);S("An error occurred")}})})]})})}}}]);
//# sourceMappingURL=221.37397281.chunk.js.map