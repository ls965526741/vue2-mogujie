<template>
  <div id="tab-bar-items" @click="itemsClick">
    <div v-if="!isActive"><slot name="items-icon" /></div>
    <div v-else><slot name="items-icon-active" /></div>
    <div :style="activeStyle" id="s3">
      <slot name="items-text" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabBarItems',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'pink'
    }
  },
  methods: {
    itemsClick() {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {}
    }
  }
}
</script>
<style>
#tab-bar-items {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
#tab-bar-items img {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  margin-top: 2px;
}
#s3 {
  margin-top: 5px;
}
.ia {
  color: red;
}
</style>
