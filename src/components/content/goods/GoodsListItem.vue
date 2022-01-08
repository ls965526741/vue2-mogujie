<template>
  <div class="goods-item">
    <!-- :src="messageItem.image" -->
    <img v-lazy="messageItem.image" alt="" @load="imgLoad" @click="goodsDetails" />
    <div class="bottom">
      <div class="title">{{ messageItem.message }}</div>
      <div class="bar">
        <span class="span1">限时价</span>
        <span class="span2">{{ '￥' + parseFloat(messageItem.reicew).toFixed(2) }}</span>
        <span class="span3">{{ '￥' + parseFloat(messageItem.allprice).toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GoodsListItem',
  props: {
    messageItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('goodsImgLoad')
    },
    goodsDetails() {
      this.$router.push('/goodsDetail/' + this.messageItem.iid)
    }
  }
}
</script>
<style scoped>
.goods-item {
  width: 46%;
  margin: 2% 2%;
  background-color: #fff;
}
.goods-item img {
  text-align: center;
  height: 240px;
  margin-bottom: 8px;
}
.bottom {
  padding: 5px;
}
.title {
  height: 38px;
  line-height: 19px;
  overflow: hidden;
  /* white-space: nowrap;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-all;
  flex-direction: column; */
}
.bar {
  padding-left: 2%;
  height: 18px;
  line-height: 18px;
}
.span1 {
  color: pink;
  border: 1px pink solid;
  font-size: 14px;
}
.span2 {
  padding: 0 4%;
  font-size: 14px;
}
.span3 {
  font-size: 12px;
  text-decoration: line-through;
}
</style>
