(this.webpackJsonpproject_social_network=this.webpackJsonpproject_social_network||[]).push([[0],{16:function(e,t,a){e.exports={profile_wrapper:"Profile_profile_wrapper__1nhrY",aboutMe:"Profile_aboutMe__3xyNF",contactsBlock:"Profile_contactsBlock__34Qk3",contacts:"Profile_contacts__AWS6u"}},17:function(e,t,a){e.exports={page:"Paginator_page__3hh4F",activePage:"Paginator_activePage__1yK7t"}},18:function(e,t,a){e.exports={header_wrapper:"Header_header_wrapper__55Hcm",mediaBlock:"Header_mediaBlock__2USTd",loginBlock:"Header_loginBlock__Y00t3",logo:"Header_logo__2XdaM",slogan:"Header_slogan__1IeIt",linkToProfile:"Header_linkToProfile__26AZb",linkToLogin:"Header_linkToLogin__1W5Ey"}},25:function(e,t,a){e.exports={settingsComponent:"Settings_settingsComponent__2N875",settingsWrapper:"Settings_settingsWrapper__1THLa",settingsBlock:"Settings_settingsBlock___muHw",settingsContactsWrapper:"Settings_settingsContactsWrapper__WxheR",contactsLabales:"Settings_contactsLabales__xI9o9"}},29:function(e,t,a){e.exports={userItem:"UserItem_userItem__2zqHM",userPhoto:"UserItem_userPhoto__2RCzM",followUnfollowButton:"UserItem_followUnfollowButton__Ka2u_"}},35:function(e,t,a){},40:function(e,t,a){e.exports={post:"MyPosts_post__29kgm"}},63:function(e,t,a){},69:function(e,t,a){},7:function(e,t,a){e.exports={navbar:"Navbar_navbar__2TWLV",navbar_item:"Navbar_navbar_item__Oi5M3",link:"Navbar_link__yrvZD",active:"Navbar_active__2pkQU"}},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),c=a(30),r=a.n(c),i=(a(63),a(50)),o=a(51),l=a(58),u=a(57),j=a(8),b=a(2),d=(a(69),a(0)),h=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("h1",{children:"Dialogs"})})},m=a(18),f=a.n(m),p=a.p+"static/media/logo.e68b35f4.svg",O=a(6),x=a(53),g=a.n(x).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"API-KEY":"43974699-a689-48d1-b548-063b532b4c9f"}}),v=function(e){return g.get("/profile/".concat(e))},k=function(e){return g.get("/profile/status/".concat(e))},w=function(e){return g.put("/profile",e)},I=function(){return g.get("/auth/me")},N=function(){return g.delete("/auth/login")},C=function(e){return g.post("/auth/login",e)},E=function(e,t){return g.get("/users/?count=".concat(e,"&page=").concat(t))},S=function(e){return g.post("/follow/".concat(e))},y=function(e){return g.delete("/follow/".concat(e))},A=a(34),P="profile-reducer/SET_PROFILE",U="profile-reducer/SET_STATUS",R="profile-reducer/ADD_NEW_POST",L={status:null,profileInfo:null,posts:[{id:1,message:"My first post",likesCount:190},{id:2,message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",likesCount:21},{id:3,message:"Just an example",likesCount:16}]},J=function(e){return{type:P,profileInfo:e}},M=function(e){return{type:U,status:e}},D=function(e){return function(t){v(e).then((function(e){t(J(e.data))}))}},Q=function(e){return function(t){k(e).then((function(e){200===e.status&&(null===e.data?t(M("user has no status")):t(M(e.data)))}))}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(O.a)(Object(O.a)({},e),{},{profileInfo:Object(O.a)(Object(O.a)({},e.profileInfo),t.profileInfo)});case U:return Object(O.a)(Object(O.a)({},e),{},{status:t.status});case R:var a={id:e.posts.lengtg+1,message:t.postText,likesCount:0};return Object(O.a)(Object(O.a)({},e),{},{posts:[].concat(Object(A.a)(e.posts),[a])});default:return e}},F="auth-reducer/SET_USER_DATA",V={userData:{email:null,id:null,login:null},isAuth:null},B=function(e,t){return{type:F,isAuth:e,userData:t}},G=function(){return function(e){I().then((function(t){0===t.data.resultCode?(e(B(!0,t.data.data)),e(D(t.data.data.id)),e(Q(t.data.data.id))):e(B(!1,null))}))}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(O.a)(Object(O.a)({},e),{},{isAuth:t.isAuth,userData:t.userData?t.userData:{email:null,id:null,login:null}});default:return e}},Y=a(9),H=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,userName:e.auth.userData.login}}),{logout:function(){return function(e){N().then((function(t){0===t.data.resultCode&&(e(B(!1,null)),e(J(null)),e(M(null)))}))}}})((function(e){return Object(d.jsxs)("div",{className:f.a.header_wrapper,children:[Object(d.jsxs)("header",{className:f.a.mediaBlock,children:[Object(d.jsx)("img",{src:p,id:f.a.logo,alt:"Social-Network logo"}),Object(d.jsx)("h2",{className:f.a.slogan,children:"Social Network"})]}),e.isAuth?Object(d.jsxs)("div",{className:f.a.loginBlock,children:[Object(d.jsx)(Y.b,{to:"/profile",className:f.a.linkToProfile,children:e.userName}),Object(d.jsx)("button",{onClick:e.logout,className:f.a.logoutButton,children:"Logout"})]}):Object(d.jsx)("div",{className:f.a.loginBlock,children:Object(d.jsx)(Y.b,{to:"/login",className:f.a.linkToLogin,children:"Login"})})]})})),Z=a(4),K=a(35),W=a.n(K),q=Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e){return function(t){C(e).then((function(e){0===e.data.resultCode&&t(G())}))}}})((function(e){return e.isAuth?Object(d.jsx)(b.a,{to:"/profile"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Login Page"}),Object(d.jsx)(Z.c,{initialValues:{email:null,password:null,rememberMe:!1},onSubmit:function(t){console.log("Values: ",t),e.login(t)},children:Object(d.jsxs)(Z.b,{children:[Object(d.jsxs)("div",{className:W.a.loginItem,children:[Object(d.jsx)("label",{htmlFor:"email",children:"E-mail:"}),Object(d.jsx)(Z.a,{id:"email",name:"email"})]}),Object(d.jsxs)("div",{className:W.a.loginItem,children:[Object(d.jsx)("label",{htmlFor:"password",children:"Password:"}),Object(d.jsx)(Z.a,{type:"password",id:"password",name:"password"})]}),Object(d.jsxs)("div",{className:W.a.loginItem,children:[Object(d.jsx)("label",{htmlFor:"rememberMe",children:"Remember me:"}),Object(d.jsx)(Z.a,{type:"checkbox",id:"rememberMe",name:"rememberMe"})]}),Object(d.jsx)("button",{children:"Login"})]})})]})})),_=a(7),X=a.n(_),$=function(){return Object(d.jsxs)("nav",{className:X.a.navbar,children:[Object(d.jsx)("div",{className:X.a.navbar_item,children:Object(d.jsx)(Y.b,{to:"/profile",className:X.a.link,activeClassName:X.a.active,children:"Profile"})}),Object(d.jsx)("div",{className:X.a.navbar_item,children:Object(d.jsx)(Y.b,{to:"/dialogs",className:X.a.link,activeClassName:X.a.active,children:"Messages"})}),Object(d.jsx)("div",{className:X.a.navbar_item,children:Object(d.jsx)(Y.b,{to:"/users",className:X.a.link,activeClassName:X.a.active,children:"Users  "})}),Object(d.jsx)("div",{className:X.a.navbar_item,children:Object(d.jsx)(Y.b,{to:"/news",className:X.a.link,activeClassName:X.a.active,children:"News"})}),Object(d.jsx)("div",{className:X.a.navbar_item,children:Object(d.jsx)(Y.b,{to:"/music",className:X.a.link,activeClassName:X.a.active,children:"Music"})}),Object(d.jsx)("div",{className:X.a.navbar_item,children:Object(d.jsx)(Y.b,{to:"/settings",className:X.a.link,activeClassName:X.a.active,children:"Settings"})})]})},ee=a(22),te=function(e){return{isAuth:e.auth.isAuth}};function ae(e){return Object(j.b)(te)((function(t){return!1===t.isAuth?Object(d.jsx)(b.a,{to:"/login"}):Object(d.jsx)(e,Object(O.a)({},t))}))}var ne=a(40),se=a.n(ne),ce=function(e){return Object(d.jsxs)("div",{className:se.a.post,children:[Object(d.jsx)("img",{src:e.userPhoto,alt:"User avatar"}),Object(d.jsx)("div",{children:Object(d.jsx)("span",{children:e.message})}),Object(d.jsx)("div",{children:Object(d.jsxs)("span",{children:["Likes: ",e.likesCount]})})]},e.id)},re=function(e){var t=Object(A.a)(e.posts).reverse().map((function(t){return Object(d.jsx)(ce,{message:t.message,likesCount:t.likesCount,userPhoto:e.userPhoto,id:t.id})}));return Object(d.jsxs)("div",{children:[Object(d.jsx)(Z.c,{initialValues:{postText:""},onSubmit:function(t){e.addNewPost(t.postText)},children:Object(d.jsxs)(Z.b,{children:[Object(d.jsx)(Z.a,{as:"textarea",name:"postText",id:"postText",placeholder:"add new post"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{children:"Add post"})]})}),Object(d.jsx)("div",{className:se.a.posts,children:t})]})},ie=a(16),oe=a.n(ie),le="data:image/png;base64,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",ue=Object(ee.c)(ae,Object(j.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status,posts:e.profile.posts,ownerId:e.auth.userData.id}}),{getProfile:D,getStatus:Q,addNewPost:function(e){return{type:R,postText:e}}}),b.g)((function(e){var t=e.getProfile,a=e.getStatus,s=e.match,c=e.ownerId,r=e.profileInfo,i=e.status,o=e.posts,l=e.addNewPost;return Object(n.useEffect)((function(){t(s.params.userId?s.params.userId:c),a(s.params.userId?s.params.userId:c)}),[s.params.userId]),r?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:oe.a.profile_wrapper,children:[Object(d.jsx)("img",{src:r.photos.large?r.photos.large:le,alt:"User Avatar"}),Object(d.jsxs)("div",{className:oe.a.aboutMe,children:[Object(d.jsxs)("span",{children:["Status: ",i]}),Object(d.jsx)("h4",{children:"About me:"}),r.aboutMe?Object(d.jsx)("span",{children:r.aboutMe}):Object(d.jsx)("span",{children:"We dont know nothing about this user :("}),Object(d.jsx)("h4",{children:"Contacts:"}),Object(d.jsxs)("div",{className:oe.a.contactsBlock,children:[Object(d.jsx)("a",{href:r.contacts.facebook,className:oe.a.contacts,children:"facebook"}),Object(d.jsx)("a",{href:r.contacts.website,className:oe.a.contacts,children:"website"}),Object(d.jsx)("a",{href:r.contacts.vk,className:oe.a.contacts,children:"vk"}),Object(d.jsx)("a",{href:r.contacts.twitter,className:oe.a.contacts,children:"twitter"}),Object(d.jsx)("a",{href:r.contacts.instagram,className:oe.a.contacts,children:"instagram"}),Object(d.jsx)("a",{href:r.contacts.youtube,className:oe.a.contacts,children:"youtube"}),Object(d.jsx)("a",{href:r.contacts.github,className:oe.a.contacts,children:"github"}),Object(d.jsx)("a",{href:r.contacts.mainLink,className:oe.a.contacts,children:"mainLink"})]})]})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("br",{}),Object(d.jsx)(re,{posts:o,userPhoto:r.photos.small?r.photos.small:le,addNewPost:l})]}):Object(d.jsx)("div",{children:"Loading..."})})),je=a(25),be=a.n(je),de=Object(ee.c)(Object(j.b)((function(e){return{profileInfo:e.profile.profileInfo,ownerId:e.auth.userData.id}}),{updateProfile:function(e){return function(t){w(e).then((function(a){0===a.data.resultCode&&t(J(e))}))}},getProfile:D,getStatus:Q}),ae)((function(e){var t=e.profileInfo,a=e.updateProfile,n=e.ownerId,s=e.getProfile,c=e.getStatus;if(n!==t.userId&&(s(n),c(n)),!t||n!==t.userId)return Object(d.jsx)("div",{children:"Loading..."});var r={aboutMe:t.aboutMe,userId:t.userId,contacts:{facebook:t.contacts.facebook,website:t.contacts.website,vk:t.contacts.vk,twitter:t.contacts.twitter,instagram:t.contacts.instagram,youtube:t.contacts.youtube,github:t.contacts.github,mainLink:t.contacts.mainLink},lookingForAJob:t.lookingForAJob,lookingForAJobDescription:t.lookingForAJobDescription,fullName:t.fullName};return Object(d.jsxs)("div",{className:be.a.settingsComponent,children:[Object(d.jsx)("h1",{children:"Settings"}),Object(d.jsx)("hr",{}),Object(d.jsx)(Z.c,{initialValues:r,onSubmit:function(e){a(e)},children:Object(d.jsxs)(Z.b,{children:[Object(d.jsxs)("div",{className:be.a.settingsWrapper,children:[Object(d.jsxs)("div",{className:be.a.settingsBlock,children:[Object(d.jsx)("label",{htmlFor:"aboutMe",children:"About Me:"}),Object(d.jsx)("br",{}),Object(d.jsx)(Z.a,{as:"textarea",name:"aboutMe",id:"aboutMe"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"fullName",children:"Full Name:"}),Object(d.jsx)("br",{}),Object(d.jsx)(Z.a,{type:"text",name:"fullName",id:"fullName"})]}),Object(d.jsxs)("div",{className:be.a.settingsBlock,children:[Object(d.jsx)("label",{htmlFor:"lookingForAJobDescription",children:"Job information:"}),Object(d.jsx)("br",{}),Object(d.jsx)(Z.a,{as:"textarea",name:"lookingForAJobDescription",id:"lookingForAJobDescription"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"lookingForAJob",children:"Open for job:"}),Object(d.jsx)(Z.a,{type:"checkbox",name:"lookingForAJob",id:"lookingForAJob"})]}),Object(d.jsxs)("div",{className:be.a.settingsBlock,children:[Object(d.jsx)("h3",{children:"Contacts:"}),Object(d.jsxs)("div",{className:be.a.settingsContactsWrapper,children:[Object(d.jsxs)("div",{className:be.a.contactsLabales,children:[Object(d.jsx)("label",{htmlFor:"facebook",children:"Facebook:"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"website",children:"Website:"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"vk",children:"Vk:"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"twitter",children:"Twitter:"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"instagram",children:"Instagram:"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"youtube",children:"Youtube:"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"github",children:"Github:"}),Object(d.jsx)("br",{}),Object(d.jsx)("label",{htmlFor:"mainLink",children:"MainLink:"}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)(Z.a,{type:"text",name:"contacts.facebook",id:"facebook"}),Object(d.jsx)(Z.a,{type:"text",name:"contacts.website",id:"website"}),Object(d.jsx)(Z.a,{type:"text",name:"contacts.vk",id:"vk"}),Object(d.jsx)(Z.a,{type:"text",name:"contacts.twitter",id:"twitter"}),Object(d.jsx)(Z.a,{type:"text",name:"contacts.instagram",id:"instagram"}),Object(d.jsx)(Z.a,{type:"text",name:"contacts.youtube",id:"youtube"}),Object(d.jsx)(Z.a,{type:"text",name:"contacts.github",id:"github"}),Object(d.jsx)(Z.a,{type:"text",name:"contacts.mainLink",id:"mainLink"})]})]})]})]}),Object(d.jsx)("button",{children:"Save all"})]})})]})})),he=a(23),me=a.n(he),fe=a(28),pe=a(24),Oe="users-reducer/SET_USERS",xe={users:null},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Oe:return Object(O.a)(Object(O.a)({},e),{},{users:t.users,totalUsersCount:t.totalUsersCount});default:return e}},ve=a(17),ke=a.n(ve),we=function(e){var t=e.totalItemsCount,a=e.onPageChanged,n=e.currentPage,s=void 0===n?1:n,c=e.itemsPerPage,r=e.loading,i=e.pagesInPaginator,o=void 0===i?10:i,l=Math.ceil(t/c),u=o+s-1,j=[];if(s>=7&&s<=l-3)for(var b=function(e){j.push(Object(d.jsx)("button",{className:s===e-6?ke.a.activePage:ke.a.page,onClick:function(){a(e-6)},children:e-6}))},h=s;h<=u;h++)b(h);else if(s<7)for(var m=function(e){j.push(Object(d.jsx)("button",{className:s===e?ke.a.activePage:ke.a.page,onClick:function(){a(e)},children:e}))},f=1;f<=o;f++)m(f);else if(s>l-3)for(var p=function(e){j.push(Object(d.jsx)("button",{className:s===e?ke.a.activePage:ke.a.page,onClick:function(){a(e)},children:e}))},O=l-o;O<l;O++)p(O);return Object(d.jsxs)("div",{className:ke.a.paginatorWrapper,children:[Object(d.jsx)("button",{className:ke.a.page,disabled:!(1!==s&&!r),onClick:function(){return a(s-1)},children:"\u2190"}),j,Object(d.jsx)("span",{children:" ... "}),Object(d.jsx)("button",{className:s===l?ke.a.activePage:ke.a.page,onClick:function(){return a(l)},children:l}),Object(d.jsx)("button",{className:ke.a.page,disabled:!(s!==l&&!r),onClick:function(){return a(s+1)},children:"\u2192"})]})},Ie=a(29),Ne=a.n(Ie),Ce=function(e){var t=e.photo,a=e.name,s=e.status,c=e.id,r=e.followed,i=Object(n.useState)(r),o=Object(pe.a)(i,2),l=o[0],u=o[1],j=Object(n.useState)(!1),h=Object(pe.a)(j,2),m=h[0],f=h[1],p=function(){var e=Object(fe.a)(me.a.mark((function e(t){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,S(t);case 3:0===e.sent.data.resultCode&&u(!0),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(fe.a)(me.a.mark((function e(t){return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,y(t);case 3:0===e.sent.data.resultCode&&u(!1),f(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:Ne.a.userItem,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(Y.b,{to:"/profile/".concat(c),children:Object(d.jsx)("img",{onClick:function(){b.a,"profile/".concat(c)},src:t||le,className:Ne.a.userPhoto,alt:"User Avatar"})}),l?Object(d.jsx)("button",{disabled:m,onClick:function(){O(c)},className:Ne.a.followUnfollowButton,children:"Unfollow"}):Object(d.jsx)("button",{disabled:m,onClick:function(){p(c)},className:Ne.a.followUnfollowButton,children:"Follow"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:"User name: "}),Object(d.jsx)(Y.b,{to:"/profile/".concat(c),children:a}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsxs)("span",{children:["User status: ",s||"User has not specified"]})]})]},c)},Ee=(a(93),Object(j.b)((function(e){return{totalUsersCount:e.users.totalUsersCount,users:e.users.users}}),{getUsers:function(e,t){return function(a){E(e,t).then((function(e){var t,n;200===e.status&&a((t=e.data.items,n=e.data.totalCount,{type:Oe,users:t,totalUsersCount:n}))}))}}})((function(e){var t=Object(n.useState)(!1),a=Object(pe.a)(t,2),s=a[0],c=a[1],r=Object(n.useState)(null),i=Object(pe.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)(1),j=Object(pe.a)(u,2),b=j[0],h=j[1],m=Object(n.useState)(0),f=Object(pe.a)(m,2),p=f[0],O=f[1];Object(n.useEffect)((function(){(function(){var e=Object(fe.a)(me.a.mark((function e(){var t;return me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,E(20,b);case 3:t=e.sent,l(t.data.items),O(t.data.totalCount),c(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]);var x=function(e){h(e)};if(!o)return Object(d.jsx)("div",{children:"Loading"});var g=o.map((function(e){return Object(d.jsx)(Ce,{name:e.name,id:e.id,photo:e.photos.small,followed:e.followed,status:e.status})}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Users"}),Object(d.jsx)("hr",{}),Object(d.jsx)(we,{totalItemsCount:p,onPageChanged:x,currentPage:b,itemsPerPage:20,loading:s,pagesInPaginator:10}),g,Object(d.jsx)(we,{totalItemsCount:p,onPageChanged:x,currentPage:b,itemsPerPage:20,loading:s,pagesInPaginator:10})]})}))),Se=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.props.userAuthorizing()}},{key:"render",value:function(){return!1===this.props.isAuth&&b.a,Object(d.jsxs)("div",{children:[Object(d.jsx)(H,{}),Object(d.jsxs)("div",{className:"app_wrapper",children:[Object(d.jsx)($,{}),Object(d.jsx)("main",{className:"main_content",children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.a,{exact:!0,from:"/",to:"/profile"}),Object(d.jsx)(b.b,{path:"/profile/:userId?",render:function(){return Object(d.jsx)(ue,{})}}),Object(d.jsx)(b.b,{path:"/dialogs",render:function(){return Object(d.jsx)(h,{})}}),Object(d.jsx)(b.b,{path:"/users",render:function(){return Object(d.jsx)(Ee,{})}}),Object(d.jsx)(b.b,{path:"/settings",render:function(){return Object(d.jsx)(de,{})}}),Object(d.jsx)(b.b,{path:"/login",render:function(){return Object(d.jsx)(q,{})}})]})})]})]})}}]),a}(s.a.PureComponent),ye=Object(j.b)((function(e){return{profileInfo:e.profile.profileInfo,status:e.profile.status,isAuth:e.auth.isAuth}}),{userAuthorizing:G})(Se),Ae=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,95)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))},Pe=a(56),Ue=Object(ee.b)({profile:T,auth:z,users:ge}),Re=Object(ee.d)(Ue,Object(ee.a)(Pe.a));r.a.render(Object(d.jsx)(Y.a,{children:Object(d.jsx)(j.a,{store:Re,children:Object(d.jsx)(ye,{})})}),document.getElementById("root")),Ae()}},[[94,1,2]]]);
//# sourceMappingURL=main.27a77718.chunk.js.map