<template>
    <div class="nav-bar">

        <div class="left" @click="goback"><slot name="left">
            <img src="~assets/images/left.png" alt="">
        </slot></div>
        <div class="center"><slot>Shop</slot></div>
        <div class="right"><slot name="right"></slot></div>

    </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
    name: "NavBar",

    setup () {
        
       //事件处理
        const router = useRouter();
        const goback = () => {
            router.go(-1); //回到上一个界面
        }


        return {
            goback
        }


    
    }
}
</script>

<style lang="scss" scoped>

.nav-bar{

    display: flex;
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    height: 45px;
    line-height: 45px;
    text-align: center;
    box-shadow: 0 2px 0px rgba($color: #000000, $alpha: 0.1);

    .left, .right {
        width: 60px;
    }

    .left {
         width: 45px; 
         padding: 8px 10px;
    }

    .center{
        flex: 1;
    }

}


</style>