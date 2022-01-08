<template>
  <div class="tab-contral">
    <div v-for="(item, index) in titles" @click="itemClick(index)" :key="index">
      <span :class="{ active: index === isActive }">{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabContral',
  props: {
    titles: {
      tpye: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isActive: 0
    }
  },
  methods: {
    itemClick(index) {
      this.isActive = index
      this.$emit('tabClick', index)
    }
  }
}
</script>
<style scoped>
.tab-contral {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.tab-contral div {
  flex: 1;
  text-align: center;
}
span {
  padding: 5px;
  font-size: 14px;
}
.active {
  border-bottom: 2px pink solid;
}
</style>
