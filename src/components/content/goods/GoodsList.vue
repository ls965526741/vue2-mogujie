<template>
  <div class="goods" v-if="goodsA">
    <goods-list-item v-for="(item, index) in goodsA.list" :key="index" :messageItem="item"> </goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goodsA: {
      type: Object,
      default() {
        return {}
      }
    }
  }
  // mounted() {
  //   setTimeout(() => {
  //     console.log(JSON.stringify(this.goodsA, null, 2));
  //   }, 100);
  // },
}
</script>
<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
}
</style>
