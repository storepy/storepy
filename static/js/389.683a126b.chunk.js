"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[389],{2389:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var i=s(8519),n=s(6113),r=s(8129),l=s(5037),d=s(1036),o=s(9286);var a=s(8312),c=s(7497),u=s(715),v=s(9309),m=s(34),x=s(5927),h=s(265),g=s(4390),j=s(9009),p=["hits","itemKey"],_=["settingSlug"],b=function(e){var t=e.data,s=e.top;return(0,j.jsxs)("div",{className:"d-flex align-items-center",title:"".concat(null===t||void 0===t?void 0:t.name,": ").concat(null===t||void 0===t?void 0:t.count),children:[t.img&&(0,j.jsx)("div",{className:"bg-gray-100 rounded",style:{width:48,maxWidth:48},children:(0,j.jsx)("img",{src:(0,x.wD)(t.img),alt:(0,x.bI)(null===t||void 0===t?void 0:t.name,0,4),className:"rounded",style:{objectFit:"cover",width:"100%",height:"auto",aspectRatio:"1/1"}})}),s&&(0,j.jsxs)("div",{className:"ms-1",children:[(0,j.jsx)("div",{className:"text-ellipsis fw-bold",children:null===t||void 0===t?void 0:t.name}),(0,j.jsxs)("div",{className:"text-muted text-sm",children:[null===t||void 0===t?void 0:t.count," vues"]})]})]})},f=function(e){var t=e.hits,s=void 0===t?{}:t,i=e.itemKey,n=void 0===i?"top_products":i,c=(0,a.Z)(e,p).title,u=void 0===c?"":c,m=(null===s||void 0===s?void 0:s[n])||[];if(!Boolean(m.length))return null;var h,g=(h=m,(0,r.Z)(h)||(0,l.Z)(h)||(0,d.Z)(h)||(0,o.Z)()),_=g[0],f=g.slice(1);return(0,j.jsxs)(v.vz,{border:!0,text:u,mainCN:"d-grid gap-2",children:[_&&(0,j.jsx)(b,{top:!0,data:_}),(0,j.jsx)(v.j6,{className:"mt-2",style:{gridAutoColumns:"min-content",gap:6},children:f&&f.map((function(e){return(0,j.jsx)(b,{data:e},(0,x.Vj)())}))})]})},N=function(e){var t=e.settingSlug,s=((0,a.Z)(e,_),(0,g.lr)()),r=(0,n.Z)(s,2),l=r[0],d=r[1],o=l.get("__range"),c=(0,h.QT)((function(){return u.bl.get("shopy-analytics/".concat(t,"/summary/"),{params:l})}),{refreshDeps:[o]}),m=c.res;if(c.loading)return(0,j.jsx)(v.gb,{});var p=new x.HM(m);if(!p.isSuccess)return null;var b=null===p||void 0===p?void 0:p.data,N=b.views_count,y=void 0===N?0:N,k=b.visitors_count,Z=void 0===k?0:k,w=b.sent_message,P=void 0===w?0:w,C=b.compare,S=void 0===C?{}:C;b.count;return(0,j.jsxs)(u.ZP.Section,{title:"Performance",actions:(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)(v.zx,{onClick:function(){return d((0,i.Z)((0,i.Z)({},l),{},{__range:"today"}))},className:(0,x.UT)(["btn me-1","today"===o&&"btn-primary"]),children:"Today"}),(0,j.jsx)(v.zx,{onClick:function(){return d((0,i.Z)((0,i.Z)({},l),{},{__range:"week"}))},className:(0,x.UT)(["btn me-1","week"===o&&"btn-primary"]),children:"Week"}),(0,j.jsx)(v.zx,{onClick:function(){return d((0,i.Z)((0,i.Z)({},l),{},{__range:"month"}))},className:(0,x.UT)(["btn me-1","month"===o&&"btn-primary"]),children:"Month"}),(0,j.jsx)(v.zx,{onClick:function(){l.delete("__range"),d((0,i.Z)({},l))},className:(0,x.UT)(["btn me-1",!o&&"btn-primary"]),children:"All"})]}),children:[(0,j.jsxs)("div",{className:"d-grid gap-2 mb-3",children:[(0,j.jsxs)("div",{className:"",children:["Messages: ",P,(null===S||void 0===S?void 0:S.sent_message)>0&&(0,j.jsxs)("span",{className:"text-sm text-muted",children:["/",S.sent_message]})]}),(0,j.jsxs)("div",{className:"",children:["Visitors: ",Z,(null===S||void 0===S?void 0:S.visitors_count)>0&&(0,j.jsxs)("span",{className:"text-sm text-muted",children:["/",S.visitors_count]})]}),(0,j.jsxs)("div",{className:"",children:["Page views: ",y,(null===S||void 0===S?void 0:S.views_count)>0&&(0,j.jsxs)("span",{className:"text-sm text-muted",children:["/",S.sent_message]})]})]}),(0,j.jsxs)("div",{className:"d-grid grid-md-2 gap-2",children:[(0,j.jsx)(f,{hits:null===p||void 0===p?void 0:p.data,title:"Top viewed products",itemKey:"top_products"}),(0,j.jsx)(f,{hits:null===p||void 0===p?void 0:p.data,title:"Top viewed categories",itemKey:"top_cats"})]})]})};function y(){var e,t,s;(0,h.jr)("Store");var i=c.useContext(m.h2),n=i.isLoaded,r=i.products,l=i.orders,d=i.cats,o=i.shopy_settings,a=i.site,x=(void 0===a?{}:a).settings;return n?(0,j.jsxs)(u.ZP.View,{title:"Commerce",className:"no-bg",back:"/staff/",actions:(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)(u.ZP.NavLink,{to:"notifications/",className:"btn btn-round btn-secondary-3",title:"Action needed",children:(0,j.jsx)(v.PJ.P_,{})}),(0,j.jsx)(u.ZP.NavLink,{to:"settings/",className:"btn btn-round btn-secondary-3",title:"Shop settings",children:(0,j.jsx)(v.PJ.lk,{})})]}),children:[(0,j.jsx)(u.ZP.Section,{children:(0,j.jsxs)("div",{className:"d-grid grid-2 grid-sm-3 grid-md-4 grid-lg-6",children:[(null===o||void 0===o||null===(e=o.config)||void 0===e?void 0:e.has_suppliers)&&(0,j.jsx)(k,{title:"Supplier Orders",tab:"./",link:{to:"orders/",text:"View all orders",perms:["store.view_supplierorder"]},children:(0,j.jsx)("h3",{children:(null===l||void 0===l?void 0:l.count)||0})}),(0,j.jsx)(k,{title:"Products",tab:"./?tab=products",link:{to:"products",text:"View all products",perms:["store.view_product"]},children:(0,j.jsx)("h3",{children:(null===r||void 0===r?void 0:r.count)||0})}),(0,j.jsx)(k,{tab:"./?tab=categories",title:"Categories",link:{to:"categories",text:"View all categories",perms:["store.view_category"]},children:(0,j.jsx)("h3",{children:(null===d||void 0===d?void 0:d.count)||0})})]})}),x&&(0,j.jsx)(N,{settingSlug:x}),(0,j.jsx)(u.ZP.Section,{title:"Products by category",className:"my-2",children:null===d||void 0===d||null===(t=d.cat_count)||void 0===t||null===(s=t.filter((function(e){return e.category__name})))||void 0===s?void 0:s.map((function(e,t){var s=e.category__name,i=e.count;return(0,j.jsxs)("div",{children:[s,": ",i]},t)}))})]}):null}var k=function(e){var t=e.children,s=e.title,i=e.link,n=e.tab,r=void 0===n?"./":n,l=i.to;return(0,j.jsxs)("div",{className:"card-link mb-3",children:[(0,j.jsxs)(u.ZP.NavLink,{to:r,children:[s&&(0,j.jsx)("div",{className:"card-link-title",children:s}),t]}),(0,j.jsx)(u.ZP.Link,{to:l,requiredPerms:i.perms,children:(null===i||void 0===i?void 0:i.text)&&"".concat(i.text," \xbb")})]})}}}]);
//# sourceMappingURL=389.683a126b.chunk.js.map