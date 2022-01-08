<template>
  <div class="b-nav-bar">
    <div class="left">
      <div class="item">
        <i class="iconfont">&#xe6a5;</i>
        <span>店铺</span>
      </div>
      <div class="item">
        <i class="iconfont">&#xe6ba;</i>
        <span>客服</span>
      </div>
      <div class="item">
        <i class="iconfont">&#xe657;</i>
        <span>收藏</span>
      </div>
    </div>
    <div class="right">
      <div class="shopcar" @click="addShopCar">加入购物车</div>
      <div class="price">
        <span class="price-item">立即购买</span><br />
        <span class="priceInt">折后￥</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomNavBar',
  methods: {
    addShopCar() {
      this.$emit('addShopCar')
    }
  }
}
</script>
<style scoped>
.b-nav-bar {
  display: flex;
  width: 100%;
  height: 49px;
  position: relative;
  bottom: 49px;
  background-color: #fff;
  border-top: 1px solid #f5f5f5;
}
.left {
  display: flex;
  justify-content: space-around;
  flex: 4;
}
.right {
  display: flex;
  flex: 6;
  margin: 4px;
  color: #fff;
  text-align: center;
}
.item {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.item i {
  flex: 6;
  font-size: 24px;
}
.item span {
  flex: 4;
  font-size: 14px;
}
.shopcar {
  flex: 1;
  background-color: #ff852a;
  border-radius: 20px 0 0 20px;
  line-height: 40px;
}
.price {
  flex: 1;
  background-color: #ff4e22;
  border-radius: 0 20px 20px 0;
}
.priceInt {
  font-size: 14px;
}
.price-item {
  line-height: 23px;
}
</style>
