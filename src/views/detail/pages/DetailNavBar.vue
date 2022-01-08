<template>
  <nav-bar class="nav-bar">
    <template v-slot:left>
      <img src="/img/common/back.svg" alt="" class="leftImg" @click="back" />
    </template>
    <template v-slot:center>
      <div class="center">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="span"
          @click="detailclick(index)"
          :class="{ isactive: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </template>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '评论', '参数', '详情'],
      currentIndex: 0
    }
  },
  methods: {
    detailclick(index) {
      this.currentIndex = index
      this.$emit('detailclick', index)
    },
    back() {
      // this.$router.back();
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
.nav-bar {
  position: relative;
  z-index: 2;
  background-color: white;
}
.leftImg {
  padding-top: 7px;
  height: 30px;
}
.center {
  display: flex;
  font-size: 14px;
}
.span {
  flex: 1;
  text-align: center;
}
.isactive {
  color: pink;
}
</style>
