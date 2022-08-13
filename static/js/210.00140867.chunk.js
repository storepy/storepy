"use strict";(self.webpackChunk_storepy_clientjs=self.webpackChunk_storepy_clientjs||[]).push([[210],{7210:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var i=n(6009),o=n(2411),s=n(1408),r=n(6520),a=n(125),l=n(2134),d=n(7371),u={"IndexView.usernameInput.placeholder":{fr:"Saisir un nom d'utilisateur ...",en:"Enter username to audit ..."},"AuditRoutes.viewTitle":{fr:"Auditer un compte",en:"Audit an account"}},c=n(8519),v=n(1135),m=n(7411),h=function(){function e(t){(0,v.Z)(this,e),this._data={},this._data=t}return(0,m.Z)(e,[{key:"top_tagged_users",get:function(){var e={};return this.tagged_users.forEach((function(t){var n;e[null===t||void 0===t?void 0:t.id]=(0,c.Z)((0,c.Z)({},t),{},{t_count:((null===(n=e[null===t||void 0===t?void 0:t.id])||void 0===n?void 0:n.t_count)||0)+1})})),Object.values(e).sort((function(e,t){return e.t_count<t.t_count?1:-1}))}},{key:"tagged_users",get:function(){var e=[];return this.posts.forEach((function(t){e=e.concat(t.tagged_users)})),e}},{key:"top_hashtags",get:function(){var e={};return this.hashtags.forEach((function(t){e[t]=(e[t]||0)+1})),Object.entries(e).sort((function(e,t){return e[1]<t[1]?1:-1}))}},{key:"hashtags",get:function(){var e=[];return this.posts.forEach((function(t){e=e.concat(t.hashtags)})),e}},{key:"most_liked_post",get:function(){var e;return null===(e=this.posts.sort((function(e,t){return e.likes_count<t.likes_count?1:-1})))||void 0===e?void 0:e[0]}},{key:"least_liked_post",get:function(){var e;return null===(e=this.posts.sort((function(e,t){return e.likes_count>t.likes_count?1:-1})))||void 0===e?void 0:e[0]}},{key:"most_commented_post",get:function(){var e;return null===(e=this.posts.sort((function(e,t){return(null===e||void 0===e?void 0:e.comments_count)<(null===t||void 0===t?void 0:t.comments_count)?1:-1})))||void 0===e?void 0:e[0]}},{key:"least_commented_post",get:function(){var e;return null===(e=this.posts.sort((function(e,t){return(null===e||void 0===e?void 0:e.comments_count)>(null===t||void 0===t?void 0:t.comments_count)?1:-1})))||void 0===e?void 0:e[0]}},{key:"last_post",get:function(){var e,t=null===(e=this.media)||void 0===e?void 0:e[0];if(t)return new _(t)}},{key:"top_locations",get:function(){var e={};return this.posts.forEach((function(t){var n,i=null===(n=t.location)||void 0===n?void 0:n.slug;Object.keys(e).includes(i)||(e[i]=[]),e[i].push(t)})),Object.values(e).sort((function(e,t){return e.length>t.length?-1:1}))}},{key:"post_schedule",get:function(){var e={};return this.posts.forEach((function(t){var n=t.date,i=null===n||void 0===n?void 0:n.format({weekday:"long"});Object.keys(e).includes(i)||(e[i]=[]),e[i].push(t)})),e}},{key:"posts",get:function(){return this.media.map((function(e){return new _(e)}))}},{key:"avg_likes",get:function(){var e,t=0;return null===(e=this.media)||void 0===e||e.forEach((function(e){var n;t+=null===e||void 0===e||null===(n=e.edge_liked_by)||void 0===n?void 0:n.count})),t/this.media_length}},{key:"avg_comments",get:function(){var e,t=0;return null===(e=this.media)||void 0===e||e.forEach((function(e){var n;t+=null===e||void 0===e||null===(n=e.edge_media_to_comment)||void 0===n?void 0:n.count})),t/this.media_length}},{key:"captions",get:function(){var e;return null===(e=this.media)||void 0===e?void 0:e.map((function(e){var t,n,i,o;return null===e||void 0===e||null===(t=e.edge_media_to_caption)||void 0===t||null===(n=t.edges)||void 0===n||null===(i=n[0])||void 0===i||null===(o=i.node)||void 0===o?void 0:o.text}))}},{key:"locations",get:function(){var e;return null===(e=this.media)||void 0===e?void 0:e.map((function(e){return null===e||void 0===e?void 0:e.location}))}},{key:"media",get:function(){var e,t,n;return(null===(e=this._data)||void 0===e||null===(t=e.edge_owner_to_timeline_media)||void 0===t||null===(n=t.edges)||void 0===n?void 0:n.map((function(e){return null===e||void 0===e?void 0:e.node})))||[]}},{key:"media_count",get:function(){var e,t;return null===(e=this._data)||void 0===e||null===(t=e.edge_owner_to_timeline_media)||void 0===t?void 0:t.count}},{key:"media_length",get:function(){return this.media.length}},{key:"saved_media",get:function(){var e,t;return null===(e=this._data)||void 0===e||null===(t=e.edge_saved_media)||void 0===t?void 0:t.edges}},{key:"saved_media_count",get:function(){var e,t;return null===(e=this._data)||void 0===e||null===(t=e.edge_saved_media)||void 0===t?void 0:t.count}},{key:"followers_count",get:function(){var e,t;return null===(e=this._data)||void 0===e||null===(t=e.edge_followed_by)||void 0===t?void 0:t.count}},{key:"following_count",get:function(){var e,t;return null===(e=this._data)||void 0===e||null===(t=e.edge_follow)||void 0===t?void 0:t.count}},{key:"hide_like_and_view_counts",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.hide_like_and_view_counts}},{key:"business_email",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.business_email}},{key:"external_url",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.external_url}},{key:"fbid",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.fbid}},{key:"id",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.id}},{key:"profile_pic_url",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.profile_pic_b64}},{key:"business_phone_number",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.business_phone_number}},{key:"business_address_json",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.business_address_json}},{key:"is_joined_recently",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.is_joined_recently}},{key:"is_business_account",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.is_business_account}},{key:"is_professional_account",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.is_professional_account}},{key:"is_verified",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.is_verified}},{key:"is_private",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.is_private}},{key:"full_name",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.full_name}},{key:"biography",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.biography}},{key:"username",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.username}},{key:"isValid",get:function(){var e;return Boolean(null===(e=this._data)||void 0===e?void 0:e.fbid)}},{key:"cached",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.cached}}]),e}(),_=function(){function e(t){var n;((0,v.Z)(this,e),this._data={},t)&&(null!==(n=t)&&void 0!==n&&n.node&&(t=t.node),this._data=t)}return(0,m.Z)(e,[{key:"hashtags",get:function(){var e=this.caption||"";return Array.from(e.matchAll(/(^|\s)(#[a-z\d-]+)/g)).map((function(e){var t,n;return null===e||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.replace("\n",""))||void 0===n?void 0:n.replace(" ","")}))}},{key:"tagged_users",get:function(){var e,t,n;return null===(e=this._data)||void 0===e||null===(t=e.edge_media_to_tagged_user)||void 0===t||null===(n=t.edges)||void 0===n?void 0:n.map((function(e){var t;return null===e||void 0===e||null===(t=e.node)||void 0===t?void 0:t.user}))}},{key:"caption",get:function(){var e,t,n,i,o;return null===(e=this._data)||void 0===e||null===(t=e.edge_media_to_caption)||void 0===t||null===(n=t.edges)||void 0===n||null===(i=n[0])||void 0===i||null===(o=i.node)||void 0===o?void 0:o.text}},{key:"date",get:function(){var e,t=null===(e=this._data)||void 0===e?void 0:e.taken_at_timestamp;if(t)return new Date(1e3*t)}},{key:"dateStr",get:function(){var e,t;return"".concat(null===(e=this.date)||void 0===e?void 0:e.format()," ").concat(null===(t=this.date)||void 0===t?void 0:t.formatTime())}},{key:"comments_count",get:function(){var e,t;return null===(e=this._data)||void 0===e||null===(t=e.edge_media_to_comment)||void 0===t?void 0:t.count}},{key:"likes_count",get:function(){var e,t;return null===(e=this._data)||void 0===e||null===(t=e.edge_liked_by)||void 0===t?void 0:t.count}},{key:"location_name",get:function(){var e;return null===this||void 0===this||null===(e=this.location)||void 0===e?void 0:e.name}},{key:"location",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.location}},{key:"display_url",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.display_url}},{key:"url",get:function(){return"https://instagram.com/p/".concat(this.shortcode,"/")}},{key:"is_video",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.is_video}},{key:"shortcode",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.shortcode}},{key:"id",get:function(){var e;return null===(e=this._data)||void 0===e?void 0:e.id}}]),e}(),g=n(8312),f={"Locations.title":{fr:"Lieux r\xe9cents",en:"Recent locations"},"Hashtags.title":{fr:"Hashtags utilis\xe9s",en:"Top hashtags"},"TaggedUsers.title":{fr:"Personnes tagu\xe9es",en:"Tagged users"},"TaggedUsers.auditLinkLabel":{fr:"[ auditer ]",en:"[ audit ]"},"Schedule.title":{fr:"Planning",en:"Schedule"},"PostImg.lastPostTitle":{fr:"Derni\xe8re publication",en:"Last post"},"PostImg.mostLikeTitle":{fr:"Plus aim\xe9e",en:"Most likes"},"PostImg.leastLikeTitle":{fr:"Moins aim\xe9e",en:"Least likes"},"PostImg.mostCommentTitle":{fr:"Plus comment\xe9e",en:"Most comments"},"PostImg.leastCommentTitle":{fr:"Moins comment\xe9e",en:"Least comments"}},p=n(3896),x=n(8136),j=["post"],k=["src","width"],y=(window||{}).i18n,b=function(e){var t=e.usr;return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"d-grid grid-md-2 gap-2",children:(0,x.jsx)(P,{usr:t})}),(0,x.jsx)(w,{usr:t}),(0,x.jsxs)("div",{className:"d-grid grid-md-2 gap-2",children:[(0,x.jsx)(T,{usr:t}),(0,x.jsx)(Z,{usr:t}),(0,x.jsx)(I,{usr:t}),(0,x.jsx)(L,{usr:t})]})]})},w=function(e){var t=e.usr;return(0,x.jsx)("div",{className:"my-3",children:(0,x.jsxs)("div",{className:"d-grid grid-2 grid-md-3 gap-1",children:[(0,x.jsx)(N,{post:t.last_post,title:(0,x.jsx)("div",{className:"text-sm my-1",children:null===y||void 0===y?void 0:y(f,"PostImg.lastPostTitle")})}),(0,x.jsx)(N,{post:t.most_liked_post,title:(0,x.jsx)("div",{className:"text-sm my-1",children:null===y||void 0===y?void 0:y(f,"PostImg.mostLikeTitle")})}),(0,x.jsx)(N,{post:t.most_commented_post,title:(0,x.jsx)("div",{className:"text-sm my-1",children:null===y||void 0===y?void 0:y(f,"PostImg.mostCommentTitle")})}),(0,x.jsx)(N,{post:t.least_liked_post,title:(0,x.jsx)("div",{className:"text-sm my-1",children:null===y||void 0===y?void 0:y(f,"PostImg.leastLikeTitle")})}),(0,x.jsx)(N,{post:t.least_commented_post,title:(0,x.jsx)("div",{className:"text-sm my-1",children:null===y||void 0===y?void 0:y(f,"PostImg.leastCommentTitle")})})]})})},N=function(e){var t=e.post,n=(0,g.Z)(e,j),s=o.useState(!1),r=(0,i.Z)(s,2),a=r[0],l=r[1];return null!==t&&void 0!==t&&t.id?(0,x.jsx)(d.ZP.Section,{title:null===n||void 0===n?void 0:n.title,actions:(0,x.jsx)("div",{children:(0,x.jsx)("span",{className:"p-1",onClick:function(){return l(!a)},children:a?"[ - ]":"[ + ]"})}),footer:(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"text-sm",children:[(0,x.jsx)("div",{children:"\u2764\ufe0f ".concat(t.likes_count,"   \ud83d\udcac ").concat(t.comments_count)}),(0,x.jsx)("div",{children:"\ud83d\udd5c ".concat(t.dateStr)}),a&&(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{style:{whiteSpace:"pre-wrap",wordBreak:"break-all"},children:t.caption})})]})}),style:{position:"relative",marginBottom:0},children:(0,x.jsx)("a",{href:t.url,target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)("img",{src:"data:image/jpg;base64, ".concat(t.display_url),style:{width:"100%",height:"auto",objectFit:"cover",aspectRatio:"1/1"},className:"rounded"})})}):null},P=function(e){var t=e.usr;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"mt-2",children:[(0,x.jsxs)("div",{className:"d-flex align-items-center mb-1",children:[(0,x.jsx)(E,{src:t.profile_pic_url,alt:t.username}),(0,x.jsxs)("div",{className:"ms-1 mb-1",children:[(0,x.jsx)("div",{className:"fw-bold",children:t.full_name}),(0,x.jsx)("div",{children:"followers: ".concat(t.followers_count," | following: ").concat(t.following_count," | posts: ").concat(t.media_count)}),(0,x.jsx)("div",{children:"avg likes: ".concat(0|t.avg_likes," | avg comments: ").concat(0|t.avg_comments)})]})]}),t.biography&&(0,x.jsx)("div",{style:{whiteSpace:"pre"},children:t.biography}),t.external_url&&(0,x.jsx)("a",{href:t.external_url,className:"text-muted text-sm",target:"_blank",rel:"noopener noreferrer",children:(0,p.bI)(t.external_url)})]}),(0,x.jsx)("div",{children:(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(null===t||void 0===t?void 0:t.cached)&&(0,x.jsx)("span",{className:"text-xs fw-lighter text-muted",children:"cached"})}),(0,x.jsxs)("li",{children:["ID: ",t.id]}),(null===t||void 0===t?void 0:t.is_business_account)&&(0,x.jsx)("li",{children:"Business account "}),(null===t||void 0===t?void 0:t.is_professional_account)&&(0,x.jsx)("li",{children:"Professional account"}),(null===t||void 0===t?void 0:t.business_email)&&(0,x.jsxs)("li",{children:["Email: ",null===t||void 0===t?void 0:t.business_email]}),(null===t||void 0===t?void 0:t.business_phone_number)&&(0,x.jsxs)("li",{children:["Num\xe9ro: ",null===t||void 0===t?void 0:t.business_phone_number]}),Boolean(t.saved_media_count)&&(0,x.jsxs)("li",{children:["Saved media: ",t.saved_media_count]})]})})]})},T=function(e){var t=e.usr;return(0,x.jsx)(S,{title:y(f,"Locations.title"),children:t.top_locations.map((function(e){var t,n;return(0,x.jsx)("div",{children:null===e||void 0===e||null===(t=e[0])||void 0===t||null===(n=t.location)||void 0===n?void 0:n.name},(0,p.Vj)())}))})},Z=function(e){var t=e.usr;return(0,x.jsx)(S,{title:y(f,"Hashtags.title"),children:t.top_hashtags.splice(0,10).map((function(e){return(0,x.jsx)("div",{children:null===e||void 0===e?void 0:e[0]},null===e||void 0===e?void 0:e[0])}))})},I=function(e){var t=e.usr;return(0,x.jsx)(S,{title:y(f,"TaggedUsers.title"),children:t.top_tagged_users.map((function(e){return(0,x.jsxs)("div",{className:"mb-1",children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{className:"me-1",children:null===e||void 0===e?void 0:e.full_name}),(0,x.jsx)("a",{href:"/staff/partners/audit/?username=".concat(null===e||void 0===e?void 0:e.username),className:"color-blue-400",target:"_blank",rel:"noopener noreferrer",children:y(f,"TaggedUsers.auditLinkLabel")})]}),(0,x.jsx)("a",{href:"https://instagram.com/".concat(e.username,"/"),className:"text-muted text-sm",target:"_blank",rel:"noopener noreferrer",children:"".concat(null===e||void 0===e?void 0:e.username,"   ->")})]},(0,p.Vj)())}))})},L=function(e){var t=e.usr;return(0,x.jsx)(S,{title:y(f,"Schedule.title"),children:Object.entries(t.post_schedule).map((function(e){var t=(0,i.Z)(e,2),n=t[0],o=t[1];return(0,x.jsxs)("div",{className:"mb-1",children:[(0,x.jsx)("div",{children:n}),(0,x.jsx)("div",{children:o.map((function(e){var t;return(0,x.jsxs)("div",{className:"ms-1 text-sm",children:[null===(t=e.date)||void 0===t?void 0:t.format({month:"long",day:"numeric",year:"2-digit",hour:"numeric",minute:"numeric"})," - ".concat(e.likes_count," | ").concat(e.comments_count," "),(0,x.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"ms-2",children:" >> "})]},e.id)}))})]},n)}))})},S=function(e){var t=e.title,n=e.children,s=o.useState(!0),r=(0,i.Z)(s,2),a=r[0],l=r[1];return(0,x.jsx)(d.ZP.Section,{border:!0,title:t,actions:(0,x.jsx)("div",{onClick:function(){return l(!a)},children:a?"[-]":"[+]"}),className:"bg-white",children:a&&n})},E=function(e){var t=e.src,n=e.width,i=void 0===n?64:n,o=(0,g.Z)(e,k);return(0,x.jsx)("img",(0,c.Z)((0,c.Z)({src:"data:image/jpg;base64, ".concat(t)},o),{},{style:{width:i,height:"auto"},className:"rounded"}))},C=function(){var e=(0,s.lr)(),t=(0,i.Z)(e,1)[0],n=t.get("username")||"",r=t.get("back")||void 0,c=o.useState(n),v=(0,i.Z)(c,2),m=v[0],_=v[1],g=(0,l.QT)((function(){return n?d.bl.get("partners/audit/",{params:{username:n},timeout:15e3}):null}),{refreshDeps:[n]}),f=g.res,p=g.loading,j=new h(null===f||void 0===f?void 0:f.data);return(0,x.jsx)(d.ZP.View,{back:r,children:(0,x.jsx)(d.ZP.Section,{header:(0,x.jsx)("form",{method:"GET",className:"miq-container center mb-3",children:(0,x.jsx)("input",{required:!0,name:"username",value:m,onChange:function(e){var t=e.target;return _(t.value)},placeholder:window.i18n(u,"IndexView.usernameInput.placeholder"),className:"miq-form-input",minLength:2,maxLength:99})}),children:(0,x.jsx)("div",{className:"miq-container center",children:p?(0,x.jsx)(a.gb,{}):n&&!j.isValid?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:"",children:(0,x.jsx)("div",{className:"text-md",children:"This username is invalid"})})}):n&&(0,x.jsx)(b,{usr:j})})})})};function V(){return(0,x.jsx)(d.ZP.View,{title:window.i18n(u,"AuditRoutes.viewTitle"),back:"/staff/partners/",children:(0,x.jsx)(r.Z5,{children:(0,x.jsx)(r.AW,{path:"/*",element:(0,x.jsx)(C,{})})})})}}}]);
//# sourceMappingURL=210.00140867.chunk.js.map