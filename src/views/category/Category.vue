<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div class="center">商城</div>
      </template>
    </nav-bar>
    <div @click="post">post</div>
    <scroll class="content"> </scroll>
  </div>
</template>
<script>
import Scroll from '@/components/common/scroll/Scroll.vue'
import NavBar from '@/components/common/navbar/NavBar.vue'
export default {
  name: 'Category',
  components: {
    Scroll,
    NavBar
  },
  methods: {
    post() {
      this.$http.get('https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=&appsecret=').then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style scoped>
/* .content {
  height: 90vh;
} */
</style>
