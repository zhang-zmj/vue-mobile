<template>

 <div>
    
<!-- 导航栏 -->
    <nav-bar>
        <template v-slot:default>商品详情 </template>
    </nav-bar>

<!-- 图片组件 -->
    <van-image
    width="100%"
    lazy-load
    :src="detail.cover_url"
    />

<!-- 商品详情 -->
    <van-card style="text-align: left"
        :num="detail.stock"
        :price="detail.price"
        :desc="detail.description"
        :title="detail.title"
        >

        <template #tags>
            <van-tag plain type="danger">新书</van-tag>
            <van-tag plain type="danger">推荐</van-tag>
        </template>

        <template #footer>
            <van-button class="button" type="primary" @click="handleAddCart" >加入购物车</van-button>
            <van-button class="button" type="primary" @click="goToCart" >立即购买</van-button>
        </template>
    </van-card>

<!-- 切换标签  -->
    <van-tabs v-model:active="activeName">
        <van-tab title="概述" name="a">
            <div class="content" v-html="detail.details"></div>
        </van-tab>

        <van-tab title="热评" name="b">
            <div v-for="item in detail.components">
                <p>item</p>
            </div>
        </van-tab>

        <van-tab title="相关图书" name="c">
            <goods-list :goods="like_goods"></goods-list>
        </van-tab>
    </van-tabs>



    </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import { useRoute, useRouter } from "vue-router";
import { reactive, ref, onMounted, toRefs } from "vue";
import {getDetail}  from 'network/detail';
import GoodsList from "components/content/goods/GoodsList";
import { addCart } from 'network/cart';
import { Toast } from "vant";
import { useStore } from "vuex";



export default {
    name: "Detail",
    components: {
        NavBar,
        GoodsList
    },

     setup () {

        let activeName = ref(0);
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        let id = ref(0);
        let book = reactive({
            detail: {},
            like_goods: []
        })

        onMounted(() => {
            id.value = route.query.id;
            getDetail(id.value).then(res => {
                console.log(res);
                book.detail = res.goods;
                book.like_goods = res.like_goods;
            })
        })

        //添加购物车
        const handleAddCart = () => {
            
            addCart({"goods_id": book.detail.id, "num": 1}).then(res=>{

                if(res.status == '201' || res.status == '204') {
                    Toast.success('添加成功');
                    //设置store中cartCount
                    store.dispatch('updateCart');
                }

            })

        }

        //跳转购物车
        const goToCart = () => {

            addCart({"goods_id": book.detail.id, "num": 1}).then(res=>{

                if(res.status == '201' || res.status == '204') {
                    Toast.success('添加成功,显示购物车');

                    //设置store中cartCount
                    store.dispatch('updateCart');
                    router.push({path: '/shopcart'});
                }

            })

        }

        return {
            id,
            ...toRefs(book),
            activeName,
            handleAddCart,
            goToCart

        }
    }

}
</script>

<style lang="scss" scoped>

.content {
    padding: 10px;
    img{
        min-width: 100%;
        height: auto;
    }
}

.button{
    width: 120px;
    height: 40px;
}


</style>