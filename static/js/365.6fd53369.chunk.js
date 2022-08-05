"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[365],{3315:function(e,s,r){r.r(s),r.d(s,{default:function(){return k}});var i=r(8312),a=r(8519),t=r(6009),n=r(9062),l=r(2411),c=r(1408),d=r(6520),o=r(9002),u=r(2379),m=r(3896),x=r(8136),h=r(3308),v=r(294),p=r(4113),j=["product","cart","fields","onSuccess","children"],N=function(e){var s,r,t=e.product,n=e.cart,l=e.fields,c=e.onSuccess,d=e.children,o=((0,i.Z)(e,j),t||{}),u=o.sizes,N=void 0===u?[]:u,g=o.meta_slug,f=n||{},b=(f.products,f.items),_=(void 0===b?[]:b).find((function(e){var s;return(null===e||void 0===e||null===(s=e.product)||void 0===s?void 0:s.meta_slug)===g}));console.log(_);var Z=(0,h.cI)({quantity:1,size:_?_.size:"",first_name:"",last_name:"",email:"",phone:""}),y=Z.errors,w=Z.values;return N=null===(s=N)||void 0===s?void 0:s.filter((function(e){return e.quantity>0})),(0,x.jsxs)(h.ZP,{context:Z,onSubmit:function(e){if(e.preventDefault(),w.size){var s={quantity:w.quantity,size:w.size};_&&_.slug?function(e,s){return m.tn.post("api/order/item/".concat(e,"/"),(0,a.Z)((0,a.Z)({},s),{},{redirect:!0}))}(_.slug,s).then((function(e){var s=e.data;null===c||void 0===c||c(s)})):(s.customer=Z.values,function(e,s){return m.tn.post("api/order/cart/".concat(e,"/"),(0,a.Z)((0,a.Z)({},s),{},{redirect:!0}))}(g,s).then((function(e){var s=e.data;null===c||void 0===c||c(s)})))}else Z.setError("size","Veuillez choisir votre taille")},className:"order-item-form",children:[(0,x.jsxs)(x.Fragment,{children:[l.includes("size")&&(0,x.jsx)(p.D8,{required:!0,label:"Taille",error:y.size,sizes:N}),l.includes("quantity")&&(0,x.jsx)(p.PI,{error:y.quantity,max:(null===(r=N.find((function(e){return e.slug===Z.values.size})))||void 0===r?void 0:r.quantity)||0,min:1})]}),!Boolean(null===n||void 0===n?void 0:n.customer)&&Z.values.size&&(0,x.jsxs)("div",{className:"",children:[(0,x.jsx)(v.l.LName,{error:y.lastst_name}),(0,x.jsx)(v.l.FName,{error:y.first_name}),(0,x.jsx)(v.l.Phone,{error:y.phone}),(0,x.jsx)(v.l.Email,{error:y.email})]}),d]})},g=function(e){var s=(0,c.lr)(),r=(0,t.Z)(s,2),i=r[0],n=r[1];return(0,x.jsx)("form",(0,a.Z)((0,a.Z)({},e),{},{className:(0,m.UT)(["p-search-form",e.className]),children:(0,x.jsx)(h.kq.Mj,{value:i.get("q")||"",onChange:function(e){n({q:e.target.value})},placeholder:"Cherchez un produit ..."})}))},f=function(e){var s=e.is_on_sale,r=e.retail_price,i=e.sale_price,a=s&&null!=(null===i||void 0===i?void 0:i.amountWithSymbol);return(0,x.jsxs)("div",{className:(0,m.UT)(["p-price",a&&"sale"]),children:[a&&(0,x.jsx)("div",{className:"p-price-sale text-danger me-1",children:i.amountWithSymbol}),(0,x.jsx)("div",{className:(0,m.UT)(["p-price-retail",a&&"text-line-through"]),children:r.amountWithSymbol})]})},b=function(e){var s=l.useContext(o.h2).categories;return s?(0,x.jsx)("div",{className:"p-category-links pb-2",children:null===s||void 0===s?void 0:s.map((function(s){var r,i;return(0,x.jsx)("div",{className:"item w-25 w-md-15",children:(0,x.jsxs)("a",{href:s.url,className:"",title:s.name,children:[e.showCover&&(null===s||void 0===s?void 0:s.cover)&&(0,x.jsx)(u.Ei.Picture,(0,a.Z)((0,a.Z)({},s.cover),{},{src_mobile:(null===s||void 0===s||null===(r=s.cover)||void 0===r?void 0:r.thumb_sq)||(null===s||void 0===s||null===(i=s.cover)||void 0===i?void 0:i.src_mobile)})),(0,x.jsx)("div",{className:"info",children:s.name_truncated})]})},s.meta_slug)}))}):null},_=function(e){return(0,x.jsx)(u.Ei.HorizontalGallery,(0,a.Z)((0,a.Z)({},e),{},{className:(0,m.UT)(["p-imgs-hgallery",e.className])}))},Z=function(e){var s=e.attributes;return s?(0,x.jsx)("ul",{className:"product-attr-list",children:null===s||void 0===s?void 0:s.map((function(e){return(0,x.jsxs)("li",{className:"attr",children:[(0,x.jsxs)("span",{className:"attr-label",children:[e.name," : "]}),(0,x.jsx)("span",{className:"attr-value",children:e.value})]},e.name)}))}):null},y=["product"],w=["clsPrefix","images","children","body"],z=["viewCN","pagination","className","children","items","renderItem"],q=function e(s){var r=s.product,t=(0,i.Z)(s,y),n=l.useContext(o.h2),c=n.cart,d=n.updateKey,v=t.clsPrefix,p=void 0===v?"miq-shop-product-detail-view":v,j=t.images,g=t.children,b=t.body,z=(0,i.Z)(t,w),q=r.is_oos,C=r.is_pre_sale,S=r.is_pre_sale_text;return(0,x.jsx)(u.G7,(0,a.Z)((0,a.Z)({},z),{},{className:(0,m.UT)([p,t.className]),children:(0,x.jsxs)("div",{className:"".concat(p,"-grid d-grid grid-md-12"),children:[(0,x.jsx)("div",{className:"".concat(p,"-grid-media span-md-8"),children:j}),(0,x.jsxs)("div",{className:"".concat(p,"-grid-product span-md-4 p-1"),children:[q&&(0,x.jsx)("div",{className:"my-2",children:(0,x.jsx)("span",{className:"bg-red-100 px-1 rounded",children:"En rupture de stock"})}),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("h1",{className:"p-name fw-lighter",children:r.name})}),(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(f,(0,a.Z)((0,a.Z)({},r),{},{retail_price:r.retail_price}))}),(0,x.jsx)(x.Fragment,{children:C&&S&&(0,x.jsx)("div",{className:"p-presale-text mb-3",children:S})}),(0,x.jsxs)("div",{className:"text-muted",children:[(0,x.jsx)("p",{className:"",children:"Pour commander, choisissez votre taille et envoyez-nous un message sur whatsapp."}),(0,x.jsx)("p",{className:"mb-2",children:"Nous livrons sur Cotonou \ud83c\udde7\ud83c\uddef et alentours."})]}),(0,x.jsx)(N,{product:r,cart:c,fields:["size"],onSuccess:function(e){return d("cart",e),void(window.location.href="./?r=1&source=site&medium=shopbtn&campaign=web")},children:(0,x.jsxs)(h.ZP.Submit,{className:"w-submit btn btn-md",children:[(0,x.jsx)(u.PJ.CD,{}),(0,x.jsx)("span",{className:"ms-1",children:"Envoyer message"})]})}),r.description&&(0,x.jsx)("div",{className:"p-description mb-3",children:r.description}),(0,x.jsxs)("ul",{className:"p-extra my-3",children:[(null===r||void 0===r?void 0:r.has_attributes)&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("li",{className:"p-extra-title mb-1 fw-bold",children:"D\xe9tails"}),(0,x.jsx)("li",{className:"p-extra-content",children:(0,x.jsx)(Z,{attributes:r.attributes||[]})})]}),(0,x.jsx)("li",{className:"p-extra-title my-1 fw-bold",children:"Livraison"}),(0,x.jsxs)("li",{className:"p-extra-content",children:[(0,x.jsx)("p",{className:"mb-1",children:"Livraison standard gratuite sur Cotonou pour toutes commandes de 50000 CFA et plus."}),(0,x.jsx)("div",{className:"text-sm text-muted",children:"*Le d\xe9lai de traitement de la livraison standard pour cet article est estim\xe9 \xe0 1 \xe0 5 jours ouvrables."})]})]}),b]}),g,(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(e.HorizontalGallery,{}),(0,x.jsx)(_,{})]})]})}))};q.HorizontalGallery=_;var C=function e(s){var r=s.viewCN,t=s.pagination,n=(s.className,s.children),l=s.items,c=s.renderItem,d=(0,i.Z)(s,z);return(0,x.jsx)(u.G7,(0,a.Z)((0,a.Z)({},d),{},{className:r,footer:t&&(0,x.jsx)(u.tl,(0,a.Z)({},t)),children:(0,x.jsx)(e.Grid,{children:n||l.map((function(e){return c(e)}))})}))};C.Grid=function(e){var s=e.className,r=void 0===s?"grid-2 grid-md-3 grid-lg-4 grid-xl-6 gap-2":s,i=e.children;return(0,x.jsx)("div",{className:(0,m.UT)([r,"miq-product-grid d-grid"]),children:i})};var S=["item","showName"],F=function(){var e=l.useContext(o.h2),s=e.product,r=e.similar,i=e.breadcrumbs,a=s.cover,t=s.images,c=[a].concat((0,n.Z)(t));return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(q,{product:s,header:(0,x.jsx)(u.bu,{items:i,className:"my-3 px-2"}),images:(0,x.jsx)("div",{className:"p-images mb-2",style:{position:"sticky",top:0},children:(0,x.jsx)(q.HorizontalGallery,{images:c,mobileOnly:!1})}),body:(0,x.jsx)("div",{className:"p-details p-1"}),footer:(0,x.jsx)(x.Fragment,{children:r&&(0,x.jsxs)("div",{className:"p-2",children:[(0,x.jsx)("p",{className:"text-md mb-2",children:"Vous aimerez peut-\xeatre"}),(0,x.jsx)(C.Grid,{children:r.map((function(e){return(0,x.jsx)(P,{item:e},e.meta_slug)}))})]})}),className:"product-detail-view"})})},G=function(){var e=(0,c.lr)(),s=(0,t.Z)(e,1)[0],r=l.useContext(o.h2),i=r.object_list,n=void 0===i?[]:i,d=r.page_label,m=r.breadcrumbs,h=r.pagination,v=s.get("q");return(0,x.jsxs)(u.G7,{className:"p-listview p-1 pb-4",header:(0,x.jsxs)("header",{className:"p-listview-header",children:[(0,x.jsx)("div",{className:"miq-container center",children:(0,x.jsx)("div",{className:"mb-3",children:(0,x.jsx)(g,{})})}),(0,x.jsx)(u.bu,{items:m,className:"mb-2"}),!v&&(0,x.jsx)(b,{showCover:!0})]}),children:[(0,x.jsx)(C,{title:d,viewCN:"miq-container-lg",items:n,renderItem:function(e){return(0,x.jsx)(P,{showName:!0,item:e},e.meta_slug)}}),(0,x.jsx)("div",{className:"mt-3",children:h&&(0,x.jsx)(u.tl,(0,a.Z)({},h))})]})},P=function(e){var s=e.item,r=e.showName,t=((0,i.Z)(e,S),s.url),n=s.cover,l=s.name,c=s.is_oos;return(0,x.jsx)("a",{href:"".concat(t),children:(0,x.jsxs)("div",{children:[(0,x.jsx)(u.Ei.Picture,(0,a.Z)((0,a.Z)({},n),{},{className:"rounded"})),(0,x.jsxs)("div",{className:"product-grid-info",children:[c&&(0,x.jsx)("span",{className:"bg-red-100 px-1 rounded",children:"En rupture de stock"}),(0,x.jsx)(f,(0,a.Z)({},s)),r&&(0,x.jsx)("div",{className:"product-grid-name",children:(0,m.bI)(l)})]})]})})};function k(){return(0,x.jsxs)(d.Z5,{children:[(0,x.jsx)(d.AW,{path:":catMetaSlug/:prodMetaSlug/",element:(0,x.jsx)(F,{})}),(0,x.jsx)(d.AW,{path:":catMetaSlug/",element:(0,x.jsx)(G,{})}),(0,x.jsx)(d.AW,{index:!0,element:(0,x.jsx)(G,{})})]})}}}]);
//# sourceMappingURL=365.6fd53369.chunk.js.map