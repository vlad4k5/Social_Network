(this.webpackJsonpproject_social_network=this.webpackJsonpproject_social_network||[]).push([[0],{107:function(e,t,a){e.exports={error:"TextError_error__2Wr7d"}},108:function(e,t,a){e.exports={preloaderBlock:"Preloader_preloaderBlock__3XwT-"}},115:function(e,t,a){},16:function(e,t,a){e.exports={settingsComponent:"Settings_settingsComponent__3y_b_",settingsWrapper:"Settings_settingsWrapper__1kBQ5",toggle:"Settings_toggle__36KCx",errorMessage:"Settings_errorMessage__1QK2l",submitButton:"Settings_submitButton__2VnsO"}},20:function(e,t,a){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__1y2rU",dialogsUsers:"Dialogs_dialogsUsers__1HD5x",dialogsUserPhoto:"Dialogs_dialogsUserPhoto__2dG1w",dialogsMessages:"Dialogs_dialogsMessages__3fwCp",sendMessageButton:"Dialogs_sendMessageButton__1J7Te",dialogsUserWrapper:"Dialogs_dialogsUserWrapper__3awDP",linkToUserChat:"Dialogs_linkToUserChat__4nRSW",dialogsMessageWrapper:"Dialogs_dialogsMessageWrapper__2Id3C"}},23:function(e,t,a){e.exports={paginatorWrapper:"Paginator_paginatorWrapper__-TPRt",activePage:"Paginator_activePage__2cdnt"}},242:function(e,t,a){"use strict";a.r(t);var s=a(51),r=a.n(s),n=(a(115),a(1)),c=a(14),o=a(4),i=a(44),l=a.n(i),u=a(20),j=a.n(u),b=a(19),d=a(5),p=a(100),h=a(0),m=function(e){return{isAuth:e.auth.isAuth}};var f=function(e){return Object(c.b)(m)((function(t){var a=t.isAuth,s=Object(p.a)(t,["isAuth"]);return!1===a?Object(h.jsx)(o.a,{to:"/login"}):Object(h.jsx)(e,Object(d.a)({},s))}))},x=a(3),O=a(10),g="SN/DIALOGS/ADD_NEW_MESSAGE",_={users:[{userName:"Dmitry",id:1},{userName:"Alexander",id:2},{userName:"Vladimir",id:3},{userName:"Konstantin",id:4},{userName:"Maxim",id:5}],messages:["Hello, my name is Dmitry","What's up?","How old are you?","Where are you from?","Nice to meet you! :)"]},v={addNewMessage:function(e){return{type:g,message:e}}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{messages:[].concat(Object(O.a)(e.messages),[t.message])});default:return e}},w=a(11),k=a.p+"static/media/basicUserPhoto.94cf7531.png",P=function(e){var t=e.userName;return Object(h.jsxs)("div",{className:j.a.dialogsUserWrapper,children:[Object(h.jsx)("img",{src:k,className:j.a.dialogsUserPhoto,alt:"User avatar"}),Object(h.jsx)(w.b,{className:j.a.linkToUserChat,to:"/profile/17001",children:t})]})},y=function(e){var t=e.message;return Object(h.jsxs)("div",{className:j.a.dialogsMessageWrapper,children:[Object(h.jsx)("img",{src:k,className:j.a.dialogsUserPhoto,alt:"User avatar"}),Object(h.jsx)("span",{children:t})]})},I=Object(b.c)(f,Object(c.b)((function(e){return{users:e.dialogs.users,messages:e.dialogs.messages}}),{addNewMessage:v.addNewMessage}))((function(e){var t=e.users,a=e.messages,s=e.addNewMessage,r=t.map((function(e){return Object(h.jsx)(P,{userName:e.userName},e.id)})),n=a.map((function(e,t){return Object(h.jsx)(y,{message:e},t)}));return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:j.a.dialogsWrapper,children:[Object(h.jsx)("div",{className:j.a.dialogsUsers,children:r}),Object(h.jsxs)("div",{className:j.a.dialogsMessages,children:[Object(h.jsx)("div",{className:j.a.messages,children:n}),Object(h.jsx)("div",{children:Object(h.jsx)(x.d,{initialValues:{message:""},onSubmit:function(e,t){var a=t.resetForm;s(e.message),a()},children:Object(h.jsxs)(x.c,{children:[Object(h.jsx)(x.b,{as:"textarea",id:"message",name:"message"}),Object(h.jsx)("button",{type:"submit",className:j.a.sendMessageButton,children:"Send message"})]})})})]})]})})})),S=a(25),C=a.n(S),M=a.p+"static/media/logo.e68b35f4.svg",F=a(2),A=a.n(F),T=a(6),L=a(103),B=a.n(L).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"59cbca27-652d-4a07-9bc2-6419916cee9e"}}),U=function(){return Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("/auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},E=function(){return Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.delete("/auth/login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},D=function(e){return Object(T.a)(A.a.mark((function t(){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.post("/auth/login",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},W=function(){return Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("/security/get-captcha-url");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},J=function(e){return Object(T.a)(A.a.mark((function t(){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.get("/profile/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},H=function(e){return Object(T.a)(A.a.mark((function t(){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.get("/profile/status/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},R=function(e){return Object(T.a)(A.a.mark((function t(){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.put("/profile",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},V=function(e){return Object(T.a)(A.a.mark((function t(){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.put("/profile/status",{status:e});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},X=function(e){return Object(T.a)(A.a.mark((function t(){var a,s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(a=new FormData).append("image",e),t.next=4,B.put("/profile/photo",a,{headers:{"Content-Type":"multipart/form-data"}});case 4:return s=t.sent,t.abrupt("return",s.data);case 6:case"end":return t.stop()}}),t)})))()},G="SN/PROFILE/SET_PROFILE",K="SN/PROFILE/SET_STATUS",q="SN/PROFILE/SET_LOADING",Q="SN/PROFILE/SET_PHOTO",z="SN/PROFILE/ADD_NEW_POST",Y={status:"",profileInfo:null,isLoading:!1,posts:[{id:1,message:"My first post",likesCount:190},{id:2,message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",likesCount:21},{id:3,message:"Just an example",likesCount:16}]},Z={setProfile:function(e){return{type:G,profileInfo:e}},setStatus:function(e){return{type:K,status:e}},setLoading:function(e){return{type:q,loading:e}},setPhoto:function(e){return{type:Q,photos:e}},addNewPost:function(e){return{type:z,postText:e}}},$=function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){var s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Z.setLoading(!0)),t.next=3,J(e);case 3:s=t.sent,a(Z.setProfile(s)),a(Z.setLoading(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},ee=function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){var s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e);case 2:s=t.sent,a(Z.setStatus(null===s?"":s));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(d.a)(Object(d.a)({},e),{},{profileInfo:t.profileInfo});case K:return Object(d.a)(Object(d.a)({},e),{},{status:t.status});case q:return Object(d.a)(Object(d.a)({},e),{},{isLoading:t.loading});case Q:return Object(d.a)(Object(d.a)({},e),{},{profileInfo:Object(d.a)(Object(d.a)({},e.profileInfo),{},{photos:t.photos})});case z:var a={id:e.posts.length+1,message:t.postText,likesCount:0};return Object(d.a)(Object(d.a)({},e),{},{posts:[].concat(Object(O.a)(e.posts),[a])});default:return e}},ae="SN/AUTH/SET_USER_DATA",se="SN/AUTH/SET_CAPTCHA",re="SN/AUTH/SET_ERROR_MESSAGE",ne={userData:{email:null,id:null,login:null},isAuth:null,captcha:null,errorMessage:null},ce=function(e,t){return{type:ae,isAuth:e,userData:t}},oe=function(e){return{type:se,captcha:e}},ie=function(e){return{type:re,errorMessage:e}},le=function(){return function(){var e=Object(T.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:0===(a=e.sent).resultCode?(t(ce(!0,a.data)),t($(a.data.id)),t(ee(a.data.id))):t(ce(!1,null));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:return Object(d.a)(Object(d.a)({},e),{},{isAuth:t.isAuth,userData:t.userData?t.userData:{email:null,id:null,login:null}});case se:return Object(d.a)(Object(d.a)({},e),{},{captcha:t.captcha});case re:return Object(d.a)(Object(d.a)({},e),{},{errorMessage:t.errorMessage});default:return e}},je=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,userName:e.auth.userData.login}}),{logout:function(){return function(){var e=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:0===e.sent.resultCode&&(t(ce(!1,null)),t(Z.setProfile(null)),t(Z.setStatus("")));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,a=e.logout,s=e.userName;return Object(h.jsxs)("div",{className:C.a.header_wrapper,children:[Object(h.jsxs)("div",{className:C.a.mediaBlock,children:[Object(h.jsx)("img",{src:M,className:C.a.logo,alt:"Social-Network logo"}),Object(h.jsx)("h2",{className:C.a.slogan,children:"Social Network"})]}),t?Object(h.jsxs)("div",{className:C.a.loginBlock,children:[Object(h.jsx)(w.b,{to:"/profile",className:C.a.linkToProfile,children:s}),Object(h.jsx)("button",{onClick:a,className:C.a.logoutButton,children:"Log out"})]}):Object(h.jsx)("div",{className:C.a.loginBlock,children:Object(h.jsx)(w.b,{to:"/login",className:C.a.linkToLogin,children:Object(h.jsx)("button",{className:C.a.logoutButton,children:"Log in"})})})]})})),be=a(26),de=a.n(be),pe=a(13),he=a(107),me=a.n(he),fe=function(e){var t=e.children;return Object(h.jsx)("span",{className:me.a.error,children:t})},xe=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,captcha:e.auth.captcha,errorMessage:e.auth.errorMessage}}),{login:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){var s,r;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e);case 2:if(0!==(s=t.sent).resultCode){t.next=9;break}a(le()),a(ie(null)),a(oe(null)),t.next=15;break;case 9:if(10!==s.resultCode){t.next=15;break}return a(ie(s.messages[0])),t.next=13,W();case 13:r=t.sent,a(oe(r.url));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.isAuth,a=e.captcha,s=e.login,r=e.errorMessage,n=pe.a({email:pe.b().email(" Invalid e-mail format!").required(" Field is required!").nullable(),password:pe.b().required(" Field is required!").nullable()});return t?Object(h.jsx)(o.a,{to:"/profile"}):Object(h.jsx)("div",{className:de.a.loginWrapper,children:Object(h.jsx)(x.d,{initialValues:{email:"",password:"",rememberMe:!1,captcha:null},onSubmit:function(e){s(e)},validationSchema:n,children:Object(h.jsxs)(x.c,{children:[Object(h.jsx)("h2",{children:"Login Page "}),r&&Object(h.jsxs)("div",{className:de.a.serverErrorMessage,children:[" ",r," "]}),Object(h.jsxs)("div",{className:de.a.loginItem,children:[Object(h.jsx)(x.a,{name:"email",component:fe}),Object(h.jsx)(x.b,{type:"text",name:"email",placeholder:"Email Address"})]}),Object(h.jsxs)("div",{className:de.a.loginItem,children:[Object(h.jsx)(x.a,{name:"password",component:fe}),Object(h.jsx)(x.b,{type:"password",name:"password",placeholder:"Password"})]}),Object(h.jsxs)("div",{className:de.a.checkboxBlock,children:[Object(h.jsx)("label",{htmlFor:"rememberMe",className:de.a.label,children:" Remember me:"}),Object(h.jsx)(x.b,{type:"checkbox",name:"rememberMe",id:"rememberMe"}),Object(h.jsx)("label",{htmlFor:"rememberMe",className:de.a.toggle,children:Object(h.jsx)("span",{})})]}),a&&Object(h.jsxs)("div",{className:de.a.captchaBlock,children:[Object(h.jsx)("img",{src:a,alt:"captcha"}),Object(h.jsx)("label",{htmlFor:"captcha",className:de.a.err,children:" Please write a symbols from  captcha: "}),Object(h.jsx)(x.b,{type:"text",id:"captcha",name:"captcha"})]}),Object(h.jsx)("button",{className:de.a.loginButton,children:" Login "})]})})})})),Oe=a(9),ge=a.n(Oe),_e=function(){return Object(h.jsxs)("nav",{className:ge.a.navbar,children:[Object(h.jsx)("div",{className:ge.a.navbar__Item,children:Object(h.jsx)(w.b,{to:"/profile",className:ge.a.link,activeClassName:ge.a.active,children:"Profile"})}),Object(h.jsx)("div",{className:ge.a.navbar__Item,children:Object(h.jsx)(w.b,{to:"/dialogs",className:ge.a.link,activeClassName:ge.a.active,children:"Messages"})}),Object(h.jsx)("div",{className:ge.a.navbar__Item,children:Object(h.jsx)(w.b,{to:"/users",className:ge.a.link,activeClassName:ge.a.active,children:"Users  "})}),Object(h.jsx)("div",{className:ge.a.navbar__Item,children:Object(h.jsx)(w.b,{to:"/news",className:ge.a.link,activeClassName:ge.a.active,children:"News"})}),Object(h.jsx)("div",{className:ge.a.navbar__Item,children:Object(h.jsx)(w.b,{to:"/music",className:ge.a.link,activeClassName:ge.a.active,children:"Music"})}),Object(h.jsx)("div",{className:ge.a.navbar__Item,children:Object(h.jsx)(w.b,{to:"/settings",className:ge.a.link,activeClassName:ge.a.active,children:"Settings"})})]})},ve=a(36),Ne=a.n(ve),we=function(e){var t=e.id,a=e.userPhoto,s=e.message;e.likesCount;return Object(h.jsxs)("div",{className:Ne.a.post,children:[Object(h.jsx)("img",{className:Ne.a.userPhoto,src:a,alt:"User avatar"}),Object(h.jsx)("div",{children:Object(h.jsx)("div",{className:Ne.a.postText,children:Object(h.jsx)("span",{children:s})})})]},t)},ke=function(e){var t=e.posts,a=e.userPhoto,s=e.addNewPost,r=e.isOwner,n=Object(O.a)(t).reverse().map((function(e){return Object(h.jsx)(we,{message:e.message,likesCount:e.likesCount,userPhoto:a,id:e.id},e.id)}));return Object(h.jsxs)("div",{children:[r&&Object(h.jsx)(x.d,{initialValues:{postText:""},onSubmit:function(e,t){var a=t.resetForm;s(e.postText),a()},children:Object(h.jsxs)(x.c,{children:[Object(h.jsx)(x.b,{name:"postText",children:function(e){var t=e.field;return Object(h.jsx)("div",{children:Object(h.jsx)("textarea",Object(d.a)(Object(d.a)({className:Ne.a.postField,type:"text",id:"postText",placeholder:"Add new post..."},t),{},{children:e.children}))})}}),Object(h.jsx)("button",{type:"submit",className:Ne.a.newPostButton,children:"Add post"})]})}),Object(h.jsx)("div",{children:n})]})},Pe=a(12),ye=a(27),Ie=a.n(ye),Se=a.p+"static/media/preloader.c1479316.gif",Ce=a(108),Me=a.n(Ce),Fe=function(){return Object(h.jsx)("div",{className:Me.a.preloaderBlock,children:Object(h.jsx)("img",{src:Se,alt:"Preloader"})})},Ae=function(e){var t=e.profileInfo,a=e.status,s=e.updateStatus,r=e.updatePhoto,c=e.isOwner,o=Object(n.useState)(!1),i=Object(Pe.a)(o,2),l=i[0],u=i[1],j=Object(n.useState)(a),b=Object(Pe.a)(j,2),d=b[0],p=b[1];Object(n.useEffect)((function(){p(a)}),[a]);return t?Object(h.jsxs)("div",{className:Ie.a.profileInfo_wrapper,children:[Object(h.jsxs)("div",{className:Ie.a.userPhoto,children:[Object(h.jsx)("label",{htmlFor:"photoFile",children:Object(h.jsx)("img",{src:t.photos.large?t.photos.large:k,className:c?Ie.a.ownerPhoto:"",alt:"User Avatar"})}),c&&Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{id:"photoFile",className:Ie.a.photoFile,type:"file",onChange:function(e){r(e.target.files[0])}}),Object(h.jsx)("button",{className:Ie.a.editProfile,children:Object(h.jsx)(w.b,{to:"/settings",children:"Edit profile"})})]})]}),Object(h.jsxs)("div",{className:Ie.a.aboutMe,children:[Object(h.jsx)("h1",{className:Ie.a.userName,children:t.fullName}),Object(h.jsxs)("div",{className:c?Ie.a.userStatus:"",onClick:function(){u(!0)},children:[Object(h.jsx)("label",{htmlFor:"status",children:"Status: "}),l&&c?Object(h.jsx)("input",{value:d,onChange:function(e){p(e.currentTarget.value)},onBlur:function(){s(d),u(!1)},autoFocus:!0}):Object(h.jsx)("span",{id:"status",children:a||"User has no status"})]}),Object(h.jsx)("div",{className:Ie.a.aboutMeInfo,children:Object(h.jsxs)("p",{children:["About me: ",t.aboutMe?t.aboutMe:""]})}),Object(h.jsxs)("div",{className:Ie.a.jobInfo,children:[Object(h.jsx)("p",{children:t.lookingForAJob?"Looking for a job \u2714\ufe0f":"Not looking for a job \u274c"}),Object(h.jsx)("p",{children:t.lookingForAJobDescription?t.lookingForAJobDescription:""})]})]})]}):Object(h.jsx)(Fe,{})},Te=Object(b.c)(Object(c.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status,posts:e.profile.posts,ownerId:e.auth.userData.id,isLoading:e.profile.isLoading}}),{getProfile:$,getStatus:ee,addNewPost:Z.addNewPost,updateStatus:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(e);case 2:0===t.sent.resultCode&&a(Z.setStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updatePhoto:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){var s;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,X(e);case 2:0===(s=t.sent).resultCode&&a(Z.setPhoto(s.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),f,o.g)((function(e){var t=e.getProfile,a=e.getStatus,s=e.match,r=e.ownerId,c=e.profileInfo,o=e.status,i=e.posts,l=e.addNewPost,u=e.updateStatus,j=e.updatePhoto,b=e.isLoading;return Object(n.useEffect)((function(){null!==r&&(t(s.params.userId?s.params.userId:r),a(s.params.userId?s.params.userId:r))}),[s.params.userId,r,t,a]),c?Object(h.jsx)(h.Fragment,{children:b?Object(h.jsx)(Fe,{}):Object(h.jsxs)("div",{children:[Object(h.jsx)(Ae,{profileInfo:c,status:o,updateStatus:u,updatePhoto:j,isOwner:!s.params.userId}),Object(h.jsx)(ke,{posts:i,userPhoto:(null===c||void 0===c?void 0:c.photos.small)?c.photos.small:k,addNewPost:l,isOwner:!s.params.userId})]})}):Object(h.jsx)(Fe,{})})),Le=a(16),Be=a.n(Le),Ue=Object(b.c)(f,Object(c.b)((function(e){return{profileInfo:e.profile.profileInfo,ownerId:e.auth.userData.id}}),{updateProfile:function(e){return function(){var t=Object(T.a)(A.a.mark((function t(a){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Z.setLoading(!0)),t.next=3,R(e);case 3:0===t.sent.resultCode&&a(Z.setProfile(e)),a(Z.setLoading(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getProfile:$,getStatus:ee}))((function(e){var t=e.profileInfo,a=e.updateProfile,s=e.ownerId,r=e.getProfile,n=e.getStatus;if(null===s)return Object(h.jsx)(Fe,{});if(s!==(null===t||void 0===t?void 0:t.userId)&&(r(s),n(s)),!t||s!==t.userId)return Object(h.jsx)(Fe,{});var c={aboutMe:t.aboutMe,userId:t.userId,contacts:{facebook:t.contacts.facebook,website:t.contacts.website,vk:t.contacts.vk,twitter:t.contacts.twitter,instagram:t.contacts.instagram,youtube:t.contacts.youtube,github:t.contacts.github,mainLink:t.contacts.mainLink},lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,fullName:t.fullName,photos:t.photos},o=pe.a({contacts:pe.a({facebook:pe.b().url("! Invalid url format"),website:pe.b().url("! Invalid url format"),vk:pe.b().url("! Invalid url format"),twitter:pe.b().url("! Invalid url format"),instagram:pe.b().url("! Invalid url format"),youtube:pe.b().url("! Invalid url format"),github:pe.b().url("! Invalid url format"),mainLink:pe.b().url("! Invalid url format")}),aboutMe:pe.b().max(200,"! Too long text"),fullName:pe.b().max(20,"! Too long name"),lookingForAJobDescription:pe.b().max(200,"! Too long text")});return Object(h.jsxs)("div",{className:Be.a.settingsComponent,children:[Object(h.jsx)("h2",{children:"Account settings"}),Object(h.jsx)(x.d,{initialValues:c,onSubmit:function(e){a(e)},validationSchema:o,children:Object(h.jsxs)(x.c,{children:[Object(h.jsxs)("div",{className:Be.a.settingsWrapper,children:[Object(h.jsx)("label",{htmlFor:"aboutMe",children:"About Me:"}),Object(h.jsx)(x.b,{as:"textarea",name:"aboutMe",id:"aboutMe"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"aboutMe"})}),Object(h.jsx)("label",{htmlFor:"fullName",children:"Full Name:"}),Object(h.jsx)(x.b,{type:"text",name:"fullName",id:"fullName"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"fullName"})}),Object(h.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"Job information:"}),Object(h.jsx)(x.b,{as:"textarea",name:"lookingForAJobDescription",id:"lookingForAJobDescription"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"lookingForAJobDescription"})}),Object(h.jsx)("label",{htmlFor:"lookingForAJob",children:" Looking for a job:"}),Object(h.jsx)(x.b,{type:"checkbox",name:"lookingForAJob",id:"lookingForAJob"}),Object(h.jsx)("label",{htmlFor:"lookingForAJob",className:Be.a.toggle,children:Object(h.jsx)("span",{})}),Object(h.jsx)("span",{}),Object(h.jsx)("h2",{children:"Contacts"})," ",Object(h.jsx)("span",{})," ",Object(h.jsx)("span",{}),Object(h.jsx)("label",{htmlFor:"facebook",children:"Facebook:"}),Object(h.jsx)(x.b,{type:"text",name:"contacts.facebook",id:"facebook"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"contacts.facebook"})}),Object(h.jsx)("label",{htmlFor:"website",children:"Website:"}),Object(h.jsx)(x.b,{type:"text",name:"contacts.website",id:"website"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"contacts.website"})}),Object(h.jsx)("label",{htmlFor:"vk",children:"Vkontakte:"}),Object(h.jsx)(x.b,{type:"text",name:"contacts.vk",id:"vk"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"contacts.vk"})}),Object(h.jsx)("label",{htmlFor:"twitter",children:"Twitter:"}),Object(h.jsx)(x.b,{type:"text",name:"contacts.twitter",id:"twitter"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"contacts.twitter"})}),Object(h.jsx)("label",{htmlFor:"instagram",children:"Instagram:"}),Object(h.jsx)(x.b,{type:"text",name:"contacts.instagram",id:"instagram"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"contacts.instagram"})}),Object(h.jsx)("label",{htmlFor:"youtube",children:"Youtube:"}),Object(h.jsx)(x.b,{type:"text",name:"contacts.youtube",id:"youtube"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"contacts.youtube"})}),Object(h.jsx)("label",{htmlFor:"github",children:"Github:"}),Object(h.jsx)(x.b,{type:"text",name:"contacts.github",id:"github"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"contacts.github"})}),Object(h.jsx)("label",{htmlFor:"mainLink",children:"MainLink:"}),Object(h.jsx)(x.b,{type:"text",name:"contacts.mainLink",id:"mainLink"}),Object(h.jsx)("span",{className:Be.a.errorMessage,children:Object(h.jsx)(x.a,{name:"contacts.mainLink"})})]}),Object(h.jsx)("button",{type:"submit",className:Be.a.submitButton,children:"Save changes"})]})})]})})),Ee=function(e,t,a){return Object(T.a)(A.a.mark((function s(){var r;return A.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,B.get("/users/?count=".concat(e,"&page=").concat(t,"&term=").concat(a));case 2:return r=s.sent,s.abrupt("return",r.data);case 4:case"end":return s.stop()}}),s)})))()},De=function(e){return Object(T.a)(A.a.mark((function t(){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.post("/follow/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},We=function(e){return Object(T.a)(A.a.mark((function t(){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.delete("/follow/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},Je=a(23),He=a.n(Je),Re=function(e){var t=e.totalItemsCount,a=e.onPageChanged,s=e.currentPage,r=void 0===s?1:s,n=e.itemsPerPage,c=e.loading,o=e.pagesInPaginator,i=void 0===o?10:o,l=Math.ceil(t/n),u=i+r-1,j=[];if(r>=7&&r<=l-3)for(var b=function(e){j.push(Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:r===e-6?He.a.activePage:He.a.page,onClick:function(){a(e-6)},children:e-6})},e))},d=r;d<=u;d++)b(d);else if(r<7)for(var p=function(e){j.push(Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:r===e?He.a.activePage:He.a.page,onClick:function(){a(e)},children:e})},e))},m=1;m<=i;m++)p(m);else if(r>l-3)for(var f=function(e){j.push(Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:r===e?He.a.activePage:He.a.page,onClick:function(){a(e)},children:e})},e))},x=l-i;x<l;x++)f(x);return Object(h.jsxs)("nav",{className:He.a.paginatorWrapper,children:[Object(h.jsx)("button",{className:He.a.page,disabled:!(1!==r&&!c),onClick:function(){return a(r-1)},children:"<"}),Object(h.jsx)("ul",{className:He.a.pages,children:j}),Object(h.jsx)("span",{children:" ... "}),Object(h.jsx)("button",{className:r===l?He.a.activePage:He.a.page,onClick:function(){return a(l)},children:l}),Object(h.jsx)("button",{className:He.a.page,disabled:!(r!==l&&!c),onClick:function(){return a(r+1)},children:">"})]})},Ve=a(37),Xe=a.n(Ve),Ge=function(e){var t=e.photo,a=e.name,s=e.status,r=e.id,c=e.followed,i=Object(n.useState)(c),l=Object(Pe.a)(i,2),u=l[0],j=l[1],b=Object(n.useState)(!1),d=Object(Pe.a)(b,2),p=d[0],m=d[1],f=function(){var e=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,De(t);case 3:0===e.sent.resultCode&&j(!0),m(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(T.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,We(t);case 3:0===e.sent.resultCode&&j(!1),m(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:Xe.a.userItem,children:[Object(h.jsx)("div",{children:Object(h.jsx)(w.b,{to:"/profile/".concat(r),children:Object(h.jsx)("img",{onClick:function(){o.a,"profile/".concat(r)},src:t||k,className:Xe.a.userPhoto,alt:"User Avatar"})})}),Object(h.jsxs)("div",{className:Xe.a.userInfo,children:[Object(h.jsx)(w.b,{to:"/profile/".concat(r),className:Xe.a.userName,children:a}),Object(h.jsx)("span",{children:s||"User has no status"})]}),Object(h.jsx)("div",{className:Xe.a.subscribeBlock,children:u?Object(h.jsx)("button",{disabled:p,onClick:function(){x(r)},className:Xe.a.followedButton,children:"Unfollow"}):Object(h.jsx)("button",{disabled:p,onClick:function(){f(r)},children:"Follow"})})]},r)},Ke=a(55),qe=a.n(Ke),Qe=function(e){var t=e.setFindValue,a=e.setCurrentPage,s=Object(n.useState)(""),r=Object(Pe.a)(s,2),c=r[0],o=r[1];return Object(h.jsxs)("div",{className:qe.a.searchWrapper,children:[Object(h.jsx)("input",{type:"text",name:"term",className:qe.a.searchField,value:c,onChange:function(e){o(e.target.value)}}),Object(h.jsx)("button",{className:qe.a.searchButton,onClick:function(){t(c),a(1)},children:" Find User"})]})},ze=a(109),Ye=function(){return Object(h.jsxs)(ze.a,{speed:1,width:920,height:103,viewBox:"0 0 920 103",backgroundColor:"#dedede",foregroundColor:"#8575ff",children:[Object(h.jsx)("rect",{x:"534",y:"113",rx:"0",ry:"0",width:"88",height:"71"}),Object(h.jsx)("rect",{x:"573",y:"182",rx:"10",ry:"10",width:"150",height:"90"}),Object(h.jsx)("rect",{x:"572",y:"244",rx:"3",ry:"3",width:"150",height:"15"}),Object(h.jsx)("rect",{x:"577",y:"251",rx:"3",ry:"3",width:"90",height:"15"}),Object(h.jsx)("rect",{x:"576",y:"248",rx:"8",ry:"8",width:"80",height:"25"}),Object(h.jsx)("rect",{x:"564",y:"515",rx:"8",ry:"8",width:"32",height:"32"}),Object(h.jsx)("circle",{cx:"586",cy:"527",r:"8"}),Object(h.jsx)("circle",{cx:"621",cy:"481",r:"125"}),Object(h.jsx)("rect",{x:"394",y:"507",rx:"10",ry:"10",width:"280",height:"84"}),Object(h.jsx)("rect",{x:"516",y:"516",rx:"5",ry:"5",width:"90",height:"30"}),Object(h.jsx)("rect",{x:"498",y:"501",rx:"20",ry:"20",width:"150",height:"45"}),Object(h.jsx)("circle",{cx:"55",cy:"55",r:"40"}),Object(h.jsx)("circle",{cx:"584",cy:"202",r:"36"}),Object(h.jsx)("circle",{cx:"620",cy:"215",r:"79"}),Object(h.jsx)("rect",{x:"105",y:"50",rx:"3",ry:"3",width:"180",height:"15"}),Object(h.jsx)("rect",{x:"105",y:"20",rx:"3",ry:"3",width:"133",height:"20"}),Object(h.jsx)("rect",{x:"202",y:"21",rx:"0",ry:"0",width:"2",height:"0"}),Object(h.jsx)("rect",{x:"790",y:"25",rx:"4",ry:"4",width:"85",height:"30"})]})},Ze=Object(b.c)(f)((function(){var e=Object(n.useState)(!1),t=Object(Pe.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),c=Object(Pe.a)(r,2),o=c[0],i=c[1],l=Object(n.useState)(1),u=Object(Pe.a)(l,2),j=u[0],b=u[1],d=Object(n.useState)(0),p=Object(Pe.a)(d,2),m=p[0],f=p[1],x=Object(n.useState)(""),g=Object(Pe.a)(x,2),_=g[0],v=g[1];Object(n.useEffect)((function(){Object(T.a)(A.a.mark((function e(){var t;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,Ee(20,j,_);case 3:t=e.sent,i(t.items),f(t.totalCount),s(!1);case 7:case"end":return e.stop()}}),e)})))()}),[j,_]);var N=function(e){b(e)},w=o.map((function(e){return Object(h.jsx)(Ge,{name:e.name,id:e.id,photo:e.photos.small,followed:e.followed,status:e.status},e.id)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(Qe,{setFindValue:v,setCurrentPage:b}),Object(h.jsxs)("div",{children:[Object(h.jsx)(Re,{totalItemsCount:m,onPageChanged:N,currentPage:j,itemsPerPage:20,loading:a,pagesInPaginator:10}),a?Object(O.a)(Array(10)).map((function(e,t){return Object(h.jsx)(Ye,{},t)})):w,Object(h.jsx)(Re,{totalItemsCount:m,onPageChanged:N,currentPage:j,itemsPerPage:20,loading:a,pagesInPaginator:10})]})]})})),$e=Object(c.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status,isAuth:e.auth.isAuth}}),{userAuthorizing:le})((function(e){var t=e.userAuthorizing;e.isAuth;return Object(n.useEffect)((function(){t()}),[t]),Object(h.jsxs)("div",{className:l.a.app__Wrapper,children:[Object(h.jsx)("header",{className:l.a.app__Header,children:Object(h.jsx)(je,{})}),Object(h.jsx)("div",{className:l.a.app__Navbar,children:Object(h.jsx)(_e,{})}),Object(h.jsx)("main",{className:l.a.app__Content,children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.a,{exact:!0,from:"/",to:"/profile"}),Object(h.jsx)(o.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(Te,{})}}),Object(h.jsx)(o.b,{path:"/dialogs",render:function(){return Object(h.jsx)(I,{})}}),Object(h.jsx)(o.b,{path:"/users",render:function(){return Object(h.jsx)(Ze,{})}}),Object(h.jsx)(o.b,{path:"/settings",render:function(){return Object(h.jsx)(Ue,{})}}),Object(h.jsx)(o.b,{path:"/login",render:function(){return Object(h.jsx)(xe,{})}}),Object(h.jsx)(o.a,{from:"",to:"/profile"})]})})]})})),et=a(110),tt="SN/USERS/SET_USERS",at={users:null},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case tt:return Object(d.a)(Object(d.a)({},e),{},{users:t.users,totalUsersCount:t.totalUsersCount});default:return e}},rt=Object(b.b)({profile:te,auth:ue,users:st,dialogs:N}),nt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.c,ct=Object(b.d)(rt,nt(Object(b.a)(et.a)));r.a.render(Object(h.jsx)(w.a,{children:Object(h.jsx)(c.a,{store:ct,children:Object(h.jsx)($e,{})})}),document.getElementById("root"))},25:function(e,t,a){e.exports={header_wrapper:"Header_header_wrapper__Aeret",mediaBlock:"Header_mediaBlock__2B-Xh",logo:"Header_logo__2_Slf",slogan:"Header_slogan__2ab9O",loginBlock:"Header_loginBlock__2ta3n",linkToProfile:"Header_linkToProfile__2mVSy",linkToLogin:"Header_linkToLogin__2WRmu",logoutButton:"Header_logoutButton__2ICDe"}},26:function(e,t,a){e.exports={loginWrapper:"Login_loginWrapper__276UC",toggle:"Login_toggle__ghA2d",checkboxBlock:"Login_checkboxBlock__2Yks3",label:"Login_label__1X41e",loginButton:"Login_loginButton__Xv8tB",captchaBlock:"Login_captchaBlock__1sJjV",serverErrorMessage:"Login_serverErrorMessage__2_LT5"}},27:function(e,t,a){e.exports={profileInfo_wrapper:"ProfileInfo_profileInfo_wrapper__3fTXR",userPhoto:"ProfileInfo_userPhoto__MPJ12",ownerPhoto:"ProfileInfo_ownerPhoto__7uaro",photoFile:"ProfileInfo_photoFile__1jKbj",editProfile:"ProfileInfo_editProfile__HwzNl",aboutMe:"ProfileInfo_aboutMe__1y4EJ",userName:"ProfileInfo_userName__3DjFm",userStatus:"ProfileInfo_userStatus__1EfvW"}},36:function(e,t,a){e.exports={postField:"Posts_postField__3kgQM",newPostButton:"Posts_newPostButton__3klq3",post:"Posts_post__fZPPo",userPhoto:"Posts_userPhoto__11TS2",postText:"Posts_postText__2nuXj"}},37:function(e,t,a){e.exports={userItem:"UserItem_userItem__1he0e",userPhoto:"UserItem_userPhoto__pEM9g",userInfo:"UserItem_userInfo__1WxTM",userName:"UserItem_userName__1_q2g",subscribeBlock:"UserItem_subscribeBlock__2nLCp",followedButton:"UserItem_followedButton__2zRpQ"}},44:function(e,t,a){e.exports={app__Wrapper:"App_app__Wrapper__e5wQU",app__Header:"App_app__Header__3CKVQ",app__Navbar:"App_app__Navbar__1dPdj",app__Content:"App_app__Content__2n7KG"}},55:function(e,t,a){e.exports={searchWrapper:"UsersSearchForm_searchWrapper__28-9j",searchField:"UsersSearchForm_searchField__17OXu",searchButton:"UsersSearchForm_searchButton__33p-b"}},9:function(e,t,a){e.exports={link:"Navbar_link__1mMTW",active:"Navbar_active__1rGjo"}}},[[242,1,2]]]);
//# sourceMappingURL=main.9c973cdd.chunk.js.map