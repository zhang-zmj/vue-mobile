import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import store from '../store';
import { Notify,Toast } from 'vant';

//懒加载：
const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Category.vue");
const Detail = () => import("../views/detail/Detail.vue");
const Profile = () => import("../views/profile/Profile.vue");
const ShopCart = () => import("../views/shopcart/ShopCart.vue");
const Register = () => import("../views/profile/Register.vue");
const Login = () => import("../views/profile/Login.vue");
const Address = () => import('../views/profile/Address');
const AddressEdit = () => import('../views/profile/AddressEdit');
const Order = () => import('../views/order/Order');
const OrderDetail = () => import('../views/order/OrderDetail');
const CreateOrder = () => import('../views/order/CreateOrder');


const routes = [
  {
    path: '',
    name: 'DefaultHome',
    component: Home,
    meta: {
      title: "图书兄弟",
      istrun:true
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: "图书兄弟",
      istrun:true
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: "图书兄弟-商品分类",
      istrun:true
      
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: "图书兄弟-商品详情"
    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: "图书兄弟-购物车",
      isAuthRequired: true,
      istrun:true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: "图书兄弟-个人中心",
      isAuthRequired: true,
      istrun:true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: "图书兄弟-用户注册"

    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "图书兄弟-用户登录"
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    meta: {
      title:'图书兄弟-地址管理',
      isAuthRequired:true
    }
  },
  {
    path: '/addressedit',
    name: 'AddressEdit',
    component: AddressEdit,
    meta: {
      title:'图书兄弟-编辑地址',
      isAuthRequired:true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      title:'图书兄弟-生成订单',
      isAuthRequired:true
    }
  },
  {
    path: '/createorder',
    name: 'CreateOrder',
    component: CreateOrder,
    meta: {
      title:'图书兄弟-订单预览',
      isAuthRequired:true
    }
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: {
      title:'图书兄弟-订单详情',
      isAuthRequired:true
    }
  }
  
]



const router = createRouter({

  history: createWebHashHistory(process.env.BASE_URL),



  // history: createWebHistory(process.env.BASE_URL),
  routes
})


//导航守卫 改变网页标题
router.beforeEach((to, from, next) => {

    //如果没有登录，跳转到login
    if (to.meta.isAuthRequired && store.state.user.isLogin === false) {
      Notify('您还没有登录，请先登录');
      return next('/login');
    }else{
      next();
    }
    document.title = to.meta.title;

})


export default router
