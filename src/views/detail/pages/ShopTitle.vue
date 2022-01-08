<template>
  <div class="shop-title">
    <div class="title">{{ shopTitle.title }}</div>
    <div class="price">
      <span class="price-c1">￥{{ shopTitle.oldPrice }}</span>
      <span class="price-c2">￥{{ shopTitle.price }}</span>
      <span class="price-c3">{{ shopTitle.discountDesc }}</span>
    </div>
    <div class="deliver">
      <span>销量&nbsp;{{ shopTitle.sales }}</span>
      <span>收藏{{ shopTitle.favorite }}</span>
      <span>{{ shopTitle.deliver }}</span>
    </div>
    <div class="server">
      <span v-for="(item, index) in shopTitle.server" :key="index"> <i class="iconfont">&#xe6b9;</i>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopTitle',
  props: {
    shopTitle: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.shop-title {
  display: flex;
  flex-direction: column;
  height: 240px;
  background-color: #fff;
  border-radius: 10px;
  margin: 8px;
  padding: 10px;
}
.title {
  text-indent: 0.5em;
  flex: 25%;
}
.price {
  flex: 25%;
}
.price span {
  margin-right: 5px;
}
.price-c1 {
  color: pink;
  font-size: 16px;
}
.price-c2 {
  text-decoration: line-through;
  font-size: 12px;
}
.price-c3 {
  display: inline-block;
  border-radius: 6px;
  font-size: 12px;
  padding: 0 3px;
  background-color: pink;
  color: white;
}
.deliver {
  flex: 25%;
  display: flex;
  font-size: 12px;
  color: thistle;
}
.deliver span {
  flex: 1;
}
.server {
  flex: 25%;
  display: flex;
  font-size: 14px;
}
.server span {
  flex: 1;
}
</style>
