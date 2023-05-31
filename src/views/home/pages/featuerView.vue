<template>
  <div>
    <a href="https://act.mogujie.com/zzlx67">
      <img :src="`${publicPath}/img/home/recommend_bg.jpg`" alt="" />
    </a>
  </div>
</template>
<script>
export default {
  name: 'FeatuerView',
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
<style scoped>
img {
  width: 100%;
}
</style>
