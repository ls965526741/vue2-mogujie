<template>
  <tab-bar>
    <tab-bar-items v-for="item in tabBarList" :key="item.path" :path="item.path">
      <template #items-icon>
        <img :src="item.icon" alt="" />
      </template>
      <template #items-icon-active>
        <img :src="item.activeIcon" alt="" />
      </template>
      <template #items-text>{{ item.text }}</template>
    </tab-bar-items>
  </tab-bar>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItems from '@/components/common/tabbar/TabBarItems.vue'
const publicPath = process.env.BASE_URL
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItems
  },
  data() {
    return {
      tabBarList: [
        {
          path: '/home',
          icon: `${publicPath}/img/tabbar/home.svg`,
          activeIcon: `${publicPath}/img/tabbar/home_active.svg`,
          text: '首页'
        },
        {
          path: '/category',
          icon: `${publicPath}/img/tabbar/category.svg`,
          activeIcon: `${publicPath}/img/tabbar/category_active.svg`,
          text: '首页'
        },
        {
          path: '/shopcart',
          icon: `${publicPath}/img/tabbar/shopcart.svg`,
          activeIcon: `${publicPath}/img/tabbar/shopcart_active.svg`,
          text: '购物车'
        },
        {
          path: '/profile',
          icon: `${publicPath}/img/tabbar/profile.svg`,
          activeIcon: `${publicPath}/img/tabbar/profile_active.svg`,
          text: '个人'
        }
      ]
    }
  }
}
</script>
