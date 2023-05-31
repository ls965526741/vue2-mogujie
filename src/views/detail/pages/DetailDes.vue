<template>
  <div class="des">
    <div class="title">宝贝详情</div>
    <div v-for="item in 12" :key="item">
      <img :src="`${publicPath}/img/g${item}.webp`" alt="" @load="imageLoad" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailDes',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    }
  }
}
</script>
<style scoped>
.title {
  text-align: center;
}
.title::before,
.title::after {
  content: '';
  display: inline-block;
  width: 100px;
  height: 1px;
  background-color: pink;
  margin: 0 5px 7px;
}
</style>
