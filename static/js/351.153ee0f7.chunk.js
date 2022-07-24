"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[351],{3351:function(e,r,t){t.r(r),t.d(r,{default:function(){return S}});var n=t(8312),s=t(6009),a=t(8519),i=(t(2411),t(1408)),c=t(6520),l=t(1096),u=t(5603),o=t(2134),d=t(2379),m=t(2145),x=t(3793),p=t(6574),v=t(2886),j=t(421),f=t(3992),h=t(8136),g=["res","setRes","loading"],_=[].concat(["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_pre_sale_dt","is_oos","is_on_sale","sale_price"],["cost","color_group_pk","stage"],["supplier_name","supplier_item_id","supplier_item_sn","supplier_item_category","supplier_item_url","supplier_item_cost","supplier_item_cost_currency","supplier_order_id"],["meta_title","meta_description","meta_slug"]),b={retail_price:0,is_pre_sale:!1,sale_price:0,is_on_sale:!1,is_published:!1},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r={};return _.forEach((function(t){var n,s=null===e||void 0===e?void 0:e[t];null!=s?r[t]=s:r[t]=null!==(n=b[t])&&void 0!==n?n:""})),(0,a.Z)((0,a.Z)({},b),r)};function S(e){var r,t=e.back,_=(0,c.UO)().prodSlug,b=(0,i.lr)(),S=(0,s.Z)(b,1)[0],P=(0,c.s0)(),y=(0,u.cI)(Z()),I=(0,o.QT)((function(){return(0,x.Z)({slug:_}).retrieve()}),{refreshDeps:[_],onSuccess:function(e){var r=e.data;return y.setValues(Z(r))},onError:function(e){var r=e.response;if(404===(null===r||void 0===r?void 0:r.status))return P("../")}}),w=I.res,C=I.setRes,E=I.loading,k=(0,n.Z)(I,g),A=new m.HM(w);if(!A.isSuccess)return null;if(E)return(0,h.jsx)(d.gb,{});var F=(0,x.Z)(A.data),q=function(e){k.updateData(e),f.u.update(e)},D=S.get("tab"),H={instance:F,form:y,setRes:C,onUpdate:q,navigate:P,back:t,params:S,tab:D,categories:null===A||void 0===A||null===(r=A.data)||void 0===r?void 0:r.categories};return(0,h.jsx)(l.ZP.View,{back:"".concat((0,m.Xs)(t)).concat("".concat(S)?"?".concat(S):""),title:(0,h.jsx)(j.wP,{data:(0,a.Z)({},F.export())}),requiredPerms:["store.change_product"],className:"product-staff-update-view",children:(0,h.jsx)(l.ZP.Section,{title:(0,h.jsx)("div",{className:"mb-1",children:N}),actions:F.is_published?(0,h.jsx)(p.Ko,{instance:F,onSuccess:function(e){var r=e.data;return q(r)},children:"D\xe9publier ce produit"}):(0,h.jsx)(p.H5,{instance:F,onSuccess:function(e){var r=e.data;return q(r)},onError:function(e){return y.handleError(e)},children:"Publier ce produit"}),children:function(){switch(D){case"inventory":return(0,h.jsx)(v.W2,(0,a.Z)({},H));case"settings":return(0,h.jsx)(v.CW,(0,a.Z)({},H));case"media":return(0,h.jsx)(v.EJ,(0,a.Z)({},H));default:return(0,h.jsx)(v.wQ,(0,a.Z)({},H))}}()})})}var N=(0,h.jsxs)("div",{className:"query-buttons",children:[(0,h.jsx)(d.$Q,{index:!0,target:"tab",className:"btn-md",children:"Info"}),(0,h.jsx)(d.$Q,{target:"tab",value:"media",className:"btn-md",children:"Media"}),(0,h.jsx)(d.$Q,{target:"tab",value:"inventory",className:"btn-md",children:"Inventory"}),(0,h.jsx)(d.$Q,{target:"tab",value:"settings",className:"btn-md",children:"Settings"})]})},2886:function(e,r,t){t.d(r,{wQ:function(){return I},W2:function(){return w},EJ:function(){return E},CW:function(){return C},ex:function(){return k}});var n=t(8312),s=t(8519),a=t(6009),i=t(2379),c=t(5603),l=t(1096),u=t(2411),o=t(8136),d=["data","productInstance"],m=["productInstance"],x=["label","text","error","placeholder"],p=["label","text","error","placeholder"],v=["data","productInstance"],j=["onSuccess","onError"],f=function(e){var r=e.data,t=e.productInstance,s=(0,n.Z)(e,d),a=(0,c.cI)({name:r.name||"",value:r.value||""});if(null===r||void 0===r||!r.slug||null===t||void 0===t||!t.slug)return null;var i=s.onSuccess,l=s.onError;return(0,o.jsx)(c.ZP,{context:a,onSubmit:function(e){e.preventDefault(),t.patchAttribute(r.slug,a.values).then((function(e){return null===i||void 0===i?void 0:i(e)})).catch((function(e){return a.handleError(e),null===l||void 0===l?void 0:l(e)}))},children:(0,o.jsxs)("div",{className:"d-grid grid-md-6 gap-1",children:[(0,o.jsx)("div",{className:"span-md-2",children:(0,o.jsx)(_,{error:a.errors.name})}),(0,o.jsx)("div",{className:"span-md-3",children:(0,o.jsx)(b,{error:a.errors.value,className:""})}),(0,o.jsxs)("div",{className:"span-md-1",children:[(0,o.jsx)(c.ZP.Submit,{value:"Save",className:"btn-primary-2 me-2"}),(0,o.jsx)(Z,{productInstance:t,data:r,onSuccess:i,onError:l})]})]})})},h={name:"",value:""},g=function(e){var r=e.productInstance,t=(0,n.Z)(e,m),s=(0,c.cI)(h);return null!==r&&void 0!==r&&r.slug?(0,o.jsx)(c.ZP,{context:s,onSubmit:function(e){e.preventDefault(),r.postAttribute(s.values).then((function(e){var r;return s.setValues(h),null===t||void 0===t||null===(r=t.onSuccess)||void 0===r?void 0:r.call(t,e)})).catch((function(e){var r;return s.handleError(e),null===t||void 0===t||null===(r=t.onError)||void 0===r?void 0:r.call(t,e)}))},children:(0,o.jsxs)("div",{className:"d-grid grid-md-6 gap-1",children:[(0,o.jsx)("div",{className:"span-md-2",children:(0,o.jsx)(_,{error:s.errors.name})}),(0,o.jsx)("div",{className:"span-md-3",children:(0,o.jsx)(b,{error:s.errors.value,className:""})}),(0,o.jsx)("div",{className:"span-md-1",children:(0,o.jsx)(c.ZP.Submit,{value:"Save",className:"btn-primary-2"})})]})}):null},_=function(e){var r=e.label,t=e.text,a=e.error,i=e.placeholder,l=void 0===i?"Entrez le nom de l'attribut ...":i,u=(0,n.Z)(e,x);return(0,o.jsx)(c.ZP.Field,{label:r,text:t,error:a,children:(0,o.jsx)(c.ZP.Text,(0,s.Z)((0,s.Z)({},u),{},{required:!0,name:"name",placeholder:l,maxLength:30,minLength:2}))})},b=function(e){var r=e.label,t=e.text,a=e.error,i=e.placeholder,l=void 0===i?"Entrez la valuer de l'attribut ...":i,u=(0,n.Z)(e,p);return(0,o.jsx)(c.ZP.Field,{label:r,text:t,error:a,children:(0,o.jsx)(c.ZP.Text,(0,s.Z)((0,s.Z)({},u),{},{required:!0,name:"value",placeholder:l,maxLength:99,minLength:2}))})},Z=function(e){var r=e.data,t=e.productInstance,a=(0,n.Z)(e,v);if(null===r||void 0===r||!r.slug||null===t||void 0===t||!t.slug)return null;var c=a.onSuccess,l=a.onError,u=(0,n.Z)(a,j);return(0,o.jsx)(i.pu,(0,s.Z)((0,s.Z)({},u),{},{renderHeader:function(){return(0,o.jsx)("div",{children:"Supprimer un attribut"})},renderFooter:function(e){var n=e.setOpen;return(0,o.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,o.jsx)(i.zx,{onClick:function(){return n(!1)},children:"Annuler"}),(0,o.jsx)(i.zx,{onClick:function(){return t.deleteAttribute(r.slug).then((function(e){return n(!1),null===c||void 0===c?void 0:c(e)})).catch((function(e){return null===l||void 0===l?void 0:l(e)}))},className:"btn-danger",children:"Supprimer"})]})},render:function(){return(0,o.jsxs)("div",{className:"p-3",children:["Are you sure you want to delete this attribute:",(0,o.jsx)("div",{className:"fw-bold",children:r.name})]})},className:"attr-delete-button btn-danger-3",children:(0,o.jsx)(i.PJ.rF,{})}))},S=t(421),N=t(3085),P=t(8430),y=["img","actions"],I=function(e){var r=e.form,t=e.instance,n=e.categories,s=e.onUpdate,a=r.errors,i=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(N.HG.NameField,{label:"Nom",error:a.name,text:"Ajoutez un nom qui d\xe9crit cet article. Les noms peuvent contenir jusqu\u2019\xe0 99 caract\xe8res.\nNous recommandons 65 caract\xe8res au max."}),(0,o.jsxs)("div",{className:"d-grid grid-md-2 gap-1",children:[(0,o.jsx)(N.HG.CategoryField,{label:"Cat\xe9gorie",categories:n,error:a.category}),(0,o.jsx)(N.HG.RetailPriceField,{label:"Prix",error:a.retail_price})]}),(0,o.jsx)(N.HG.PresaleCheckboxField,{label:"Pr\xe9-vente",error:a.is_pre_sale}),r.values.is_pre_sale&&(0,o.jsx)(N.HG.PresaleTextField,{text:"Ajouter un text de pr\xe9-vente.(facultatif)",error:a.is_pre_sale_text}),(0,o.jsx)(N.HG.OnSaleCheckboxField,{label:"Cet article est en solde",error:a.is_on_sale}),r.values.is_on_sale&&(0,o.jsx)(N.HG.SalePriceField,{label:"Prix r\xe9duit",error:a.sale_price}),(0,o.jsx)(N.HG.DescriptionField,{label:"Description",error:a.description,text:"Ajoutez les caract\xe9ristiques uniques qui d\xe9crivent cet article."}),(0,o.jsx)("div",{className:"my-4",children:(0,o.jsx)(N.HG.OosCheckboxField,{error:a.is_oos})})]});return(0,o.jsxs)(l.ZP.Section,{children:[(0,o.jsx)(N.Eh,{context:r,instance:t,fields:["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_pre_sale_dt","is_on_sale","sale_price","is_oos"],onSuccess:function(e){var r=e.data;return s(r)},children:(0,o.jsx)(l.ZP.Section,{border:!0,title:"Details",text:"Modifier les informations de ce produit.",footer:(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsx)(c.ZP.Submit,{value:"Sauvegarder",className:"btn-primary min-w-25"})}),children:i})}),(0,o.jsx)(l.ZP.Section,{border:!0,title:"Seo",children:(0,o.jsxs)(N.Eh,{context:r,instance:t,fields:["meta_title","meta_description","meta_slug"],onSuccess:function(e){var r=e.data;return s(r)},children:[(0,o.jsx)(c.lm,{error:a.meta_title}),(0,o.jsx)(c.uV,{error:a.meta_slug}),(0,o.jsx)(c.bA,{error:a.meta_description}),(0,o.jsx)("div",{className:"d-flex justify-content-center",children:(0,o.jsx)(c.ZP.Submit,{value:"Sauvegarder",className:"btn-primary-3 min-w-25"})})]})})]})},w=function(e){var r=e.instance,t=e.onUpdate,n=u.useState(!1),s=(0,a.Z)(n,2),c=s[0],d=s[1],m=u.useState(!1),x=(0,a.Z)(m,2),p=x[0],v=x[1];return(0,o.jsx)(l.ZP.Section,{title:"Inventory",children:(0,o.jsxs)("div",{className:"d-grid grid-md-3 gap-1",children:[(0,o.jsxs)("div",{className:"span-md-2",children:[(0,o.jsxs)(l.ZP.Section,{title:"Tailles",text:"Ajouter des tailles",actions:(0,o.jsx)(i.zx,{onClick:function(){return v(!p)},className:"btn-primary-3",children:"Ajouter une taille"}),children:[p&&(0,o.jsx)(l.ZP.Section,{text:"Ajouter une taille",children:(0,o.jsx)(P.T9,{productInstance:r,onSuccess:function(e){var r=e.data;return t(r)}})}),r.sizes.map((function(e){return(0,o.jsx)(P.dh,{data:e,productInstance:r,onSuccess:function(e){var r=e.data;return t(r)}},e.slug)}))]}),(0,o.jsxs)(l.ZP.Section,{title:"Attributs",actions:(0,o.jsx)(i.zx,{onClick:function(){return d(!c)},className:"btn-primary-3",children:"Ajouter un attribut"}),children:[c&&(0,o.jsx)(l.ZP.Section,{text:"Ajouter un attribut au produit.",children:(0,o.jsx)(g,{productInstance:r,onSuccess:function(e){var r=e.data;return t(r)}})}),r.attributes.map((function(e){return(0,o.jsx)("div",{className:"mb-1",children:(0,o.jsx)(f,{data:e,productInstance:r,onSuccess:function(e){var r=e.data;return t(r)}})},e.slug)}))]})]}),(0,o.jsx)("div",{className:"mt-3"})]})})},C=function(e){var r=e.instance,t=e.listRes,n=e.navigate;return(0,o.jsx)(l.ZP.Section,{title:"Settings",children:(0,o.jsx)(l.ZP.Section,{title:"Supprimer ce produit",actions:(0,o.jsx)(S.sq,{instance:r,onSuccess:function(){return t.refresh(),n(e.back)},onError:function(e){404===e.status&&n("../")}})})})},E=function(e){var r=e.instance,t=e.onUpdate,n=r.cover_data;return(0,o.jsx)(l.ZP.Section,{title:"Media",actions:(0,o.jsx)(S.n9,{productInstance:r,onSuccess:function(e){return null===t||void 0===t?void 0:t(e.data)}}),children:(0,o.jsxs)("div",{className:"d-grid grid-md-3 grid-lg-4 gap-2",children:[(0,o.jsx)(A,(0,s.Z)((0,s.Z)({},e),{},{img:(0,l.pB)(n),onDeleteSuccess:function(){return t({cover_data:null,cover:null})}})),r.images_data.map((function(n){var a=(0,l.pB)(n);return(0,u.createElement)(F,(0,s.Z)((0,s.Z)({},e),{},{img:a,actions:(0,o.jsx)(l.ZP.Button,{onClick:function(){return r.swapCover(a.slug).then((function(e){var r=e.data;return t(r)}))},children:"Set as cover"}),onDeleteSuccess:function(){return t({images_data:r.images_data.filter((function(e){return e.slug!==a.slug})),images:r.images.filter((function(e){return e!==a.slug}))})},key:a.slug}))}))]})})},k=function(e){switch(e){case"mobile":return l.pB.Mobile;case"square":return l.pB.Square;case"thumb":return l.pB.Thumb;case"picture":return l.pB.Picture;default:return l.pB.Image}},A=function(e){var r=e.img,t=e.onUpdate,n=e.instance,a=(0,c.cI)({view:"src"});if(!r.slug)return(0,o.jsxs)("div",{className:"p-cover-add-btn d-flex align-items-center justify-content-center flex-column text-center border-1 rounded p-3",children:[(0,o.jsx)("p",{className:"text-sm text-muted mb-3",children:"Ce produit n'a pas d'image principale"}),(0,o.jsx)(l.CD,{onSuccess:function(e){var r=e.data;n.update({cover:r.slug}).then((function(e){var r=e.data;return t(r)})).catch((function(e){}))},label:"Ajouter une image",className:"btn-primary-3 btn-md"})]});var i=k(a.values.view);return(0,o.jsx)(c.ZP,{context:a,className:"p-cover-update-form",children:(0,o.jsx)(l.ZP.Section,{border:!0,title:(0,o.jsx)(q,(0,s.Z)((0,s.Z)({},e),{},{img:r})),actions:(0,o.jsx)(l.K7,{required:!0,name:"view"}),className:"p-image-card",children:(0,o.jsx)(l.Cz,{instance:r,field:a.values.view,onSuccess:function(e){var r=e.data;return t({cover:r.slug,cover_data:r})},children:(0,o.jsx)(i,(0,s.Z)({},r))})})})},F=function(e){var r=e.img,t=e.actions,a=(0,n.Z)(e,y);return(0,o.jsx)(l.ZP.Section,{border:!0,title:(0,o.jsx)(q,(0,s.Z)((0,s.Z)({},a),{},{img:r})),actions:t,className:"p-image-card",children:(0,o.jsx)(l.pB.Image,(0,s.Z)({},r))})},q=function(e){var r=e.img,t=e.onDeleteSuccess;return r&&r.slug?(0,o.jsx)(l.RC,{onSuccess:t,instance:r,className:"btn-danger-3",children:(0,o.jsx)(i.PJ.rF,{})}):null}}}]);
//# sourceMappingURL=351.153ee0f7.chunk.js.map