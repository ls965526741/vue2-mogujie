<template>
  <div class="rate">
    <div class="rate-title">
      <div class="left">
        宝贝评价<span>（{{ rate.rateCount }}）</span>
      </div>
      <div class="right">查看全部<i class="iconfont">&#xe6ca;</i></div>
    </div>
    <div class="center">
      <div v-for="index in 2" :key="index">
        <div class="center-item">{{ rate.rateDes[index - 1].rate }}({{ rate.rateDes[index - 1].count }})</div>
      </div>
    </div>
    <div class="user">
      <img src="img/userImage.png" alt="" class="img" />
      <!-- <i class="iconfont">&#xe6ba;</i> -->
      <div class="user-name">
        <div class="name">{{ formatName(rate.user.userName) }}</div>
        <div class="date">{{ cTimeago(rate.rateDate) }}</div>
      </div>
    </div>
    <div class="rate-center">
      <p>{{ rate.rateContent }}</p>
      <img src="" alt="" />
    </div>
    <div class="buttom">
      <div class="rate-title">
        <div class="left">问大家<span>（1506）</span></div>
        <div class="right">查看全部<i class="iconfont">&#xe6ca;</i></div>
      </div>
      <div class="buttom-item" v-for="item in 2" :key="item">
        <div><i>问</i>会不会一会就断掉，外放</div>
        <div>162个回答</div>
      </div>
    </div>
  </div>
</template>
<script>
import { timeago } from '@/common/utils.js'
export default {
  name: 'ShopRate',
  props: {
    rate: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      rateMessage: []
    }
  },
  methods: {
    sortRulr(a, b) {
      return b.count - a.count
    },
    formatName(name) {
      var newStr
      if (name.length === 2) {
        newStr = name.substr(0, 1) + '*'
      } else if (name.length > 2) {
        var char = ''
        for (let i = 0, len = name.length - 2; i < len; i++) {
          char += '*'
        }
        newStr = name.substr(0, 1) + char + name.substr(-1, 1)
      } else {
        newStr = name
      }
      return newStr
    },
    cTimeago(value) {
      return timeago(value)
    }
  },
  computed: {
    // countC() {
    //   // this.rateMessage = this.rate.rateDes.sort(this.sortRulr);
    //   // return this.rateMessage;
    //   return this.rate.rateDes.sort(this.sortRulr)
    // }
  },
  created() {
    // this.countC()
    this.formatName(this.rate.user.userName)
  }
}
</script>
<style scoped>
.rate {
  display: flex;
  flex-direction: column;
  height: 50vh;
  background-color: #fff;
  border-radius: 10px;
  margin: 8px;
  padding: 10px;
}
.rate-title {
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
}

.rate-title .left {
  font-weight: 700;
}
.center {
  flex: 2;
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
}
.center .center-item {
  flex: 1;
  font-size: 16px;
  line-height: 24px;
  border-radius: 12px;
  padding: 0 5px;
  margin: 0 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: pink;
}
.user {
  flex: 2;
  display: flex;
}
.user i {
  font-size: 40px;
}
.img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
}
.user-name {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
}
.name {
  padding-top: 2px;
  padding-bottom: 3px;
}
.date {
  font-size: 12px;
}
.rate-center {
  flex: 5;
  border-bottom: 1px solid pink;
}
.buttom {
  flex: 4;
  display: flex;
  flex-direction: column;
}
.buttom-item {
  display: flex;
  flex: 1;
  justify-content: space-between;
}
.buttom-item i {
  font-style: normal;
  background-color: red;
  padding: 2px;
  font-size: 14px;
  color: #fff;
}
</style>
