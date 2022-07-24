"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[117],{3315:function(e,s,r){r.r(s),r.d(s,{default:function(){return k}});var i=r(8312),a=r(8519),t=r(6009),n=r(9062),l=r(2411),c=r(1408),d=r(6520),o=r(2145),m=r(2379),u=r(8136),x=r(9002),h=function(e){var s=e.is_on_sale,r=e.retail_price,i=e.sale_price,a=s&&null!=(null===i||void 0===i?void 0:i.amountWithSymbol);return(0,u.jsxs)("div",{className:(0,o.UT)(["p-price",a&&"sale"]),children:[a&&(0,u.jsx)("div",{className:"p-price-sale text-danger me-1",children:i.amountWithSymbol}),(0,u.jsx)("div",{className:(0,o.UT)(["p-price-retail",a&&"text-line-through"]),children:r.amountWithSymbol})]})},v=function(e){var s=l.useContext(x.h2).categories;return s?(0,u.jsx)("div",{className:"p-category-links pb-2",children:null===s||void 0===s?void 0:s.map((function(s){var r,i;return(0,u.jsx)("div",{className:"item w-25 w-md-15",children:(0,u.jsxs)("a",{href:s.url,className:"",title:s.name,children:[e.showCover&&(null===s||void 0===s?void 0:s.cover)&&(0,u.jsx)(m.Ei.Picture,(0,a.Z)((0,a.Z)({},s.cover),{},{src_mobile:(null===s||void 0===s||null===(r=s.cover)||void 0===r?void 0:r.thumb_sq)||(null===s||void 0===s||null===(i=s.cover)||void 0===i?void 0:i.src_mobile)})),(0,u.jsx)("div",{className:"info",children:s.name_truncated})]})},s.meta_slug)}))}):null},p=function(e){return(0,u.jsx)(m.Ei.HorizontalGallery,(0,a.Z)((0,a.Z)({},e),{},{className:(0,o.UT)(["p-imgs-hgallery",e.className])}))},j=function(e){var s=e.attributes;return s?(0,u.jsx)("ul",{className:"product-attr-list",children:null===s||void 0===s?void 0:s.map((function(e){return(0,u.jsxs)("li",{className:"attr",children:[(0,u.jsxs)("span",{className:"attr-label",children:[e.name," : "]}),(0,u.jsx)("span",{className:"attr-value",children:e.value})]},e.name)}))}):null},N=r(5603),g=r(8067),f=r(4113),b=["product","cart","fields","onSuccess","children"],_=function(e){var s,r,t=e.product,n=e.cart,l=e.fields,c=e.onSuccess,d=e.children,m=((0,i.Z)(e,b),t||{}),x=m.sizes,h=void 0===x?[]:x,v=m.meta_slug,p=n||{},j=(p.products,p.items),_=(void 0===j?[]:j).find((function(e){var s;return(null===e||void 0===e||null===(s=e.product)||void 0===s?void 0:s.meta_slug)===v}));console.log(_);var Z=(0,N.cI)({quantity:1,size:_?_.size:"",first_name:"",last_name:"",email:"",phone:""}),y=Z.errors,w=Z.values;return h=null===(s=h)||void 0===s?void 0:s.filter((function(e){return e.quantity>0})),(0,u.jsxs)(N.ZP,{context:Z,onSubmit:function(e){if(e.preventDefault(),w.size){var s={quantity:w.quantity,size:w.size};_&&_.slug?function(e,s){return o.tn.post("api/order/item/".concat(e,"/"),(0,a.Z)((0,a.Z)({},s),{},{redirect:!0}))}(_.slug,s).then((function(e){var s=e.data;null===c||void 0===c||c(s)})):(s.customer=Z.values,function(e,s){return o.tn.post("api/order/cart/".concat(e,"/"),(0,a.Z)((0,a.Z)({},s),{},{redirect:!0}))}(v,s).then((function(e){var s=e.data;null===c||void 0===c||c(s)})))}else Z.setError("size","Veuillez choisir votre taille")},className:"order-item-form",children:[(0,u.jsxs)(u.Fragment,{children:[l.includes("size")&&(0,u.jsx)(f.D8,{required:!0,label:"Taille",error:y.size,sizes:h}),l.includes("quantity")&&(0,u.jsx)(f.PI,{error:y.quantity,max:(null===(r=h.find((function(e){return e.slug===Z.values.size})))||void 0===r?void 0:r.quantity)||0,min:1})]}),!Boolean(null===n||void 0===n?void 0:n.customer)&&Z.values.size&&(0,u.jsxs)("div",{className:"",children:[(0,u.jsx)(g.l.LName,{error:y.lastst_name}),(0,u.jsx)(g.l.FName,{error:y.first_name}),(0,u.jsx)(g.l.Phone,{error:y.phone}),(0,u.jsx)(g.l.Email,{error:y.email})]}),d]})},Z=function(e){var s=(0,c.lr)(),r=(0,t.Z)(s,2),i=r[0],n=r[1];return(0,u.jsx)("form",(0,a.Z)((0,a.Z)({},e),{},{className:(0,o.UT)(["p-search-form",e.className]),children:(0,u.jsx)(N.kq.Mj,{value:i.get("q")||"",onChange:function(e){n({q:e.target.value})},placeholder:"Cherchez un produit ..."})}))},y=["product"],w=["clsPrefix","images","children","body"],z=["viewCN","pagination","className","children","items","renderItem"],q=function e(s){var r=s.product,t=(0,i.Z)(s,y),n=l.useContext(x.h2),c=((0,d.s0)(),n),v=c.whatsapp_number,g=c.cart,f=c.updateKey,b=t.clsPrefix,Z=void 0===b?"miq-shop-product-detail-view":b,z=t.images,q=t.children,C=t.body,S=(0,i.Z)(t,w),F=r.is_oos,G=r.is_pre_sale,P=r.is_pre_sale_text;return(0,u.jsx)(m.G7,(0,a.Z)((0,a.Z)({},S),{},{className:(0,o.UT)([Z,t.className]),children:(0,u.jsxs)("div",{className:"".concat(Z,"-grid d-grid grid-md-12"),children:[(0,u.jsx)("div",{className:"".concat(Z,"-grid-media span-md-8"),children:z}),(0,u.jsxs)("div",{className:"".concat(Z,"-grid-product span-md-4 p-1"),children:[F&&(0,u.jsx)("div",{className:"my-2",children:(0,u.jsx)("span",{className:"bg-red-100 px-1 rounded",children:"En rupture de stock"})}),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("h1",{className:"p-name fw-lighter",children:r.name})}),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(h,(0,a.Z)((0,a.Z)({},r),{},{retail_price:r.retail_price}))}),(0,u.jsx)(u.Fragment,{children:G&&P&&(0,u.jsx)("div",{className:"p-presale-text mb-3",children:P})}),(0,u.jsxs)("div",{className:"text-muted",children:[(0,u.jsx)("p",{className:"",children:"Pour commander, choisissez votre taille et envoyez-nous un message sur whatsapp."}),(0,u.jsx)("p",{className:"mb-2",children:"Nous livrons sur Cotonou \ud83c\udde7\ud83c\uddef et alentours."})]}),(0,u.jsx)(_,{product:r,cart:g,fields:["size"],onSuccess:function(e){return f("cart",e),void(window.location.href="./?r=1&source=site&medium=shopbtn&campaign=web")},children:(0,u.jsxs)(N.ZP.Submit,{className:"w-submit btn btn-md",children:[(0,u.jsx)(m.PJ.CD,{}),(0,u.jsx)("span",{className:"ms-1",children:"Envoyer message"})]})}),v&&(0,u.jsx)("div",{className:"mb-3 text-center"}),r.description&&(0,u.jsx)("div",{className:"p-description mb-3",children:r.description}),(0,u.jsxs)("ul",{className:"p-extra my-3",children:[(null===r||void 0===r?void 0:r.has_attributes)&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("li",{className:"p-extra-title mb-1 fw-bold",children:"D\xe9tails"}),(0,u.jsx)("li",{className:"p-extra-content",children:(0,u.jsx)(j,{attributes:r.attributes||[]})})]}),(0,u.jsx)("li",{className:"p-extra-title my-1 fw-bold",children:"Livraison"}),(0,u.jsxs)("li",{className:"p-extra-content",children:[(0,u.jsx)("p",{className:"mb-1",children:"Livraison standard gratuite sur Cotonou pour toutes commandes de 50000 CFA et plus."}),(0,u.jsx)("div",{className:"text-sm text-muted",children:"*Le d\xe9lai de traitement de la livraison standard pour cet article est estim\xe9 \xe0 1 \xe0 5 jours ouvrables."})]})]}),C]}),q,(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(e.HorizontalGallery,{}),(0,u.jsx)(p,{})]})]})}))};q.HorizontalGallery=p;var C=function e(s){var r=s.viewCN,t=s.pagination,n=(s.className,s.children),l=s.items,c=s.renderItem,d=(0,i.Z)(s,z);return(0,u.jsx)(m.G7,(0,a.Z)((0,a.Z)({},d),{},{className:r,footer:t&&(0,u.jsx)(m.tl,(0,a.Z)({},t)),children:(0,u.jsx)(e.Grid,{children:n||l.map((function(e){return c(e)}))})}))};C.Grid=function(e){var s=e.className,r=void 0===s?"grid-2 grid-md-3 grid-lg-4 grid-xl-6 gap-2":s,i=e.children;return(0,u.jsx)("div",{className:(0,o.UT)([r,"miq-product-grid d-grid"]),children:i})};var S=["item","showName"],F=function(){var e=l.useContext(x.h2),s=e.product,r=e.similar,i=e.breadcrumbs,a=s.cover,t=s.images,c=[a].concat((0,n.Z)(t));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(q,{product:s,header:(0,u.jsx)(m.bu,{items:i,className:"my-3 px-2"}),images:(0,u.jsx)("div",{className:"p-images mb-2",style:{position:"sticky",top:0},children:(0,u.jsx)(q.HorizontalGallery,{images:c,mobileOnly:!1})}),body:(0,u.jsx)("div",{className:"p-details p-1"}),footer:(0,u.jsx)(u.Fragment,{children:r&&(0,u.jsxs)("div",{className:"p-2",children:[(0,u.jsx)("p",{className:"text-md mb-2",children:"Vous aimerez peut-\xeatre"}),(0,u.jsx)(C.Grid,{children:r.map((function(e){return(0,u.jsx)(P,{item:e},e.meta_slug)}))})]})}),className:"product-detail-view"})})},G=function(){var e=(0,c.lr)(),s=(0,t.Z)(e,1)[0],r=l.useContext(x.h2),i=r.object_list,n=void 0===i?[]:i,d=r.page_label,o=r.breadcrumbs,h=r.pagination,p=s.get("q");return(0,u.jsxs)(m.G7,{className:"p-listview p-1 pb-4",header:(0,u.jsxs)("header",{className:"p-listview-header",children:[(0,u.jsx)("div",{className:"miq-container center",children:(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsx)(Z,{})})}),(0,u.jsx)(m.bu,{items:o,className:"mb-2"}),!p&&(0,u.jsx)(v,{showCover:!0})]}),children:[(0,u.jsx)(C,{title:d,viewCN:"miq-container-lg",items:n,renderItem:function(e){return(0,u.jsx)(P,{showName:!0,item:e},e.meta_slug)}}),(0,u.jsx)("div",{className:"mt-3",children:h&&(0,u.jsx)(m.tl,(0,a.Z)({},h))})]})},P=function(e){var s=e.item,r=e.showName,t=((0,i.Z)(e,S),s.url),n=s.cover,l=s.name,c=s.is_oos;return(0,u.jsx)("a",{href:"".concat(t),children:(0,u.jsxs)("div",{children:[(0,u.jsx)(m.Ei.Picture,(0,a.Z)((0,a.Z)({},n),{},{className:"rounded"})),(0,u.jsxs)("div",{className:"product-grid-info",children:[c&&(0,u.jsx)("span",{className:"bg-red-100 px-1 rounded",children:"En rupture de stock"}),(0,u.jsx)(h,(0,a.Z)({},s)),r&&(0,u.jsx)("div",{className:"product-grid-name",children:(0,o.bI)(l)})]})]})})};function k(){return(0,u.jsxs)(d.Z5,{children:[(0,u.jsx)(d.AW,{path:":catMetaSlug/:prodMetaSlug/",element:(0,u.jsx)(F,{})}),(0,u.jsx)(d.AW,{path:":catMetaSlug/",element:(0,u.jsx)(G,{})}),(0,u.jsx)(d.AW,{index:!0,element:(0,u.jsx)(G,{})})]})}}}]);
//# sourceMappingURL=117.2fc8923a.chunk.js.map