"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[319],{5944:function(t,e,s){s.d(e,{L:function(){return o}});var n=s(1135),i=s(7411),r=s(2518),c=s(2485),u=s(715),a=function(t){(0,r.Z)(s,t);var e=(0,c.Z)(s);function s(){return(0,n.Z)(this,s),e.apply(this,arguments)}return(0,i.Z)(s,[{key:"products",value:function(t){return this.get("".concat(this._path,"products/"),{params:t})}},{key:"categories",value:function(t){return this.get("".concat(this._path,"categories/"),{params:t})}},{key:"hits",value:function(t){return this.get("".concat(this._path,"hits/"),{params:t})}}]),s}(u.x5),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,u.eR)(t,"shopy-insights",a)}},2319:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var n=s(8519),i=s(6113),r=(s(7497),s(4390)),c=s(715),u=s(5927),a=s(265),o=s(9309),h=s(5944),l=s(9009);function d(t){var e=t.storeSlug,s=(0,r.lr)(),d=(0,i.Z)(s,1)[0],p=(0,a.QT)((function(){return(0,h.L)({slug:e}).products(d)}),{refreshDeps:[d.get("page"),d.get("__window")]}),x=new u.HM(p.res);return x.isSuccess?(0,l.jsx)(c.ZP.View,{title:(0,l.jsx)(c.oS,{options:["today","yst","last_7","last_14","last_30"]}),text:"Top products",footer:(0,l.jsx)(o.tl,(0,n.Z)((0,n.Z)({},x.data),{},{component:c.ZP.Link,to:!0})),children:(0,l.jsx)(o.iA,{items:x.items,header:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.iA.Th,{}),(0,l.jsx)(o.iA.Th,{children:"Messages"}),(0,l.jsx)(o.iA.Th,{children:"Unique"}),(0,l.jsx)(o.iA.Th,{children:"Total"}),(0,l.jsx)(o.iA.Th,{children:"External"})]}),renderItem:function(t){return(0,l.jsxs)(o.iA.Tr,{children:[(0,l.jsx)(o.iA.Td,{className:"d-grid",children:(0,l.jsx)("div",{className:"text-ellipsis",children:t.path})}),(0,l.jsx)(o.iA.Td,{children:t.msg_count}),(0,l.jsx)(o.iA.Td,{children:t.ip_count}),(0,l.jsx)(o.iA.Td,{children:t.id_count}),(0,l.jsx)(o.iA.Td,{children:t.x_count})]},t.path)}})}):null}}}]);
//# sourceMappingURL=319.f9d354df.chunk.js.map