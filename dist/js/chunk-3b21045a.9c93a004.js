(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b21045a"],{"07ac":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),u=Object(c["j"])("用户登录"),a={style:{"margin-top":"50px"}},r={style:{"text-align":"center",padding:"10px 0"}},o={style:{margin:"16px"}},i=Object(c["j"])(" 提交 ");function l(t,e,n,l,b,d){var s=Object(c["J"])("nav-bar"),j=Object(c["J"])("van-image"),p=Object(c["J"])("van-field"),O=Object(c["J"])("van-cell-group"),m=Object(c["J"])("van-button"),f=Object(c["J"])("van-form");return Object(c["B"])(),Object(c["h"])("div",null,[Object(c["k"])(s,null,{default:Object(c["S"])((function(){return[u]})),right:Object(c["S"])((function(){return[]})),_:1}),Object(c["i"])("div",a,[Object(c["i"])("div",r,[Object(c["k"])(j,{width:"10rem",height:"5rem",fit:"contain",src:"https://img.yzcdn.cn/vant/cat.jpeg"})])]),Object(c["i"])("div",null,[Object(c["k"])(f,{onSubmit:l.onSubmit},{default:Object(c["S"])((function(){return[Object(c["k"])(O,{inset:""},{default:Object(c["S"])((function(){return[Object(c["k"])(p,{modelValue:t.email,"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.email=e}),name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},null,8,["modelValue"]),Object(c["k"])(p,{modelValue:t.password,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.password=e}),type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},null,8,["modelValue"])]})),_:1}),Object(c["i"])("div",o,[Object(c["i"])("div",{class:"link-login",onClick:e[2]||(e[2]=function(e){return t.$router.push({path:"/register"})})}," 立即注册 "),Object(c["k"])(m,{round:"",block:"",type:"primary",color:"#44b883","native-type":"submit"},{default:Object(c["S"])((function(){return[i]})),_:1})])]})),_:1},8,["onSubmit"])])])}var b=n("5530"),d=(n("e7e5"),n("d399")),s=n("a7ac"),j=n("8d85"),p=n("6c02"),O=n("5502"),m={components:{NavBar:s["a"]},setup:function(){var t=Object(p["d"])(),e=Object(O["b"])(),n=Object(c["F"])({email:"",password:""}),u=function(){Object(j["b"])(n).then((function(c){window.localStorage.setItem("token",c.access_token),e.commit("setIsLogin",!0),d["a"].success("登陆成功"),setTimeout((function(){t.go(-1)}),500),n.email="",n.password=""}))};return Object(b["a"])(Object(b["a"])({},Object(c["N"])(n)),{},{onSubmit:u})}},f=(n("1d59"),n("6b0d")),v=n.n(f);const g=v()(m,[["render",l],["__scopeId","data-v-3c1b9b90"]]);e["default"]=g},"1d59":function(t,e,n){"use strict";n("9877")},"8d85":function(t,e,n){"use strict";n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var c=n("1bab");function u(t){return Object(c["a"])({url:"/api/auth/register",method:"post",data:t})}function a(t){return Object(c["a"])({url:"/api/auth/login",method:"post",data:t})}function r(t){return Object(c["a"])({url:"/api/auth/logout",method:"post"})}function o(){return Object(c["a"])({url:"/api/user"})}},9877:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3b21045a.9c93a004.js.map