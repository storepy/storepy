"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[462],{1672:function(e,t,n){n.d(t,{gm:function(){return o},pE:function(){return l}});var r=n(1135),i=n(7411),u=n(2518),a=n(2485),s=n(4636),c=function(e){(0,u.Z)(n,e);var t=(0,a.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"updatePages",value:function(e){return this.patch("".concat(this._path,"pages/"),e)}},{key:"updateSite",value:function(e){return this.patch("".concat(this._path,"site/"),e)}}]),n}(s.x5);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.eR)(e,"settings/",c)}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.eR)(e,"index/")}},5462:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});n(2411);var r=n(3896),i=n(2134),u=n(3308),a=n(7371),s=n(1672),c=n(8136);function l(){var e=(0,u.cI)({title:""}),t=(0,i.QT)((function(){return(0,s.gm)({slug:"current"}).retrieve()}),{refreshDeps:[],onSuccess:function(t){var n=t.data;return e.setValues({title:n.title||""})}}),n=t.res,l=t.setRes,o=t.setError,h=new r.HM(n);if(!h.isSuccess)return null;var f=(0,s.gm)(h.data);return(0,c.jsx)(a.ZP.View,{title:"Site HomePage Settings",back:"../",children:(0,c.jsx)(u.ZP,{context:e,onSubmit:function(t){return t.preventDefault(),f.update(e.values).then((function(e){var t=e.data;return l(t)})).catch((function(e){var t=e.response;return o(t)}))},children:(0,c.jsxs)(a.ZP.Section,{title:"Index Page Details",children:[(0,c.jsx)(u.ZP.Field,{label:"Meta title",error:e.errors.title,children:(0,c.jsx)(u.ZP.Text,{required:!0,name:"title",maxLength:99})}),(0,c.jsx)("div",{className:"",children:(0,c.jsx)(u.ZP.Submit,{value:"Save",className:"btn-primary-2"})})]})})})}}}]);
//# sourceMappingURL=462.1dcc1f07.chunk.js.map