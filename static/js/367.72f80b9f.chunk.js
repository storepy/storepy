"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[367],{3052:function(t,e,n){n.d(e,{L:function(){return o}});var s=n(5561),i=n(1253),r=n(4733),c=n(2562),u=n(5789),a=function(t){(0,r.Z)(n,t);var e=(0,c.Z)(n);function n(){return(0,s.Z)(this,n),e.apply(this,arguments)}return(0,i.Z)(n,[{key:"products",value:function(t){return this.get("".concat(this._path,"products/"),{params:t})}},{key:"categories",value:function(t){return this.get("".concat(this._path,"categories/"),{params:t})}},{key:"hits",value:function(t){return this.get("".concat(this._path,"hits/"),{params:t})}}]),n}(u.x5),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,u.eR)(t,"shopy-insights",a)}},4367:function(t,e,n){n.r(e),n.d(e,{default:function(){return l}});var s=n(3872),i=n(2551),r=(n(7406),n(8427)),c=n(5789),u=n(9474),a=n(2050),o=n(3052),h=n(7457);function l(t){var e=t.storeSlug,n=(0,r.lr)(),l=(0,i.Z)(n,1)[0],d=(0,u.QT)((function(){return(0,o.L)({slug:e}).products(l)}),{refreshDeps:[l.get("page"),l.get("__window")]}),p=new u.F6(d.res);return p.isSuccess?(0,h.jsx)(c.ZP.View,{title:(0,h.jsx)(c.oS,{options:["today","yst","last_7","last_14","last_30"]}),text:"Top products",footer:(0,h.jsx)(a.tl,(0,s.Z)((0,s.Z)({},p.pagination),{},{component:c.ZP.Link,to:!0})),children:(0,h.jsx)(a.iA,{items:p.items,header:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.iA.Th,{}),(0,h.jsx)(a.iA.Th,{children:"Messages"}),(0,h.jsx)(a.iA.Th,{children:"Unique"}),(0,h.jsx)(a.iA.Th,{children:"Total"}),(0,h.jsx)(a.iA.Th,{children:"External"})]}),renderItem:function(t){return(0,h.jsxs)(a.iA.Tr,{children:[(0,h.jsx)(a.iA.Td,{className:"d-grid",children:(0,h.jsx)("div",{className:"text-ellipsis",children:t.path})}),(0,h.jsx)(a.iA.Td,{children:t.msg_count}),(0,h.jsx)(a.iA.Td,{children:t.ip_count}),(0,h.jsx)(a.iA.Td,{children:t.id_count}),(0,h.jsx)(a.iA.Td,{children:t.x_count})]},t.path)}})}):null}}}]);
//# sourceMappingURL=367.72f80b9f.chunk.js.map