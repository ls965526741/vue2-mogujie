<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <shop-car-item
        v-for="(item, index) in cartList"
        :itemData="item"
        :current-index="index"
        :key="index"
      ></shop-car-item>
    </scroll>
    <cart-bottom-bar class="cart-bottom"></cart-bottom-bar>
    <toast></toast>
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import ShopCarItem from './pages/ShopCarItem.vue'
import CartBottomBar from './pages/CartBottomBar.vue'
import Toast from '@/components/common/toast/Toast.vue'

import Scroll from '@/components/common/scroll/Scroll.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    NavBar,
    ShopCarItem,
    CartBottomBar,
    Toast,
    Scroll
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList'])
    // ...mapGetters({
    //   length: "cartLength",
    // }),
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>
<style scoped>
.cart {
  background-color: #f5f5f5;
  width: 100%;
}
.content {
  height: calc(100vh - 93px - 44px);
}
.nav-bar {
  font-size: 18px;
  background-color: pink;
  color: #fff;
  position: relative;
  z-index: 1;
}
.cart-bottom {
  position: absolute;
  bottom: 49px;
}
</style>
