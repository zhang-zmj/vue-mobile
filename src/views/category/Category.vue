<template>
   <!-- 导航栏 -->
    <nav-bar>
      <template v-slot:default>分类</template>
    </nav-bar>

   <!-- 主界面 -->
<div class="mainbox">

    <div class="ordertab">
        <div class="toplefttab"></div>
        <div class="toptab">
            <van-tabs v-model="active" @click-tab="onClickTab">
                <van-tab title="销量排序"></van-tab>
                <van-tab title="价格排序"></van-tab>
                <van-tab title="评论排序"></van-tab>
            </van-tabs>
        </div>
    </div>


<!-- 左侧的菜单项目 -->
    <div class="leftmenu">
        <van-sidebar class="sidebar" v-model="activeKey" >
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item v-for="item in categorys" 
                                   :title="item.name" :key="item.id" 
                                   :name="item.name" >
                <van-sidebar-item 
                    v-for="sub in item.children" 
                    :title="sub.name"  
                    :key="sub.id"
                    @click="getGoods(sub.id)"
                    />
                </van-collapse-item>
            </van-collapse>
        </van-sidebar>
    </div>


<!-- 商品列表 -->
    <div class="goodslist">
        <div class="content">

                <van-card
                
                v-for="item in showGoods"  :key="item.id"
                @click="itemClick(item.id)"
                :num="item.comments_count"
                :tag="item.comments_count >= 0 ? '流行' : '标签'"
                :price="item.price"
                :desc="item.updated_at"
                :title="item.title"
                :thumb="item.cover_url"
                :lazy-load="true"
                />

        </div>
    </div>

</div>




</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import { ref, reactive, onMounted, computed} from "vue";
import {useRouter } from "vue-router";
import { getCategory } from "network/Category";
import { getCategoryGoods } from '../../network/Category';


export default {
    components: {
        NavBar
    },


    setup () {
        
        const router = useRouter();
        let active = ref(1);
        let activeKey = ref(0);
        let categorys = ref([]);
        let activeName = ref(1);
        
        // 当前的排序条件
        let cuttentOrder = ref("sales");
        //当前的分类ID
        let currentCid = ref(0);

         //数据模型
        let goods = reactive({
            sales:{page:1, list:[]},
            price:{page:1, list:[]},
            comments_count:{page:1, list:[]}
        });




        //排序选项卡
        let onClickTab = ({name}) => {
            let orders = ["sales","price","comments_count"];
            cuttentOrder.value = orders[name];
            getCategoryGoods(cuttentOrder.value , currentCid.value).then((res)=>{
                    goods[cuttentOrder.value ].list = res.goods.data;
            })
        }

        let getGoods =  (id) => {
           currentCid.value = id
           console.log("------", id);
            // init(); 

            getCategoryGoods(cuttentOrder.value , currentCid.value).then((res)=>{
                    goods[cuttentOrder.value ].list = res.goods.data;
            })
        }


        // 网络请求
        const init = () => {
            getCategoryGoods("sales", currentCid.value).then((res)=>{
                    goods.sales.list = res.goods.data;
            })

            getCategoryGoods("price", currentCid.value).then((res)=>{
                    goods.price.list = res.goods.data;
            })

            getCategoryGoods("comments_count", currentCid.value).then((res)=>{
                    goods.comments_count.list = res.goods.data;
            })

        }

        onMounted(() => {
            getCategory().then(res=>{
                console.log(res);
                categorys.value = res.categories
            })

            getCategoryGoods("sales", currentCid.value).then((res)=>{
                    goods.sales.list = res.goods.data;
            })
        })


        //计算属性
        const showGoods = computed(()=>{
            return goods[cuttentOrder.value].list
        })


        const itemClick = (id => {
            router.push({path: '/detail', query:{id}})
        })

        return {
            activeKey,
            categorys,
            activeName,
            active,
            onClickTab,
            getGoods,
            currentCid,
            goods,
            showGoods,
            itemClick
        }

    }
}
</script>

<style lang="scss" scoped>

.mainbox {
    margin-top: 45px;
    display: flex;
    .ordertab{
        flex: 1;
        float: right;
        position: fixed;
        top: 45px;
        right: 0;
        width: 100%;
        background-color: white; 
        height: 50px;
        z-index: 9;
        .toplefttab {
            width: 130px;
            height: 50px;
            float: left;
        }
        .toptab {
            height: 50px;   
        }
    }

    .leftmenu{
        position: fixed;
        left: 0;
        top: 95px;
        width: 130px;
        // overflow-y:scroll;
        // overflow-y:hidden
        overflow-y: auto;
        .sidebar {
            width: 130px;
        }
        
        
    }

    .goodslist{
        flex: 1;
        position: absolute;
        top: 95px;
        left: 130px;
        right: 0;
        height: 100vh;
        padding: 10px;
        text-align: left !important;
    }



}




</style>