(this.webpackJsonpproject_social_network=this.webpackJsonpproject_social_network||[]).push([[0],{14:function(e,t,s){e.exports={profile_wrapper:"Profile_profile_wrapper__1nhrY",aboutMe:"Profile_aboutMe__3xyNF",contactsBlock:"Profile_contactsBlock__34Qk3",contacts:"Profile_contacts__AWS6u"}},20:function(e,t,s){e.exports={settingsComponent:"Settings_settingsComponent__2N875",settingsWrapper:"Settings_settingsWrapper__1THLa",settingsBlock:"Settings_settingsBlock___muHw",settingsContactsWrapper:"Settings_settingsContactsWrapper__WxheR",contactsLabales:"Settings_contactsLabales__xI9o9"}},22:function(e,t,s){e.exports={header_wrapper:"Header_header_wrapper__55Hcm",mediaBlock:"Header_mediaBlock__2USTd",logo:"Header_logo__2XdaM",slogan:"Header_slogan__1IeIt"}},32:function(e,t,s){e.exports={post:"MyPosts_post__29kgm"}},5:function(e,t,s){e.exports={navbar:"Navbar_navbar__2TWLV",navbar_item:"Navbar_navbar_item__Oi5M3",link:"Navbar_link__yrvZD",active:"Navbar_active__2pkQU"}},55:function(e,t,s){},61:function(e,t,s){},84:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),c=s(23),o=s.n(c),i=(s(55),s(42)),r=s(43),l=s(50),b=s(49),j=s(18),d=s(2),u=(s(61),s(1)),p=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Dialogs"})})},f=s(22),h=s.n(f),x=s.p+"static/media/logo.e68b35f4.svg",m=function(){return Object(u.jsx)("div",{className:h.a.header_wrapper,children:Object(u.jsxs)("header",{className:h.a.mediaBlock,children:[Object(u.jsx)("img",{src:x,id:h.a.logo,alt:"Social-Network logo"}),Object(u.jsx)("h2",{className:h.a.slogan,children:"Social Network"})]})})},O=s(17),g=s(5),v=s.n(g),k=function(){return Object(u.jsxs)("nav",{className:v.a.navbar,children:[Object(u.jsx)("div",{className:v.a.navbar_item,children:Object(u.jsx)(O.b,{to:"/profile",className:v.a.link,activeClassName:v.a.active,children:"Profile"})}),Object(u.jsx)("div",{className:v.a.navbar_item,children:Object(u.jsx)(O.b,{to:"/dialogs",className:v.a.link,activeClassName:v.a.active,children:"Messages"})}),Object(u.jsx)("div",{className:v.a.navbar_item,children:Object(u.jsx)(O.b,{to:"/users",className:v.a.link,activeClassName:v.a.active,children:"Users  "})}),Object(u.jsx)("div",{className:v.a.navbar_item,children:Object(u.jsx)(O.b,{to:"/news",className:v.a.link,activeClassName:v.a.active,children:"News"})}),Object(u.jsx)("div",{className:v.a.navbar_item,children:Object(u.jsx)(O.b,{to:"/music",className:v.a.link,activeClassName:v.a.active,children:"Music"})}),Object(u.jsx)("div",{className:v.a.navbar_item,children:Object(u.jsx)(O.b,{to:"/settings",className:v.a.link,activeClassName:v.a.active,children:"Settings"})})]})},_=s(26),N=s(13),I=s(45),w=s.n(I).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"43974699-a689-48d1-b548-063b532b4c9f"}}),y=function(e){return w.get("/profile/".concat(e))},F=function(e){return w.get("/profile/status/".concat(e))},C=function(e){return w.put("/profile",e)},P="profile-reducer/SET_PROFILE",L="profile-reducer/SET_STATUS",S="profile-reducer/ADD_NEW_POST",M={status:null,profileInfo:null,posts:[{id:1,message:"My first post",likesCount:190},{id:2,message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",likesCount:21},{id:3,message:"Just an example",likesCount:16}]},A=function(e){return{type:P,profileInfo:e}},T=function(e){return function(t){y(e).then((function(e){t(A(e.data))}))}},J=function(e){return function(t){F(e).then((function(e){var s;200===e.status&&t((s=e.data,{type:L,status:s}))}))}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(N.a)(Object(N.a)({},e),{},{profileInfo:Object(N.a)(Object(N.a)({},e.profileInfo),t.profileInfo)});case L:return Object(N.a)(Object(N.a)({},e),{},{status:t.status});case S:var s={id:e.posts.lengtg+1,message:t.postText,likesCount:0};return Object(N.a)(Object(N.a)({},e),{},{posts:[].concat(Object(_.a)(e.posts),[s])});default:return e}},D=s(32),W=s.n(D),H=s(6),U=function(e){return Object(u.jsxs)("div",{className:W.a.post,children:[Object(u.jsx)("img",{src:e.userPhoto,alt:"User photo"}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{children:e.message})}),Object(u.jsx)("div",{children:Object(u.jsxs)("span",{children:["Likes: ",e.likesCount]})})]},e.keyId)},E=function(e){var t=Object(_.a)(e.posts).reverse().map((function(t){return Object(u.jsx)(U,{message:t.message,likesCount:t.likesCount,userPhoto:e.userPhoto,keyId:t.id})}));return Object(u.jsxs)("div",{children:[Object(u.jsx)(H.c,{initialValues:{postText:""},onSubmit:function(t){e.addNewPost(t.postText)},children:Object(u.jsxs)(H.b,{children:[Object(u.jsx)(H.a,{as:"textarea",name:"postText",id:"postText"}),Object(u.jsx)("button",{children:"Add post"})]})}),Object(u.jsx)("div",{className:W.a.posts,children:t})]})},V=s(14),R=s.n(V),Y=Object(j.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status,posts:e.profile.posts}}),{getProfile:T,getStatus:J,addNewPost:function(e){return{type:S,postText:e}}})((function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:R.a.profile_wrapper,children:[Object(u.jsx)("img",{src:e.profileInfo.photos.large}),Object(u.jsxs)("div",{className:R.a.aboutMe,children:[Object(u.jsxs)("span",{children:["Status: ",e.status]}),Object(u.jsx)("h4",{children:"About me:"}),Object(u.jsx)("span",{children:e.profileInfo.aboutMe}),Object(u.jsx)("h4",{children:"Contacts:"}),Object(u.jsxs)("div",{className:R.a.contactsBlock,children:[Object(u.jsx)("a",{href:e.profileInfo.contacts.facebook,className:R.a.contacts,children:"facebook"}),Object(u.jsx)("a",{href:e.profileInfo.contacts.website,className:R.a.contacts,children:"website"}),Object(u.jsx)("a",{href:e.profileInfo.contacts.vk,className:R.a.contacts,children:"vk"}),Object(u.jsx)("a",{href:e.profileInfo.contacts.twitter,className:R.a.contacts,children:"twitter"}),Object(u.jsx)("a",{href:e.profileInfo.contacts.instagram,className:R.a.contacts,children:"instagram"}),Object(u.jsx)("a",{href:e.profileInfo.contacts.youtube,className:R.a.contacts,children:"youtube"}),Object(u.jsx)("a",{href:e.profileInfo.contacts.github,className:R.a.contacts,children:"github"}),Object(u.jsx)("a",{href:e.profileInfo.contacts.mainLink,className:R.a.contacts,children:"mainLink"})]})]})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("br",{}),Object(u.jsx)(E,{posts:e.posts,userPhoto:e.profileInfo.photos.small,addNewPost:e.addNewPost})]})})),Q=s(20),G=s.n(Q),K=Object(j.b)((function(e){return{profileInfo:e.profile.profileInfo}}),{updateProfile:function(e){return function(t){C(e).then((function(s){0===s.data.resultCode&&t(A(e))}))}}})((function(e){var t={aboutMe:e.profileInfo.aboutMe,userId:e.profileInfo.userId,contacts:{facebook:e.profileInfo.contacts.facebook,website:e.profileInfo.contacts.website,vk:e.profileInfo.contacts.vk,twitter:e.profileInfo.contacts.twitter,instagram:e.profileInfo.contacts.instagram,youtube:e.profileInfo.contacts.youtube,github:e.profileInfo.contacts.github,mainLink:e.profileInfo.contacts.mainLink},lookingForAJob:e.profileInfo.lookingForAJob,lookingForAJobDescription:e.profileInfo.lookingForAJobDescription,fullName:e.profileInfo.fullName};return Object(u.jsxs)("div",{className:G.a.settingsComponent,children:[Object(u.jsx)("h1",{children:"Settings"}),Object(u.jsx)("hr",{}),Object(u.jsx)(H.c,{initialValues:t,onSubmit:function(t){e.updateProfile(t)},children:Object(u.jsxs)(H.b,{children:[Object(u.jsxs)("div",{className:G.a.settingsWrapper,children:[Object(u.jsxs)("div",{className:G.a.settingsBlock,children:[Object(u.jsx)("label",{htmlFor:"aboutMe",children:"About Me:"}),Object(u.jsx)("br",{}),Object(u.jsx)(H.a,{as:"textarea",name:"aboutMe",id:"aboutMe"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"fullName",children:"Full Name:"}),Object(u.jsx)("br",{}),Object(u.jsx)(H.a,{type:"text",name:"fullName",id:"fullName"})]}),Object(u.jsxs)("div",{className:G.a.settingsBlock,children:[Object(u.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"Job information:"}),Object(u.jsx)("br",{}),Object(u.jsx)(H.a,{as:"textarea",name:"lookingForAJobDescription",id:"lookingForAJobDescription"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"lookingForAJob",children:"Open for job:"}),Object(u.jsx)(H.a,{type:"checkbox",name:"lookingForAJob",id:"lookingForAJob"})]}),Object(u.jsxs)("div",{className:G.a.settingsBlock,children:[Object(u.jsx)("h3",{children:"Contacts:"}),Object(u.jsxs)("div",{className:G.a.settingsContactsWrapper,children:[Object(u.jsxs)("div",{className:G.a.contactsLabales,children:[Object(u.jsx)("label",{htmlFor:"facebook",children:"Facebook:"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"website",children:"Website:"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"vk",children:"Vk:"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"twitter",children:"Twitter:"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"instagram",children:"Instagram:"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"youtube",children:"Youtube:"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"github",children:"Github:"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"mainLink",children:"MainLink:"}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)(H.a,{type:"text",name:"contacts.facebook",id:"facebook"}),Object(u.jsx)(H.a,{type:"text",name:"contacts.website",id:"website"}),Object(u.jsx)(H.a,{type:"text",name:"contacts.vk",id:"vk"}),Object(u.jsx)(H.a,{type:"text",name:"contacts.twitter",id:"twitter"}),Object(u.jsx)(H.a,{type:"text",name:"contacts.instagram",id:"instagram"}),Object(u.jsx)(H.a,{type:"text",name:"contacts.youtube",id:"youtube"}),Object(u.jsx)(H.a,{type:"text",name:"contacts.github",id:"github"}),Object(u.jsx)(H.a,{type:"text",name:"contacts.mainLink",id:"mainLink"})]})]})]})]}),Object(u.jsx)("button",{children:"Save all"})]})})]})})),X=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{children:"Users"})})},Z=function(e){Object(l.a)(s,e);var t=Object(b.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){this.props.getProfile(16227),this.props.getStatus(16227)}},{key:"render",value:function(){return this.props.profileInfo&&this.props.status?Object(u.jsxs)("div",{children:[Object(u.jsx)(m,{}),Object(u.jsxs)("div",{className:"app_wrapper",children:[Object(u.jsx)(k,{}),Object(u.jsx)("main",{className:"main_content",children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.a,{exact:!0,from:"/",to:"/profile"}),Object(u.jsx)(d.b,{path:"/profile",render:function(){return Object(u.jsx)(Y,{})}}),Object(u.jsx)(d.b,{path:"/dialogs",render:function(){return Object(u.jsx)(p,{})}}),Object(u.jsx)(d.b,{path:"/users",render:function(){return Object(u.jsx)(X,{})}}),Object(u.jsx)(d.b,{path:"/settings",render:function(){return Object(u.jsx)(K,{})}})]})})]})]}):Object(u.jsx)("div",{children:"Loading..."})}}]),s}(n.a.PureComponent),q=Object(j.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status}}),{getProfile:T,getStatus:J})(Z),z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,85)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),c(e),o(e)}))},$=s(27),ee=s(48),te=Object($.b)({profile:B}),se=Object($.c)(te,Object($.a)(ee.a));o.a.render(Object(u.jsx)(O.a,{children:Object(u.jsx)(j.a,{store:se,children:Object(u.jsx)(q,{})})}),document.getElementById("root")),z()}},[[84,1,2]]]);
//# sourceMappingURL=main.8b7917f2.chunk.js.map