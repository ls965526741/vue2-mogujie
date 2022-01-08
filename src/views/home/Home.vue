<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:center> 购物街 </template>
    </nav-bar>
    <tab-contral
      ref="tabContral1"
      :titles="['流行', '新款', '精选']"
      class="tab-contral"
      @tabClick="tabClick"
      :class="{ 'tab-con-fixed': tabContFixed }"
      v-show="tabContFixed"
    ></tab-contral>
    <scroll
      class="content"
      ref="scroll"
      :pullup="true"
      :probeType="3"
      :listenScroll="true"
      @scroll="contentScroll"
      @scrollToEnd="loadMore"
    >
      <home-swiper :home-swiper="homeSwiper" class="home-swiper" @swiperImgLoad="swiperImgLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <featuer-view></featuer-view>
      <tab-contral
        ref="tabContral2"
        :titles="['流行', '新款', '精选']"
        class="tab-contral"
        @tabClick="tabClick"
      ></tab-contral>
      <goods-list :goodsA="goods[currentType]"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="pageBackTop" />
  </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import HomeSwiper from './pages/homeSwiper.vue'
import RecommendView from './pages/recommendView.vue'
import FeatuerView from './pages/featuerView.vue'
import TabContral from '@/components/content/tabContral.vue'
import GoodsList from '@/components/content/goods/GoodsList'
import Scroll from '@/components/common/scroll/Scroll.vue'

import { backTopMixin } from '@/common/mixin.js'

// import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatuerView,
    TabContral,
    GoodsList,
    Scroll
  },
  mixins: [backTopMixin],
  data() {
    return {
      itemImageLister: '',
      banners: [],
      recommends: [
        { image: '/img/recommend/1.png', title: '推荐' },
        { image: '/img/recommend/2.png', title: '热点' },
        { image: '/img/recommend/3.png', title: '新款' },
        { image: '/img/recommend/4.png', title: '主推' }
      ],
      currentType: 'pop',
      tabContralTop: 0,
      tabContFixed: false,
      isactived: 0,
      homeSwiper: [
        '/img/hswiper/18092.jpg',
        '/img/hswiper/180917.jpg',
        '/img/hswiper/180919.jpg',
        '/img/hswiper/180926.jpg'
      ],
      pop: [
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv1.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        }
      ],
      new: [
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv2.webp',
          message: '风衣外套女灯笼袖',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        }
      ],
      sell: [
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        },
        {
          image: '/img/meinv3.webp',
          message: '风衣外套女灯笼袖3',
          reicew: '99',
          allprice: '140',
          iid: 'im9p4u'
        }
      ],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      }
    }
  },

  created() {
    // this.getHomeMultidata();
    this.getHomeData('pop')
    this.getHomeData('new')
    this.getHomeData('sell')
    this.addIid(this.pop)
    this.addIid(this.new)
    this.addIid(this.sell)
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 20)
    this.itemImageLister = () => {
      refresh()
      // this.$refs.scroll.refresh();
    }
    this.$bus.$on('goodsImgLoad', this.itemImageLister)
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.isactived, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.isactived = this.$refs.scroll.scroll.y
    this.$bus.$off('goodsImgLoad', this.itemImageLister)
  },
  methods: {
    // getHomeMultidata() {
    //   getHomeMultidata().then((res) => {
    //     this.banners = res.data.banner.list;
    //     this.recommends = res.data.recommend.list;
    //   });
    // },
    addIid(obj) {
      let count = 0
      for (const i of obj) {
        i.iid = i + count++
      }
    },
    getHomeData(type) {
      setTimeout(() => {
        this.goods[type].list.push(...this[type])
      }, 500)
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabContral2.isActive = index
      this.$refs.tabContral1.isActive = index
    },
    loadMore() {
      this.getHomeData(this.currentType)
      // this.$refs.scroll.refresh();
    },
    contentScroll(pos) {
      this.tabContFixed = -pos.y >= this.tabContralTop
      this.listernShowBackTop(pos)
    },
    debounce(func, delay) {
      let timer = null
      return function (...arg) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, arg)
        }, delay)
      }
    },
    swiperImgLoad() {
      this.tabContralTop = this.$refs.tabContral2.$el.offsetTop
    }
  }
}
</script>
<style scoped>
.nav-bar {
  position: relative;
  background-color: pink;
  color: white;
  font-size: 20px;
  z-index: 2;
}
.home-swiper {
  height: 195px;
}
.tab-contral {
  background-color: white;
}
.tab-con-fixed {
  position: relative;
  z-index: 2;
}
.nav {
  height: 5000px;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 43px;
  bottom: 49px;
}
</style>
