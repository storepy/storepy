"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[348],{348:function(e,n,t){t.r(n),t.d(n,{HitListFilterForm:function(){return f},default:function(){return h}});var r=t(9062),i=t(6009),s=t(2411),c=t(1408),l=t(3896),u=t(125),o=t(653),a=t(5621),d=t(8136),f=function(e){Object.assign({},e);var n=(0,c.lr)(),t=(0,i.Z)(n,2),r=t[0],l=t[1],u=s.useState(r.get("q")||""),o=(0,i.Z)(u,2),a=o[0];o[1];return console.log(r),(0,d.jsx)("form",{action:".",method:"GET",onSubmit:function(e){e.preventDefault(),a?r.set("q",a):r.delete("q"),r.delete("page"),l(r)}})};function h(){var e=(0,c.lr)(),n=(0,i.Z)(e,2),t=n[0],s=n[1],f=(0,a.jB)(),h=f.res,j=f.loading,x=new l.HM(h);return j?(0,d.jsx)(u.gb,{}):x.isSuccess?(0,d.jsx)(o.Z,{header:(0,d.jsx)(d.Fragment,{children:(0,r.Z)(t.keys()).map((function(e){return(0,d.jsx)("button",{className:"me-1 btn",onClick:function(){t.delete(e),s(t)},children:"".concat(t.get(e)," x")},e)}))}),children:x.items.map((function(e){var n=e.referrer,r=e.path,i=e.user_agent;return(0,d.jsxs)("div",{className:"mb-2",children:[(0,d.jsx)("div",{children:(0,d.jsx)("button",{onClick:function(){t.set("path",r),s(t)},children:r})}),(0,d.jsx)("div",{children:e.ip}),(0,d.jsx)("div",{children:e.url}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("button",{onClick:function(){t.set("ref",n),s(t)},children:n})}),n&&(0,d.jsx)("div",{children:(0,d.jsx)("button",{onClick:function(){t.set("ua",i),s(t)},children:i})})]},(0,l.Vj)())}))}):null}}}]);
//# sourceMappingURL=348.8a3a19ff.chunk.js.map