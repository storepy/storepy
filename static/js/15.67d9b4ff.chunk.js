(this["webpackJsonp@store/client"]=this["webpackJsonp@store/client"]||[]).push([[15],{354:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return O}));var s=c(9),n=c(1),a=c(4),r=c(2),i=c(23),u=c(3),j=c(5),l=c(32),o=c(48),m=c(0),b=["image"],d=function(e){var t=e.image,c=Object(a.a)(e,b);return t&&t.slug?Object(m.jsxs)(j.t.Tr,{children:[Object(m.jsx)(j.t.Td,{className:"text-gray-800",children:Object(m.jsx)(i.b,{to:"".concat(Object(u.f)(c.match.url)).concat(t.slug,"/"),children:Object(m.jsxs)("div",{className:"d-flex",children:[Object(m.jsx)(j.j,Object(n.a)({},t)),Object(m.jsxs)("div",{className:"ms-1",children:[Object(m.jsx)("div",{className:"img-name",children:t.name_truncated}),Object(m.jsx)("span",{className:"img-created text-sm text-muted",children:t.user.username})]})]})})}),Object(m.jsx)(j.t.Td,{children:t.size})]}):null};function O(e){var t=Object(r.useState)({results:[]}),c=Object(s.a)(t,2),a=c[0],i=c[1];Object(r.useEffect)((function(){o.a.list().then((function(e){i(e)})).catch((function(e){setStatus("error"),toasts.error({message:"Something went wrong"})}))}),[]);return Object(m.jsx)(l.a,{title:"Images",children:Object(m.jsx)(j.n,{className:"w-100",items:a.results,renderItem:function(t){return Object(r.createElement)(d,Object(n.a)(Object(n.a)({},e),{},{image:t,key:t.slug}))},pagination:{count:a.count,next:a.next,previous:a.previous,onPreviousClick:function(){},onNextClick:function(){}}})})}}}]);
//# sourceMappingURL=15.67d9b4ff.chunk.js.map