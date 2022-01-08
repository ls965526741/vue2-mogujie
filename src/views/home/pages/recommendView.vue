<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
      <img :src="item.image" alt="" />
      <div class="test">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      dafalut() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend {
  display: flex;
  width: 100%;
  height: 95px;
  margin-top: 15px;
  text-align: center;
}
.recommend-item {
  flex: 1;
  height: 70px;
}
img {
  width: 75%;
  margin: 0 auto;
  margin-bottom: 10px;
}
.test {
  height: 50px;
}
</style>
