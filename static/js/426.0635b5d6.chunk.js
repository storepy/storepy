"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[426],{1426:function(e,s,r){r.r(s),r.d(s,{default:function(){return S}});var t=r(8519),n=r(8312),i=r(6009),l=r(2411),u=r(1408),a=r(1096),c=r(2134),o=r(5603),d=r(9002),h=r(2379),p=r(1135),_=r(7411),x=r(2518),v=r(2485),m=function(e){(0,x.Z)(r,e);var s=(0,v.Z)(r);function r(){return(0,p.Z)(this,r),s.apply(this,arguments)}return(0,_.Z)(r,[{key:"updateConfig",value:function(e){var s;return this.update({config:(0,t.Z)((0,t.Z)({},null===(s=this.data)||void 0===s?void 0:s.config),e)})}}]),r}(a.x5),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.eR)(e,"shopy-settings",m)},g=r(8136),j=["context","name","label","text","className"],Z=["children","instance","fields"],b=function(e){var s,r=e.instance,n=e.fields,i=(0,o.cI)({returns:(null===r||void 0===r?void 0:r.returns)||"",returns_html:r.returns_html||"",size_guide:r.size_guide||"",size_guide_html:(null===r||void 0===r?void 0:r.size_guide_html)||""});return(0,g.jsx)(P,(0,t.Z)((0,t.Z)({},e),{},{context:i,fields:["returns","returns_html","size_guide","size_guide_html"],onSubmit:function(e){e.preventDefault(),r.update({returns:i.values.returns,returns_html:i.values.returns}).then((function(e){})).catch((function(e){}))},children:(s="returns",n.includes(s)&&(0,g.jsx)(w,{name:"returns",context:i,label:"Returns Page"}))}))},w=function(e){var s=l.useState(!1),r=(0,i.Z)(s,2),t=r[0],u=r[1],a=e.context,c=e.name,d=e.label,p=e.text,_=e.className,x=((0,n.Z)(e,j),a.values[c]);return(0,g.jsx)(h.Zb,{title:c,text:"This is text",actions:(0,g.jsx)(h.zx,{onClick:function(){return u(!t)},children:"Preview"}),className:"border-0",children:t?(0,g.jsx)("div",{dangerouslySetInnerHTML:{__html:x}}):(0,g.jsx)(o.ZP.Field,{label:d,text:p,className:_,error:a.errors[c],children:(0,g.jsx)(o.ZP.TextAreaX,{name:c,mirror:x})})})},P=function(e){var s=e.children,r=e.instance,i=e.fields,l=(0,n.Z)(e,Z),u=e.context,a=function(e){return i.includes(e)},c=u.values,d=u.errors;return(0,g.jsxs)(o.ZP,(0,t.Z)((0,t.Z)({onSubmit:function(e){e.preventDefault(),r.updateConfig(c).then((function(e){})).catch((function(e){}))}},l),{},{children:[s||(0,g.jsxs)(g.Fragment,{children:[a("has_suppliers")&&(0,g.jsx)(o.ZP.Field,{checkbox:!0,label:"Store has suppliers",error:d.has_suppliers,children:(0,g.jsx)(o.ZP.Checkbox,{name:"has_suppliers",className:"me-1"})}),c.has_suppliers&&(0,g.jsxs)(g.Fragment,{children:[a("show_active_suppliers")&&(0,g.jsx)(o.ZP.Field,{checkbox:!0,label:"Show active suppliers on homepage",error:d.show_active_suppliers,children:(0,g.jsx)(o.ZP.Checkbox,{name:"show_active_suppliers",className:"me-1"})}),a("show_product_supplier")&&(0,g.jsx)(o.ZP.Field,{checkbox:!0,label:"Show supplier on product detail page (if any)",error:d.show_product_supplier,children:(0,g.jsx)(o.ZP.Checkbox,{name:"show_product_supplier",className:"me-1"})})]})]}),(0,g.jsx)(o.ZP.Submit,{value:"Save"})]}))},k=["children"];function S(){l.useContext(d.h2);var e=(0,u.lr)(),s=(0,i.Z)(e,1)[0],r=(0,c.QT)((function(){return f({slug:"current"}).retrieve()})).res.data;if(!r)return null;var t=f(r);return"pages"===s.get("tab")?(0,g.jsx)(C,{children:(0,g.jsx)("div",{className:"",children:(0,g.jsx)(b,{instance:t,fields:["returns","returns_html"]})})}):(0,g.jsx)(C,{children:(0,g.jsx)(N,{config:null===r||void 0===r?void 0:r.config,instance:t})})}var N=function(e){var s=e.config,r=e.instance,t=(0,o.cI)({show_active_suppliers:(null===s||void 0===s?void 0:s.show_active_suppliers)||!1,show_product_supplier:(null===s||void 0===s?void 0:s.show_product_supplier)||!1,has_suppliers:(null===s||void 0===s?void 0:s.has_suppliers)||!1});return(0,g.jsx)(P,{context:t,instance:r,fields:["has_suppliers","show_active_suppliers","show_product_supplier"]})},C=function(e){var s=e.children,r=(0,n.Z)(e,k);return(0,g.jsx)(a.ZP.View,(0,t.Z)((0,t.Z)({title:"Shop Settings",back:"../"},r),{},{requiredPerms:["store.change_shopsetting"],children:(0,g.jsx)(a.ZP.Section,{children:s,header:(0,g.jsxs)("div",{className:"d-flex align-items-center border-bottom pb-2 mb-2",children:[(0,g.jsx)(h.$Q,{index:!0,target:"tab",className:"me-1",children:"Settings"}),(0,g.jsx)(h.$Q,{target:"tab",value:"pages",className:"me-1",children:"Pages"})]})})}))}}}]);
//# sourceMappingURL=426.0635b5d6.chunk.js.map