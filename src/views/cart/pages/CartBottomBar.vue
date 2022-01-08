<template>
  <div class="bottom">
    <div class="left">
      <div class="check-buttom">
        <check-button
          @click.native="allClick"
          :isActive="btnActive"
        ></check-button>
      </div>
      <span>全选</span>
    </div>
    <div class="center">总价：￥{{ totalPrice.toFixed(2) }}</div>
    <div class="right" @click="alert">去结算：({{ totalCount }})</div>
  </div>
</template>
<script>
import CheckButton from './CheckButton.vue'
import { mapMutations, mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['cartLength', 'cartList']),
    totalPrice() {
      return this.cartList
        .filter((item) => {
          return item.checked
        })
        .reduce((a, b) => {
          return a + (b.shopTitle.price * 10000 * b.count) / 10000
        }, 0)
    },
    totalCount() {
      return this.cartList.filter((item) => {
        return item.checked === true
      }).length
    },
    allCount() {
      return this.cartLength
    },
    btnActive() {
      if (this.cartLength === 0) {
        return false
      }
      return !this.cartList.find((item) => item.checked === false)
    }
  },
  methods: {
    ...mapMutations(['allCheckedC', 'allCheckedC1']),
    allClick() {
      // console.log(this.btnActive);
      // console.log(this.$store.state.shopData);
      // console.log(this.$store.state.shopData[0].checked);

      if (this.totalCount === this.allCount) {
        // this.$store.commit("allCheckedC");
        this.allCheckedC()
        // this.$store.state.shopData.forEach((item) => {
        //   item.checked = false;
        // });
      } else {
        this.allCheckedC1()
        // this.$store.commit("allCheckedC1");
        // this.$store.state.shopData.forEach((item) => {
        //   item.checked = true;
        // });
      }
    },
    alert() {
      if (!this.cartLength) {
        this.$toast.show('请添加商品', 3000)
      }
    }
  }
}
</script>
<style scoped>
.bottom {
  width: 100%;
  height: 44px;
  line-height: 44px;

  display: flex;
  background-color: #f5f5f5;
}
.check-buttom {
  position: relative;
  flex: 1;
}
.left {
  display: flex;
  width: 80px;
}
.left span {
  flex: 1;
}
.center {
  flex: 1;
  padding-left: 20px;
}
.right {
  width: 120px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>
