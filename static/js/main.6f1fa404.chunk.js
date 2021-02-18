(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[2],{1234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),i=n.n(c),o=n(38),l=n(66),u=n(108),s=n(43),m=Object(s.b)({name:"loading",initialState:{loading:!1},reducers:{setLoading:function(e,t){e.loading=t.payload}}}),d=(m.actions.setLoading,m.reducer),p=Object(s.b)({name:"user",initialState:{user:{}},reducers:{setUser:function(e,t){e.user=t.payload}}}),f=p.actions.setUser,b=p.reducer,g=n(41),h={loading:d,user:b,cart:g.b},E=Object(s.a)({reducer:h}),O=n(46),j=n(12),v=n(64),y=function(e){var t=Object(a.lazy)(e);return function(e){return r.a.createElement(a.Suspense,{fallback:r.a.createElement(v.a,null)},r.a.createElement(t,e))}},k=n(48),P=y((function(){return Promise.all([n.e(5),n.e(10)]).then(n.bind(null,1370))})),N=y((function(){return n.e(12).then(n.bind(null,1374))})),S=y((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,1368))})),I=y((function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(9)]).then(n.bind(null,1364))})),w=y((function(){return n.e(11).then(n.bind(null,1366))})),_=y((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,1371))})),C=[{path:k.a.HOME_PAGE,exact:!0,component:P,noPageTitle:!0,isPublic:!0},{path:k.a.PRODUCT_DETAIL,exact:!0,component:_,noPageTitle:!0,isPublic:!0},{path:k.a.SIGN_UP_PAGE,component:I,layout:N,isPublic:!0},{path:k.a.SIGN_IN_PAGE,component:S,layout:N,isPublic:!0},{path:k.a.PROFILE_PAGE,component:w}],x=n(148),G=n(63),T=n(1285),A=n(65),R=n(105),z=n(1286),L=n(1287),H=n(83),J=n(1288),U=n(1284),B=n(1293),D=n(1282),W=n(1289),M=n(1275),F=n(1274),q=n(1245),Z=n(131),K=n.n(Z),Q=n(134),V=n.n(Q),X=n(132),Y=n.n(X),$=n(133),ee=n.n($),te=n(1276),ne=n(1290),ae=n(1278),re=n(1237),ce=n(1279),ie=n(1292),oe=n(1280),le=n(1281),ue=n(1283),se=n(1272),me=n(5),de=n(127),pe=n.n(de),fe=n(130),be=n.n(fe),ge=n(129),he=n.n(ge),Ee=n(128),Oe=n.n(Ee),je=Object(se.a)((function(e){return{rootCart:{flexGrow:1,maxWidth:752},demo:{backgroundColor:e.palette.background.paper},titleCart:{margin:e.spacing(4,0,2)},btnCart:{minHeight:50,minWidth:100}}})),ve=Object(me.a)((function(e){return{badge:{right:-3,top:13,border:"2px solid ".concat(e.palette.background.paper),padding:"0 4px"}}}))(F.a),ye=function(){var e=je(),t=Object(o.c)(g.c),n=Object(o.c)(g.d),a=r.a.useState(null),c=Object(G.a)(a,2),i=c[0],l=c[1],u=Boolean(i),s=u?"simple-popover":void 0,m=Object(o.b)();return r.a.createElement(M.a,{item:!0,xs:1},r.a.createElement(te.a,{className:e.btnCart,"aria-label":"cart","aria-describedby":s,variant:"contained",color:"primary",onClick:function(e){l(e.currentTarget)}},r.a.createElement(ve,{badgeContent:n,color:"secondary"},r.a.createElement(pe.a,{fontSize:"large",style:{minHeight:40}}))),r.a.createElement(ne.a,{id:s,open:u,anchorEl:i,onClose:function(){l(null)},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(W.a,{className:e.rootCart},t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,null,t.map((function(n,a){return r.a.createElement(W.a,{key:n.id},r.a.createElement(re.a,{button:!0},r.a.createElement(ce.a,null,r.a.createElement(ie.a,{src:n.image})),r.a.createElement(oe.a,{primary:r.a.createElement(H.a,{style:{minWidth:200}},n.name,r.a.createElement(H.a,{style:{color:"red",marginLeft:5},variant:"caption",gutterBottom:!0},n.price," vnd")),secondary:r.a.createElement(H.a,null,t.find((function(e){return e.id===n.id})).price*t.find((function(e){return e.id===n.id})).number,r.a.createElement(H.a,{style:{color:"red",marginLeft:5},variant:"caption",gutterBottom:!0},"vnd"))}),r.a.createElement(le.a,null,r.a.createElement(W.a,{display:"flex",justifyContent:"center"},r.a.createElement(W.a,null,r.a.createElement(W.a,null,r.a.createElement(D.a,{"aria-label":"delete",className:e.margin,size:"small",onClick:function(){return e=n.id,void m(Object(g.a)({id:e,number:1}));var e}},r.a.createElement(Oe.a,{fontSize:"inherit"}))),r.a.createElement(W.a,null,r.a.createElement(H.a,{align:"center"},n.number)),r.a.createElement(W.a,null,r.a.createElement(D.a,{"aria-label":"delete",className:e.margin,size:"small",disabled:!!t.find((function(e){return e.id===n.id&&1===e.number})),onClick:function(){return function(e){m(Object(g.a)({id:e.id,number:-1}))}(n)}},r.a.createElement(he.a,{fontSize:"inherit"})))),r.a.createElement(D.a,{edge:"end","aria-label":"delete",onClick:function(){return e=n.id,void m(Object(g.a)({id:e,number:1,deleteProduct:!0}));var e}},r.a.createElement(be.a,null))))),r.a.createElement(ue.a,{style:{display:a===t.length-1?"none":"block"}}))}))),r.a.createElement(W.a,{style:{marginBottom:10},display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(te.a,{style:{minWidth:300},variant:"outlined",color:"secondary"},"Show all"))):r.a.createElement(W.a,{minHeight:100,minWidth:200,display:"flex",justifyContent:"center",alignItems:"center"},r.a.createElement(H.a,{style:{fontWeight:"bold"},align:"center"},"Empty Cart")))))},ke=n(18),Pe=n(15),Ne=Object(se.a)((function(e){return{root:{flexGrow:1},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},title:{flexGrow:1},search:Object(ke.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Pe.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Pe.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%",minWidth:300},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(ke.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(ke.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(ke.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),Se=function(e){var t=e.children,n=Object(j.g)(),a=Ne(),c=r.a.useState(null),i=Object(G.a)(c,2),l=i[0],u=i[1],s=Boolean(l),m=function(){u(null)},d=r.a.createElement(q.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:s,onClose:m},r.a.createElement(U.a,{onClick:m},"Profile"),r.a.createElement(U.a,{onClick:m},"My account")),p=Object(o.b)(),b=Object(R.a)([],A.a,{refetchOnWindowFocus:!1,retry:!1}).data;return p(f(b)),r.a.createElement("div",{className:a.root},r.a.createElement(T.a,null),r.a.createElement(z.a,{position:"static"},r.a.createElement(L.a,null,r.a.createElement(H.a,{className:a.title,variant:"h6",noWrap:!0,onClick:function(){return n.push("/")}},"Shop"),r.a.createElement("div",{className:a.search},r.a.createElement("div",{className:a.searchIcon},r.a.createElement(K.a,null)),r.a.createElement(B.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:a.grow}),r.a.createElement("div",{className:a.sectionDesktop},r.a.createElement(D.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(F.a,{badgeContent:4,color:"secondary"},r.a.createElement(Y.a,null))),r.a.createElement(D.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(F.a,{badgeContent:17,color:"secondary"},r.a.createElement(ee.a,null))),r.a.createElement(D.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit"},r.a.createElement(V.a,null))))),d,r.a.createElement("main",null,r.a.createElement(W.a,{flexGrow:1,marginTop:3},r.a.createElement(M.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center"},r.a.createElement(ye,null))),r.a.createElement(J.a,{className:a.cardGrid},t)))};var Ie=function(e){var t=e.isPublic,n=e.pageTitle,a=e.noPageTitle,c=e.component,i=e.layout,o=void 0===i?Se:i,l=Object(x.a)(e,["isPublic","pageTitle","noPageTitle","component","layout"]);return t?r.a.createElement(j.b,Object.assign({},l,{render:function(e){return r.a.createElement(o,null,r.a.createElement(c,e))}})):r.a.createElement(j.b,Object.assign({},l,{render:function(e){return Object(A.b)()?r.a.createElement(o,{pageTitle:n,noPageTitle:a},r.a.createElement(c,e)):r.a.createElement(j.a,{to:{pathname:"/sign-in",state:{from:e.location}}})}}))},we=function(){return r.a.createElement(j.d,null,C.map((function(e,t){return r.a.createElement(Ie,Object.assign({key:t},e))})))},_e=n(135),Ce=n(107);function xe(){var e=Object(_e.a)(["\n  body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  }\n  .fonts-loaded {\n    body {\n      font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    }\n  }\n  a {\n    text-decoration: none;\n  }\n  button, a {\n    &:focus {\n      outline: none;\n    }\n  }\n  ::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.3);\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background-color: darkgrey;\n  }\n"]);return xe=function(){return e},e}var Ge=Object(Ce.a)(xe()),Te=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,null),r.a.createElement(O.a,null,r.a.createElement(l.a,{defaultTitle:"Manager"},r.a.createElement("meta",{name:"description",content:"Manager"})),r.a.createElement(we,null),r.a.createElement(Ge,null)))},Ae=n(35),Re=n(56),ze=n(147),Le=n(75),He=n.n(Le),Je=n(13),Ue=[];if(Object(Je.a)("products"))Ue=JSON.parse(Object(Je.a)("products"));else{for(var Be=0;Be<100;Be++)Ue.push({id:Be,name:"Product ".concat(Be),price:parseInt(He.a.commerce.price(),10),description:He.a.lorem.paragraphs(),image:He.a.image.imageUrl()});Object(Je.f)("products",JSON.stringify(Ue))}Object(ze.a)({routes:function(){this.get("/api/profile",(function(){return{data:{last_name:"a",first_name:"a",avatar:"a"}}})),this.get("/api/all/:page",(function(e,t){for(var n=t.params.page,a=[],r=Object(Re.a)(Ue),c=Math.ceil(r.length/12),i=0;i<c;i++)a.push(r.splice(0,12));return{currentPage:n,nextPage:++n,lastPage:0===n?0:--n,data:a[n],total:Ue,totalPage:c}})),this.get("/api/product/:id",(function(e,t){var n=t.params.id;return Ue.find((function(e){return e.id===parseInt(n,10)}))})),this.get("/api/comment/:productId",(function(){return JSON.parse(Object(Je.a)("comments"))||[]})),this.post("/api/comment/:productId",(function(e,t){var n=JSON.parse(Object(Je.a)("products"))||[];return Object(Je.f)("products",JSON.stringify.apply(JSON,Object(Re.a)(n).concat([Object(Ae.a)({},JSON.parse(t.requestBody))]))),Object(Ae.a)({},JSON.parse(t.requestBody))}))}}),i.a.render(r.a.createElement(o.a,{store:E},r.a.createElement(l.b,null,r.a.createElement(u.a,{preventDuplicate:!0,maxSnack:3,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:3e3},r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(v.a,null)},r.a.createElement(Te,null))))),document.getElementById("root"))},13:function(e,t,n){"use strict";n.d(t,"f",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return d}));var a=window.localStorage,r=function(e,t){return a.setItem(e,t)},c=function(e){return a.getItem(e)},i=function(e){return a.removeItem(e)},o=function(e){r("access_token",e)},l=function(e){var t=e.access,n=e.refresh;r("access_token",t),r("refresh_token",n)},u=function(){return c("access_token")},s=function(){return c("refresh_token")},m=function(){i("access_token"),i("refresh_token")},d=function(){return a.getItem("i18nextLng")}},158:function(e,t,n){e.exports=n(1234)},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return c}));var a="".concat("http://localhost",":").concat("3000","/").concat("api"),r=/([a-zA-Z0-9_.]+)@[a-zA-Z-_]+?\.[a-zA-Z]{2,3}/,c={SIGN_IN:"/auth/login/",REFRESH_TOKEN:"/auth/token/refresh/",SIGN_UP:"/auth/register/"}},41:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return m})),n.d(t,"a",(function(){return d}));var a=n(56),r=n(35),c=n(43),i=n(13),o=Object(c.b)({name:"cart",initialState:{cart:JSON.parse(Object(i.a)("cart"))||[]},reducers:{setCart:function(e,t){e.cart=t.payload}}}),l=o.actions,u=l.setCart,s=(l.setCounter,function(e){return e.cart.cart}),m=function(e){return e.cart.cart.reduce((function(e,t){return e+parseInt(t.number,10)}),0)},d=function(e){return function(t,n){var c=e.id,o=e.number,l=e.deleteProduct,s=n().cart.cart,m=[];if(l)m=s.filter((function(e){return e.id!==c&&e}));else if(s.length)if(s.find((function(e){return e.id===c}))){m=s.map((function(e){return e.id===c?Object(r.a)(Object(r.a)({},e),{},{number:e.number+o}):e}))}else m=[].concat(Object(a.a)(s),[Object(r.a)({},e)]);else m=[Object(r.a)({},e)];Object(i.f)("cart",JSON.stringify(m)),t(u(m))}};t.b=o.reducer},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a,r=n(18),c=(a={},Object(r.a)(a,"HOME_PAGE","/"),Object(r.a)(a,"PRODUCT_DETAIL","/product"),Object(r.a)(a,"SIGN_IN_PAGE","/sign-in"),Object(r.a)(a,"SIGN_UP_PAGE","/sign-up"),Object(r.a)(a,"CHANGE_PASSWORD_PAGE","/change-password"),Object(r.a)(a,"PROFILE_PAGE","/profile"),Object(r.a)(a,"INTERNAL_ERROR_PAGE","/500"),a)},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(60),r=n.n(a),c=n(32),i=n(73),o=n(13),l=function(){var e=r.a.create({baseURL:c.a,headers:{"Content-Type":"application/json"}});return new Promise((function(t,n){e.post(c.b.REFRESH_TOKEN,{refresh:Object(o.d)()}).then((function(e){var n=e.data.access;Object(o.g)(n),t(n)})).catch((function(e){Object(o.e)(),window.location.href="".concat("","/sign-in"),n(e)}))}))},u=function(){return r.a.create({baseURL:c.a})},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"json",t=r.a.create({baseURL:c.a,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(Object(o.b)())},responseType:e});return t.interceptors.response.use((function(e){return e}),(function(e){return e.response?e.response.status===i.b||e.response.status===i.a||e.response.status!==i.c||e.config.url===c.b.SIGN_IN?Promise.reject(e):l().then((function(t){var n=e.config;return n.headers.Authorization="Bearer ".concat(t),r.a.request(n)})):(Object(o.e)(),Promise.reject(e))})),t}},64:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(1272),i=n(1273),o=Object(c.a)((function(e){return{root:{position:"relative"},bottom:{color:e.palette.grey["light"===e.palette.type?200:700]},top:{color:e.palette.info.dark,animationDuration:"550ms",position:"absolute",left:0},circle:{strokeLinecap:"round"}}})),l=function(e){var t=o();return r.a.createElement("div",{className:t.root},r.a.createElement(i.a,Object.assign({variant:"determinate",className:t.bottom,size:30,thickness:3},e,{value:100})),r.a.createElement(i.a,Object.assign({variant:"indeterminate",disableShrink:!0,className:t.top,classes:{circle:t.circle},size:30,thickness:3},e)))},u=n(1289);t.a=function(e){var t=e.light;return r.a.createElement(u.a,{display:"flex",alignItems:"center"},r.a.createElement(l,null),r.a.createElement(u.a,{ml:1,style:{color:t?"white":"black"}}))}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return d}));var a=n(85),r=n.n(a),c=n(100),i=n(55),o=n(13),l=n(32),u=function(){return!!Object(o.b)()},s=function(e){return new Promise((function(t,n){Object(i.a)().post(l.b.SIGN_IN,e).then((function(e){return Object(o.h)(e.data),t(e)})).catch((function(e){return n(e)}))}))},m=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.b)().get("/profile");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(e){return new Promise((function(t,n){Object(i.a)().post(l.b.SIGN_UP,e).then((function(e){return t(e)})).catch((function(e){return n(e)}))}))}},73:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=401,r=500,c=404}},[[158,3,4]]]);
//# sourceMappingURL=main.6f1fa404.chunk.js.map