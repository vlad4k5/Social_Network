(this.webpackJsonpproject_social_network=this.webpackJsonpproject_social_network||[]).push([[0],{107:function(e,t,a){e.exports={error:"TextError_error__2Wr7d"}},113:function(e,t,a){},21:function(e,t,a){e.exports={paginatorWrapper:"Paginator_paginatorWrapper__-TPRt",activePage:"Paginator_activePage__2cdnt"}},23:function(e,t,a){e.exports={profileInfo_wrapper:"ProfileInfo_profileInfo_wrapper__3fTXR",userPhoto:"ProfileInfo_userPhoto__MPJ12",ownerPhoto:"ProfileInfo_ownerPhoto__7uaro",photoFile:"ProfileInfo_photoFile__1jKbj",editProfile:"ProfileInfo_editProfile__HwzNl",aboutMe:"ProfileInfo_aboutMe__1y4EJ",userName:"ProfileInfo_userName__3DjFm",userStatus:"ProfileInfo_userStatus__1EfvW",contactsBlock:"ProfileInfo_contactsBlock__1UKVl",contacts:"ProfileInfo_contacts__2_y-8"}},24:function(e,t,a){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__1y2rU",dialogsUsers:"Dialogs_dialogsUsers__1HD5x",linkToUserChat:"Dialogs_linkToUserChat__4nRSW",dialogsUserPhoto:"Dialogs_dialogsUserPhoto__2dG1w",dialogsUserWrapper:"Dialogs_dialogsUserWrapper__3awDP",dialogsMessages:"Dialogs_dialogsMessages__3fwCp"}},240:function(e,t,a){"use strict";a.r(t);var s=a(51),n=a.n(s),r=(a(113),a(1)),c=a(12),o=a(3),i=a(43),l=a.n(i),u=a(24),j=a.n(u),b=a(17),d=a(4),p=a(100),h=a(0),f=function(e){return{isAuth:e.auth.isAuth}};var m=function(e){return Object(c.b)(f)((function(t){var a=t.isAuth,s=Object(p.a)(t,["isAuth"]);return!1===a?Object(h.jsx)(o.a,{to:"/login"}):Object(h.jsx)(e,Object(d.a)({},s))}))},O=a(2),x=a(10),g="SN/DIALOGS/ADD_NEW_MESSAGE",_={users:[{userName:"Dmitry",id:1},{userName:"Alexander",id:2},{userName:"Vladimir",id:3},{userName:"Konstantin",id:4},{userName:"Maxim",id:5}],messages:["Hello, my name is Dmitry","What's up?","How old are you?","Where are you from?","Nice to meet you! :)"]},v={addNewMessage:function(e){return{type:g,message:e}}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(x.a)(e.messages),[t.message])});default:return e}},k=a(9),w=a.p+"static/media/basicUserPhoto.94cf7531.png",P=function(e){var t=e.userName;return Object(h.jsxs)("div",{className:j.a.dialogsUserWrapper,children:[Object(h.jsx)("img",{src:w,className:j.a.dialogsUserPhoto,alt:"User avatar"}),Object(h.jsx)(k.b,{className:j.a.linkToUserChat,to:"/profile/17001",children:t})]})},I=function(e){var t=e.message;return Object(h.jsxs)("div",{className:j.a.dialogsMessageWrapper,children:[Object(h.jsx)("img",{src:w,className:j.a.dialogsUserPhoto,alt:"User avatar"}),Object(h.jsx)("span",{children:t})]})},S=Object(b.c)(m,Object(c.b)((function(e){return{users:e.dialogs.users,messages:e.dialogs.messages}}),{addNewMessage:v.addNewMessage}))((function(e){var t=e.users,a=e.messages,s=e.addNewMessage,n=t.map((function(e){return Object(h.jsx)(P,{userName:e.userName},e.id)})),r=a.map((function(e,t){return Object(h.jsx)(I,{message:e},t)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Messages"})," ",Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:j.a.dialogsWrapper,children:[Object(h.jsx)("div",{className:j.a.dialogsUsers,children:n}),Object(h.jsxs)("div",{className:j.a.dialogsMessages,children:[r,Object(h.jsx)("hr",{}),Object(h.jsx)(O.d,{initialValues:{message:""},onSubmit:function(e,t){var a=t.resetForm;s(e.message),a()},children:Object(h.jsxs)(O.c,{children:[Object(h.jsx)(O.b,{as:"textarea",id:"message",name:"message"}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{type:"submit",children:"Send message"})]})})]})]})]})})),y=a(25),C=a.n(y),A=a.p+"static/media/logo.e68b35f4.svg",F=a(5),M=a.n(F),U=a(11),T=a(103),B=a.n(T).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"43974699-a689-48d1-b548-063b532b4c9f"}}),L=function(){return B.get("/auth/me").then((function(e){return e.data}))},E=function(){return B.delete("/auth/login").then((function(e){return e.data}))},D=function(e){return B.post("/auth/login",e).then((function(e){return e.data}))},W=function(){return B.get("/security/get-captcha-url").then((function(e){return e.data}))},H=function(e){return B.get("/profile/".concat(e)).then((function(e){return e.data}))},J=function(e){return B.get("/profile/status/".concat(e)).then((function(e){return e.data}))},R=function(e){return B.put("/profile",e).then((function(e){return e.data}))},V=function(e){return B.put("/profile/status",{status:e}).then((function(e){return e.data}))},G=function(e){var t=new FormData;return t.append("image",e),B.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},X="SN/PROFILE/SET_PROFILE",q="SN/PROFILE/SET_STATUS",K="SN/PROFILE/SET_PHOTO",Q="SN/PROFILE/ADD_NEW_POST",z={status:"",profileInfo:null,posts:[{id:1,message:"My first post",likesCount:190},{id:2,message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",likesCount:21},{id:3,message:"Just an example",likesCount:16}]},Y={setProfile:function(e){return{type:X,profileInfo:e}},setStatus:function(e){return{type:q,status:e}},setPhoto:function(e){return{type:K,photos:e}},addNewPost:function(e){return{type:Q,postText:e}}},Z=function(e){return function(){var t=Object(U.a)(M.a.mark((function t(a){var s;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e);case 2:s=t.sent,a(Y.setProfile(s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=function(e){return function(){var t=Object(U.a)(M.a.mark((function t(a){var s;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,J(e);case 2:s=t.sent,a(Y.setStatus(null===s?"":s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(d.a)(Object(d.a)({},e),{},{profileInfo:t.profileInfo});case q:return Object(d.a)(Object(d.a)({},e),{},{status:t.status});case K:return Object(d.a)(Object(d.a)({},e),{},{profileInfo:Object(d.a)(Object(d.a)({},e.profileInfo),{},{photos:t.photos})});case Q:var a={id:e.posts.length+1,message:t.postText,likesCount:0};return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(x.a)(e.posts),[a])});default:return e}},te="SN/AUTH/SET_USER_DATA",ae="SN/AUTH/SET_CAPTCHA",se="SN/AUTH/SET_ERROR_MESSAGE",ne={userData:{email:null,id:null,login:null},isAuth:null,captcha:null,errorMessage:null},re=function(e,t){return{type:te,isAuth:e,userData:t}},ce=function(e){return{type:ae,captcha:e}},oe=function(e){return{type:se,errorMessage:e}},ie=function(){return function(){var e=Object(U.a)(M.a.mark((function e(t){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:0===(a=e.sent).resultCode?(t(re(!0,a.data)),t(Z(a.data.id)),t($(a.data.id))):t(re(!1,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(d.a)(Object(d.a)({},e),{},{isAuth:t.isAuth,userData:t.userData?t.userData:{email:null,id:null,login:null}});case ae:return Object(d.a)(Object(d.a)({},e),{},{captcha:t.captcha});case se:return Object(d.a)(Object(d.a)({},e),{},{errorMessage:t.errorMessage});default:return e}},ue=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,userName:e.auth.userData.login}}),{logout:function(){return function(){var e=Object(U.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:0===e.sent.resultCode&&(t(re(!1,null)),t(Y.setProfile(null)),t(Y.setStatus("")));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,a=e.logout,s=e.userName;return Object(h.jsxs)("div",{className:C.a.header_wrapper,children:[Object(h.jsxs)("div",{className:C.a.mediaBlock,children:[Object(h.jsx)("img",{src:A,className:C.a.logo,alt:"Social-Network logo"}),Object(h.jsx)("h2",{className:C.a.slogan,children:"Social Network"})]}),t?Object(h.jsxs)("div",{className:C.a.loginBlock,children:[Object(h.jsx)(k.b,{to:"/profile",className:C.a.linkToProfile,children:s}),Object(h.jsx)("button",{onClick:a,className:C.a.logoutButton,children:"Log out"})]}):Object(h.jsx)("div",{className:C.a.loginBlock,children:Object(h.jsx)(k.b,{to:"/login",className:C.a.linkToLogin,children:Object(h.jsx)("button",{className:C.a.logoutButton,children:"Log in"})})})]})})),je=a(30),be=a.n(je),de=a(20),pe=a(107),he=a.n(pe),fe=function(e){var t=e.children;return Object(h.jsx)("span",{className:he.a.error,children:t})},me=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,captcha:e.auth.captcha,errorMessage:e.auth.errorMessage}}),{login:function(e){return function(){var t=Object(U.a)(M.a.mark((function t(a){var s,n;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:if(0!==(s=t.sent).resultCode){t.next=9;break}a(ie()),a(oe(null)),a(ce(null)),t.next=15;break;case 9:if(10!==s.resultCode){t.next=15;break}return a(oe(s.messages[0])),t.next=13,W();case 13:n=t.sent,a(ce(n.url));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,a=e.captcha,s=e.login,n=e.errorMessage,r=de.a({email:de.b().email(" Invalid e-mail format!").required(" Field is required!").nullable(),password:de.b().required(" Field is required!").nullable()});return t?Object(h.jsx)(o.a,{to:"/profile"}):Object(h.jsx)("div",{className:be.a.loginWrapper,children:Object(h.jsx)(O.d,{initialValues:{email:"",password:"",rememberMe:!1,captcha:null},onSubmit:function(e){s(e)},validationSchema:r,children:Object(h.jsxs)(O.c,{children:[Object(h.jsx)("h2",{children:"Login Page "}),n&&Object(h.jsxs)("div",{className:be.a.serverErrorMessage,children:[" ",n," "]}),Object(h.jsxs)("div",{className:be.a.loginItem,children:[Object(h.jsx)(O.a,{name:"email",component:fe}),Object(h.jsx)(O.b,{type:"text",name:"email",placeholder:"Email Address"})]}),Object(h.jsxs)("div",{className:be.a.loginItem,children:[Object(h.jsx)(O.a,{name:"password",component:fe}),Object(h.jsx)(O.b,{type:"password",name:"password",placeholder:"Password"})]}),Object(h.jsxs)("div",{className:be.a.loginItem,children:[Object(h.jsx)(O.b,{type:"checkbox",id:"rememberMe",name:"rememberMe"}),Object(h.jsx)("label",{htmlFor:"rememberMe",children:" Remember me: "})]}),a?Object(h.jsxs)("div",{className:be.a.captchaBlock,children:[Object(h.jsx)("img",{src:a,alt:"captcha"}),Object(h.jsx)("label",{htmlFor:"captcha",className:be.a.err,children:" Please write a symbols from  captcha: "}),Object(h.jsx)(O.b,{type:"text",id:"captcha",name:"captcha"})]}):null,Object(h.jsx)("button",{className:be.a.loginButton,children:" Login "})]})})})})),Oe=a(8),xe=a.n(Oe),ge=function(){return Object(h.jsxs)("nav",{className:xe.a.navbar,children:[Object(h.jsx)("div",{className:xe.a.navbar__Item,children:Object(h.jsx)(k.b,{to:"/profile",className:xe.a.link,activeClassName:xe.a.active,children:"Profile"})}),Object(h.jsx)("div",{className:xe.a.navbar__Item,children:Object(h.jsx)(k.b,{to:"/dialogs",className:xe.a.link,activeClassName:xe.a.active,children:"Messages"})}),Object(h.jsx)("div",{className:xe.a.navbar__Item,children:Object(h.jsx)(k.b,{to:"/users",className:xe.a.link,activeClassName:xe.a.active,children:"Users  "})}),Object(h.jsx)("div",{className:xe.a.navbar__Item,children:Object(h.jsx)(k.b,{to:"/news",className:xe.a.link,activeClassName:xe.a.active,children:"News"})}),Object(h.jsx)("div",{className:xe.a.navbar__Item,children:Object(h.jsx)(k.b,{to:"/music",className:xe.a.link,activeClassName:xe.a.active,children:"Music"})}),Object(h.jsx)("div",{className:xe.a.navbar__Item,children:Object(h.jsx)(k.b,{to:"/settings",className:xe.a.link,activeClassName:xe.a.active,children:"Settings"})})]})},_e=a(29),ve=a.n(_e),Ne=function(e){var t=e.id,a=e.userPhoto,s=e.message,n=e.likesCount;return Object(h.jsxs)("div",{className:ve.a.post,children:[Object(h.jsx)("img",{className:ve.a.userPhoto,src:a,alt:"User avatar"}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:ve.a.postText,children:Object(h.jsx)("span",{children:s})})}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:ve.a.likeBlock,children:[Object(h.jsx)("span",{children:n}),Object(h.jsx)("button",{className:ve.a.likeButton,children:"\u2764"})]})})]},t)},ke=function(e){var t=e.posts,a=e.userPhoto,s=e.addNewPost,n=e.isOwner,r=Object(x.a)(t).reverse().map((function(e){return Object(h.jsx)(Ne,{message:e.message,likesCount:e.likesCount,userPhoto:a,id:e.id},e.id)}));return Object(h.jsxs)("div",{children:[n&&Object(h.jsx)(O.d,{initialValues:{postText:""},onSubmit:function(e,t){var a=t.resetForm;s(e.postText),a()},children:Object(h.jsxs)(O.c,{children:[Object(h.jsx)(O.b,{name:"postText",children:function(e){var t=e.field;return Object(h.jsx)("div",{children:Object(h.jsx)("textarea",Object(d.a)(Object(d.a)({className:ve.a.postField,type:"text",id:"postText",placeholder:"Add new post..."},t),{},{children:e.children}))})}}),Object(h.jsx)("button",{type:"submit",className:ve.a.newPostButton,children:"Add post"})]})}),Object(h.jsx)("div",{children:r})]})},we=a(14),Pe=a(23),Ie=a.n(Pe),Se=function(e){var t=e.profileInfo,a=e.status,s=e.updateStatus,n=e.updatePhoto,c=e.isOwner;console.log(t);var o=Object(r.useState)(!1),i=Object(we.a)(o,2),l=i[0],u=i[1],j=Object(r.useState)(a),b=Object(we.a)(j,2),d=b[0],p=b[1];Object(r.useEffect)((function(){p(a)}),[a]);return t?Object(h.jsxs)("div",{className:Ie.a.profileInfo_wrapper,children:[Object(h.jsxs)("div",{className:Ie.a.userPhoto,children:[Object(h.jsx)("label",{htmlFor:"photoFile",children:Object(h.jsx)("img",{src:t.photos.large?t.photos.large:w,className:c?Ie.a.ownerPhoto:"",alt:"User Avatar"})}),c&&Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{id:"photoFile",className:Ie.a.photoFile,type:"file",onChange:function(e){n(e.target.files[0])}}),Object(h.jsx)("button",{className:Ie.a.editProfile,children:Object(h.jsx)(k.b,{to:"/settings",children:"Edit profile"})})]})]}),Object(h.jsxs)("div",{className:Ie.a.aboutMe,children:[Object(h.jsx)("h1",{className:Ie.a.userName,children:t.fullName}),Object(h.jsxs)("div",{className:c?Ie.a.userStatus:"",onClick:function(){u(!0)},children:[Object(h.jsx)("label",{htmlFor:"status",children:"Status: "}),l&&c?Object(h.jsx)("input",{value:d,onChange:function(e){p(e.currentTarget.value)},onBlur:function(){s(d),u(!1)},autoFocus:!0}):Object(h.jsx)("span",{id:"status",children:a||"User has no status"})]}),Object(h.jsx)("div",{className:Ie.a.aboutMeInfo,children:Object(h.jsxs)("p",{children:["About me: ",t.aboutMe?t.aboutMe:""]})}),Object(h.jsxs)("div",{className:Ie.a.jobInfo,children:[Object(h.jsx)("p",{children:t.lookingForAJob?"Looking for a job \u2714\ufe0f":"Not looking for a job \u274c"}),Object(h.jsx)("p",{children:t.lookingForAJobDescription?t.lookingForAJobDescription:""})]}),Object(h.jsx)("div",{className:Ie.a.contactsBlock})]})]}):Object(h.jsx)("div",{children:"LLLLLoadign..."})},ye=Object(b.c)(Object(c.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status,posts:e.profile.posts,ownerId:e.auth.userData.id}}),{getProfile:Z,getStatus:$,addNewPost:Y.addNewPost,updateStatus:function(e){return function(){var t=Object(U.a)(M.a.mark((function t(a){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(e);case 2:0===t.sent.resultCode&&a(Y.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updatePhoto:function(e){return function(){var t=Object(U.a)(M.a.mark((function t(a){var s;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G(e);case 2:0===(s=t.sent).resultCode&&a(Y.setPhoto(s.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),m,o.g)((function(e){var t=e.getProfile,a=e.getStatus,s=e.match,n=e.ownerId,c=e.profileInfo,o=e.status,i=e.posts,l=e.addNewPost,u=e.updateStatus,j=e.updatePhoto;return Object(r.useEffect)((function(){null!==n&&(t(s.params.userId?s.params.userId:n),a(s.params.userId?s.params.userId:n))}),[s.params.userId,n,t,a]),Object(r.useEffect)((function(){}),[s.params.userId,n]),c?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Se,{profileInfo:c,status:o,updateStatus:u,updatePhoto:j,isOwner:!s.params.userId}),Object(h.jsx)(ke,{posts:i,userPhoto:c.photos.small?c.photos.small:w,addNewPost:l,isOwner:!s.params.userId})]}):Object(h.jsx)("div",{children:"Loading..."})})),Ce=a(34),Ae=a.n(Ce),Fe=Object(b.c)(m,Object(c.b)((function(e){return{profileInfo:e.profile.profileInfo,ownerId:e.auth.userData.id}}),{updateProfile:function(e){return function(){var t=Object(U.a)(M.a.mark((function t(a){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:0===t.sent.resultCode&&a(Y.setProfile(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProfile:Z,getStatus:$}))((function(e){var t=e.profileInfo,a=e.updateProfile,s=e.ownerId,n=e.getProfile,r=e.getStatus;if(null===s)return Object(h.jsx)("div",{children:"LLOADING........."});if(s!==(null===t||void 0===t?void 0:t.userId)&&(n(s),r(s)),!t||s!==t.userId)return Object(h.jsx)("div",{children:"Loading..."});var c={aboutMe:t.aboutMe,userId:t.userId,contacts:{facebook:t.contacts.facebook,website:t.contacts.website,vk:t.contacts.vk,twitter:t.contacts.twitter,instagram:t.contacts.instagram,youtube:t.contacts.youtube,github:t.contacts.github,mainLink:t.contacts.mainLink},lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,fullName:t.fullName,photos:t.photos},o=de.a({contacts:de.a({facebook:de.b().url("Invalid url format")}),aboutMe:de.b().max(200,"Too long text"),fullName:de.b().max(20,"Too long text")});return Object(h.jsxs)("div",{className:Ae.a.settingsComponent,children:[Object(h.jsx)("h1",{children:"Settings"}),Object(h.jsx)("hr",{}),Object(h.jsx)(O.d,{initialValues:c,onSubmit:function(e){a(e)},validationSchema:o,children:Object(h.jsxs)(O.c,{children:[Object(h.jsxs)("div",{className:Ae.a.settingsWrapper,children:[Object(h.jsxs)("div",{className:Ae.a.settingsBlock,children:[Object(h.jsx)("label",{htmlFor:"aboutMe",children:"About Me:"}),Object(h.jsx)(O.a,{name:"aboutMe"}),Object(h.jsx)("br",{}),Object(h.jsx)(O.b,{as:"textarea",name:"aboutMe",id:"aboutMe"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"fullName",children:"Full Name:"}),Object(h.jsx)("br",{}),Object(h.jsx)(O.b,{type:"text",name:"fullName",id:"fullName"})]}),Object(h.jsxs)("div",{className:Ae.a.settingsBlock,children:[Object(h.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"Job information:"}),Object(h.jsx)("br",{}),Object(h.jsx)(O.b,{as:"textarea",name:"lookingForAJobDescription",id:"lookingForAJobDescription"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"lookingForAJob",children:"Open for job:"}),Object(h.jsx)(O.b,{type:"checkbox",name:"lookingForAJob",id:"lookingForAJob"})]}),Object(h.jsxs)("div",{className:Ae.a.settingsBlock,children:[Object(h.jsx)("h3",{children:"Contacts:"}),Object(h.jsxs)("div",{className:Ae.a.settingsContactsWrapper,children:[Object(h.jsxs)("div",{className:Ae.a.contactsLabales,children:[Object(h.jsx)("label",{htmlFor:"facebook",children:"Facebook:"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"website",children:"Website:"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"vk",children:"Vk:"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"twitter",children:"Twitter:"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"instagram",children:"Instagram:"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"youtube",children:"Youtube:"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"github",children:"Github:"}),Object(h.jsx)("br",{}),Object(h.jsx)("label",{htmlFor:"mainLink",children:"MainLink:"}),Object(h.jsx)("br",{})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(O.b,{type:"text",name:"contacts.facebook",id:"facebook"}),Object(h.jsx)(O.a,{name:"contacts.facebook"}),Object(h.jsx)(O.b,{type:"text",name:"contacts.website",id:"website"}),Object(h.jsx)(O.b,{type:"text",name:"contacts.vk",id:"vk"}),Object(h.jsx)(O.b,{type:"text",name:"contacts.twitter",id:"twitter"}),Object(h.jsx)(O.b,{type:"text",name:"contacts.instagram",id:"instagram"}),Object(h.jsx)(O.b,{type:"text",name:"contacts.youtube",id:"youtube"}),Object(h.jsx)(O.b,{type:"text",name:"contacts.github",id:"github"}),Object(h.jsx)(O.b,{type:"text",name:"contacts.mainLink",id:"mainLink"})]})]})]})]}),Object(h.jsx)("button",{type:"submit",children:"Save all"})]})})]})})),Me=function(e,t,a){return B.get("/users/?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},Ue=function(e){return B.post("/follow/".concat(e)).then((function(e){return e.data}))},Te=function(e){return B.delete("/follow/".concat(e)).then((function(e){return e.data}))},Be=a(21),Le=a.n(Be),Ee=function(e){var t=e.totalItemsCount,a=e.onPageChanged,s=e.currentPage,n=void 0===s?1:s,r=e.itemsPerPage,c=e.loading,o=e.pagesInPaginator,i=void 0===o?10:o,l=Math.ceil(t/r),u=i+n-1,j=[];if(n>=7&&n<=l-3)for(var b=function(e){j.push(Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n===e-6?Le.a.activePage:Le.a.page,onClick:function(){a(e-6)},children:e-6},e)}))},d=n;d<=u;d++)b(d);else if(n<7)for(var p=function(e){j.push(Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n===e?Le.a.activePage:Le.a.page,onClick:function(){a(e)},children:e},e)}))},f=1;f<=i;f++)p(f);else if(n>l-3)for(var m=function(e){j.push(Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:n===e?Le.a.activePage:Le.a.page,onClick:function(){a(e)},children:e},e)}))},O=l-i;O<l;O++)m(O);return Object(h.jsxs)("nav",{className:Le.a.paginatorWrapper,children:[Object(h.jsx)("button",{className:Le.a.page,disabled:!(1!==n&&!c),onClick:function(){return a(n-1)},children:"<"}),Object(h.jsx)("ul",{className:Le.a.pages,children:j}),Object(h.jsx)("span",{children:" ... "}),Object(h.jsx)("button",{className:n===l?Le.a.activePage:Le.a.page,onClick:function(){return a(l)},children:l}),Object(h.jsx)("button",{className:Le.a.page,disabled:!(n!==l&&!c),onClick:function(){return a(n+1)},children:">"})]})},De=a(44),We=a.n(De),He=function(e){var t=e.photo,a=e.name,s=e.status,n=e.id,c=e.followed,i=Object(r.useState)(c),l=Object(we.a)(i,2),u=l[0],j=l[1],b=Object(r.useState)(!1),d=Object(we.a)(b,2),p=d[0],f=d[1],m=function(){var e=Object(U.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,Ue(t);case 3:0===e.sent.resultCode&&j(!0),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(U.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,Te(t);case 3:0===e.sent.resultCode&&j(!1),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:We.a.userItem,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(k.b,{to:"/profile/".concat(n),children:Object(h.jsx)("img",{onClick:function(){o.a,"profile/".concat(n)},src:t||w,className:We.a.userPhoto,alt:"User Avatar"})}),u?Object(h.jsx)("button",{disabled:p,onClick:function(){O(n)},className:We.a.followUnfollowButton,children:"Unfollow"}):Object(h.jsx)("button",{disabled:p,onClick:function(){m(n)},className:We.a.followUnfollowButton,children:"Follow"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"User name: "}),Object(h.jsx)(k.b,{to:"/profile/".concat(n),children:a}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{children:["User status: ",s||"User has not specified"]})]})]},n)},Je=a(68),Re=a.n(Je),Ve=function(e){},Ge=de.a({term:de.b().max(25,"25 characters maximum")}),Xe=function(){return Object(h.jsx)(O.d,{initialValues:{term:""},onSubmit:Ve,validationSchema:Ge,children:Object(h.jsxs)(O.c,{children:[Object(h.jsx)(O.b,{type:"text",name:"term",className:Re.a.searchField}),Object(h.jsx)("button",{className:Re.a.searchButton,children:" Find User"}),Object(h.jsx)("br",{}),Object(h.jsx)(O.a,{name:"term",component:fe}),Object(h.jsx)("br",{})]})})},qe=Object(b.c)(m)((function(){var e=Object(r.useState)(!1),t=Object(we.a)(e,2),a=t[0],s=t[1],n=Object(r.useState)([]),c=Object(we.a)(n,2),o=c[0],i=c[1],l=Object(r.useState)(1),u=Object(we.a)(l,2),j=u[0],b=u[1],d=Object(r.useState)(0),p=Object(we.a)(d,2),f=p[0],m=p[1];Object(r.useEffect)((function(){(function(){var e=Object(U.a)(M.a.mark((function e(){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,Me(20,j,"");case 3:t=e.sent,i(t.items),m(t.totalCount),s(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j]);var O=function(e){b(e)};if(!o)return Object(h.jsx)("div",{children:"Loading"});var x=o.map((function(e){return Object(h.jsx)(He,{name:e.name,id:e.id,photo:e.photos.small,followed:e.followed,status:e.status},e.id)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(Xe,{}),Object(h.jsx)(Ee,{totalItemsCount:f,onPageChanged:O,currentPage:j,itemsPerPage:20,loading:a,pagesInPaginator:10}),x,Object(h.jsx)(Ee,{totalItemsCount:f,onPageChanged:O,currentPage:j,itemsPerPage:20,loading:a,pagesInPaginator:10})]})})),Ke=Object(c.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status,isAuth:e.auth.isAuth}}),{userAuthorizing:ie})((function(e){var t=e.userAuthorizing;e.isAuth;return Object(r.useEffect)((function(){t()}),[t]),Object(h.jsxs)("div",{className:l.a.app__Wrapper,children:[Object(h.jsx)("header",{className:l.a.app__Header,children:Object(h.jsx)(ue,{})}),Object(h.jsx)("div",{className:l.a.app__Navbar,children:Object(h.jsx)(ge,{})}),Object(h.jsx)("main",{className:l.a.app__Content,children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.a,{exact:!0,from:"/",to:"/profile"}),Object(h.jsx)(o.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(ye,{})}}),Object(h.jsx)(o.b,{path:"/dialogs",render:function(){return Object(h.jsx)(S,{})}}),Object(h.jsx)(o.b,{path:"/users",render:function(){return Object(h.jsx)(qe,{})}}),Object(h.jsx)(o.b,{path:"/settings",render:function(){return Object(h.jsx)(Fe,{})}}),Object(h.jsx)(o.b,{path:"/login",render:function(){return Object(h.jsx)(me,{})}}),Object(h.jsx)(o.a,{from:"",to:"/profile"})]})})]})})),Qe=a(108),ze="SN/USERS/SET_USERS",Ye={users:null},Ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ze:return Object(d.a)(Object(d.a)({},e),{},{users:t.users,totalUsersCount:t.totalUsersCount});default:return e}},$e=Object(b.b)({profile:ee,auth:le,users:Ze,dialogs:N}),et=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c,tt=Object(b.d)($e,et(Object(b.a)(Qe.a)));n.a.render(Object(h.jsx)(k.a,{children:Object(h.jsx)(c.a,{store:tt,children:Object(h.jsx)(Ke,{})})}),document.getElementById("root"))},25:function(e,t,a){e.exports={header_wrapper:"Header_header_wrapper__Aeret",mediaBlock:"Header_mediaBlock__2B-Xh",logo:"Header_logo__2_Slf",slogan:"Header_slogan__2ab9O",loginBlock:"Header_loginBlock__2ta3n",linkToProfile:"Header_linkToProfile__2mVSy",linkToLogin:"Header_linkToLogin__2WRmu",logoutButton:"Header_logoutButton__2ICDe"}},29:function(e,t,a){e.exports={postField:"Posts_postField__3kgQM",newPostButton:"Posts_newPostButton__3klq3",post:"Posts_post__fZPPo",userPhoto:"Posts_userPhoto__11TS2",postText:"Posts_postText__2nuXj",likeBlock:"Posts_likeBlock__1fh5-",likeButton:"Posts_likeButton__ijqjM"}},30:function(e,t,a){e.exports={loginWrapper:"Login_loginWrapper__276UC",loginButton:"Login_loginButton__Xv8tB",captchaBlock:"Login_captchaBlock__1sJjV",serverErrorMessage:"Login_serverErrorMessage__2_LT5"}},34:function(e,t,a){e.exports={settingsComponent:"Settings_settingsComponent__3y_b_",settingsWrapper:"Settings_settingsWrapper__1kBQ5",settingsBlock:"Settings_settingsBlock__2910D",settingsContactsWrapper:"Settings_settingsContactsWrapper__3orMw",contactsLabales:"Settings_contactsLabales__3j6g-"}},43:function(e,t,a){e.exports={app__Wrapper:"App_app__Wrapper__e5wQU",app__Header:"App_app__Header__3CKVQ",app__Navbar:"App_app__Navbar__1dPdj",app__Content:"App_app__Content__2n7KG"}},44:function(e,t,a){e.exports={userItem:"UserItem_userItem__1he0e",userPhoto:"UserItem_userPhoto__pEM9g",followUnfollowButton:"UserItem_followUnfollowButton__cpQif"}},68:function(e,t,a){e.exports={searchField:"UsersSearchForm_searchField__17OXu",searchButton:"UsersSearchForm_searchButton__33p-b"}},8:function(e,t,a){e.exports={link:"Navbar_link__1mMTW",active:"Navbar_active__1rGjo"}}},[[240,1,2]]]);
//# sourceMappingURL=main.6f6ebb9e.chunk.js.map