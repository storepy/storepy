"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[593],{4593:function(i,e,t){t.r(e),t.d(e,{default:function(){return x}});var s=t(3251),n=t(4384),l=t(7406),o=t(5789),d=t(2050),r=t(9450),c=t(810),a=t(9474),u=t(9157),v=t(7457),m=["settingSlug"],h=function(i){i.settingSlug,(0,n.Z)(i,m);var e=(0,u.lr)(),t=((0,s.Z)(e,1)[0].get("__window"),l.useContext(r.h2).stats);return t?(0,v.jsx)(o.ZP.Section,{title:"Insights",actions:(0,v.jsxs)("div",{className:"d-flex align-items-center",children:[(0,v.jsx)(o.oS,{options:["today","last_7","last_30"]}),(0,v.jsx)(o.ZP.Link,{to:"insights",className:"btn btn-primary-3 ms-1",children:"Insights>"})]}),children:(0,v.jsxs)("div",{className:"d-grid gap-2 mb-3",children:[(0,v.jsxs)("div",{className:"",children:["Messages: ",null===t||void 0===t?void 0:t.msg_count]}),(0,v.jsxs)("div",{className:"",children:["Visitors: ",null===t||void 0===t?void 0:t.visitor_count]}),(0,v.jsxs)("div",{className:"",children:["Page views: ",null===t||void 0===t?void 0:t.views_count]})]})}):null};function x(){var i,e,t,s,n;(0,a.jr)("Store");var u=l.useContext(r.h2),m=(u.isLoaded,u.products),x=u.orders,j=u.cats,p=u.shopy_settings,b=u.site,N=void 0===b?{}:b,_=u.stats,f=N.settings;return(0,v.jsxs)(o.ZP.View,{title:"Commerce",className:"no-bg",back:"/staff/",actions:(0,v.jsxs)("div",{className:"d-flex",children:[(0,v.jsx)(o.ZP.NavLink,{to:"notifications/",className:"btn btn-round btn-secondary-3",title:"Action needed",children:(0,v.jsx)(d.PJ.P_,{})}),(0,v.jsx)(o.ZP.NavLink,{to:"settings/",className:"btn btn-round btn-secondary-3",title:"Shop settings",children:(0,v.jsx)(d.PJ.lk,{})})]}),children:[(0,v.jsx)(o.ZP.Section,{children:(0,v.jsxs)("div",{className:"d-grid grid-2 grid-sm-3 grid-md-4 grid-lg-6",children:[(null===p||void 0===p||null===(i=p.config)||void 0===i?void 0:i.has_suppliers)&&(0,v.jsx)(g,{title:"Supplier Orders",tab:"./",link:{to:"orders/",text:"View all orders",perms:["store.view_supplierorder"]},children:(0,v.jsx)("h3",{children:(null===x||void 0===x?void 0:x.count)||0})}),(0,v.jsx)(g,{title:"Products",tab:"./?tab=products",link:{to:"products/",text:"View all products",perms:["store.view_product"]},children:(0,v.jsx)("h3",{children:(null===m||void 0===m?void 0:m.count)||0})}),(0,v.jsx)(g,{tab:"./?tab=categories",title:"Categories",link:{to:"categories/",text:"View all categories",perms:["store.view_category"]},children:(0,v.jsx)("h3",{children:(null===j||void 0===j?void 0:j.count)||0})})]})}),f&&(0,v.jsx)(h,{settingSlug:f}),(0,v.jsx)(o.ZP.Section,{title:"Produits les plus vus",className:"my-2",children:(0,v.jsx)("div",{className:"d-grid grid-5 grid-md-10 gap-2",children:null===_||void 0===_||null===(e=_.prods)||void 0===e?void 0:e.map((function(i){var e;return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{style:{position:"relative"},children:[(0,v.jsx)("img",{src:(0,c.wD)(null===i||void 0===i||null===(e=i.cover_data)||void 0===e?void 0:e.thumb_sq),title:"(".concat(null===i||void 0===i?void 0:i.count,") ").concat(null===i||void 0===i?void 0:i.name),alt:"".concat(null===i||void 0===i?void 0:i.name,":").concat(null===i||void 0===i?void 0:i.count),className:"rounded",style:{objectFit:"cover",width:"100%",height:"auto",aspectRatio:"1/1"}}),(0,v.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{position:"absolute",bottom:10,left:5,padding:"2px 4px",backgroundColor:"white",borderRadius:6},children:null===i||void 0===i?void 0:i.count})]}),(0,v.jsx)("div",{className:"text-sm text-ellipsis",children:null===i||void 0===i?void 0:i.name})]},i.name)}))})}),(0,v.jsx)(o.ZP.Section,{title:"Cat\xe9gories les plus vues",className:"my-2",children:(0,v.jsx)("div",{className:"d-grid grid-5 grid-md-10 gap-2",children:null===_||void 0===_||null===(t=_.cats)||void 0===t?void 0:t.map((function(i){var e;return(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{style:{position:"relative"},children:[(0,v.jsx)("img",{src:(0,c.wD)(null===i||void 0===i||null===(e=i.cover_data)||void 0===e?void 0:e.thumb_sq),title:"(".concat(null===i||void 0===i?void 0:i.count,") ").concat(null===i||void 0===i?void 0:i.name),alt:"".concat(null===i||void 0===i?void 0:i.name,":").concat(null===i||void 0===i?void 0:i.count),className:"rounded",style:{objectFit:"cover",width:"100%",height:"auto",aspectRatio:"1/1"}}),(0,v.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:{position:"absolute",bottom:10,left:5,padding:"2px 4px",backgroundColor:"white",borderRadius:6},children:null===i||void 0===i?void 0:i.count})]}),(0,v.jsx)("div",{className:"text-sm text-ellipsis",children:null===i||void 0===i?void 0:i.name})]},i.name)}))})}),(0,v.jsx)(o.ZP.Section,{title:"Nombre de produits par categorie",className:"my-2",children:null===j||void 0===j||null===(s=j.cat_count)||void 0===s||null===(n=s.filter((function(i){return i.category__name})))||void 0===n?void 0:n.map((function(i,e){var t=i.category__name,s=i.count;return(0,v.jsxs)("div",{children:[t,": ",s]},e)}))})]})}var g=function(i){var e=i.children,t=i.title,s=i.link,n=i.tab,l=void 0===n?"./":n,d=s.to;return(0,v.jsxs)("div",{className:"card-link mb-3",children:[(0,v.jsxs)(o.ZP.NavLink,{to:l,children:[t&&(0,v.jsx)("div",{className:"card-link-title",children:t}),e]}),(0,v.jsx)(o.ZP.Link,{to:d,requiredPerms:s.perms,children:(null===s||void 0===s?void 0:s.text)&&"".concat(s.text," \xbb")})]})}}}]);
//# sourceMappingURL=593.4a4efb87.chunk.js.map