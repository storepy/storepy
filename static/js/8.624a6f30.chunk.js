(this["webpackJsonp@store/client"]=this["webpackJsonp@store/client"]||[]).push([[8],{336:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var c=a(4),i=a(19),n=a(1),s=a(3),d=a(2),l=a(5),j=a(16),r=a(106),b=a(107),o=a(104),O=(a(336),a(105)),x=a(0),u=["isUpdated"],m=function(e){var t=function(t){t.isUpdated&&(e.onDataChange(t),e.context.setEdit(!1))};return Object(x.jsx)("div",{className:"",children:Object(x.jsx)(O.d,{section:e.data,imgSlug:e.data.image?e.data.image.slug:null,onCreate:t,onUpdate:t,children:Object(x.jsx)(l.f,Object(n.a)({},e.data.image))})})},h=Object(d.forwardRef)((function(e,t){var a=e.data,d=void 0===a?{}:a,l=Object(j.c)({title:d.title||"",text:d.text||""}),O=d.slug,h=d.type,p=function(t){var a,s=t.name,l=t.value;if(O){var j=Object(b.a)(Object(n.a)(Object(n.a)({},d),{},Object(i.a)({type:h},s,l)));return o.b.patch(O,(a={type:h},Object(i.a)(a,s,l),Object(i.a)(a,"html",j),a)).then((function(t){var a=t.isUpdated;Object(c.a)(t,u);a&&e.context.setEdit(!1)}))}};return Object(x.jsx)(j.a,{value:l,children:Object(x.jsxs)("div",{id:e.id,ref:t,className:Object(s.f)([e.className]),children:[Object(x.jsx)("div",{className:"text-bold",children:"Customize your landing."}),Object(x.jsxs)(r.a,{children:[Object(x.jsx)("div",{className:"mb-1",children:Object(x.jsx)(j.b.TextInput,{name:"title",placeholder:"Write title ...",onSave:p,maxLength:50})}),Object(x.jsx)("div",{className:"mb-1",children:Object(x.jsx)(j.b.TextArea,{name:"text",placeholder:"Write text ...",onSave:p,maxLength:99})}),Object(x.jsx)(m,Object(n.a)({},e))]})]})})}));t.default=h,s.b&&(h.displayName="CloseTemplateSection")}}]);
//# sourceMappingURL=8.624a6f30.chunk.js.map