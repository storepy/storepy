"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[998],{9998:function(e,n,t){t.r(n),t.d(n,{default:function(){return ie}});var r=t(8312),i=t(6113),a=t(8519),s=t(7497),l=t(4390),o=t(866),c=t(243),d=t(715),u=t(4089),v=t(265),x=t(9544),m=t(5927),p=t(3830),j=t(6012),f=t(4980),b=t(208),g=t(761),h=t(974),_=t(9009),Z=window.i18n;function S(e){var n=e.form,t=e.instance,r=e.onUpdate,i=n.errors;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:"border-bottom mb-4",children:(0,_.jsx)(w,(0,a.Z)({},e))}),(0,_.jsx)(d.ZP.Section,{title:Z(c.Z,"SeoTab.title"),children:(0,_.jsxs)(h.Eh,{context:n,instance:t,fields:["meta_title","meta_description","meta_slug"],onSuccess:function(e){var n=e.data;return r(n)},children:[(0,_.jsx)(u.lm,{error:i.meta_title}),(0,_.jsx)(u.uV,{error:i.meta_slug}),(0,_.jsx)(u.bA,{error:i.meta_description}),(0,_.jsx)("div",{className:"d-flex justify-content-center",children:(0,_.jsx)(u.ZP.Submit,{value:Z(c.Z,"Btn.saveLabel"),className:"btn-primary-3 btn-md min-w-25 fw-bold"})})]})})]})}var N=["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_pre_sale_dt","is_on_sale","sale_price","is_oos","is_explicit"],w=function(e){var n=e.form,t=e.instance,r=e.categories,i=e.onUpdate,s=n.errors,l={title:Z(c.Z,"InfoTab.title"),text:Z(c.Z,"InfoTab.text")};return(0,_.jsx)(h.Eh,{context:n,instance:t,fields:N,onSuccess:function(e){var n=e.data;return i(n)},children:(0,_.jsxs)(d.ZP.Section,(0,a.Z)((0,a.Z)({},l),{},{footer:(0,_.jsx)("div",{className:"d-flex justify-content-center",children:(0,_.jsx)(u.ZP.Submit,{value:Z(c.Z,"Btn.saveLabel"),className:"btn-md btn-primary min-w-25 fw-bold"})}),children:[(0,_.jsx)(h.HG.NameField,{error:s.name,label:window.i18n(g.Z,"NField.label"),text:window.i18n(g.Z,"NField.text")}),(0,_.jsxs)("div",{className:"d-grid grid-md-2 gap-1",children:[(0,_.jsx)(h.HG.CategoryField,{error:s.category,categories:r,label:window.i18n(g.Z,"CatField.label")}),(0,_.jsx)(h.HG.RetailPriceField,{label:window.i18n(g.Z,"RetailPField.label"),error:s.retail_price})]}),(0,_.jsx)(h.HG.PresaleCheckboxField,{error:s.is_pre_sale,label:window.i18n(g.Z,"PresaleField.label")}),n.values.is_pre_sale&&(0,_.jsx)(h.HG.PresaleTextField,{text:window.i18n(g.Z,"PresaleTextField.text"),error:s.is_pre_sale_text}),(0,_.jsx)(h.HG.OnSaleCheckboxField,{error:s.is_on_sale,label:window.i18n(g.Z,"OnsaleField.label")}),n.values.is_on_sale&&(0,_.jsx)(h.HG.SalePriceField,{label:window.i18n(g.Z,"SalePField.label"),error:s.sale_price}),(0,_.jsx)(h.HG.DescriptionField,{error:s.description,label:window.i18n(g.Z,"DField.label"),text:window.i18n(g.Z,"DField.text")}),(0,_.jsx)("div",{className:"my-4",children:(0,_.jsx)(h.HG.OosCheckboxField,{error:s.is_oos})}),(0,_.jsx)("div",{className:"my-4",children:(0,_.jsx)(h.HG.IsExplicitCheckboxField,{error:s.is_explicit})})]}))})},P=t(8876),y=["img"],F=function(e){var n=e.img,t=(0,r.Z)(e,y),i=t.order,s=t.setOrder,l=t.onOrderChange;return(0,_.jsx)("div",{draggable:!0,onDragEnter:function(e){return s(n)},onDragEnd:function(e){i&&i.slug!==n.slug&&(0,d.pB)(n).swapPosition(i.slug,i.position).then((function(e){var n=e.data;return l(n)})).catch((function(e){console.error(e)}))},children:(0,_.jsx)(d.pB.Square,(0,a.Z)((0,a.Z)({},n),{},{className:"rounded"}))})},T=function(e){return(0,_.jsx)(d.RC,(0,a.Z)((0,a.Z)({},e),{},{children:(0,_.jsx)(x.PJ.rF,{})}))},I=["img","actions"];function k(e){var n,t=e.instance,r=e.onUpdate,l=t.cover_data,o=t.images_data,c=s.useState(!1),u=(0,i.Z)(c,2),v=u[0],p=u[1],j=s.useState(null),f=(0,i.Z)(j,2),b=f[0],g=f[1];return(0,_.jsx)(d.ZP.Section,{title:(0,_.jsxs)(P.n9,{productInstance:t,onSuccess:function(e){return null===r||void 0===r?void 0:r(e.data)},className:"d-flex align-items-center",children:[(0,_.jsx)(x.PJ.nH,{}),(0,_.jsx)("span",{className:"ms-1 d-none d-md-block",children:"Upload images"})]}),actions:(0,_.jsx)(_.Fragment,{children:(0,_.jsx)("div",{className:"d-none d-md-block",children:(0,_.jsx)(x.zx,{onClick:function(){return p(!v)},className:(0,m.UT)(["btn-round",v?"btn-primary":"btn-secondary-4"]),children:(0,_.jsx)(x.PJ.v0,{})})})}),children:v?(0,_.jsx)("div",{className:"d-grid grid-3 gap-2",children:null===o||void 0===o?void 0:o.map((function(e){return(0,s.createElement)(F,{img:e,order:b,setOrder:g,onOrderChange:function(e){null===r||void 0===r||r((0,a.Z)((0,a.Z)({},t.export()),{},{images_data:o.map((function(n){var t,r;return n.slug===(null===e||void 0===e||null===(t=e.to)||void 0===t?void 0:t.slug)?null===e||void 0===e?void 0:e.from:n.slug===(null===e||void 0===e||null===(r=e.from)||void 0===r?void 0:r.slug)?null===e||void 0===e?void 0:e.to:n}))})),g(null)},key:e.slug})}))}):(0,_.jsxs)("div",{className:"d-grid grid-2 grid-md-3 grid-lg-4 gap-2",children:[(0,_.jsx)(A,{img:(0,d.pB)(l),productInstance:t,onUpdate:r}),null===t||void 0===t||null===(n=t.images_data)||void 0===n?void 0:n.map((function(e){var n=(0,d.pB)(e);return(0,_.jsx)(C,{img:n,actions:(0,_.jsx)(d.ZP.Button,{onClick:function(){return t.swapCover(n.slug).then((function(e){var n=e.data;return r(n)}))},children:"Set as cover"}),onDelete:function(){return r((0,a.Z)((0,a.Z)({},t.export()),{},{images_data:t.images_data.filter((function(e){return e.slug!==n.slug})),images:t.images.filter((function(e){return e!==n.slug}))}))}},n.slug)}))]})})}var A=function(e){var n=e.img,t=e.onUpdate,r=e.productInstance;return n.slug?(0,_.jsx)(C,(0,a.Z)((0,a.Z)({},e),{},{onDelete:function(){return t((0,a.Z)((0,a.Z)({},r.export()),{},{cover_data:void 0,cover:void 0}))}})):(0,_.jsxs)("div",{className:"p-cover-add-btn d-flex align-items-center justify-content-center flex-column text-center border-1 rounded p-3",children:[(0,_.jsx)("p",{className:"text-sm text-muted mb-3",children:"Ce produit n'a pas d'image principale"}),(0,_.jsx)(d.CD,{onSuccess:function(e){r.update({cover:null===e||void 0===e?void 0:e.data.slug}).then((function(e){return t(null===e||void 0===e?void 0:e.data)})).catch((function(e){}))},label:"Ajouter une image",className:"btn-primary-3 btn-md"})]})},C=function(e){var n=e.img,t=e.actions,i=(0,r.Z)(e,I);return(0,_.jsx)(d.ZP.Section,{border:!0,title:(0,_.jsx)(T,{onSuccess:function(e){return i.onDelete(null===e||void 0===e?void 0:e.data)},instance:n,className:"btn-danger-3"}),actions:t,className:"p-image-card",children:(0,_.jsx)(d.pB.Image,(0,a.Z)({},n.export()))})},D=t(3448),U=["data","productInstance"],L=["onSuccess","onFailure"];function H(e){var n=e.data,t=e.productInstance,i=(0,r.Z)(e,U);if(null===n||void 0===n||!n.slug||null===t||void 0===t||!t.slug)return null;var s=i.onSuccess,l=i.onFailure,o=(0,r.Z)(i,L);return(0,_.jsx)(x.pu,(0,a.Z)((0,a.Z)({},o),{},{renderHeader:function(){return(0,_.jsx)("div",{children:"Supprimer un attribut"})},renderFooter:function(e){var r=e.setOpen;return(0,_.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,_.jsx)(x.zx,{onClick:function(){return r(!1)},children:"Annuler"}),(0,_.jsx)(x.zx,{onClick:function(){return t.deleteAttribute(n.slug).then((function(e){return r(!1),null===s||void 0===s?void 0:s(e)})).catch((function(e){return null===l||void 0===l?void 0:l(e)}))},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,_.jsxs)("div",{className:"p-3",children:["Are you sure you want to delete this attribute:",(0,_.jsx)("div",{className:"fw-bold",children:n.name})]})},className:"attr-delete-button btn-danger-3",children:(0,_.jsx)(x.PJ.rF,{})}))}var B=["data","productInstance"],E=["productInstance"],G=["label","text","error","placeholder"],K=["label","text","error","placeholder"],O=function(e){var n=e.data,t=e.productInstance,i=(0,r.Z)(e,B),a=(0,u.cI)({name:n.name||"",value:n.value||""});if(null===n||void 0===n||!n.slug||null===t||void 0===t||!t.slug)return null;var s=i.onSuccess,l=i.onFailure;return(0,_.jsx)(u.ZP,{context:a,onSubmit:function(e){e.preventDefault(),t.patchAttribute(n.slug,a.values).then((function(e){return null===s||void 0===s?void 0:s(e)})).catch((function(e){return a.handleError(e),null===l||void 0===l?void 0:l(e)}))},children:(0,_.jsxs)("div",{className:"d-grid grid-md-6 gap-1",children:[(0,_.jsx)("div",{className:"span-md-2",children:(0,_.jsx)(q,{error:a.errors.name})}),(0,_.jsx)("div",{className:"span-md-3",children:(0,_.jsx)(M,{error:a.errors.value,className:""})}),(0,_.jsxs)("div",{className:"span-md-1",children:[(0,_.jsx)(u.ZP.Submit,{value:"Save",className:"btn-primary-2 me-2"}),(0,_.jsx)(H,{productInstance:t,data:n,onSuccess:s,onFailure:l})]})]})})},V={name:"",value:""},z=function(e){var n=e.productInstance,t=(0,r.Z)(e,E),i=(0,u.cI)(V);return null!==n&&void 0!==n&&n.slug?(0,_.jsx)(u.ZP,{context:i,onSubmit:function(e){e.preventDefault(),n.postAttribute(i.values).then((function(e){var n;return i.setValues(V),null===t||void 0===t||null===(n=t.onSuccess)||void 0===n?void 0:n.call(t,e)})).catch((function(e){var n;return i.handleError(e),null===t||void 0===t||null===(n=t.onFailure)||void 0===n?void 0:n.call(t,e)}))},children:(0,_.jsxs)("div",{className:"d-grid grid-md-6 gap-1",children:[(0,_.jsx)("div",{className:"span-md-2",children:(0,_.jsx)(q,{error:i.errors.name})}),(0,_.jsx)("div",{className:"span-md-3",children:(0,_.jsx)(M,{error:i.errors.value,className:""})}),(0,_.jsx)("div",{className:"span-md-1",children:(0,_.jsx)(u.ZP.Submit,{value:"Save",className:"btn-primary-2"})})]})}):null},q=function(e){var n=e.label,t=e.text,i=e.error,s=e.placeholder,l=void 0===s?"Entrez le nom de l'attribut ...":s,o=(0,r.Z)(e,G);return(0,_.jsx)(u.ZP.Field,{label:n,text:t,error:i,children:(0,_.jsx)(u.ZP.Text,(0,a.Z)((0,a.Z)({placeholder:l,maxLength:30,minLength:2},o),{},{required:!0,name:"name"}))})},M=function(e){var n=e.label,t=e.text,i=e.error,s=e.placeholder,l=void 0===s?"Entrez la valuer de l'attribut ...":s,o=(0,r.Z)(e,K);return(0,_.jsx)(u.ZP.Field,{label:n,text:t,error:i,children:(0,_.jsx)(u.ZP.Text,(0,a.Z)((0,a.Z)({placeholder:l,maxLength:99,minLength:2},o),{},{required:!0,name:"value"}))})},R=window.i18n,J=function(e){var n,t=s.useState(!1),r=(0,i.Z)(t,2),a=r[0],l=r[1],o=e.instance,c=e.onUpdate;return(0,_.jsxs)(d.ZP.Section,{title:"Tailles",text:"Ajouter des tailles",actions:(0,_.jsx)(x.zx,{onClick:function(){return l(!a)},className:"btn-primary-3",children:"Ajouter une taille"}),children:[a&&(0,_.jsx)(d.ZP.Section,{text:"Ajouter une taille",children:(0,_.jsx)(D.T9,{productInstance:o,onSuccess:function(e){var n=e.data;return c(n)}})}),null===(n=o.sizes)||void 0===n?void 0:n.map((function(e){return(0,_.jsx)(D.dh,{data:e,productInstance:o,onSuccess:function(e){var n=e.data;return c(n)}},e.slug)}))]})},Q=function(e){var n,t=e.instance,r=e.onUpdate,a=s.useState(!1),l=(0,i.Z)(a,2),o=l[0],c=l[1];return(0,_.jsxs)(d.ZP.Section,{title:"Attributs",actions:(0,_.jsx)(x.zx,{onClick:function(){return c(!o)},className:"btn-primary-3",children:"Ajouter un attribut"}),children:[o&&(0,_.jsx)(d.ZP.Section,{text:"Ajouter un attribut au produit.",children:(0,_.jsx)(z,{productInstance:t,onSuccess:function(e){var n=e.data;return r(n)}})}),null===t||void 0===t||null===(n=t.attributes)||void 0===n?void 0:n.map((function(e){return(0,_.jsx)("div",{className:"mb-1",children:(0,_.jsx)(O,{data:e,productInstance:t,onSuccess:function(e){var n=e.data;return r(n)}})},e.slug)}))]})};function X(e){return(0,_.jsxs)(d.ZP.Section,{title:R(c.Z,"InventoryTab.title"),children:[(0,_.jsx)(J,(0,a.Z)({},e)),(0,_.jsx)(Q,(0,a.Z)({},e))]})}var W=window.i18n;function Y(e){var n=(0,o.s0)(),t=e.instance,r=e.to;return(0,_.jsx)(d.ZP.Section,{title:W(c.Z,"SettingsTab.title"),children:(0,_.jsx)(d.ZP.Section,{title:W(c.Z,"SettingsTab.deleteSectionTitle"),actions:(0,_.jsx)(P.sq,{instance:t,onSuccess:function(){return n(r)},onFailure:function(e){404===e.status&&n("../")}})})})}var $=["res","setRes","loading"],ee=function(e){return window.i18n(c.Z,e)},ne=[].concat(["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_pre_sale_dt","is_oos","is_on_sale","sale_price","is_explicit"],["cost","color_group_pk","stage"],["supplier_name","supplier_item_id","supplier_item_sn","supplier_item_category","supplier_item_url","supplier_item_cost","supplier_item_cost_currency","supplier_order_id"],["meta_title","meta_description","meta_slug"]),te={retail_price:0,is_pre_sale:!1,sale_price:0,is_on_sale:!1,is_published:!1},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};return ne.forEach((function(t){var r,i=null===e||void 0===e?void 0:e[t];null!=i?n[t]=i:n[t]=null!==(r=te[t])&&void 0!==r?r:""})),(0,a.Z)((0,a.Z)({},te),n)};function ie(e){var n,t=e.back,s=(0,o.UO)().prodSlug,c=(0,l.lr)(),g=(0,i.Z)(c,1)[0],h=(0,o.s0)(),Z=(0,u.cI)(re()),N=(0,v.QT)((function(){return(0,j.Z)({slug:s}).retrieve()}),{refreshDeps:[s],onSuccess:function(e){var n=e.data;document.title="".concat(null===n||void 0===n?void 0:n.name," - Update product"),Z.setValues(re(n))},onError:function(e){var n=e.response;if(404===(null===n||void 0===n?void 0:n.status))return h("../")}}),w=N.res,P=(N.setRes,N.loading),y=(0,r.Z)(N,$),F=new m.HM(w);if(!F.isSuccess)return null;if(P)return(0,_.jsx)(x.gb,{});var T=(0,j.Z)(F.data),I=function(e){y.updateData(e),p.u.update(e)};return(0,_.jsx)(d.ZP.View,{className:"product-staff-update-view",requiredPerms:["store.change_product"],title:(0,_.jsx)(b.wP,{data:(0,a.Z)({},T.export())}),back:"".concat((0,m.Xs)(t)).concat("".concat(g)?"?".concat(g):""),actions:T.is_published?(0,_.jsx)(f.Ko,{instance:T,onSuccess:function(e){var n=e.data;return I(n)},children:"D\xe9publier"}):(0,_.jsx)(f.H5,{instance:T,onSuccess:function(e){var n=e.data;return I(n)},onFailure:function(e){return Z.handleError(e)},children:"Publier"}),children:(0,_.jsx)(d.ZP.Section,{title:(0,_.jsx)("div",{className:"mb-1",children:ae}),children:(0,_.jsxs)(x.KZ,{children:[(0,_.jsx)(x.KZ.Tab,{index:!0,children:(0,_.jsx)(S,{form:Z,instance:T,categories:null===F||void 0===F||null===(n=F.data)||void 0===n?void 0:n.categories,onUpdate:I})}),(0,_.jsx)(x.KZ.Tab,{value:"media",children:(0,_.jsx)(k,{instance:T,onUpdate:I})}),(0,_.jsx)(x.KZ.Tab,{value:"inventory",children:(0,_.jsx)(X,{instance:T,onUpdate:I})}),(0,_.jsx)(x.KZ.Tab,{value:"settings",children:(0,_.jsx)(Y,{instance:T,onUpdate:I,to:t})})]})})})}var ae=(0,_.jsxs)("div",{className:"query-buttons",children:[(0,_.jsx)(x.KZ.Button,{index:!0,target:"__tab",className:"btn-md",children:"Info"}),(0,_.jsx)(x.KZ.Button,{target:"__tab",value:"media",className:"btn-md",children:ee("MediaTab.title")}),(0,_.jsx)(x.KZ.Button,{target:"__tab",value:"inventory",className:"btn-md",children:ee("InventoryTab.title")}),(0,_.jsx)(x.KZ.Button,{target:"__tab",value:"settings",className:"btn-md",children:ee("SettingsTab.title")})]})},243:function(e,n){n.Z={"InfoTab.title":{fr:"D\xe9tails",en:"Details"},"InfoTab.text":{fr:"Modifier les informations de ce produit",en:"Update product's info"},"SeoTab.title":{fr:"Seo",en:"Seo"},"InventoryTab.title":{fr:"Inventaire",en:"Inventory"},"MediaTab.title":{fr:"M\xe9dia",en:"Media"},"SettingsTab.title":{fr:"Param\xe8tres",en:"Settings"},"SettingsTab.deleteSectionTitle":{fr:"Supprimer ce produit",en:"Delete product"},"CreateView.title":{fr:"Ajouter un produit",en:"Add product"},"ListView.title":{fr:"Produits",en:"Products"},"ListView.actionLinkLabel":{fr:"Ajouter",en:"Add product"},"ListView.noItemText":{fr:"Ajouter un produit pour commencer",en:"Add products to your shop to get started"},"ListView.addProductLinkLabel":{fr:"Ajouter un produit",en:"Add a new product"},"Btn.saveLabel":{fr:"Sauvegarder",en:"Save"}}}}]);
//# sourceMappingURL=998.ee487d97.chunk.js.map