"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[762],{5762:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var n=r(8519),a=r(2411),l=r(6520),i={"PUpdateView.title":{fr:"Mon compte",en:"Account"},"PUpdateView.text":{fr:"",en:""},"PForm.title":{fr:"Profile",en:"Profile"},"PForm.text":{fr:"Mettez vos informations \xe0 jour",en:"Update your profile information"},"PForm.submitLabel":{fr:"Enr\xe9gistrer",en:" Update "},"FNField.label":{fr:"Pr\xe9nom",en:"First name"},"FNField.placeholder":{fr:"Entrez votre pr\xe9nom",en:"Enter your first name"},"GenderField.label":{fr:"Sexe",en:"Gender"},"GenderField.nullValue":{fr:"S\xe9lectionner ...",en:"Select ..."},"GenderField.male":{fr:"Masculin",en:"Male"},"GenderField.female":{fr:"F\xe9minin",en:"Female"},"GenderField.other":{fr:"Autre",en:"Other"},"Email.sectionTitle":{fr:"Email",en:"Email"},"Email.sectionText":{fr:"Veuillez contacter notre support pour changer votre email",en:"Please contact support to change your email"},"PWD.sectionTitle":{fr:"Mot de passe",en:"Password"},"PWD.sectionText":{fr:"Veuillez contacter notre support pour changer votre mot de passe",en:"Please contact support to change your password"},"LNField.label":{fr:"Nom",en:"Last name"},"LNField.placeholder":{fr:"Entrez votre nom",en:"Enter your last name"},"Avatar.title":{fr:"Avatar",en:"Avatar"},"Avatar.text":{fr:"Ajoutez votre photo de profile avec une image de format .png, .jpg ou .gif",en:"Update your profile picture\nImages must be .png, .jpg or .gif format."}},s=r(125),o=r(3308),d=r(9002),c=r(653),m=r(5525),u=r(7661),p=r(138),f=r(8136),x=function(e){return window.i18n(i,e)},h=function(e){var t=e.instance,r=a.useContext(d.h2).updateUser;return t.img?(0,f.jsx)(p.pB.Square,(0,n.Z)((0,n.Z)({},t.img_data),{},{className:"rounded"})):(0,f.jsx)(u.Wl,{className:"btn-primary-3",onSuccess:function(e){var n=e.data;t.update({img:null===n||void 0===n?void 0:n.slug}).then((function(e){var t=e.data;return r(t)})).catch((function(e){}))}})},g=function(){var e=a.useContext(d.h2),t=e.user,r=e.updateUser,n=e.apps,l=t.employee,i={first_name:t.first_name,last_name:t.last_name,gender:t.gender};l&&(i.position=l.position);var g=(0,o.cI)(i);if(!t)return null;var F=(0,p.mO)(t);return(0,f.jsx)(c.Z,{title:x("PUpdateView.title"),text:x("PUpdateView.text"),back:"/staff/",children:(0,f.jsxs)(o.ZP,{context:g,onSubmit:function(e){return e.preventDefault(),F.update(g.values).then((function(e){var t=e.data;return r(t)})).catch((function(e){return g.handleError(e)}))},children:[(0,f.jsxs)("div",{className:"d-grid grid-md-4 gap-2",children:[(0,f.jsxs)(m.wX,{title:x("PForm.title"),text:x("PForm.text"),className:"span-md-3",footer:(0,f.jsx)("div",{className:"text-center",children:(0,f.jsx)(o.ZP.Submit,{value:x("PForm.submitLabel"),className:"btn-md btn-primary-3 fw-bold my-2 w-50"})}),bodyCN:"pt-2",children:[(0,f.jsx)(o.iF,{required:!0,label:x("FNField.label"),error:g.errors.first_name,placeholder:x("FNField.placeholder"),className:"span-md-3",fieldCN:"d-grid grid-md-5"}),(0,f.jsx)(o.c_,{required:!0,label:x("LNField.label"),error:g.errors.last_name,placeholder:x("LNField.placeholder"),className:"span-md-3",fieldCN:"d-grid grid-md-5"}),(0,f.jsx)(o.ZP.Field,{label:x("GenderField.label"),className:"d-grid grid-md-5",children:(0,f.jsxs)(o.ZP.Select,{required:!0,name:"gender",nullValue:{label:x("GenderField.nullValue")},className:"span-md-3",children:[(0,f.jsx)("option",{value:"OTHER",children:x("GenderField.other")}),(0,f.jsx)("option",{value:"MALE",children:x("GenderField.male")}),(0,f.jsx)("option",{value:"FEMALE",children:x("GenderField.female")})]})}),Object.keys(n).includes("miq_hrm")&&(0,f.jsx)(o.ZP.Field,{label:"Role",error:g.errors.position,className:"d-grid grid-md-5 mb-1",children:(0,f.jsx)(o.ZP.Text,{required:!0,name:"position",placeholder:"Role",className:"span-md-3",minLength:2})})]}),(0,f.jsx)(m.wX,{title:x("Avatar.title"),text:x("Avatar.text"),actions:(0,f.jsx)(u.RC,{instance:(0,p.pB)(F.img_data),onSuccess:function(){return r({img:null,img_data:null})},className:"btn-danger-3",children:(0,f.jsx)(s.PJ.rF,{})}),className:"avatar-section",bodyCN:"p-3",children:(0,f.jsx)(h,{instance:F})})]}),(0,f.jsx)(m.wX,{title:x("Email.sectionTitle"),text:x("Email.sectionText"),children:(0,f.jsx)("p",{className:"text-muted text-sm",children:t.email})}),(0,f.jsx)(m.wX,{title:x("PWD.sectionTitle"),text:x("PWD.sectionText")})]})})};function F(){return(0,f.jsx)(l.Z5,{children:(0,f.jsx)(l.AW,{path:"/",element:(0,f.jsx)(g,{})})})}}}]);
//# sourceMappingURL=762.bb810dce.chunk.js.map