"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[389],{2389:function(e,s,t){t.r(s),t.d(s,{default:function(){return f}});var i=t(6113),n=t(8129),d=t(5037),l=t(1036),o=t(9286);var r=t(8312),a=t(7497),c=t(715),u=t(9309),v=t(34),m=t(5927),x=t(265),h=t(4390),g=t(9009),j=["hits","itemKey"],p=["settingSlug"],_=function(e){var s=e.data,t=e.top;return(0,g.jsxs)("div",{className:"d-flex align-items-center",title:"".concat(null===s||void 0===s?void 0:s.name,": ").concat(null===s||void 0===s?void 0:s.count),children:[s.img&&(0,g.jsx)("div",{className:"bg-gray-100 rounded",style:{width:48,maxWidth:48},children:(0,g.jsx)("img",{src:(0,m.wD)(s.img),alt:(null===s||void 0===s?void 0:s.name)&&(0,m.bI)(null===s||void 0===s?void 0:s.name,0,4),className:"rounded",style:{objectFit:"cover",width:"100%",height:"auto",aspectRatio:"1/1"}})}),t&&(0,g.jsxs)("div",{className:"ms-1",children:[(0,g.jsx)("div",{className:"text-ellipsis fw-bold",children:null===s||void 0===s?void 0:s.name}),(0,g.jsxs)("div",{className:"text-muted text-sm",children:[null===s||void 0===s?void 0:s.count," vues"]})]})]})},N=function(e){var s=e.hits,t=void 0===s?{}:s,i=e.itemKey,a=void 0===i?"top_products":i,c=(0,r.Z)(e,j).title,v=void 0===c?"":c,x=(null===t||void 0===t?void 0:t[a])||[];if(!Boolean(x.length))return null;var h,p=(h=x,(0,n.Z)(h)||(0,d.Z)(h)||(0,l.Z)(h)||(0,o.Z)()),N=p[0],b=p.slice(1);return(0,g.jsxs)(u.vz,{border:!0,text:v,mainCN:"d-grid gap-2",children:[N&&(0,g.jsx)(_,{top:!0,data:N}),(0,g.jsx)(u.j6,{className:"mt-2",style:{gridAutoColumns:"min-content",gap:6},children:b&&b.map((function(e){return(0,g.jsx)(_,{data:e},(0,m.Vj)())}))})]})},b=function(e){var s=e.settingSlug,t=((0,r.Z)(e,p),(0,h.lr)()),n=(0,i.Z)(t,1)[0],d=n.get("__window"),l=(0,x.QT)((function(){return c.bl.get("shopy-analytics/".concat(s,"/summary/"),{params:n})}),{refreshDeps:[d]}),o=l.res;if(l.loading)return(0,g.jsx)(u.gb,{});var a=new m.HM(o);if(!a.isSuccess)return null;var v=null===a||void 0===a?void 0:a.data,j=v.views_count,_=void 0===j?0:j,b=v.visitors_count,f=void 0===b?0:b,y=v.sent_message,w=void 0===y?0:y,k=v.compare,P=void 0===k?{}:k;return(0,g.jsxs)(c.ZP.Section,{title:"Insights",actions:(0,g.jsxs)("div",{className:"d-flex align-items-center",children:[(0,g.jsx)(c.oS,{options:["today","last_7","last_30"]}),(0,g.jsx)(c.ZP.Link,{to:"insights",className:"btn btn-primary-3 ms-1",children:"Insights>"})]}),children:[(0,g.jsxs)("div",{className:"d-grid gap-2 mb-3",children:[(0,g.jsxs)("div",{className:"",children:["Messages: ",w,(null===P||void 0===P?void 0:P.sent_message)>0&&(0,g.jsxs)("span",{className:"text-sm text-muted",children:["/",P.sent_message]})]}),(0,g.jsxs)("div",{className:"",children:["Visitors: ",f,(null===P||void 0===P?void 0:P.visitors_count)>0&&(0,g.jsxs)("span",{className:"text-sm text-muted",children:["/",P.visitors_count]})]}),(0,g.jsxs)("div",{className:"",children:["Page views: ",_,(null===P||void 0===P?void 0:P.views_count)>0&&(0,g.jsxs)("span",{className:"text-sm text-muted",children:["/",P.sent_message]})]})]}),(0,g.jsxs)("div",{className:"d-grid grid-md-2 gap-2",children:[(0,g.jsx)(N,{hits:null===a||void 0===a?void 0:a.data,title:"Top viewed products",itemKey:"top_products"}),(0,g.jsx)(N,{hits:null===a||void 0===a?void 0:a.data,title:"Top viewed categories",itemKey:"top_cats"})]})]})};function f(){var e,s,t;(0,x.jr)("Store");var i=a.useContext(v.h2),n=i.isLoaded,d=i.products,l=i.orders,o=i.cats,r=i.shopy_settings,m=i.site,h=(void 0===m?{}:m).settings;return n?(0,g.jsxs)(c.ZP.View,{title:"Commerce",className:"no-bg",back:"/staff/",actions:(0,g.jsxs)("div",{className:"d-flex",children:[(0,g.jsx)(c.ZP.NavLink,{to:"notifications/",className:"btn btn-round btn-secondary-3",title:"Action needed",children:(0,g.jsx)(u.PJ.P_,{})}),(0,g.jsx)(c.ZP.NavLink,{to:"settings/",className:"btn btn-round btn-secondary-3",title:"Shop settings",children:(0,g.jsx)(u.PJ.lk,{})})]}),children:[(0,g.jsx)(c.ZP.Section,{children:(0,g.jsxs)("div",{className:"d-grid grid-2 grid-sm-3 grid-md-4 grid-lg-6",children:[(null===r||void 0===r||null===(e=r.config)||void 0===e?void 0:e.has_suppliers)&&(0,g.jsx)(y,{title:"Supplier Orders",tab:"./",link:{to:"orders/",text:"View all orders",perms:["store.view_supplierorder"]},children:(0,g.jsx)("h3",{children:(null===l||void 0===l?void 0:l.count)||0})}),(0,g.jsx)(y,{title:"Products",tab:"./?tab=products",link:{to:"products",text:"View all products",perms:["store.view_product"]},children:(0,g.jsx)("h3",{children:(null===d||void 0===d?void 0:d.count)||0})}),(0,g.jsx)(y,{tab:"./?tab=categories",title:"Categories",link:{to:"categories",text:"View all categories",perms:["store.view_category"]},children:(0,g.jsx)("h3",{children:(null===o||void 0===o?void 0:o.count)||0})})]})}),h&&(0,g.jsx)(b,{settingSlug:h}),(0,g.jsx)(c.ZP.Section,{title:"Products by category",className:"my-2",children:null===o||void 0===o||null===(s=o.cat_count)||void 0===s||null===(t=s.filter((function(e){return e.category__name})))||void 0===t?void 0:t.map((function(e,s){var t=e.category__name,i=e.count;return(0,g.jsxs)("div",{children:[t,": ",i]},s)}))})]}):null}var y=function(e){var s=e.children,t=e.title,i=e.link,n=e.tab,d=void 0===n?"./":n,l=i.to;return(0,g.jsxs)("div",{className:"card-link mb-3",children:[(0,g.jsxs)(c.ZP.NavLink,{to:d,children:[t&&(0,g.jsx)("div",{className:"card-link-title",children:t}),s]}),(0,g.jsx)(c.ZP.Link,{to:l,requiredPerms:i.perms,children:(null===i||void 0===i?void 0:i.text)&&"".concat(i.text," \xbb")})]})}}}]);
//# sourceMappingURL=389.7887d050.chunk.js.map