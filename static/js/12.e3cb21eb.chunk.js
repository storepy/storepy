(this["webpackJsonp@store/client"]=this["webpackJsonp@store/client"]||[]).push([[12],{111:function(e,t,c){"use strict";c.d(t,"a",(function(){return u}));var r=c(23),n=c(36),a=c(28),o=c(27),u=new(function(e){Object(a.a)(c,e);var t=Object(o.a)(c);function c(e){return Object(r.a)(this,c),t.call(this,e)}return Object(n.a)(c,[{key:"patchPage",value:function(e,t,c){return this.patchPath("".concat(this.path).concat(e,"/page/"),t,c)}}]),c}(c(3).d))("products/")},119:function(e,t,c){"use strict";c.d(t,"f",(function(){return _})),c.d(t,"c",(function(){return P})),c.d(t,"g",(function(){return L})),c.d(t,"b",(function(){return T})),c.d(t,"e",(function(){return k})),c.d(t,"d",(function(){return D})),c.d(t,"a",(function(){return U}));var r=c(25),n=c(19),a=c(1),o=c(4),u=c(2),s=c(20),i=c(16),l=c(9),d=c(5),b=c(111),j=c(0),m=["product"],p=["onSuccess","onError"],f=["product","placeholder","form"],h=["onSuccess","onError"],O=["product","placeholder","form","label"],v=["onSuccess","onError"],g=["product","placeholder","form"],x=["children","form"],S=["onSuccess","onError"],E=["product"],N=["image"],C=["children","product"],I=function(e){var t=e.product;Object(o.a)(e,m);return t?Object(j.jsx)(d.m.Tr,{className:"",children:Object(j.jsx)(d.m.Td,{className:"w-100",children:Object(j.jsx)(s.b,{to:"/staff/shop/products/".concat(t.slug,"/"),children:Object(j.jsx)("div",{className:"mb-1",title:t.name,children:t.name})})})}):null},_=function(e){var t=e.data,c=void 0===t?{results:[]}:t;return Object(j.jsx)("div",{children:Object(j.jsx)(d.j,{className:"w-100",items:c.results,renderItem:function(t){return Object(u.createElement)(I,Object(a.a)(Object(a.a)({},e),{},{product:t,key:t.slug}))},pagination:{count:c.count,next:c.next,previous:c.previous,onPreviousClick:function(e){},onNextClick:function(e){}}})})},w=function(e){var t=e.onSuccess,c=e.onError,r=Object(o.a)(e,p),n=r.product,u=r.placeholder,s=void 0===u?"Give a name to the item":u,l=r.form,d=Object(o.a)(r,f);return l?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b.Label,{value:"Name",className:"mb-1"}),Object(j.jsx)(i.b.TextInput,Object(a.a)(Object(a.a)({},d),{},{required:!0,name:"name",onSave:function(e){var r=e.value;if(r&&n&&n.slug)return b.a.patch(n.slug,{name:r},{name:n.name}).then((function(e){if(t)return t(e)})).catch((function(e){if(c)return c(e)}))},error:l.errors.name,placeholder:s,maxLength:99}))]}):null},P=function(e){var t=e.onSuccess,c=e.onError,r=Object(o.a)(e,h),u=r.product,s=r.placeholder,l=void 0===s?"Give a description to the item":s,d=r.form,m=r.label,p=Object(o.a)(r,O);return u&&d?Object(j.jsxs)(j.Fragment,{children:[m&&Object(j.jsx)(i.b.Label,{value:"Description",className:"mb-1"}),Object(j.jsx)(i.b.TextAreaX,Object(a.a)(Object(a.a)({},p),{},{name:"description",onSave:function(e){var r=e.name,a=e.value;return b.a.patch(u.slug,Object(n.a)({},r,a),Object(n.a)({},r,u[r])).then((function(e){if(t)return t(e)})).catch((function(e){if(c)return c(e)}))},error:d.errors.description,placeholder:l}))]}):null},L=function(e){var t=e.children,c=e.form,r=Object(o.a)(e,x);return c?Object(j.jsx)(i.b,Object(a.a)(Object(a.a)({},r),{},{context:c,children:t})):null};L.NameInput=w,L.DescriptionInput=P,L.SlugPublicInput=function(e){var t=e.onSuccess,c=e.onError,r=Object(o.a)(e,v),n=r.product,u=r.placeholder,s=void 0===u?"Seo slug ...":u,l=r.form,d=Object(o.a)(r,g);return n&&l?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b.Label,{value:"Slug",className:"mb-1"}),Object(j.jsx)(i.b.TextInput,Object(a.a)(Object(a.a)({},d),{},{required:!0,name:"slug_public",onSave:function(e){var r=e.value;return b.a.patch(n.slug,{slug_public:r},{slug_public:n.slug_public}).then((function(e){if(t)return t(e)})).catch((function(e){if(c)return c(e)}))},error:l.errors.slug_public,placeholder:s,maxLength:99}))]}):null};var T=function(e){var t=e.onSuccess,c=e.onError,r=Object(o.a)(e,S),n=Object(i.c)({name:""});return Object(j.jsx)(i.b,Object(a.a)(Object(a.a)({},r),{},{context:n,onSubmit:function(e){return e.preventDefault(),b.a.post({name:n.values.name}).then((function(e){if(t)return t(e)})).catch((function(e){if(c)return c(e);n.handleError(e)}))},children:Object(j.jsx)(w,{form:n,placeholder:"Give a name to the new item ..."})}))},k=function(e){var t=e.product,c=Object(o.a)(e,E);return t&&t.slug?Object(j.jsx)(d.i,{multiple:!0,onCreate:function(e){e=e.filter((function(e){return e&&e.slug})),b.a.patch(t.slug,{images:[].concat(Object(r.a)(t.images),Object(r.a)(e.map((function(e){return e.slug}))))}).then((function(e){c.onCreateSuccess&&c.onCreateSuccess(e)})).catch((function(e){c.onCreateError&&c.onCreateError(e)}))}}):null},D=function(e){var t=e.image,c=Object(o.a)(e,N),r=Object(i.c)({alt_text:t.alt_text||""});return Object(j.jsx)(i.a,{value:r,children:Object(j.jsx)(l.h,{required:!0,image:t,onSuccess:c.onSuccess,onError:c.onError,placeholder:"Add an alternative text ..."})})},U=function(e){var t=e.children,c=e.product,r=Object(o.a)(e,C);if(!c||!c.slug)return null;return Object(j.jsx)(d.i,{slug:c.cover_data?c.cover_data.slug:null,onCreate:function(e){var t=e.slug;b.a.patch(c.slug,{cover:t}).then((function(e){r.onCreateSuccess&&r.onCreateSuccess(e)})).catch((function(e){r.onCreateError&&r.onCreateError(e)}))},onUpdate:function(e){r.onUpdateSuccess&&r.onUpdateSuccess(e)},className:"product-cover-upload-button",children:t})}},341:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return j}));var r=c(1),n=c(19),a=c(11),o=c(2),u=c(9),s=c(16),i=c(5),l=c(111),d=c(119),b=c(0);function j(e){var t=e.match.params.prodSlug,c=Object(o.useState)(null),j=Object(a.a)(c,2),m=j[0],p=j[1],f=Object(o.useContext)(i.o),h=Object(s.c)({name:"",description:"",title:"",slug_public:""}),O=h.setValues;if(Object(o.useEffect)((function(){l.a.detail(t).then((function(e){p(e),O({name:e.name||"",description:e.description||"",title:e.page.title||"",slug_public:e.slug_public||""})})).catch((function(e){!e.response||(f.error({message:"Something went wrong"}),e.response.status)}))}),[t,O,f]),!m)return null;return Object(b.jsxs)(u.g,{title:h.values.name,className:"product-update-view",children:[Object(b.jsxs)("div",{className:"view-header d-flex flex-column flex-md-row mb-2",children:[Object(b.jsxs)("div",{className:"cover",children:[Object(b.jsx)(d.a,{product:m,onCreateSuccess:function(e){p(e),f.success({message:"Product cover updated."})},onCreateError:function(){f.error({message:"Could not upload cover image."})},onUpdateSuccess:function(e){p(Object(r.a)(Object(r.a)({},m),{},{cover:e.slug,cover_data:e})),f&&f.success({message:"Product cover updated."})},onUpdateError:function(){f.error({message:"Could not upload cover image."})},children:Object(b.jsx)(i.h,Object(r.a)(Object(r.a)({},m.cover_data),{},{className:"product-cover"}))}),m.cover&&Object(b.jsx)(i.g,{label:"Delete cover",className:"btn-danger-3",slug:m.cover_data.slug})]}),Object(b.jsx)("div",{className:"ms-1 ms-md-2",children:Object(b.jsx)("div",{className:"text-md fw-bold",children:m.name})})]}),Object(b.jsxs)(d.g,{form:h,product:m,children:[Object(b.jsxs)(u.g.Section,{title:"Details",children:[Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsx)(d.g.NameInput,{product:m,form:h,onSuccess:function(e){p(e),f.success({message:"Item updated."})},onError:function(e){h.handleError(e),f.error({message:"Could not update item."})}})}),Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsx)(d.g.DescriptionInput,{product:m,form:h,label:!0,onSuccess:function(e){p(e),f.success({message:"Item updated."})},onError:function(e){h.handleError(e),f.error({message:"Could not update item."})}})})]}),Object(b.jsx)(u.g.Section,{title:"Price"}),Object(b.jsx)(u.g.Section,{title:"Images"}),Object(b.jsxs)(u.g.Section,{title:"Seo",children:[Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(s.b.Label,{value:"Title",className:"mb-1"}),Object(b.jsx)(s.b.TextInput,{name:"title",onSave:function(e){var c=e.name,r=e.value;l.a.patchPage(t,Object(n.a)({},c,r),Object(n.a)({},c,m[c])).then((function(e){p(e),f.success({message:"Item updated."})})).catch((function(e){f.error({message:"Could not update item."})}))},error:h.errors.name,placeholder:"Give a name to the item",maxLength:99})]}),Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsx)(d.g.SlugPublicInput,{product:m,form:h,onSuccess:function(e){p(e),f.success({message:"Item updated."})},onError:function(e){h.handleError(e),f.error({message:"Could not update item."})}})})]})]})]})}}}]);
//# sourceMappingURL=12.e3cb21eb.chunk.js.map