<template>
  <div>
    <keep-alive exclude="GoodsDetail">
      <router-view />
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from '@/components/content/tabBar/MainTabBar.vue'
export default {
  components: {
    MainTabBar
  }
}
</script>
<style>
@import './assets/css/base.css';
</style>
