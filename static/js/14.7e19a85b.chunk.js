(this["webpackJsonp@store/client"]=this["webpackJsonp@store/client"]||[]).push([[14],{349:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return a}));var n=c(9),i=c(2),s=c(8),r=c(37),l=c(32),u=c(0);function a(t){var e=Object(i.useState)({}),c=Object(n.a)(e,2),a=c[0],b=c[1],j=Object(s.c)({title:a.title||""}),o=j.setValues;if(Object(i.useEffect)((function(){r.f.detail("current").then((function(t){b(t),o({title:t.title||""})})).catch((function(t){}))}),[o]),!a||!a.slug)return null;return Object(u.jsxs)(l.a,{title:"Site HomePage Settings",children:[Object(u.jsx)(s.b,{context:j,onSubmit:function(t){return t.preventDefault(),r.f.patch("current",j.values).then((function(t){})).catch((function(t){}))},children:Object(u.jsxs)(l.a.Section,{title:"Index Page Details",children:[Object(u.jsxs)("div",{className:"mb-1",children:[Object(u.jsx)(s.b.Label,{value:"Page title"}),Object(u.jsx)(s.b.TextInput,{required:!0,name:"title",error:j.errors.title})]}),Object(u.jsx)("div",{className:"",children:Object(u.jsx)(s.b.Submit,{value:"Save",className:"btn btn-primary-2"})})]})}),Object(u.jsx)(r.b,{slug:a.slug})]})}}}]);
//# sourceMappingURL=14.7e19a85b.chunk.js.map