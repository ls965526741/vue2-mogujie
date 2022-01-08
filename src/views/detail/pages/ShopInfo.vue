<template>
  <div class="info">
    <div class="title-name">
      <img src="/img/goodsLogo.png" alt="" class="goodsLogo" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="main">
      <div class="left">
        <div class="item-left">
          <span>{{ filterInfo(shopInfo.csells) }}</span>
          <p>总销量</p>
        </div>
        <div class="item-right">
          <span>{{ shopInfo.cgoods }}</span>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(item, index) in shopInfo.score" :key="index" class="right-item" :fee="index">
          <span class="span1">{{ item.name }}</span>
          <span :class="{ isactive: item.isBetter }" class="score">{{ scroreFloat(item.score) }}</span>
          <span>
            <span v-if="item.isBetter" class="height">高</span>
            <span v-else class="bottom">低</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      fee: 0
    }
  },
  methods: {
    filterInfo(value) {
      let result = value
      if (result >= 10000) {
        result = (result / 10000).toFixed(2) + '万'
      } else {
      }
      return result
    },
    scroreFloat(score) {
      score = score.toFixed(2)
      return score
    }
  },
  computed: {}
}
</script>
<style scoped>
.info {
  background-color: #fff;
  border-radius: 10px;
  margin: 8px;
  padding: 10px;
}

.goodsLogo {
  display: inline-block;
  width: 40px;
  height: 24px;
  vertical-align: bottom;
  margin-left: 5px;
}
.title-name span {
  font-weight: 700;
  padding-left: 8px;
  line-height: 24px;
}
.main {
  display: flex;
  font-size: 12px;
  height: 90px;
  margin-top: 20px;
  text-align: center;
}
.left,
.right {
  flex: 1;
  display: flex;
  align-items: center;
}
.item-left,
.item-right {
  flex: 1;
}
.item-left span,
.item-right span {
  display: inline-block;
  margin-bottom: 10px;
}
.right {
  flex-direction: column;
}
.right-item {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex: 1;
}

.score {
  color: green;
}
.isactive {
  color: red;
}
.height,
.bottom {
  padding: 2px;
  border-radius: 2px;
}
.height {
  background-color: red;
  color: white;
}
.bottom {
  background-color: green;
  color: white;
}
</style>
