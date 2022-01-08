<template>
  <tab-bar>
    <tab-bar-items path="/home">
      <template v-slot:items-icon>
        <img src="/img/tabbar/home.svg" alt="" />
      </template>
      <template v-slot:items-icon-active>
        <img src="/img/tabbar/home_active.svg" alt="" />
      </template>
      <template v-slot:items-text>首页</template>
    </tab-bar-items>
    <tab-bar-items path="/category">
      <template v-slot:items-icon>
        <img src="/img/tabbar/category.svg" alt="" />
      </template>
      <template v-slot:items-icon-active>
        <img src="/img/tabbar/category_active.svg" alt="" />
      </template>
      <template v-slot:items-text>首页</template>
    </tab-bar-items>
    <tab-bar-items path="/cart">
      <template v-slot:items-icon>
        <img src="/img/tabbar/shopcart.svg" alt="" />
      </template>
      <template v-slot:items-icon-active>
        <img src="/img/tabbar/shopcart_active.svg" alt="" />
      </template>
      <template v-slot:items-text>购物车</template>
    </tab-bar-items>
    <tab-bar-items path="/profile">
      <template v-slot:items-icon>
        <img src="/img/tabbar/profile.svg" alt="" />
      </template>
      <template v-slot:items-icon-active>
        <img src="/img/tabbar/profile_active.svg" alt="" />
      </template>
      <template v-slot:items-text>个人</template>
    </tab-bar-items>
  </tab-bar>
</template>
<script>
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItems from '@/components/common/tabbar/TabBarItems.vue'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItems
  }
}
</script>
