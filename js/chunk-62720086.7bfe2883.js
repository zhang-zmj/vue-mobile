(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62720086"],{"1f82":function(t,n,e){},"3b423":function(t,n,e){"use strict";e.r(n);e("b0c0");var c=e("7a23"),o=e("ba97"),r=e.n(o),u=function(t){return Object(c["F"])("data-v-50d32db9"),t=t(),Object(c["D"])(),t},a={id:"box"},i=Object(c["k"])("个人中心"),b={class:"user-box"},s={class:"user-info"},l={class:"info"},j=u((function(){return Object(c["j"])("img",{src:r.a},null,-1)})),f={class:"user-desc"},O=u((function(){return Object(c["j"])("span",{class:"name"},"个性签名：成就自己的只需一套精品",-1)})),d={class:"user-list"},p=u((function(){return Object(c["j"])("span",null,"我的收藏",-1)})),m=u((function(){return Object(c["j"])("span",null,"我的订单",-1)})),v=u((function(){return Object(c["j"])("span",null,"账号管理",-1)})),g=u((function(){return Object(c["j"])("span",null,"地址管理",-1)})),h=u((function(){return Object(c["j"])("span",null,"关于我们",-1)})),k={style:{margin:"16px"}},w=Object(c["k"])("退出登录");function C(t,n,e,o,r,u){var C=Object(c["K"])("nav-bar"),T=Object(c["K"])("van-icon"),x=Object(c["K"])("van-button");return Object(c["C"])(),Object(c["i"])("div",a,[Object(c["l"])(C,{class:"nav-bar"},{default:Object(c["U"])((function(){return[i]})),_:1}),Object(c["j"])("div",b,[Object(c["j"])("div",s,[Object(c["j"])("div",l,[j,Object(c["j"])("div",f,[Object(c["j"])("span",null,"昵称："+Object(c["O"])(t.user.name),1),Object(c["j"])("span",null,"登录名："+Object(c["O"])(t.user.email),1),O])])]),Object(c["j"])("ul",d,[Object(c["j"])("li",{class:"van-hairline--bottom",onClick:n[0]||(n[0]=function(t){return o.goTo("/collect")})},[p,Object(c["l"])(T,{name:"arrow"})]),Object(c["j"])("li",{class:"van-hairline--bottom",onClick:n[1]||(n[1]=function(t){return o.goTo("/order")})},[m,Object(c["l"])(T,{name:"arrow"})]),Object(c["j"])("li",{class:"van-hairline--bottom",onClick:n[2]||(n[2]=function(t){return o.goTo("/setting")})},[v,Object(c["l"])(T,{name:"arrow"})]),Object(c["j"])("li",{class:"van-hairline--bottom",onClick:n[3]||(n[3]=function(t){return o.goTo("/address")})},[g,Object(c["l"])(T,{name:"arrow"})]),Object(c["j"])("li",{class:"van-hairline--bottom",onClick:n[4]||(n[4]=function(t){return o.goTo("/about")})},[h,Object(c["l"])(T,{name:"arrow"})])])]),Object(c["j"])("div",k,[Object(c["l"])(x,{round:"",block:"",color:"#42b983",onClick:o.tologout},{default:Object(c["U"])((function(){return[w]})),_:1},8,["onClick"])])])}var T=e("5530"),x=(e("e7e5"),e("d399")),y=e("a7ac"),I=e("6c02"),S=e("8d85"),_={name:"Profile",setup:function(){var t=Object(I["d"])(),n=Object(c["G"])({user:{}});Object(c["z"])((function(){Object(S["a"])().then((function(t){console.log(t),n.user=t}))}));var e=function(){Object(S["c"])().then((function(n){"204"==n.status&&(x["a"].success("退出成功"),window.localStorage.setItem("token",""),store.commit("setIsLogin",!1),setTimeout((function(){t.push({path:"/login"})}),500))}))},o=function(n,e){t.push({path:n,query:e||{}})};return Object(T["a"])(Object(T["a"])({},Object(c["P"])(n)),{},{tologout:e,goTo:o})},components:{NavBar:y["a"]}},K=(e("bff4"),e("6b0d")),F=e.n(K);const J=F()(_,[["render",C],["__scopeId","data-v-50d32db9"]]);n["default"]=J},"8d85":function(t,n,e){"use strict";e.d(n,"d",(function(){return o})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}));var c=e("1bab");function o(t){return Object(c["a"])({url:"/api/auth/register",method:"post",data:t})}function r(t){return Object(c["a"])({url:"/api/auth/login",method:"post",data:t})}function u(t){return Object(c["a"])({url:"/api/auth/logout",method:"post"})}function a(){return Object(c["a"])({url:"/api/user"})}},b0c0:function(t,n,e){var c=e("83ab"),o=e("5e77").EXISTS,r=e("9bf2").f,u=Function.prototype,a=u.toString,i=/^\s*function ([^ (]*)/,b="name";c&&!o&&r(u,b,{configurable:!0,get:function(){try{return a.call(this).match(i)[1]}catch(t){return""}}})},ba97:function(t,n,e){t.exports=e.p+"img/user.1f230f71.png"},bff4:function(t,n,e){"use strict";e("1f82")}}]);
//# sourceMappingURL=chunk-62720086.7bfe2883.js.map