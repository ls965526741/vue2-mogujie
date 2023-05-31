<template>
  <div class="check-button" :class="{ active: isActive }">
    <img :src="`${publicPath}/img/cart/tick.svg`" alt="" />
  </div>
</template>
<script>
export default {
  name: 'CheckButton',
  props: {
    isActive: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      publicPath: process.env.BASE_URL
    }
  }
}
</script>
<style scoped>
.check-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  background-color: #fff;
  border: 1px solid red;
  width: 24px;
  height: 24px;
  border-radius: 12px;
  padding: 3px;
}
.active {
  background-color: red;
}
</style>
