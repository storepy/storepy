"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[44],{324:function(e,n,t){t.d(n,{CB:function(){return v},V5:function(){return m}});var r=t(8519),i=t(8312),a=(t(2411),t(3896)),s=t(3308),l=t(2898),c=t(8136),o=["instance","fields","children"],u=["onSuccess","onError","onWillSubmit"],d=["label","error"],v=function(e){var n=(0,s.cI)({name:""});return(0,c.jsxs)(x,{context:n,onSubmit:function(t){return t.preventDefault(),(0,l.D)().create(n.values).then((function(n){var t;return null===e||void 0===e||null===(t=e.onSuccess)||void 0===t?void 0:t.call(e,n)})).catch((function(t){var r;n.handleError(t),null===e||void 0===e||null===(r=e.onError)||void 0===r||r.call(e,t)}))},children:[(0,c.jsx)("div",{className:"",children:(0,c.jsx)(x.NameField,{error:n.errors.name})}),(0,c.jsx)("div",{className:"my-3",children:(0,c.jsx)(s.ZP.Submit,{value:"Save category",className:"btn btn-primary"})})]})},m=function(e){var n,t,s,l=e.instance,d=void 0===l?(0,a.q9)("Category instance"):l,v=e.fields,m=void 0===v?[]:v,p=e.children,f=(0,i.Z)(e,o),j=f.onSuccess,h=f.onError,b=f.onWillSubmit,g=(0,i.Z)(f,u),Z=g.context;return(0,c.jsxs)(x,(0,r.Z)((0,r.Z)({},g),{},{onSubmit:function(e){e.preventDefault(),null===b||void 0===b||b();var n={};return m.forEach((function(e){var t=Z.values[e];null!=t&&(n[e]=t)})),d.update(n).then((function(e){return null===j||void 0===j?void 0:j(e)})).catch((function(e){var n;return h?h(e):null===Z||void 0===Z||null===(n=Z.handleError)||void 0===n?void 0:n.call(Z,e)}))},children:[m.includes("name")&&(0,c.jsx)(x.NameField,{label:"Nom de la cat\xe9gorie",error:null===Z||void 0===Z||null===(n=Z.errors)||void 0===n?void 0:n.name,text:"Ajoutez un nom qui d\xe9crit cette cat\xe9gorie.\nNous recommandons 65 caract\xe8res au max."}),m.includes("description")&&(0,c.jsx)(x.DescriptionField,{label:"Description",error:null===Z||void 0===Z||null===(t=Z.errors)||void 0===t?void 0:t.description,text:"D\xe9crivez cet cat\xe9gorie."}),m.includes("position")&&(0,c.jsx)(x.PositionField,{label:"Position",error:null===Z||void 0===Z||null===(s=Z.errors)||void 0===s?void 0:s.position}),p]}))},x=function(e){return(0,c.jsx)(s.ZP,(0,r.Z)({},e))};x.NameField=function(e){return(0,c.jsx)(s.wd,(0,r.Z)((0,r.Z)({placeholder:"Entrez le nom de la cat\xe9gorie ..."},e),{},{required:!0}))},x.DescriptionField=function(e){return(0,c.jsx)(s.F$,(0,r.Z)({},e))},x.PositionField=function(e){var n=e.label,t=e.error,a=(0,i.Z)(e,d);return(0,c.jsx)(s.ZP.Field,{label:n,error:t,children:(0,c.jsx)(s.ZP.Text,(0,r.Z)({name:"position",type:"number",min:0},a))})}},2898:function(e,n,t){t.d(n,{D:function(){return u}});var r=t(8519),i=t(1135),a=t(7411),s=t(2518),l=t(2485),c=t(6324),o=function(e){(0,s.Z)(t,e);var n=(0,l.Z)(t);function t(){return(0,i.Z)(this,t),n.apply(this,arguments)}return(0,a.Z)(t,[{key:"publish",value:function(){return this.update({is_published:!0})}},{key:"unpublish",value:function(){return this.update({is_published:!1})}}]),t}(c.x5),u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.dt_published;return n&&(n=new Date(n)),(0,c.eR)((0,r.Z)((0,r.Z)({},e),{},{dt_published:n}),"categories",o)}},5044:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(8519),i=t(6520),a=t(6324),s=t(3308),l=t(3896),c=t(2134),o=t(2379),u=t(6574),d=t(9097),v=t(2898),m=t(324),x=t(8136),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{name:e.name||"",description:e.description||"",is_published:e.is_published||!1,meta_title:e.meta_title||"",meta_slug:(null===e||void 0===e?void 0:e.meta_slug)||"",meta_description:(null===e||void 0===e?void 0:e.meta_description)||""}};function f(){var e=(0,i.UO)().catSlug,n=(0,s.cI)(p()),t=(0,c.QT)((function(){return(0,v.D)({slug:e}).retrieve()}),{refreshDeps:[e],onSuccess:function(e){var t=e.data;return n.setValues(p(t))},onError:function(e){e.response}}),r=t.res,o=t.updateData,d=new l.HM(r);if(!d.isSuccess)return null;var f=(0,v.D)(d.data),h=function(e){var n=e.data;return o(n)},b=n.errors;return(0,x.jsx)(a.ZP.View,{title:"Modifier cette cat\xe9gorie",back:"../",requiredPerms:["store.change_category"],className:"cat-staff-update-view",children:(0,x.jsxs)("div",{className:"d-grid grid-md-4",children:[(0,x.jsx)("div",{className:"p-md-1",children:(0,x.jsx)("div",{className:"p-1",children:(0,x.jsx)(j,{instance:f,updateData:o})})}),(0,x.jsxs)("div",{className:"span-md-3 span-lg-2",children:[(0,x.jsx)(a.ZP.Section,{title:"Details",children:(0,x.jsx)(m.V5,{context:n,instance:f,fields:["name","description"],onSuccess:h,children:(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)(s.ZP.Submit,{value:"Sauvegarder",className:"btn-primary-3 min-w-25"})})})}),(0,x.jsx)(a.ZP.Section,{title:"SEO",children:(0,x.jsxs)(m.V5,{context:n,instance:f,fields:["meta_title","meta_description","meta_slug"],onSuccess:h,children:[(0,x.jsx)(s.lm,{error:b.meta_title}),(0,x.jsx)(s.uV,{error:b.meta_slug}),(0,x.jsx)(s.bA,{error:b.meta_description}),(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)(s.ZP.Submit,{value:"Sauvegarder",className:"btn-primary-3 min-w-25"})})]})})]}),(0,x.jsx)("div",{className:"span-lg-1",children:(0,x.jsx)("div",{style:{top:0,position:"sticky"},children:f.is_published?(0,x.jsx)(u.Ko,{instance:f,onSuccess:function(e){var n=e.data;return o(n)},children:"D\xe9publier cette cat\xe9gorie"}):(0,x.jsx)(u.H5,{instance:f,onSuccess:function(e){var n=e.data;return o(n)},onError:function(e){return n.handleError(e)},children:"Publier cette cat\xe9gorie"})})})]})})}var j=function(e){var n=e.updateData,t=e.instance,i=(0,s.cI)({view:"src"}),l=a.ZP.Img((null===t||void 0===t?void 0:t.cover_data)||{});if(null===l||void 0===l||!l.slug)return(0,x.jsx)("div",{className:"d-flex align-items-center justify-content-center flex-column text-center border-1 rounded p-3",children:(0,x.jsx)(a.CD,{onSuccess:function(e){var r=e.data;t.update({cover:r.slug}).then((function(e){var t=e.data;return n(t)})).catch((function(e){}))},label:"Ajouter une image",className:"btn-primary-3 btn-md"})});var c=(0,d.ex)(i.values.view);return(0,x.jsx)(s.ZP,{context:i,className:"p-cover-update-form",children:(0,x.jsx)(a.ZP.Section,{border:!0,title:(0,x.jsx)(a.RC,{onSuccess:function(){return n({cover_data:null,cover:null})},instance:l,className:"btn-danger-3",children:(0,x.jsx)(o.PJ.rF,{})}),actions:(0,x.jsx)(a.K7,{required:!0,name:"view"}),className:"p-image-card",children:(0,x.jsx)(a.Cz,{instance:l,field:i.values.view,onSuccess:function(e){var t=e.data;return n({cover:t.slug,cover_data:t})},children:(0,x.jsx)(c,(0,r.Z)({},l))})})})}},9097:function(e,n,t){t.d(n,{wQ:function(){return D},W2:function(){return E},EJ:function(){return C},CW:function(){return T},ex:function(){return A}});var r=t(8312),i=t(8519),a=t(6009),s=t(2411),l=t(505),c=t(8524),o=t(6324),u=t(2379),d=t(3308),v=t(8430),m=t(5223),x=t(8136),p=["data","productInstance"],f=["productInstance"],j=["label","text","error","placeholder"],h=["label","text","error","placeholder"],b=["data","productInstance"],g=["onSuccess","onError"],Z=function(e){var n=e.data,t=e.productInstance,i=(0,r.Z)(e,p),a=(0,d.cI)({name:n.name||"",value:n.value||""});if(null===n||void 0===n||!n.slug||null===t||void 0===t||!t.slug)return null;var s=i.onSuccess,l=i.onError;return(0,x.jsx)(d.ZP,{context:a,onSubmit:function(e){e.preventDefault(),t.patchAttribute(n.slug,a.values).then((function(e){return null===s||void 0===s?void 0:s(e)})).catch((function(e){return a.handleError(e),null===l||void 0===l?void 0:l(e)}))},children:(0,x.jsxs)("div",{className:"d-grid grid-md-6 gap-1",children:[(0,x.jsx)("div",{className:"span-md-2",children:(0,x.jsx)(N,{error:a.errors.name})}),(0,x.jsx)("div",{className:"span-md-3",children:(0,x.jsx)(P,{error:a.errors.value,className:""})}),(0,x.jsxs)("div",{className:"span-md-1",children:[(0,x.jsx)(d.ZP.Submit,{value:"Save",className:"btn-primary-2 me-2"}),(0,x.jsx)(w,{productInstance:t,data:n,onSuccess:s,onError:l})]})]})})},S={name:"",value:""},_=function(e){var n=e.productInstance,t=(0,r.Z)(e,f),i=(0,d.cI)(S);return null!==n&&void 0!==n&&n.slug?(0,x.jsx)(d.ZP,{context:i,onSubmit:function(e){e.preventDefault(),n.postAttribute(i.values).then((function(e){var n;return i.setValues(S),null===t||void 0===t||null===(n=t.onSuccess)||void 0===n?void 0:n.call(t,e)})).catch((function(e){var n;return i.handleError(e),null===t||void 0===t||null===(n=t.onError)||void 0===n?void 0:n.call(t,e)}))},children:(0,x.jsxs)("div",{className:"d-grid grid-md-6 gap-1",children:[(0,x.jsx)("div",{className:"span-md-2",children:(0,x.jsx)(N,{error:i.errors.name})}),(0,x.jsx)("div",{className:"span-md-3",children:(0,x.jsx)(P,{error:i.errors.value,className:""})}),(0,x.jsx)("div",{className:"span-md-1",children:(0,x.jsx)(d.ZP.Submit,{value:"Save",className:"btn-primary-2"})})]})}):null},N=function(e){var n=e.label,t=e.text,a=e.error,s=e.placeholder,l=void 0===s?"Entrez le nom de l'attribut ...":s,c=(0,r.Z)(e,j);return(0,x.jsx)(d.ZP.Field,{label:n,text:t,error:a,children:(0,x.jsx)(d.ZP.Text,(0,i.Z)((0,i.Z)({},c),{},{required:!0,name:"name",placeholder:l,maxLength:30,minLength:2}))})},P=function(e){var n=e.label,t=e.text,a=e.error,s=e.placeholder,l=void 0===s?"Entrez la valuer de l'attribut ...":s,c=(0,r.Z)(e,h);return(0,x.jsx)(d.ZP.Field,{label:n,text:t,error:a,children:(0,x.jsx)(d.ZP.Text,(0,i.Z)((0,i.Z)({},c),{},{required:!0,name:"value",placeholder:l,maxLength:99,minLength:2}))})},w=function(e){var n=e.data,t=e.productInstance,a=(0,r.Z)(e,b);if(null===n||void 0===n||!n.slug||null===t||void 0===t||!t.slug)return null;var s=a.onSuccess,l=a.onError,c=(0,r.Z)(a,g);return(0,x.jsx)(u.pu,(0,i.Z)((0,i.Z)({},c),{},{renderHeader:function(){return(0,x.jsx)("div",{children:"Supprimer un attribut"})},renderFooter:function(e){var r=e.setOpen;return(0,x.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,x.jsx)(u.zx,{onClick:function(){return r(!1)},children:"Annuler"}),(0,x.jsx)(u.zx,{onClick:function(){return t.deleteAttribute(n.slug).then((function(e){return r(!1),null===s||void 0===s?void 0:s(e)})).catch((function(e){return null===l||void 0===l?void 0:l(e)}))},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,x.jsxs)("div",{className:"p-3",children:["Are you sure you want to delete this attribute:",(0,x.jsx)("div",{className:"fw-bold",children:n.name})]})},className:"attr-delete-button btn-danger-3",children:(0,x.jsx)(u.PJ.rF,{})}))},y=t(8345),F=["img","actions"],I=function(e){return window.i18n(l.Z,e)},D=function(e){var n=e.form,t=e.instance,r=e.categories,i=e.onUpdate,a=n.errors,s=(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(m.HG.NameField,{error:a.name,label:window.i18n(c.Z,"NField.label"),text:window.i18n(c.Z,"NField.text")}),(0,x.jsxs)("div",{className:"d-grid grid-md-2 gap-1",children:[(0,x.jsx)(m.HG.CategoryField,{error:a.category,categories:r,label:window.i18n(c.Z,"CatField.label")}),(0,x.jsx)(m.HG.RetailPriceField,{label:window.i18n(c.Z,"RetailPField.label"),error:a.retail_price})]}),(0,x.jsx)(m.HG.PresaleCheckboxField,{error:a.is_pre_sale,label:window.i18n(c.Z,"PresaleField.label")}),n.values.is_pre_sale&&(0,x.jsx)(m.HG.PresaleTextField,{text:window.i18n(c.Z,"PresaleTextField.text"),error:a.is_pre_sale_text}),(0,x.jsx)(m.HG.OnSaleCheckboxField,{error:a.is_on_sale,label:window.i18n(c.Z,"OnsaleField.label")}),n.values.is_on_sale&&(0,x.jsx)(m.HG.SalePriceField,{label:window.i18n(c.Z,"SalePField.label"),error:a.sale_price}),(0,x.jsx)(m.HG.DescriptionField,{error:a.description,label:window.i18n(c.Z,"DField.label"),text:window.i18n(c.Z,"DField.text")}),(0,x.jsx)("div",{className:"my-4",children:(0,x.jsx)(m.HG.OosCheckboxField,{error:a.is_oos})}),(0,x.jsx)("div",{className:"my-4",children:(0,x.jsx)(m.HG.IsExplicitCheckboxField,{error:a.is_explicit})})]});return(0,x.jsxs)(o.ZP.Section,{children:[(0,x.jsx)(m.Eh,{context:n,instance:t,fields:["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_pre_sale_dt","is_on_sale","sale_price","is_oos","is_explicit"],onSuccess:function(e){var n=e.data;return i(n)},children:(0,x.jsx)(o.ZP.Section,{title:I("InfoTab.title"),text:I("InfoTab.text"),footer:(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)(d.ZP.Submit,{value:I("Btn.saveLabel"),className:"btn-primary min-w-25 fw-bold"})}),children:s})}),(0,x.jsx)(o.ZP.Section,{border:!0,title:I("SeoTab.title"),children:(0,x.jsxs)(m.Eh,{context:n,instance:t,fields:["meta_title","meta_description","meta_slug"],onSuccess:function(e){var n=e.data;return i(n)},children:[(0,x.jsx)(d.lm,{error:a.meta_title}),(0,x.jsx)(d.uV,{error:a.meta_slug}),(0,x.jsx)(d.bA,{error:a.meta_description}),(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)(d.ZP.Submit,{value:I("Btn.saveLabel"),className:"btn-primary-3 min-w-25 fw-bold"})})]})})]})},E=function(e){var n=e.instance,t=e.onUpdate,r=s.useState(!1),i=(0,a.Z)(r,2),l=i[0],c=i[1],d=s.useState(!1),m=(0,a.Z)(d,2),p=m[0],f=m[1];return(0,x.jsx)(o.ZP.Section,{title:I("InventoryTab.title"),children:(0,x.jsx)("div",{className:"d-grid grid-md-3 gap-1",children:(0,x.jsxs)("div",{className:"span-md-2",children:[(0,x.jsxs)(o.ZP.Section,{title:"Tailles",text:"Ajouter des tailles",actions:(0,x.jsx)(u.zx,{onClick:function(){return f(!p)},className:"btn-primary-3",children:"Ajouter une taille"}),children:[p&&(0,x.jsx)(o.ZP.Section,{text:"Ajouter une taille",children:(0,x.jsx)(v.T9,{productInstance:n,onSuccess:function(e){var n=e.data;return t(n)}})}),n.sizes.map((function(e){return(0,x.jsx)(v.dh,{data:e,productInstance:n,onSuccess:function(e){var n=e.data;return t(n)}},e.slug)}))]}),(0,x.jsxs)(o.ZP.Section,{title:"Attributs",actions:(0,x.jsx)(u.zx,{onClick:function(){return c(!l)},className:"btn-primary-3",children:"Ajouter un attribut"}),children:[l&&(0,x.jsx)(o.ZP.Section,{text:"Ajouter un attribut au produit.",children:(0,x.jsx)(_,{productInstance:n,onSuccess:function(e){var n=e.data;return t(n)}})}),n.attributes.map((function(e){return(0,x.jsx)("div",{className:"mb-1",children:(0,x.jsx)(Z,{data:e,productInstance:n,onSuccess:function(e){var n=e.data;return t(n)}})},e.slug)}))]})]})})})},T=function(e){var n=e.instance,t=e.listRes,r=e.navigate;return(0,x.jsx)(o.ZP.Section,{title:I("SettingsTab.title"),children:(0,x.jsx)(o.ZP.Section,{title:I("SettingsTab.deleteSectionTitle"),actions:(0,x.jsx)(y.s,{instance:n,onSuccess:function(){return t.refresh(),r(e.back)},onError:function(e){404===e.status&&r("../")}})})})},C=function(e){var n=e.instance,t=e.onUpdate,r=n.cover_data;return(0,x.jsx)(o.ZP.Section,{title:I("MediaTab.title"),actions:(0,x.jsx)(y.n,{productInstance:n,onSuccess:function(e){return null===t||void 0===t?void 0:t(e.data)}}),children:(0,x.jsxs)("div",{className:"d-grid grid-md-3 grid-lg-4 gap-2",children:[(0,x.jsx)(k,(0,i.Z)((0,i.Z)({},e),{},{img:(0,o.pB)(r),onDeleteSuccess:function(){return t({cover_data:null,cover:null})}})),n.images_data.map((function(r){var a=(0,o.pB)(r);return(0,s.createElement)(B,(0,i.Z)((0,i.Z)({},e),{},{img:a,actions:(0,x.jsx)(o.ZP.Button,{onClick:function(){return n.swapCover(a.slug).then((function(e){var n=e.data;return t(n)}))},children:"Set as cover"}),onDeleteSuccess:function(){return t({images_data:n.images_data.filter((function(e){return e.slug!==a.slug})),images:n.images.filter((function(e){return e!==a.slug}))})},key:a.slug}))}))]})})},A=function(e){switch(e){case"mobile":return o.pB.Mobile;case"square":return o.pB.Square;case"thumb":return o.pB.Thumb;case"picture":return o.pB.Picture;default:return o.pB.Image}},k=function(e){var n=e.img,t=e.onUpdate,r=e.instance,a=(0,d.cI)({view:"src"});if(!n.slug)return(0,x.jsxs)("div",{className:"p-cover-add-btn d-flex align-items-center justify-content-center flex-column text-center border-1 rounded p-3",children:[(0,x.jsx)("p",{className:"text-sm text-muted mb-3",children:"Ce produit n'a pas d'image principale"}),(0,x.jsx)(o.CD,{onSuccess:function(e){var n=e.data;r.update({cover:n.slug}).then((function(e){var n=e.data;return t(n)})).catch((function(e){}))},label:"Ajouter une image",className:"btn-primary-3 btn-md"})]});var s=A(a.values.view);return(0,x.jsx)(d.ZP,{context:a,className:"p-cover-update-form",children:(0,x.jsx)(o.ZP.Section,{border:!0,title:(0,x.jsx)(H,(0,i.Z)((0,i.Z)({},e),{},{img:n})),actions:(0,x.jsx)(o.K7,{required:!0,name:"view"}),className:"p-image-card",children:(0,x.jsx)(o.Cz,{instance:n,field:a.values.view,onSuccess:function(e){var n=e.data;return t({cover:n.slug,cover_data:n})},children:(0,x.jsx)(s,(0,i.Z)({},n))})})})},B=function(e){var n=e.img,t=e.actions,a=(0,r.Z)(e,F);return(0,x.jsx)(o.ZP.Section,{border:!0,title:(0,x.jsx)(H,(0,i.Z)((0,i.Z)({},a),{},{img:n})),actions:t,className:"p-image-card",children:(0,x.jsx)(o.pB.Image,(0,i.Z)({},n))})},H=function(e){var n=e.img,t=e.onDeleteSuccess;return n&&n.slug?(0,x.jsx)(o.RC,{onSuccess:t,instance:n,className:"btn-danger-3",children:(0,x.jsx)(u.PJ.rF,{})}):null}},505:function(e,n){n.Z={"InfoTab.title":{fr:"D\xe9tails",en:"Details"},"InfoTab.text":{fr:"Modifier les informations de ce produit",en:"Update product's info"},"SeoTab.title":{fr:"Seo",en:"Seo"},"InventoryTab.title":{fr:"Inventaire",en:"Inventory"},"MediaTab.title":{fr:"M\xe9dia",en:"Media"},"SettingsTab.title":{fr:"Param\xe8tres",en:"Settings"},"SettingsTab.deleteSectionTitle":{fr:"Supprimer ce produit",en:"Delete product"},"CreateView.title":{fr:"Ajouter un produit",en:"Add product"},"IndexRoute.title":{fr:"Produits",en:"Products"},"IndexRoute.actionLinkLabel":{fr:"Ajouter",en:"Add product"},"IndexRoute.noItemText":{fr:"Ajouter un produit pour commencer",en:"Add products to your shop to get started"},"IndexRoute.addProductLinkLabel":{fr:"Ajouter un produit",en:"Add a new product"},"Btn.saveLabel":{fr:"Sauvegarder",en:"Save"}}}}]);
//# sourceMappingURL=44.19963138.chunk.js.map