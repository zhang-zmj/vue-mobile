<template>
  
  <div class="home">
  
    <!-- 导航栏 -->
    <nav-bar>
      <!-- <template v-slot:left>&lt;</template> -->
      <template v-slot:default>图书兄弟</template>
      <template v-slot:right></template>
    </nav-bar>


   <!-- 切换组件  -->
      <tab-control class="topTabFixed"
                   v-show="isTabFixed"
                   @tabClick="tabClick" 
                   :titles="['畅销','新书','精选']">
      </tab-control>
      

  <div class="wrapper" >

    <div class="content">
  
        <div ref="banref">
            <!-- banner图 -->
            <home-swiper :banners="banners"></home-swiper>
            <!-- 推荐组件 -->
            <recommend-view :recommends="recommends"></recommend-view>
        </div>
 
 

      <!-- 切换组件 -->
      <tab-control @tabClick="tabClick" :titles="['畅销','新书','精选']">
      </tab-control>


      <!--商品列表 -->
      <goods-list :goods="showGoods"></goods-list>


    </div>

  </div>

 

  </div>

</template>


<script>

import HomeSwiper from "./ChildComps/HomeSwiper.vue";
import NavBar from 'components/common/navbar/NavBar';
import RecommendView from "./ChildComps/RecommendView";
import tabControl from 'components/content/tabControl/tabControl'
import GoodsList from 'components/content/goods/GoodsList'
import { getHomeAllData, getHomeGoods} from "network/home";



import {ref, reactive, onMounted, computed, watchEffect, nextTick } from "vue";
import BScroll from 'better-scroll';


export default {
  name: 'Home',
  setup() {

      let isTabFixed = ref(false);
      let banref = ref(null);    
      //临时变量
      let temid = ref(0);
      const recommends = ref([]);
       let banners = ref([]);



      //商品数据模型
     const goods = reactive({
       sales: {page: 1, list:[]},
       new: {page: 1, list:[]},
       recommend: {page: 1, list:[]},
     })
     
     //当前展示的商品
    let currentType = ref("sales");
    const showGoods = computed( ()=>{
      return goods[currentType.value].list;
    })


    let bscroll = reactive({})
    onMounted(() => {

      getHomeAllData().then(res=>{
         recommends.value = res.goods.data;
         banners.value = res.slides;
      })

      getHomeGoods("sales").then(res=>{
         goods.sales.list = res.goods.data;
      })
       getHomeGoods("recommend").then(res=>{
         goods.recommend.list = res.goods.data;
      })
       getHomeGoods("new").then(res=>{
          goods.new.list = res.goods.data;
      })

      //创建BetterScroll对象
       bscroll = new BScroll(document.querySelector('.wrapper'), {
        probeType: 3,
        click: true,
        pullUpLoad: true //上拉加载更多，默认是false
      });

      //触发滚动事件
      bscroll.on("scroll", (position)=>{
         isTabFixed.value = (-position.y) > banref.value.offsetHeight;
      })

      //上拉加载数据，触发事件
      bscroll.on("pullingUp",()=>{

        // console.log("上拉加载更多。。。。。。");
        // console.log(document.querySelector(".content").clientHeight);

        //获取数据
        const page = goods[currentType.value].page + 1;
        getHomeGoods(currentType.value, page).then(ref=>{
           goods[currentType.value].list.push(...ref.goods.data)
           goods[currentType.value].page  += 1
        })
        console.log("当前类型" + currentType.value + "当前页" + page);

        //上拉加载数据完成，将数据显示出来
        bscroll.finishPullUp();

        //重新计算高度
        bscroll.refresh();
        
      })

    })


    //监听任何一个变量有变化：
      watchEffect(()=>{
        nextTick(()=>{
          //当DOM结构发生变化的时候必要低啊用确保滚得效果正常，重新计算高度
            bscroll && bscroll.refresh();
        })
      })





    const tabClick = (index) => {
        let types = ["sales","recommend","new"];
        currentType.value = types[index];

        nextTick(()=>{
          //当DOM结构发生变化的时候必要低啊用确保滚得效果正常，重新计算高度
            bscroll && bscroll.refresh();
        })

    }

    return {
      recommends,
      tabClick,
      goods,
      showGoods,
      isTabFixed,
      banref,
      banners
    }

  },

  components: {
    HomeSwiper,
    NavBar,
    RecommendView,
    tabControl,
    GoodsList
  }

}

</script>


<style scoped >

.banners img{
  width: 100%;
  height: auto;
}


#home {
  height: 100vh;
  position: relative;
}

.topTabFixed {
   margin-top: 45px;
}

.wrapper {
  position: absolute;
  top: 45px;
  bottom: 50px;
  left: 0px;
  right: 0;
  overflow: hidden;
}



</style>


