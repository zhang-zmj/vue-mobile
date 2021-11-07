<template>
   <van-swipe v-if="banners.length"  class="my-swipe" :autoplay="3000" indicator-color="red">
        <van-swipe-item v-for="(item, index) in banners"  :key="index">
            <img v-lazy="item.img_url" alt="">
        </van-swipe-item>
    </van-swipe>
</template>

<script>

export default {

    props: {
        banners: Array,
        default() {
            return []
        }
    },

    setup () {
        return {}
    }

}

</script>

<style lang="scss" scoped>

img {
    width: 100%;
    height: 180px !important; 
}

</style>
