(this["webpackJsonpredux-tutorial"]=this["webpackJsonpredux-tutorial"]||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(15),c=a(33),n=a(18),o=a(50),i=a(51),l=a(17),j=a(9),d=a(73),p=a(74),b=a(75),u=a(76),h=a(13),O=a.n(h),x=a(19),m="GET_USERS",g="GET_USERS_SUCCESS",f="GET_USERS_FAILURE",v=function(e){return{type:g,payload:e}};var y=a(82),E=a.p+"static/media/profile1.282b1adb.jpg",w=a.p+"static/media/profile2.0cc52bbd.jpeg",N=a.p+"static/media/profile3.5faee1aa.jpeg",S=a.p+"static/media/profile4.4fe4fb19.jpeg",T=a.p+"static/media/profile5.453c4718.jpeg",k=a.p+"static/media/profile6.f630c76e.jpeg",_=[E,w,N,S,T,k,k,a.p+"static/media/profile7.fbc3e530.jpeg",a.p+"static/media/profile8.4f9e4a3e.jpeg",a.p+"static/media/profile9.a7eb2d89.jpeg",a.p+"static/media/profile10.7add4d9d.jpeg",a.p+"static/media/profile11.9e06ddf0.jpeg"],U=_,C=_.length,I=a(1),G=function(e){var t=e.user,a=U[(t.id-1)%C];return Object(I.jsxs)(y.a,{className:"user-card rounded-3 shadow p-2 mb-3",children:[Object(I.jsx)("div",{className:"d-flex justify-content-center align-items-center position-relative mb-5",children:Object(I.jsx)("div",{className:"profile-image-wrapper p-2 rounded-circle position-absolute top-100 start-50 translate-middle shadow-lg bg-white d-flex justify-content-center align-items-center",children:Object(I.jsx)(y.a.Img,{variant:"top",src:a,className:"rounded-circle profile-image shadow-lg"})})}),Object(I.jsxs)(y.a.Body,{className:"text-white text-center",children:[Object(I.jsxs)(y.a.Title,{className:"",children:[t.name," | ",t.username]}),Object(I.jsxs)(y.a.Text,{children:[Object(I.jsx)("i",{className:"bi bi-globe2"})," ",t.website]}),Object(I.jsxs)(y.a.Text,{children:[Object(I.jsx)("i",{className:"bi bi-envelope-fill"})," ",t.email]}),Object(I.jsxs)(y.a.Text,{children:[Object(I.jsx)("i",{className:"bi bi-house-fill"})," ",t.address.city]})]})]})},L=function(){var e=Object(n.b)();Object(r.useEffect)((function(){e(function(){var e=Object(x.a)(O.a.mark((function e(t){var a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users");case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t(v(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:f});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var t=Object(n.c)((function(e){var t=e.users;return{users:t.users,loading:t.loading,hasErrors:t.hasErrors}})),a=t.users,s=t.loading,c=t.hasErrors;return Object(I.jsx)(b.a,{children:Object(I.jsx)(u.a,{className:"mb-2",children:s?Object(I.jsx)(d.a,{animation:"grow",variant:"warning"}):c?Object(I.jsx)("p",{children:"Unable to display users."}):a&&a.map((function(e){return Object(I.jsx)(p.a,{xs:12,sm:6,lg:4,xl:3,className:"mb-2",children:Object(I.jsx)(l.b,{to:"/blogger/".concat(e.id,"/posts"),children:Object(I.jsx)(G,{user:e})})},e.id)}))})})},P="GET_POSTS",R="GET_POSTS_SUCCESS",F="GET_POSTS_FAILURE";var M="GET_USER",B="GET_USER_SUCCESS",A="GET_USER_FAILURE",J=function(e){return{type:B,payload:e}};var D=a.p+"static/media/cover1.ff3c9b79.webp",H=a.p+"static/media/cover2.21658be9.png",W=a.p+"static/media/cover3.f61ec2eb.jpg",q=a.p+"static/media/cover4.eb777506.jpg",z=a.p+"static/media/writer2.834bad45.png",K=[D,H,W,q,a.p+"static/media/cover5.55ec56d9.jpg",z],Q=K,V=K.length;function X(e){return e.split(" ").map((function(e){return e[0].toUpperCase().concat(e.slice(1,e.length).toLocaleLowerCase())})).join(" ")}var Y=function(e){var t=e.post,a=e.fullPage,r=e.varient,s=e.index,c=Q[s%V];return Object(I.jsx)("article",{className:a?"post-container":"post-excerpt",children:Object(I.jsxs)(y.a,{bg:"secondary",text:"white",className:"mb-3",varient:r,children:[null!==s&&Object(I.jsx)(y.a.Img,{variant:"top",src:c,className:"shadow-lg m-2"}),Object(I.jsxs)(y.a.Body,{children:[Object(I.jsx)(y.a.Title,{children:X(t.title)}),Object(I.jsx)(y.a.Text,{children:a?t.body:t.body.substring(0,80).concat("...")})]})]})})},Z=a(77),$=function(e){var t=e.left,a=e.link,r=t?"left":"right";return Object(I.jsx)(l.b,{to:a,children:Object(I.jsx)(Z.a,{variant:"dark",children:Object(I.jsx)("i",{className:"bi bi-arrow-".concat(r,"-circle")})})})},ee=function(e){var t=e.leftLink,a=e.rightLink;return Object(I.jsxs)(u.a,{children:[Object(I.jsx)(p.a,{className:"d-flex justify-content-start",children:t&&Object(I.jsx)($,{left:!0,link:t})}),Object(I.jsx)(p.a,{className:"d-flex justify-content-end",children:a&&Object(I.jsx)($,{link:a})})]})},te=function(){var e=Object(j.g)().bloggerId,t=Number(e),a=Object(n.b)();Object(r.useEffect)((function(){var e;a((e=t,function(){var t=Object(x.a)(O.a.mark((function t(a){var r,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:P}),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/posts?userId="+e);case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,a({type:R,payload:s}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:F});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}())),a(function(e){return function(){var t=Object(x.a)(O.a.mark((function t(a){var r,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:M}),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/users/"+e);case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,a(J(s)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:A});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[a,t]);var s=Object(n.c)((function(e){var t=e.user,a=e.posts;return{user:t.user,posts:a.posts,loading:{posts:a.loading,user:t.loading},hasErrors:{posts:a.hasErrors,user:t.hasErrors}}})),c=s.user,o=s.posts,i=s.loading,h=s.hasErrors;return Object(I.jsx)(b.a,{className:"text-white",children:Object(I.jsxs)(u.a,{children:[Object(I.jsxs)(p.a,{xs:12,lg:3,xl:4,className:"mb-5 posts-by",children:[Object(I.jsxs)("h1",{className:"d-block d-lg-none",children:["Posts by ",c.username]}),Object(I.jsxs)("div",{className:"post-by-wrapper text-center position-fixed d-none d-lg-block pt-5 mt-5",children:[Object(I.jsx)("h1",{children:"Posts by"}),i.user?Object(I.jsx)(d.a,{animation:"grow",variant:"warning",className:"text-center"}):h.user?Object(I.jsx)("p",{children:"Unable to display posts."}):Object.keys(c).length&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(G,{user:c}),Object(I.jsx)(ee,{leftLink:t-1>=1?"/blogger/".concat(t-1,"/posts"):null,rightLink:t+1<=10?"/blogger/".concat(t+1,"/posts"):null})]})]})]}),Object(I.jsx)(p.a,{xs:12,lg:9,xl:8,className:"offset-lg-4",children:Object(I.jsx)(u.a,{children:i.posts?Object(I.jsx)(d.a,{animation:"grow",variant:"warning"}):h.posts?Object(I.jsx)("p",{children:"Unable to display posts."}):o&&o.map((function(e,a){return Object(I.jsx)(p.a,{xs:12,sm:6,lg:4,children:Object(I.jsx)(l.b,{to:"/blogger/".concat(t,"/posts/").concat(e.id),children:Object(I.jsx)(Y,{post:e,fullPage:!1,index:a,varient:"secondary"})})},e.id)}))})})]})})},ae=a(79),re=a(78),se=function(e){var t=e.comment,a=e.index,r=U[a%C+1];return Object(I.jsx)("aside",{className:"comment-wrapper p-2 ms-5 mb-2 rounded-3",children:Object(I.jsxs)(y.a,{bg:"dark",className:"text-white",children:[Object(I.jsx)(ae.a,{placement:"bottom",overlay:Object(I.jsxs)(re.a,{id:"tooltip-test-".concat(a),children:[Object(I.jsx)("h6",{className:"mt-2 text-left",children:X(t.name.toUpperCase())}),Object(I.jsx)("hr",{}),Object(I.jsx)("p",{children:t.email})]}),children:Object(I.jsx)("div",{className:"comment-image-wrapper rounded-circle position-absolute top-0 start-0 bg-white d-flex justify-content-center align-items-center",children:Object(I.jsx)(y.a.Img,{variant:"top",src:r,className:"rounded-circle comment-image shadow-lg"})})},"test"),Object(I.jsxs)(y.a.Body,{children:[Object(I.jsx)(y.a.Text,{children:t.email}),Object(I.jsx)(y.a.Text,{children:t.body})]})]})})},ce="GET_POST",ne="GET_POST_SUCCESS",oe="GET_POST_FAILURE",ie=function(e){return{type:ne,payload:e}};var le="GET_COMMENTS",je="GET_COMMENTS_SUCCESS",de="GET_COMMENTS_FAILURE",pe=function(e){return{type:je,payload:e}};var be=function(){var e=Object(j.g)(),t=e.bloggerId,a=e.postId,s=Number(a),c=Object(n.b)();Object(r.useEffect)((function(){c(function(e){return function(){var t=Object(x.a)(O.a.mark((function t(a){var r,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:ce}),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/posts/"+e);case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,a(ie(s)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:oe});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(s)),c(function(e){return function(){var t=Object(x.a)(O.a.mark((function t(a){var r,s;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:le}),t.prev=1,t.next=4,fetch("https://jsonplaceholder.typicode.com/comments?postId="+e);case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,a(pe(s)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:de});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}(s))}),[c,s]);var o=Object(n.c)((function(e){var t=e.post,a=e.comments;return{post:t.post,comments:a.comments,loading:{post:t.loading,comments:a.loading},hasErrors:{post:t.hasErrors,comments:a.hasErrors}}})),i=o.post,l=o.comments,h=o.loading,m=o.hasErrors,g=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?s-1>10*(t-1):s+1<=10*t};return Object(I.jsxs)(b.a,{className:"text-white",children:[function(){if(i)return h.post?Object(I.jsx)(d.a,{animation:"grow",variant:"warning"}):m.post?Object(I.jsx)("p",{children:"Unable to display posts."}):i&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(Y,{fullPage:!0,post:i,varient:"secondary",index:null},i.id),Object(I.jsx)(ee,{leftLink:g(!0)?"/blogger/".concat(t,"/posts/").concat(s-1):null,rightLink:g()?"/blogger/".concat(t,"/posts/").concat(s+1):null})]})}(),Object(I.jsxs)(b.a,{className:"mt-5",children:[Object(I.jsx)(u.a,{children:Object(I.jsx)(p.a,{children:Object(I.jsx)("h2",{className:"ps-2",children:"Comments"})})}),Object(I.jsx)(u.a,{children:Object(I.jsx)(p.a,{children:function(){if(l.length)return h.comments?Object(I.jsx)(d.a,{animation:"grow",variant:"warning"}):m.comments?Object(I.jsx)("p",{children:"Unable to display posts."}):l.map((function(e,t){return Object(I.jsx)(se,{fullPage:!0,comment:e,index:t},e.id)}))}()})})]})]})},ue=a(81),he=a(80),Oe=function(){return Object(I.jsx)(ue.a,{fixed:"top",bg:"dark",variant:"dark",children:Object(I.jsxs)(b.a,{children:[Object(I.jsx)(ue.a.Brand,{children:"Fake Blog"}),Object(I.jsx)(he.a,{className:"me-auto",children:Object(I.jsx)(l.b,{to:"/",as:"",children:"Home"})})]})})},xe=function(){return Object(I.jsxs)(l.a,{children:[Object(I.jsx)(Oe,{}),Object(I.jsxs)(j.d,{children:[Object(I.jsx)(j.b,{exact:!0,path:"/",component:L}),Object(I.jsx)(j.b,{exact:!0,path:"/blogger/:bloggerId/posts",component:te}),Object(I.jsx)(j.b,{exact:!0,path:"/blogger/:bloggerId/posts/:postId",component:be}),Object(I.jsx)(j.a,{to:"/"})]})]})},me=a(2),ge={posts:[],loading:!1,hasErrors:!1};var fe={post:void 0,loading:!1,hasErrors:!1};var ve={comments:[],loading:!1,hasErrors:!1};var ye={users:[],loading:!1,hasErrors:!1};var Ee={user:{},loading:!1,hasErrors:!1};var we=Object(c.combineReducers)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(me.a)(Object(me.a)({},e),{},{loading:!0});case R:return Object(me.a)(Object(me.a)({},e),{},{posts:t.payload,loading:!1});case F:return Object(me.a)(Object(me.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},post:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:return Object(me.a)(Object(me.a)({},e),{},{loading:!0});case ne:return Object(me.a)(Object(me.a)({},e),{},{post:t.payload,loading:!1});case oe:return Object(me.a)(Object(me.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(me.a)(Object(me.a)({},e),{},{loading:!0});case je:return Object(me.a)(Object(me.a)({},e),{},{comments:t.payload,loading:!1});case de:return Object(me.a)(Object(me.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(me.a)(Object(me.a)({},e),{},{loading:!0});case g:return Object(me.a)(Object(me.a)({},e),{},{users:t.payload,loading:!1});case f:return Object(me.a)(Object(me.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(me.a)(Object(me.a)({},e),{},{loading:!0});case B:return Object(me.a)(Object(me.a)({},e),{},{user:t.payload,loading:!1});case A:return Object(me.a)(Object(me.a)({},e),{},{loading:!1,hasErrors:!0});default:return e}}}),Ne=(a(67),Object(c.createStore)(we,Object(i.composeWithDevTools)(Object(c.applyMiddleware)(o.a))));Object(s.render)(Object(I.jsx)(n.a,{store:Ne,children:Object(I.jsx)(xe,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.af16e23e.chunk.js.map