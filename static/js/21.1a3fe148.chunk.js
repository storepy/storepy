(this["webpackJsonp@store/client"]=this["webpackJsonp@store/client"]||[]).push([[21],{372:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return d}));var n=c(1),a=c(8),i=c(2),l=c(6),r=c(33),s=c(5),o=c(9),u=c(35),b=c(0);function d(e){var t=Object(i.useState)({}),c=Object(a.a)(t,2),d=c[0],j=c[1],v=Object(l.c)({title:d.title||""}),f=v.setValues;if(Object(i.useEffect)((function(){r.f.detail("current").then((function(e){j(e),f({title:e.title||""})})).catch((function(e){}))}),[f]),!d||!d.slug)return null;return Object(b.jsxs)(u.a,{title:"Site HomePage Settings",back:null===e||void 0===e?void 0:e.back,children:[Object(b.jsx)(l.b,{context:v,onSubmit:function(e){return e.preventDefault(),r.f.patch("current",v.values).then((function(e){})).catch((function(e){}))},children:Object(b.jsxs)(u.a.Section,{title:"Index Page Details",children:[Object(b.jsxs)("div",{className:"mb-1",children:[Object(b.jsx)(l.b.Label,{value:"Meta title"}),Object(b.jsx)(l.b.TextInput,{required:!0,name:"title",error:v.errors.title})]}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)(l.b.Submit,{value:"Save",className:"btn btn-primary-2"})})]})}),Object(b.jsx)(u.a.Section,{title:"Cover",actions:Object(b.jsx)(s.b,{children:"Add cover"}),children:Object(b.jsx)(o.k,{slug:null===d||void 0===d?void 0:d.cover,data:d.cover_data,onCreate:function(t){r.f.patch("current",{cover:t.slug}).then((function(t){var c;j(Object(n.a)(Object(n.a)({},d),t)),null===e||void 0===e||null===(c=e.toast)||void 0===c||c.success({message:"Page cover added."})})).catch((function(t){var c;null===e||void 0===e||null===(c=e.toast)||void 0===c||c.error({message:"Could not upload cover image."})}))},onUpdate:function(t){var c;return null===e||void 0===e||null===(c=e.toast)||void 0===c||c.success({message:"Page cover updated."}),j(Object(n.a)(Object(n.a)({},d),{},{cover_data:t}))},onDelete:function(){return j(Object(n.a)(Object(n.a)({},d),{},{cover_data:null,cover:null}))},className:"mb-1"})}),Object(b.jsx)(r.c,{})]})}}}]);
//# sourceMappingURL=21.1a3fe148.chunk.js.map