<template>
    <div class="goods">
        <goods-list-item 
            v-for="item in goods" 
            :product="item" 
            :key ="item.id"
            @click="itemClick(item.id)"
            ></goods-list-item>
    </div>

</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
import { useRouter } from "vue-router";

export default {
    props: {
        goods: {
          type: Array,
          default(){
              return []
          }
        }
    },
    setup () {

        const router = useRouter();

        const itemClick = (id => {
            console.log("-------------", id);
            router.push({path: '/detail', query:{id}})
        })

        return {
            itemClick
        }
    },

    components: {
        GoodsListItem,
    }
}
</script>

<style lang="scss" scoped>

.goods {
    display: flex;  
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 5px;
}


</style>