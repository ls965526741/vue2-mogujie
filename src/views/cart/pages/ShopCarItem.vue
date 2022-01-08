<template>
  <div>
    <div class="shop-car-item">
      <div class="goods-select">
        <check-button @click.native="imageClick" :isActive="itemData.checked"></check-button>
      </div>
      <div class="goods-image">
        <img :src="itemData.shopTitle.image" alt="" />
      </div>
      <div class="goods-detail">
        <div class="title">{{ itemData.shopTitle.title }}</div>
        <div class="old-price"><span>建议零售价</span>{{ itemData.shopTitle.oldPrice }}</div>
        <div class="price">
          <div class="left">{{ filterPrice }}</div>
          <div class="right">x{{ itemData.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckButton from './CheckButton.vue'
export default {
  name: 'ShopCarItem',
  components: {
    CheckButton
  },
  data() {
    return {
      isActive: true
    }
  },
  props: {
    itemData: {
      type: Object,
      default() {
        return {}
      }
    },
    currentIndex: {
      type: Number
    }
  },
  computed: {
    filterPrice() {
      return '￥' + this.itemData.shopTitle.price.toFixed(2)
    }
  },
  methods: {
    imageClick() {
      this.$store.commit('cChecked', this.currentIndex)
      this.isActive = this.itemData.checked
      // console.log(this.itemData.checked);
      // console.log(this.$store.state.shopData[this.currentIndex].checked);
      // this.itemData.checked = !this.itemData.checked;
      // console.log(JSON.stringify(this.itemData, null, 2));
    }
  }
}
</script>
<style scoped>
.shop-car-item {
  display: flex;
  justify-content: center;
  margin: 10px;
  width: calc(100%-20px);
  height: 200px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
}
.goods-select {
  position: relative;
  text-align: center;
  flex: 1;
}
.goods-image {
  flex: 3;
}
.goods-detail {
  padding-top: 30px;
  flex: 6;
}
.title {
  font-size: 16px;
}
.old-price {
  color: darkgray;
}
.price {
  color: red;
}
</style>
