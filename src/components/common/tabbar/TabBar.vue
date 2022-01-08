<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabBar'
}
</script>
<style>
#tab-bar {
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: #f6f6f6;
  width: 100%;
  height: 49px;
}
</style>
