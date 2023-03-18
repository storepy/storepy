"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[901],{4901:function(e,t,n){n.r(t),n.d(t,{default:function(){return te}});var r=n(3251),i=n(3872),a=n(7406),s=n(9996),l=n(9157),o=n(6851),c=n(5789),d=n(9576),u=n(1340),m=n(9450),x=n(810),v=n(6567),p=n(2988),j=n(1910),f=n(2106),h=n(1475),b=n(7457),g=window.i18n;function _(e){var t=e.form,n=e.instance,r=e.onUpdate,a=t.errors;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"border-bottom mb-4",children:(0,b.jsx)(S,(0,i.Z)({},e))}),(0,b.jsx)(c.ZP.Section,{title:g(o.Z,"SeoTab.title"),children:(0,b.jsxs)(h.Eh,{context:t,instance:n,fields:["meta_title","meta_description","meta_slug"],onSuccess:function(e){var t=e.data;r(t)},children:[(0,b.jsx)(d.lm,{error:a.meta_title}),(0,b.jsx)(d.uV,{error:a.meta_slug}),(0,b.jsx)(d.bA,{error:a.meta_description}),(0,b.jsx)("div",{className:"d-flex justify-content-center",children:(0,b.jsx)(d.ZP.Submit,{value:g(o.Z,"Btn.saveLabel"),className:"btn-primary-3 btn-md min-w-25 fw-bold"})})]})})]})}var Z=["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_pre_sale_dt","is_on_sale","sale_price","is_oos","is_explicit"],S=function(e){var t,n,r=e.form,a=e.instance,s=e.categories,l=e.onUpdate,u=r.errors,m={title:g(o.Z,"InfoTab.title"),text:g(o.Z,"InfoTab.text")},x=a.supplier_item;return(0,b.jsx)(h.Eh,{context:r,instance:a,fields:Z,onSuccess:function(e){var t=e.data;null===l||void 0===l||l(t)},children:(0,b.jsxs)(c.ZP.Section,(0,i.Z)((0,i.Z)({},m),{},{footer:(0,b.jsx)("div",{className:"d-flex justify-content-center",children:(0,b.jsx)(d.ZP.Submit,{value:g(o.Z,"Btn.saveLabel"),className:"btn-md btn-primary min-w-25 fw-bold"})}),children:[(0,b.jsx)(h.HG.NameField,{error:u.name,label:window.i18n(f.Z,"NField.label"),text:window.i18n(f.Z,"NField.text")}),(0,b.jsxs)("div",{className:"d-grid grid-md-2 gap-1",children:[(0,b.jsx)(h.HG.CategoryField,{error:u.category,categories:s,label:(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:window.i18n(f.Z,"CatField.label")}),(null===x||void 0===x?void 0:x.category)&&(0,b.jsxs)("span",{className:"text-sm text-muted ms-1",children:["(",null===x||void 0===x?void 0:x.category,")"]})]})}),(0,b.jsx)("div",{children:(0,b.jsx)(h.HG.RetailPriceField,{label:(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{children:window.i18n(f.Z,"RetailPField.label")}),(null===x||void 0===x?void 0:x.cost)&&(0,b.jsxs)("span",{className:"text-sm text-muted ms-1",children:["(",null===x||void 0===x||null===(t=x.cost_data)||void 0===t?void 0:t.amountWithSymbol," - ",null===x||void 0===x||null===(n=x.cost_at_rate_data)||void 0===n?void 0:n.amountWithSymbol,")"]})]}),error:u.retail_price})})]}),(0,b.jsx)(h.HG.PresaleCheckboxField,{error:u.is_pre_sale,label:window.i18n(f.Z,"PresaleField.label")}),r.values.is_pre_sale&&(0,b.jsx)(h.HG.PresaleTextField,{text:window.i18n(f.Z,"PresaleTextField.text"),error:u.is_pre_sale_text}),(0,b.jsx)(h.HG.OnSaleCheckboxField,{error:u.is_on_sale,label:window.i18n(f.Z,"OnsaleField.label")}),r.values.is_on_sale&&(0,b.jsx)(h.HG.SalePriceField,{label:window.i18n(f.Z,"SalePField.label"),error:u.sale_price}),(0,b.jsx)(h.HG.DescriptionField,{error:u.description,label:window.i18n(f.Z,"DField.label"),text:window.i18n(f.Z,"DField.text")}),(0,b.jsx)("div",{className:"my-4",children:(0,b.jsx)(h.HG.OosCheckboxField,{error:u.is_oos})}),(0,b.jsx)("div",{className:"my-4",children:(0,b.jsx)(h.HG.IsExplicitCheckboxField,{error:u.is_explicit})})]}))})},N=n(4384),w=n(1161),P=["img"],y=function(e){var t=e.img,n=(0,N.Z)(e,P),r=n.order,a=n.setOrder,s=n.onOrderChange;return(0,b.jsx)("div",{draggable:!0,onDragEnter:function(e){return a(t)},onDragEnd:function(e){r&&r.slug!==t.slug&&(0,c.pB)(t).swapPosition(r.slug,r.position).then((function(e){var t=e.data;return s(t)})).catch((function(e){console.error(e)}))},children:(0,b.jsx)(c.pB.Square,(0,i.Z)((0,i.Z)({},t),{},{className:"rounded"}))})},F=function(e){return(0,b.jsx)(c.RC,(0,i.Z)((0,i.Z)({},e),{},{children:(0,b.jsx)(u.PJ.rF,{})}))},I=["img","actions"];function T(e){var t,n=e.instance,s=e.onUpdate,l=n.cover_data,o=n.images_data,d=a.useState(!1),m=(0,r.Z)(d,2),v=m[0],p=m[1],j=a.useState(null),f=(0,r.Z)(j,2),h=f[0],g=f[1];return(0,b.jsxs)(c.ZP.Section,{title:(0,b.jsxs)(w.n9,{productInstance:n,onSuccess:function(e){return null===s||void 0===s?void 0:s(e.data)},className:"d-flex align-items-center",children:[(0,b.jsx)(u.PJ.nH,{}),(0,b.jsx)("span",{className:"ms-1 d-none d-md-block",children:"Upload images"})]}),actions:(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{className:"d-none d-md-block",children:(0,b.jsx)(u.zx,{onClick:function(){return p(!v)},className:(0,x.UT)(["btn-round",v?"btn-primary":"btn-secondary-4"]),children:(0,b.jsx)(u.PJ.v0,{})})})}),children:[v?(0,b.jsx)("div",{className:"d-grid grid-3 gap-2",children:null===o||void 0===o?void 0:o.map((function(e){return(0,a.createElement)(y,{img:e,order:h,setOrder:g,onOrderChange:function(e){null===s||void 0===s||s((0,i.Z)((0,i.Z)({},n.export()),{},{images_data:o.map((function(t){var n,r;return t.slug===(null===e||void 0===e||null===(n=e.to)||void 0===n?void 0:n.slug)?null===e||void 0===e?void 0:e.from:t.slug===(null===e||void 0===e||null===(r=e.from)||void 0===r?void 0:r.slug)?null===e||void 0===e?void 0:e.to:t}))})),g(null)},key:e.slug})}))}):(0,b.jsxs)("div",{className:"d-grid grid-2 grid-md-3 grid-lg-4 gap-2",children:[(0,b.jsx)(k,{img:(0,c.pB)(l),productInstance:n,onUpdate:s}),null===n||void 0===n||null===(t=n.images_data)||void 0===t?void 0:t.map((function(e){var t=(0,c.pB)(e);return(0,b.jsx)(C,{img:t,actions:(0,b.jsx)(c.ZP.Button,{onClick:function(){return n.swapCover(t.slug).then((function(e){var t=e.data;return s(t)}))},children:"Set as cover"}),onDelete:function(){return s((0,i.Z)((0,i.Z)({},n.export()),{},{images_data:n.images_data.filter((function(e){return e.slug!==t.slug})),images:n.images.filter((function(e){return e!==t.slug}))}))}},t.slug)}))]}),(0,b.jsx)("div",{className:"my-4"})]})}var k=function(e){var t=e.img,n=e.onUpdate,r=e.productInstance;return t.slug?(0,b.jsx)(C,(0,i.Z)((0,i.Z)({},e),{},{onDelete:function(){return n((0,i.Z)((0,i.Z)({},r.export()),{},{cover_data:void 0,cover:void 0}))}})):(0,b.jsxs)("div",{className:"p-cover-add-btn d-flex align-items-center justify-content-center flex-column text-center border-1 rounded p-3",children:[(0,b.jsx)("p",{className:"text-sm text-muted mb-3",children:"Ce produit n'a pas d'image principale"}),(0,b.jsx)(c.CD,{onSuccess:function(e){r.update({cover:null===e||void 0===e?void 0:e.data.slug}).then((function(e){return n(null===e||void 0===e?void 0:e.data)})).catch((function(e){}))},label:"Ajouter une image",className:"btn-primary-3 btn-md"})]})},C=function(e){var t=e.img,n=e.actions,r=(0,N.Z)(e,I);return(0,b.jsx)(c.ZP.Section,{border:!0,title:(0,b.jsx)(F,{onSuccess:function(e){return r.onDelete(null===e||void 0===e?void 0:e.data)},instance:t,className:"btn-danger-3"}),actions:n,className:"p-image-card",children:(0,b.jsx)(c.pB.Image,(0,i.Z)({},t.export()))})},A=n(6009),D=["data","productInstance"],L=["onSuccess","onFailure"];function U(e){var t=e.data,n=e.productInstance,r=(0,N.Z)(e,D);if(null===t||void 0===t||!t.slug||null===n||void 0===n||!n.slug)return null;var a=r.onSuccess,s=r.onFailure,l=(0,N.Z)(r,L);return(0,b.jsx)(u.pu,(0,i.Z)((0,i.Z)({},l),{},{renderHeader:function(){return(0,b.jsx)("div",{children:"Supprimer un attribut"})},renderFooter:function(e){var r=e.setOpen;return(0,b.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,b.jsx)(u.zx,{onClick:function(){return r(!1)},children:"Annuler"}),(0,b.jsx)(u.zx,{onClick:function(){return n.deleteAttribute(t.slug).then((function(e){return r(!1),null===a||void 0===a?void 0:a(e)})).catch((function(e){return null===s||void 0===s?void 0:s(e)}))},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,b.jsxs)("div",{className:"p-3",children:["Are you sure you want to delete this attribute:",(0,b.jsx)("div",{className:"fw-bold",children:t.name})]})},className:"attr-delete-button btn-danger-3",children:(0,b.jsx)(u.PJ.rF,{})}))}var B=["data","productInstance"],H=["productInstance"],E=["label","text","error","placeholder"],G=["label","text","error","placeholder"],K=function(e){var t=e.data,n=e.productInstance,r=(0,N.Z)(e,B),i=(0,d.cI)({name:t.name||"",value:t.value||""});if(null===t||void 0===t||!t.slug||null===n||void 0===n||!n.slug)return null;var a=r.onSuccess,s=r.onFailure;return(0,b.jsx)(d.ZP,{context:i,onSubmit:function(e){e.preventDefault(),n.patchAttribute(t.slug,i.values).then((function(e){return null===a||void 0===a?void 0:a(e)})).catch((function(e){return i.handleError(e),null===s||void 0===s?void 0:s(e)}))},children:(0,b.jsxs)("div",{className:"d-grid grid-md-6 gap-1",children:[(0,b.jsx)("div",{className:"span-md-2",children:(0,b.jsx)(V,{error:i.errors.name})}),(0,b.jsx)("div",{className:"span-md-3",children:(0,b.jsx)(q,{error:i.errors.value,className:""})}),(0,b.jsxs)("div",{className:"span-md-1",children:[(0,b.jsx)(d.ZP.Submit,{value:"Save",className:"btn-primary-2 me-2"}),(0,b.jsx)(U,{productInstance:n,data:t,onSuccess:a,onFailure:s})]})]})})},O={name:"",value:""},z=function(e){var t=e.productInstance,n=(0,N.Z)(e,H),r=(0,d.cI)(O);return null!==t&&void 0!==t&&t.slug?(0,b.jsx)(d.ZP,{context:r,onSubmit:function(e){e.preventDefault(),t.postAttribute(r.values).then((function(e){var t;return r.setValues(O),null===n||void 0===n||null===(t=n.onSuccess)||void 0===t?void 0:t.call(n,e)})).catch((function(e){var t;return r.handleError(e),null===n||void 0===n||null===(t=n.onFailure)||void 0===t?void 0:t.call(n,e)}))},children:(0,b.jsxs)("div",{className:"d-grid grid-md-6 gap-1",children:[(0,b.jsx)("div",{className:"span-md-2",children:(0,b.jsx)(V,{error:r.errors.name})}),(0,b.jsx)("div",{className:"span-md-3",children:(0,b.jsx)(q,{error:r.errors.value,className:""})}),(0,b.jsx)("div",{className:"span-md-1",children:(0,b.jsx)(d.ZP.Submit,{value:"Save",className:"btn-primary-2"})})]})}):null},V=function(e){var t=e.label,n=e.text,r=e.error,a=e.placeholder,s=void 0===a?"Entrez le nom de l'attribut ...":a,l=(0,N.Z)(e,E);return(0,b.jsx)(d.ZP.Field,{label:t,text:n,error:r,children:(0,b.jsx)(d.ZP.Text,(0,i.Z)((0,i.Z)({placeholder:s,maxLength:30,minLength:2},l),{},{required:!0,name:"name"}))})},q=function(e){var t=e.label,n=e.text,r=e.error,a=e.placeholder,s=void 0===a?"Entrez la valuer de l'attribut ...":a,l=(0,N.Z)(e,G);return(0,b.jsx)(d.ZP.Field,{label:t,text:n,error:r,children:(0,b.jsx)(d.ZP.Text,(0,i.Z)((0,i.Z)({placeholder:s,maxLength:99,minLength:2},l),{},{required:!0,name:"value"}))})},M=window.i18n,J=function(e){var t,n=a.useState(!1),i=(0,r.Z)(n,2),s=i[0],l=i[1],o=e.instance,d=e.onUpdate;return(0,b.jsxs)(c.ZP.Section,{title:"Tailles",text:"Ajouter des tailles",actions:(0,b.jsx)(u.zx,{onClick:function(){return l(!s)},className:"btn-primary-3",children:"Ajouter une taille"}),children:[s&&(0,b.jsx)(c.ZP.Section,{text:"Ajouter une taille",children:(0,b.jsx)(A.T9,{productInstance:o,onSuccess:function(e){var t=e.data;return d(t)}})}),null===(t=o.sizes)||void 0===t?void 0:t.map((function(e){return(0,b.jsx)(A.dh,{data:e,productInstance:o,onSuccess:function(e){var t=e.data;return d(t)}},e.slug)}))]})},R=function(e){var t,n=e.instance,i=e.onUpdate,s=a.useState(!1),l=(0,r.Z)(s,2),o=l[0],d=l[1];return(0,b.jsxs)(c.ZP.Section,{title:"Attributs",actions:(0,b.jsx)(u.zx,{onClick:function(){return d(!o)},className:"btn-primary-3",children:"Ajouter un attribut"}),children:[o&&(0,b.jsx)(c.ZP.Section,{text:"Ajouter un attribut au produit.",children:(0,b.jsx)(z,{productInstance:n,onSuccess:function(e){var t=e.data;return i(t)}})}),null===n||void 0===n||null===(t=n.attributes)||void 0===t?void 0:t.map((function(e){return(0,b.jsx)("div",{className:"mb-1",children:(0,b.jsx)(K,{data:e,productInstance:n,onSuccess:function(e){var t=e.data;return i(t)}})},e.slug)}))]})};function W(e){return(0,b.jsxs)(c.ZP.Section,{title:M(o.Z,"InventoryTab.title"),children:[(0,b.jsx)(J,(0,i.Z)({},e)),(0,b.jsx)(R,(0,i.Z)({},e))]})}var X=window.i18n;function Q(e){var t=(0,s.s0)(),n=e.instance,r=e.to;return(0,b.jsx)(c.ZP.Section,{title:X(o.Z,"SettingsTab.title"),children:(0,b.jsx)(c.ZP.Section,{title:X(o.Z,"SettingsTab.deleteSectionTitle"),actions:(0,b.jsx)(w.sq,{instance:n,onSuccess:function(){return t(r)},onFailure:function(e){404===e.status&&t("../")}})})})}var Y=function(e){return window.i18n(o.Z,e)},$=[].concat(["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_pre_sale_dt","is_oos","is_on_sale","sale_price","is_explicit"],["cost","color_group_pk","stage"],["supplier_name","supplier_item_id","supplier_item_sn","supplier_item_category","supplier_item_url","supplier_item_cost","supplier_item_cost_currency","supplier_order_id"],["meta_title","meta_description","meta_slug"]),ee={retail_price:0,is_pre_sale:!1,sale_price:0,is_on_sale:!1,is_published:!1};function te(e){var t=e.back,n=((0,s.UO)().prodSlug,(0,l.lr)()),o=(0,r.Z)(n,1)[0],f=a.useContext(m.h2),h=f.product,g=f.categories,Z=(0,d.cI)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return $.forEach((function(n){var r,i=null===e||void 0===e?void 0:e[n];t[n]=null!=i?i:null!==(r=ee[n])&&void 0!==r?r:""})),(0,i.Z)((0,i.Z)({},ee),t)}(h)),S=(0,v.Z)(h),N=function(e){f.updateData((0,i.Z)((0,i.Z)({},f),{},{product:(0,i.Z)((0,i.Z)({},h),e)}))};return(0,b.jsx)(c.ZP.View,{className:"product-staff-update-view",requiredPerms:["store.change_product"],title:(0,b.jsx)(j.wP,{data:h}),back:"".concat((0,x.Xs)(t)).concat("".concat(o)?"?".concat(o):""),actions:S.is_published?(0,b.jsx)(p.Ko,{instance:S,onSuccess:function(e){var t=e.data;return N(t)},children:"D\xe9publier"}):(0,b.jsx)(p.H5,{instance:S,onSuccess:function(e){var t=e.data;return N(t)},onFailure:function(e){return Z.handleError(e)},children:"Publier"}),children:(0,b.jsx)(c.ZP.Section,{title:(0,b.jsx)("div",{className:"mb-1",children:ne}),children:(0,b.jsxs)(u.KZ,{children:[(0,b.jsx)(u.KZ.Tab,{index:!0,children:(0,b.jsx)(_,{form:Z,instance:S,categories:g,onUpdate:N})}),(0,b.jsx)(u.KZ.Tab,{value:"media",children:(0,b.jsx)(T,{instance:S,onUpdate:N})}),(0,b.jsx)(u.KZ.Tab,{value:"inventory",children:(0,b.jsx)(W,{instance:S,onUpdate:N})}),(0,b.jsx)(u.KZ.Tab,{value:"settings",children:(0,b.jsx)(Q,{instance:S,onUpdate:N,to:t})})]})})})}var ne=(0,b.jsxs)("div",{className:"query-buttons",children:[(0,b.jsx)(u.KZ.Button,{index:!0,target:"__tab",className:"btn-md",children:"Info"}),(0,b.jsx)(u.KZ.Button,{target:"__tab",value:"media",className:"btn-md",children:Y("MediaTab.title")}),(0,b.jsx)(u.KZ.Button,{target:"__tab",value:"inventory",className:"btn-md",children:Y("InventoryTab.title")}),(0,b.jsx)(u.KZ.Button,{target:"__tab",value:"settings",className:"btn-md",children:Y("SettingsTab.title")})]})},6851:function(e,t){t.Z={"InfoTab.title":{fr:"D\xe9tails",en:"Details"},"InfoTab.text":{fr:"Modifier les informations de ce produit",en:"Update product's info"},"SeoTab.title":{fr:"Seo",en:"Seo"},"InventoryTab.title":{fr:"Inventaire",en:"Inventory"},"MediaTab.title":{fr:"M\xe9dia",en:"Media"},"SettingsTab.title":{fr:"Param\xe8tres",en:"Settings"},"SettingsTab.deleteSectionTitle":{fr:"Supprimer ce produit",en:"Delete product"},"CreateView.title":{fr:"Ajouter un produit",en:"Add product"},"ListView.title":{fr:"Produits",en:"Products"},"ListView.actionLinkLabel":{fr:"Ajouter",en:"Add product"},"ListView.noItemText":{fr:"Ajouter un produit pour commencer",en:"Add products to your shop to get started"},"ListView.addProductLinkLabel":{fr:"Ajouter un produit",en:"Add a new product"},"Btn.saveLabel":{fr:"Sauvegarder",en:"Save"}}}}]);
//# sourceMappingURL=901.d01b1bdb.chunk.js.map