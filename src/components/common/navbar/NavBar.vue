<template>
  <div class="nav-bar">
    <div class="left"><slot name="left" /></div>
    <div class="center"><slot name="center" /></div>
    <div class="right"><slot name="right" /></div>
  </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style scoped>
.nav-bar {
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
