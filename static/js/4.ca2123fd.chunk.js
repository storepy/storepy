(this["webpackJsonp@store/clientjs"]=this["webpackJsonp@store/clientjs"]||[]).push([[4],{343:function(e,t,c){"use strict";c.d(t,"d",(function(){return o})),c.d(t,"c",(function(){return d})),c.d(t,"b",(function(){return b})),c.d(t,"e",(function(){return j})),c.d(t,"a",(function(){return m}));c(8),c(4);var r=c(1),a=(c(28),c(2)),n=c(13),l=c(5),s=(c(3),c(51)),i=c.n(s),u=c(0),o=function(e){var t=e.product;if(!t||!t.retail_price)return null;var c=t.retail_price,r=t.sale_price;return t.is_on_sale&&null!=r?Object(u.jsxs)("div",{className:"product-price-display d-flex align-items-center",children:[Object(u.jsx)("div",{className:"text-danger fw-bold me-2",children:r.amountWithSymbol}),Object(u.jsx)("div",{className:"text-line-through",children:c.amountWithSymbol})]}):Object(u.jsx)("div",{className:"product-price-display d-flex align-items-center",children:Object(u.jsx)("div",{className:"fw-bold",children:c.amountWithSymbol})})},d=function(e){var t=(e.product||{}).attributes,c=void 0===t?[]:t;return c?Object(u.jsx)("ul",{className:"product-attr-list",children:null===c||void 0===c?void 0:c.map((function(e){return Object(u.jsxs)("li",{className:"attr",children:[Object(u.jsxs)("span",{className:"attr-label",children:[e.name," : "]}),Object(u.jsx)("span",{className:"attr-value",children:e.value})]},e.name)}))}):null},b=function(e){var t,c=Object(a.useContext)(n.a);return c.isLoaded&&c.categories?Object(u.jsx)("div",{className:"category-links pb-2",children:null===(t=c.categories)||void 0===t?void 0:t.map((function(t){var c,a;return Object(u.jsx)("div",{className:"item w-25 w-md-15",children:Object(u.jsxs)("a",{href:t.url,className:"",title:t.name,children:[e.showCover&&(null===t||void 0===t?void 0:t.cover)&&Object(u.jsx)(l.s,Object(r.a)(Object(r.a)({},t.cover),{},{src_mobile:(null===t||void 0===t||null===(c=t.cover)||void 0===c?void 0:c.thumb_sq)||(null===t||void 0===t||null===(a=t.cover)||void 0===a?void 0:a.src_mobile)})),Object(u.jsx)("div",{className:"info",children:t.name_truncated})]})},t.slug)}))}):null};function j(e){var t=e.location.search,c=Object(a.useRef)(i()((function(t){var c;return null===e||void 0===e||null===(c=e.history)||void 0===c?void 0:c.push(t)}),300)),r=new URLSearchParams(t);return Object(u.jsx)("form",{action:"/shop/",className:"product-search-form",children:Object(u.jsx)(l.t,{required:!0,initialValue:r.get("q"),onChange:function(e){var t=e.e,a=t.target.value;if(!a||a.length<3?r.delete("q"):r.set("q",t.target.value),c.current){var n=new URL(window.location.href);c.current("".concat(n.pathname,"?").concat(r))}},className:"search-input",placeholder:"Cherchez un produit ...",minLength:3,maxLength:99})})}var m=function(e){var t=Object(a.useContext)(n.a),c=t.isLoaded,r=t.breadcrumbs;return c&&r?Object(u.jsx)("section",{className:"miq-breadcrumbs",role:"navigation","aria-label":"breadcrumbs",children:r.map((function(e){return Object(u.jsx)("a",{href:e.path,className:"item",title:e.title,"aria-label":e.title,children:e.label},e.label)}))}):null}},345:function(e,t,c){"use strict";c.d(t,"a",(function(){return b})),c.d(t,"c",(function(){return j})),c.d(t,"b",(function(){return m}));var r=c(21),a=c(4),n=c(2),l=c(342),s=c(346),i=c(0),u=["image"],o=["prodSlug","product","toast"],d=["product"],b=function(e){var t=e.image,c=Object(a.a)(e,u),r=(null===t||void 0===t?void 0:t.alt_text)||"",l=Object(s.i)({alt_text:r}),o=null===t||void 0===t?void 0:t.slug,d=l.setValues;return Object(n.useEffect)((function(){d({alt_text:r})}),[o,d,r]),t&&t.slug?Object(i.jsx)(s.b,{value:l,className:c.className,children:Object(i.jsx)(s.c,{required:!0,image:t,onSuccess:c.onSuccess,onError:c.onError,placeholder:"Add an alternative text ..."})}):null};function j(e){var t=e.prodSlug,c=e.product,r=e.toast;Object(a.a)(e,o);if(!t||!(null===c||void 0===c?void 0:c.page))return null;var n=c.page.is_published,u=e.form,d=e.onPublishSuccess,b=e.onUnpublishSuccess,j=e.onError;return Object(i.jsxs)(s.a,{id:e.id,onClick:function(){return n?l.a.unpublish(t).then((function(e){return null===b||void 0===b?void 0:b(e)})).catch((function(e){return null===r||void 0===r?void 0:r.error({message:SHOP_MSGS.default})})):l.a.publish(t).then((function(e){return null===d||void 0===d?void 0:d(e)})).catch((function(e){var t=e.response,c=void 0===t?{}:t;c.data||null===r||void 0===r||r.error({message:SHOP_MSGS.default});var a=c.data,n=a.retail_price,l=a.category,s=a.page;return n&&(null===r||void 0===r||r.error({message:SHOP_MSGS.product.publish_error_retail_price})),l&&(u&&u.handleError(e),null===r||void 0===r||r.error({message:SHOP_MSGS.product.publish_error_category})),s&&(null===r||void 0===r||r.error({message:SHOP_MSGS.product.publish_error_page})),null===j||void 0===j?void 0:j(e)}))},className:Object(s.h)(["staff-product-publish-button",n?"btn-danger":"btn-primary",e.className]),children:[n?"Unpublish":"Publish"," product"]})}var m=function(e){var t=e.product,c=Object(a.a)(e,d);return t&&t.slug?Object(i.jsx)(s.e,{multiple:!0,className:"btn-primary-3",onCreate:function(e){return e=e.filter((function(e){return e&&e.slug})),l.a.patch(t.slug,{images:[].concat(Object(r.a)(t.images),Object(r.a)(e.map((function(e){return e.slug}))))}).then((function(e){c.onCreateSuccess&&c.onCreateSuccess(e)})).catch((function(e){c.onCreateError&&c.onCreateError(e)}))}}):null}},346:function(e,t,c){"use strict";var r=c(9);c.d(t,"c",(function(){return r.h})),c.d(t,"g",(function(){return r.i}));var a=c(5);c.d(t,"a",(function(){return a.b})),c.d(t,"e",(function(){return a.l})),c.d(t,"d",(function(){return a.k})),c.d(t,"f",(function(){return a.q}));var n=c(3);c.d(t,"h",(function(){return n.j}));var l=c(6);c.d(t,"i",(function(){return l.c})),c.d(t,"b",(function(){return l.a}))},347:function(e,t,c){"use strict";c.d(t,"a",(function(){return l}));var r=c(4),a=c(0),n=["product"],l=function(e){var t=e.product;Object(r.a)(e,n);return t?Object(a.jsx)("div",{className:"product-supplier-data",children:Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"",children:"Supplier"}),Object(a.jsx)("span",{className:"",children:t.supplier_name})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"",children:"Item id"}),Object(a.jsx)("span",{className:"",children:t.supplier_item_id})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"",children:"Category"}),Object(a.jsx)("span",{className:"",children:t.supplier_item_category})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)("span",{className:"",children:"Item cost"}),Object(a.jsxs)("span",{className:"",children:[t.supplier_item_cost," (",t.supplier_item_cost_currency,")"]})]}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:t.supplier_item_url,className:"text-underline",target:"_blank",rel:"noopener noreferrer",children:"View supplier page"})})]})}):null}},348:function(e,t,c){"use strict";c.d(t,"a",(function(){return q}));var r=c(1),a=c(4),n=c(2),l=(c(9),c(6)),s=c(3),i=c(342),u=(c(345),c(344),c(0)),o=["showLabel","label"],d=["placeholder"],b=["label","text"],j=["placeholder"],m=["showLabel","label"],v=["categories"],p=["showLabel","label"],O=["showLabel","label"],x=["showLabel","label"],h=["showLabel","label"],f=["showLabel","label"],g=["stages","name"],_=["children","context","fields","prodSlug"],N=["onSuccess","onError"];s.n;var S=function(e){var t=e.showLabel,c=void 0!==t&&t,n=e.label,s=void 0===n?"Name":n,i=Object(a.a)(e,o),b=i.placeholder,j=void 0===b?"Give a name to the item":b,m=Object(a.a)(i,d);return Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(l.b.Label,{value:s,className:"mb-1"}),Object(u.jsx)(l.b.TextInput,Object(r.a)(Object(r.a)({},m),{},{required:!0,name:"name",placeholder:j,maxLength:99}))]})},y=function(e){var t,c=e.showLabel,s=void 0!==c&&c,i=e.label,o=void 0===i?"Category":i,d=Object(a.a)(e,m),b=d.categories,j=Object(a.a)(d,v);return Object(u.jsxs)(u.Fragment,{children:[s&&Object(u.jsx)(l.b.Label,{value:o}),Object(u.jsx)(l.b.SelectInput,Object(r.a)(Object(r.a)({},j),{},{required:!0,name:"category",nullValue:{label:"S\xe9lectionnez une cat\xe9gorie"},children:null===b||void 0===b||null===(t=b.items)||void 0===t?void 0:t.map((function(e){return Object(n.createElement)(l.b.SelectInput.Option,Object(r.a)(Object(r.a)({},e),{},{key:e.value}))}))}))]})},w=function(e){var t=e.showLabel,c=void 0!==t&&t,n=e.label,s=void 0===n?"Retail price":n,i=Object(a.a)(e,p);return Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(l.b.Label,{value:s,id:"retail_price_label"}),Object(u.jsx)(l.b.TextInput,Object(r.a)(Object(r.a)({},i),{},{required:!0,type:"number",name:"retail_price","aria-describedby":"retail_price_label",min:"0",step:"0.01"}))]})},C=function(e){e.showLabel;var t=e.label,c=void 0===t?"Pre-sale":t,n=Object(a.a)(e,O);return Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)(l.b.CheckboxInput,Object(r.a)(Object(r.a)({},n),{},{name:"is_pre_sale",className:"me-2"})),Object(u.jsx)(l.b.Label,{value:c})]})},L=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.b.Label,{value:"Pre sale text",id:"is_pre_sale_text_label",className:"miq-checkbox-label"}),Object(u.jsx)(l.b.TextAreaX,{name:"is_pre_sale_text","aria-describedby":"is_pre_sale_text_label"})]})},k=function(e){e.showLabel;var t=e.label,c=void 0===t?"On Sale":t,n=Object(a.a)(e,x);return Object(u.jsxs)("div",{className:"d-flex align-items-center",children:[Object(u.jsx)(l.b.CheckboxInput,Object(r.a)(Object(r.a)({},n),{},{name:"is_on_sale",className:"me-2"})),Object(u.jsx)(l.b.Label,{value:c})]})},I=function(e){var t=e.showLabel,c=void 0!==t&&t,n=e.label,s=void 0===n?"Sale price":n,i=Object(a.a)(e,h);return Object(u.jsxs)(u.Fragment,{children:[c&&Object(u.jsx)(l.b.Label,{value:s,id:"sale_price_label",className:"miq-checkbox-label"}),Object(u.jsx)(l.b.TextInput,Object(r.a)(Object(r.a)({},i),{},{required:!0,type:"number",name:"sale_price","aria-describedby":"sale_price_label",min:"0",step:"0.01"}))]})},q=function(e){var t=e.children,c=e.context,n=e.fields,s=void 0===n?[]:n,o=e.prodSlug,d=Object(a.a)(e,_),b=(d.onSuccess,d.onError,Object(a.a)(d,N));return Object(u.jsx)(l.b,Object(r.a)(Object(r.a)({},b),{},{context:c,onSubmit:d.onSubmit||function(e){if(c&&s){e.preventDefault();var t={};if(s.forEach((function(e){var r=c.values[e];null!=r&&(t[e]=r)})),o)return i.a.patch(o,t).then((function(e){var t;null===d||void 0===d||null===(t=d.onSuccess)||void 0===t||t.call(d,e)})).catch((function(e){return d.onError?d.onError(e):c.handleError(e)}))}},children:t}))};q.NameInput=S,q.DescField=function(e){var t=e.label,c=e.text,n=Object(a.a)(e,b),s=n.placeholder,i=void 0===s?"Give a description to the item":s,o=Object(a.a)(n,j);return Object(u.jsx)(l.b.Field,{label:t,text:c,children:Object(u.jsx)(l.b.TextAreaX,Object(r.a)(Object(r.a)({},o),{},{name:"description",placeholder:i}))})},q.CategoryInput=y,q.RetailPriceInput=w,q.PresaleCheckboxInput=C,q.PresaleTextInput=L,q.OnSaleCheckboxInput=k,q.SalePriceInput=I,q.StageSelect=function(e){var t,c=e.showLabel,s=void 0!==c&&c,i=e.label,o=void 0===i?"Stage":i,d=Object(a.a)(e,f),b=d.stages,j=d.name,m=Object(a.a)(d,g);return Object(u.jsxs)(u.Fragment,{children:[s&&Object(u.jsx)(l.b.Label,{value:o}),Object(u.jsx)(l.b.SelectInput,Object(r.a)(Object(r.a)({},m),{},{required:!0,name:j||"stage",nullValue:{label:"Select stage"},children:null===b||void 0===b||null===(t=b.map)||void 0===t?void 0:t.call(b,(function(e){return Object(n.createElement)(l.b.SelectInput.Option,Object(r.a)(Object(r.a)({},e),{},{key:e.value}))}))}))]})}},352:function(e,t,c){"use strict";c.d(t,"b",(function(){return j})),c.d(t,"a",(function(){return m}));var r=c(4),a=c(1),n=c(5),l=c(6),s=c(342),i=c(0),u=["instance","product"],o=["product"],d=function(e){return Object(i.jsx)(l.b.TextInput,Object(a.a)(Object(a.a)({placeholder:"Nom de l'attribut"},e),{},{required:!0,name:"name",maxLength:30,minLength:3}))},b=function(e){return Object(i.jsx)(l.b.TextInput,Object(a.a)(Object(a.a)({placeholder:"Valeur de l'attribut"},e),{},{required:!0,name:"value",maxLength:99,minLength:3}))},j=function(e){var t=e.instance,c=e.product,a=Object(r.a)(e,u),o=Object(l.c)({name:(null===t||void 0===t?void 0:t.name)||"",value:(null===t||void 0===t?void 0:t.value)||""});if(!t||!t.slug||!c||!c.slug)return null;return Object(i.jsx)(l.b,{context:o,onSubmit:function(e){return e.preventDefault(),s.a.patchAttribute(c.slug,t.slug,o.values).then((function(e){return null===a||void 0===a?void 0:a.onSuccess(e)})).catch((function(e){return o.handleError(e)}))},children:Object(i.jsxs)("div",{className:"d-flex flex-column flex-md-row",style:{alignItems:"end"},children:[Object(i.jsx)("div",{className:"me-md-1",children:Object(i.jsx)(d,{error:o.errors.name})}),Object(i.jsx)("div",{className:"w-100 me-md-1",children:Object(i.jsx)(b,{error:o.errors.value})}),Object(i.jsxs)("div",{className:"d-flex ms-md-1",children:[Object(i.jsx)(n.d,{Icon:n.h.Trash,render:function(e){return Object(i.jsx)("div",{className:"p-3 w-100 d-flex justify-content-center",children:Object(i.jsxs)("div",{className:"w-md-50 d-flex align-items-center justify-content-between",children:[Object(i.jsx)("div",{children:Object(i.jsx)(n.b,{onClick:function(){return s.a.deleteAttribute(c.slug,t.slug).then((function(t){return null===e||void 0===e||e.setOpen(!1),null===a||void 0===a?void 0:a.onSuccess(t)})).catch((function(){var e;null===a||void 0===a||null===(e=a.toast)||void 0===e||e.error({message:"Could not delete attribute."})}))},className:"btn-danger",children:"Supprimer"})}),Object(i.jsx)("div",{children:Object(i.jsx)(n.b,{onClick:function(){return null===e||void 0===e?void 0:e.setOpen(!1)},children:"Annuler"})})]})})},renderHeader:function(e){return Object(i.jsx)("div",{className:"p-3",children:Object(i.jsxs)("div",{className:"fw-bold",children:["Supprimer l'attribut \"",t.name,'"']})})},className:"btn-danger-3 me-1"}),Object(i.jsx)(l.b.Submit,{value:"Save",className:"btn btn-primary-2"})]})]})})};function m(e){var t=e.product,c=Object(r.a)(e,o),a={name:"",value:""},u=Object(l.c)(a);if(!t||!t.slug)return null;return Object(i.jsx)(l.b,{context:u,onSubmit:function(e){return e.preventDefault(),s.a.postAttribute(t.slug,u.values).then((function(e){return u.setValues(a),null===c||void 0===c?void 0:c.onSuccess(e)})).catch((function(e){return u.handleError(e)}))},children:Object(i.jsxs)("div",{className:"d-flex flex-column flex-md-row",style:{alignItems:"end"},children:[Object(i.jsxs)("div",{className:"me-md-1",children:[Object(i.jsx)(l.b.Label,{value:"Name"}),Object(i.jsx)(d,{error:u.errors.name})]}),Object(i.jsxs)("div",{className:"w-100 me-md-1",children:[Object(i.jsx)(l.b.Label,{value:"Value"}),Object(i.jsx)(b,{error:u.errors.value})]}),Object(i.jsx)("div",{className:"ms-md-1",children:Object(i.jsx)(n.e,{type:"submit",className:"btn-primary-3"})})]})})}},367:function(e,t,c){},369:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return C})),c.d(t,"pFormInitial",(function(){return F}));var r=c(4),a=c(1),n=c(8),l=c(2),s=c(24),i=c(9),u=c(6),o=c(5),d=(c(367),c(347)),b=c(342),j=c(345),m=c(352),v=c(348),p=c(344),O=c(343),x=c(346),h=c(0),f=["product"],g=function(e){var t,c=e.product,n=void 0===c?{}:c;Object(r.a)(e,f);return Object(h.jsxs)("div",{className:"product-list-item-card d-flex",children:[Object(h.jsx)("div",{className:"me-1",children:Object(h.jsx)(x.d,Object(a.a)(Object(a.a)({},null===n||void 0===n?void 0:n.cover_data),{},{className:"rounded"}))}),Object(h.jsxs)("div",{className:"flex-1",children:[Object(h.jsxs)("div",{className:"d-flex align-items-center",children:[Object(h.jsx)("span",{className:"product-title me-2",children:n.name}),Object(h.jsx)(x.g,{is_published:null===n||void 0===n||null===(t=n.page)||void 0===t?void 0:t.is_published,pill:!0,short:!0})]}),Object(h.jsx)(O.d,{product:Object(a.a)(Object(a.a)({},n),{},{retail_price:n.retail_price_data,sale_price:n.sale_price_data})})]})]})};function _(e){var t,c=e.state,r=void 0===c?{}:c;return r?r.loading?Object(h.jsx)(x.f,{}):r.data?null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.results.map((function(e){return Object(h.jsx)("div",{className:"d-flex mb-1",children:Object(h.jsx)(g,{product:e})},e.slug)})):null:null}var N=["tab"],S=["prodSlug","product","form"],y=["children","query","onClick"],w=["history"];function C(e){var t=e.location.search,c=new URLSearchParams(t),r=Object(l.useState)({loading:!0,data:null,error:null}),d=Object(n.a)(r,2),j=d[0],m=d[1],v=e.match.params.prodSlug,O=Object(u.c)(F),x=O.setValues;Object(l.useEffect)((function(){if(!v)return null;console.log("reqst detail"),m({loading:!0,data:null,error:null}),b.a.detail(v).then((function(e){m({loading:!1,data:e,error:null}),x(T(e))})).catch((function(e){m({loading:!1,data:null,error:e})}))}),[v,x]);var f=Object(l.useContext)(o.w);if(j.loading)return Object(h.jsx)(o.q,{});var N=null===j||void 0===j?void 0:j.data;if(!N)return null;var S=c.get("tab")||"info",y=e.history,w=Object(a.a)(Object(a.a)({},e),{},{tab:S,prodSlug:v,product:N,setProduct:function(e){return m(Object(a.a)(Object(a.a)({},j),{},{data:Object(a.a)(Object(a.a)({},j.data),e)}))},state:j,setState:m,setError:function(e){return m(Object(a.a)(Object(a.a)({},j),{},{error:e}))},form:O,toast:f}),C=N.prev_slug,k=N.next_slug;return Object(h.jsxs)(i.g,{title:A.viewTitle,text:A.viewText,actions:Object(h.jsxs)("div",{children:[C&&Object(h.jsx)(s.b,{to:p.b.productUpdate(C,c),className:"btn me-1",title:"Voir le produit pr\xe9c\xe9dent",children:"Previous"}),k&&Object(h.jsx)(s.b,{to:p.b.productUpdate(k,c),className:"btn",title:"Voir le produit suivant",children:"Next"})]}),className:D.view,back:null===e||void 0===e?void 0:e.back,children:[Object(h.jsx)("div",{className:"me-1 w-25 d-none d-lg-block",children:Object(h.jsx)(_,Object(a.a)(Object(a.a)({},e),{},{state:null===e||void 0===e?void 0:e.QState,setState:null===e||void 0===e?void 0:e.setQState}))}),Object(h.jsxs)("div",{className:"flex-1",children:[Object(h.jsxs)("div",{className:"d-flex flex-column-reverse flex-md-row align-items-center justify-content-between",children:[Object(h.jsxs)("div",{className:"mb-1",children:[Object(h.jsx)(E,{history:y,query:c,onClick:function(e){return e.set("tab","info")},children:"Info"}),Object(h.jsx)(E,{history:y,query:c,onClick:function(e){return e.set("tab","media")},children:"Media"}),Object(h.jsx)(E,{history:y,query:c,onClick:function(e){return e.set("tab","inventory")},children:"Inventory"}),Object(h.jsx)(E,{history:y,query:c,onClick:function(e){return e.set("tab","settings")},children:"Settings"})]}),Object(h.jsx)("div",{className:"mb-2 min-w-35",children:Object(h.jsx)(g,{product:null===j||void 0===j?void 0:j.data})})]}),Object(h.jsx)(L,Object(a.a)({},w))]})]})}var L=function(e){var t=e.tab,c=Object(r.a)(e,N),n=c.prodSlug,l=c.form,s=c.product,i=c.state,b=c.setProduct,m=c.toast;if(null===i||void 0===i?void 0:i.loading)return Object(h.jsx)(o.q,{});switch(t){case"media":return Object(h.jsx)(k,Object(a.a)({},c));case"inventory":return Object(h.jsx)(I,Object(a.a)({},c));case"settings":return Object(h.jsx)(q,Object(a.a)({},c));default:var O=c.setError,x=s.categories;return Object(h.jsxs)("div",{className:"d-grid grid-md-3 gap-1",children:[Object(h.jsx)("div",{className:"span-md-2",children:Object(h.jsxs)(v.a,{context:l,prodSlug:n,product:s,fields:["name","category","description","retail_price","is_pre_sale","is_pre_sale_text","is_on_sale","sale_price"],onSuccess:function(e){b(e),m.success({message:p.a.product.update_success})},toast:m,children:[Object(h.jsxs)(o.c,{title:"Details",text:"Modifier les informations de cet article.",footer:Object(h.jsx)("div",{className:"sticky",style:{bottom:0},children:Object(h.jsx)("div",{className:"d-flex justify-content-center",children:Object(h.jsx)(u.b.Submit,{value:"Sauvegarder",className:"submit-btn btn btn-primary min-w-25"})})}),className:"mb-1",children:[Object(h.jsx)(u.b.Field,{label:"Nom",text:A.name_field_text,children:Object(h.jsx)(v.a.NameInput,{error:l.errors.name})}),Object(h.jsx)(u.b.Field,{label:"Cat\xe9gorie",text:A.none,children:Object(h.jsx)(v.a.CategoryInput,{categories:x,error:l.errors.category,className:"d-block"})}),Object(h.jsx)(u.b.Field,{label:"Prix",children:Object(h.jsx)(v.a.RetailPriceInput,{error:l.errors.retail_price})}),Object(h.jsx)(u.b.Field,{label:"Pr\xe9-vente",children:Object(h.jsx)(v.a.PresaleCheckboxInput,{label:"Cet article est en pr\xe9-vente",error:l.errors.is_pre_sale})}),l.values.is_pre_sale&&Object(h.jsx)(u.b.Field,{text:"Ajouter un text de pr\xe9-vente.(facultatif)",children:Object(h.jsx)(v.a.PresaleTextInput,{error:l.errors.is_pre_sale_text})}),Object(h.jsx)(u.b.Field,{label:"Promotion",text:"",children:Object(h.jsx)(v.a.OnSaleCheckboxInput,{label:"Cet article est en promo",error:l.errors.is_on_sale})}),l.values.is_on_sale&&Object(h.jsx)(u.b.Field,{label:"Prix r\xe9duit",text:"",children:Object(h.jsx)(v.a.SalePriceInput,{error:l.errors.sale_price})}),Object(h.jsx)(v.a.DescField,{label:"Description",text:A.desc_field_text,error:l.errors.description,placeholder:""})]}),Object(h.jsx)(o.c,{title:"Seo",children:Object(h.jsx)(P,Object(a.a)({},c))})]})}),Object(h.jsx)("div",{className:"bg-gray p-1",children:Object(h.jsxs)("div",{className:"sticky",style:{top:0},children:[Object(h.jsx)("div",{className:"mb-2",children:Object(h.jsx)(j.c,{prodSlug:n,product:s,className:"w-100",onPublishSuccess:function(e){return b(e),null===m||void 0===m?void 0:m.success({message:p.a.product.publish_success})},onUnpublishSuccess:function(e){return b(e),null===m||void 0===m?void 0:m.success({message:p.a.product.unpublish_success})},onError:function(e){O(e)}})}),Object(h.jsx)("div",{className:"mb-2",children:Object(h.jsx)(d.a,{product:s})})]})})]})}},k=function(e){var t=e.product,c=e.setProduct,r=e.toast;return Object(h.jsx)(i.g.Section,{title:"Images",actions:Object(h.jsx)(j.b,{product:t,onCreateSuccess:function(e){c(Object(a.a)(Object(a.a)({},t),e))}}),children:Object(h.jsxs)("div",{className:"d-grid grid-md-3 grid-lg-4",style:{gap:4},children:[Object(h.jsxs)("div",{className:"",children:[Object(h.jsx)(i.k,{slug:null===t||void 0===t?void 0:t.cover,data:t.cover_data,onCreate:function(e){b.a.patch(t.slug,{cover:e.slug}).then((function(e){null===c||void 0===c||c(Object(a.a)(Object(a.a)({},t),e)),null===r||void 0===r||r.success({message:p.a.product.cover_create_success})})).catch((function(e){null===r||void 0===r||r.error({message:p.a.product.cover_update_error})}))},onUpdate:function(e){return null===r||void 0===r||r.success({message:p.a.product.cover_update_success}),null===c||void 0===c?void 0:c(Object(a.a)(Object(a.a)({},t),{},{cover_data:e}))},onDelete:function(){return null===r||void 0===r||r.success({message:p.a.product.cover_delete_success}),null===c||void 0===c?void 0:c(Object(a.a)(Object(a.a)({},t),{},{cover_data:null,cover:null}))},className:"mb-1"}),Object(h.jsx)(j.a,{image:null===t||void 0===t?void 0:t.cover_data})]}),t.images_data.map((function(e){return Object(h.jsx)(o.c,{title:Object(h.jsx)(o.b,{onClick:function(){return b.a.swapCover(t.slug,e.slug).then((function(e){c(e)})).catch((function(e){}))},children:"Set as cover"}),actions:Object(h.jsx)(o.j,{slug:e.slug,label:"",className:"btn-danger-3 ms-1",onSuccess:function(){c(Object(a.a)(Object(a.a)({},t),{},{images_data:t.images_data.filter((function(t){return t.slug!==e.slug})),images:t.images.filter((function(t){return t!==e.slug}))}))}}),footer:Object(h.jsx)(j.a,{image:e}),className:"mb-1",bodyClassName:"p-0",children:Object(h.jsx)(o.i,Object(a.a)(Object(a.a)({},e),{},{className:"product-img"}))},e.slug)}))]})})},I=function(e){var t=Object(l.useState)(!1),c=Object(n.a)(t,2),r=c[0],s=c[1],u=e.product,b=e.setProduct;return Object(h.jsxs)("div",{className:"d-grid grid-md-3 gap-1",children:[Object(h.jsxs)("div",{className:"span-md-2 p-1 bg-gray",children:[Object(h.jsx)(i.g.Section,{title:"Tailles",text:"Ajouter des tailles"}),Object(h.jsxs)(i.g.Section,{title:"Attributes",actions:Object(h.jsx)(o.b,{onClick:function(){return s(!r)},className:"btn-primary-3",children:"Ajouter un attribut"}),children:[r&&Object(h.jsxs)("div",{className:"border-bottom mb-2 pb-3",children:[Object(h.jsx)("p",{className:"text-center mb-3",children:"Ajouter un attribut au produit."}),Object(h.jsx)(m.a,{product:u,onSuccess:function(e){return b(Object(a.a)(Object(a.a)({},u),e))}})]}),Object(h.jsx)("div",{className:"my-3",children:u.attributes.map((function(e){return Object(h.jsx)("div",{className:"mb-1",children:Object(h.jsx)(m.b,{instance:e,product:u,onSuccess:function(e){return b(Object(a.a)(Object(a.a)({},u),e))}})},e.slug)}))})]})]}),Object(h.jsx)("div",{className:"p-1",children:Object(h.jsx)("div",{className:"sticky",style:{top:0},children:Object(h.jsx)("div",{className:"",children:Object(h.jsx)(d.a,{product:u})})})})]})},q=function(e){var t=e.prodSlug,c=e.toast;return Object(h.jsx)("div",{className:"",children:Object(h.jsx)(i.g.Section,{title:"Supprimer cet article",children:Object(h.jsx)(o.b,{className:"btn-danger",onClick:function(){return b.a.delete(t).then((function(){var r;return null===c||void 0===c||c.success({message:p.a.product.delete_success}),e.onDelete?null===e||void 0===e||null===(r=e.onDelete)||void 0===r?void 0:r.call(e,{prodSlug:t}):e.history.push(p.b.productList())})).catch((function(e){return null===c||void 0===c?void 0:c.error({message:p.a.product.delete_error})}))},children:"Delete product"})})})},P=function(e){var t=e.prodSlug,c=e.product,n=e.form;Object(r.a)(e,S);if(!n||!t)return null;return Object(h.jsxs)(u.b,{context:n,onSubmit:function(e){var r,l;e.preventDefault();var s={title:n.values.title,slug_public:n.values.slug_public};return b.a.patchPage(t,s,{title:null===c||void 0===c||null===(r=c.page)||void 0===r?void 0:r.title,slug_public:null===c||void 0===c||null===(l=c.page)||void 0===l?void 0:l.slug_public}).then((function(e){setProduct(Object(a.a)(Object(a.a)({},c),e)),toast.success({message:p.a.product.page_update_success})})).catch((function(e){n.handleError(e),toast.error({message:p.a.product.page_update_error})}))},children:[Object(h.jsx)(u.b.Field,{label:"Meta title",className:"mb-1",children:Object(h.jsx)(u.b.TextInput,{required:!0,name:"title",error:n.errors.title,placeholder:"Give a name to the item",maxLength:99})}),Object(h.jsx)(u.b.Field,{label:"Slug",className:"mb-1",children:Object(h.jsx)(u.b.TextInput,{required:!0,name:"slug_public",error:n.errors.slug_public,placeholder:"Write slug ...",maxLength:99})}),Object(h.jsx)("div",{className:"my-2",children:Object(h.jsx)(u.b.Submit,{value:"Update",className:"btn btn-primary-3"})})]})},E=function(e){var t=e.children,c=e.query,n=e.onClick,l=Object(r.a)(e,y),s=l.history,i=Object(r.a)(l,w);return Object(h.jsx)(o.b,Object(a.a)(Object(a.a)({},i),{},{onClick:function(e){null===n||void 0===n||n(c),function(){var e,t=new URL(window.location.href);null===s||void 0===s||null===(e=s.push)||void 0===e||e.call(s,"".concat(t.pathname,"?").concat(c))}()},children:t}))},F={name:"",description:"",category:"",retail_price:0,is_pre_sale:!1,is_pre_sale_text:"",sale_price:0,is_on_sale:!1,title:"",slug_public:""},T=function(e){var t;return{name:e.name||"",description:e.description||"",category:e.category||"",retail_price:(null===e||void 0===e?void 0:e.retail_price)||0,is_pre_sale:e.is_pre_sale||!1,is_pre_sale_text:e.is_pre_sale_text||"",is_on_sale:e.is_on_sale||!1,sale_price:(null===e||void 0===e?void 0:e.sale_price)||0,title:e.page.title||"",slug_public:(null===e||void 0===e||null===(t=e.page)||void 0===t?void 0:t.slug_public)||""}},A={viewTitle:"Modifier cet article",viewText:"",viewCn:"",name_field_text:"Ajoutez un nom qui d\xe9crit cet article. Les noms peuvent contenir jusqu\u2019\xe0 99 caract\xe8res.\nNous recommandons 65 caract\xe8res au max.",desc_field_text:"Ajoutez les caract\xe9ristiques uniques qui d\xe9crivent cet article.",none:""},D={view:"staff-product-update-view"}}}]);
//# sourceMappingURL=4.ca2123fd.chunk.js.map