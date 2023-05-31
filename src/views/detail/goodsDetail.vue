<template>
  <div class="detail">
    <detail-nav-bar @detailclick="detailclick" ref="navBar"></detail-nav-bar>
    <scroll class="scroll" ref="scroll" :probeType="3" :currentIndex="currentIndex" @scroll="detailScroll">
      <detail-swiper :top-images="topImages" ref="title"></detail-swiper>
      <shop-title :shop-title="shopTitle"></shop-title>
      <shop-info :shop-info="shopInfo"></shop-info>
      <shop-rate :rate="rate" ref="rate"></shop-rate>
      <detail-des @imageLoad="imageLoad" ref="des"></detail-des>
      <goods-list :goodsA="recommendGoods" ref="recommend"></goods-list>
    </scroll>
    <bottom-nav-bar @addShopCar="addShopCar"></bottom-nav-bar>
    <back-top v-show="isShowBackTop" @click.native="pageBackTop"></back-top>
  </div>
</template>
<script>
import DetailNavBar from './pages/DetailNavBar.vue'
import DetailSwiper from './pages/DetailSwiper.vue'
import ShopTitle from './pages/ShopTitle.vue'
import ShopInfo from './pages/ShopInfo.vue'
import ShopRate from './pages/ShopRate.vue'
import DetailDes from './pages/DetailDes.vue'
import BottomNavBar from './pages/BottomNavBar.vue'
import GoodsList from '@/components/content/goods/GoodsList'
import { debounce } from '@/common/utils.js'
import { itemListerMixin, backTopMixin } from '@/common/mixin.js'
import Scroll from '@/components/common/scroll/Scroll.vue'
const publicPath = process.env.BASE_URL
export default {
  name: 'GoodsDetail',
  components: {
    DetailNavBar,
    DetailSwiper,
    ShopTitle,
    ShopInfo,
    ShopRate,
    DetailDes,
    GoodsList,
    BottomNavBar,
    Scroll
  },
  data() {
    return {
      recommendGoods: {},
      shopCarData: {},
      elementPos: [],
      positionDebounce: {},
      currentIndex: 0,
      shopInfo: {
        cgoods: 99,
        csells: 12000,
        name: '衣美',
        score: [
          { isBetter: false, name: '描述相符', score: 4.64 },
          { isBetter: true, name: '价格合理', score: 5 },
          { isBetter: false, name: '质量满意', score: 4.43 }
        ],
        shopLogo: '',
        topImages: [
          `${publicPath}/img/meinv1.webp`,
          `${publicPath}/img/meinv2.webp`,
          `${publicPath}/img/meinv3.webp`,
          `${publicPath}/img/meinv1.webp`,
          `${publicPath}/img/meinv2.webp`
        ]
      },
      shopTitle: {
        title: '【衣美】2021春秋新款原宿风长袖T恤女bf潮学生韩版拼接白色复古港味宽松百搭上衣打底',
        oldPrice: 69.0,
        price: 38.23,
        discountDesc: '活动价',
        sales: 1080,
        favorite: 33,
        deliver: '72小时发货',
        server: ['退货补运费', '全国包邮', '七天无理由退货'],
        image: `${publicPath}/img/meinv1.webp`
      },
      rate: {
        rateCount: 12345,
        rateDate: 1628457966574,
        rateContent: '续航能力：很长时间 佩戴感受：佩戴很舒服 外观材质：塑料，很有手感 音效：降噪很赞',
        rateDes: [
          { rate: '打电话清楚', count: '50' },
          { rate: '隔音很好', count: '100' },
          { rate: '中音平衡', count: '120' }
        ],
        user: { userName: '地方看你', userImage: `${publicPath}/img/userImage.png` }
      }

      // iid: null,
    }
  },
  mixins: [itemListerMixin, backTopMixin],
  methods: {
    imageLoad() {
      this.newRefresh()
      this.positionDebounce()
    },
    detailclick(index) {
      this.$refs.scroll.scrollTo(0, -(this.elementPos[index] - 44))
    },
    detailScroll(pos) {
      const a = this.elementPos
      for (let i = 0; i < a.length - 1; i++) {
        if (this.currentIndex !== i && a[i] - 44 <= -pos.y && -pos.y < a[i + 1] - 44) {
          this.currentIndex = i
          this.$refs.navBar.currentIndex = i
        }
      }
      // if (this.currentIndex != 0 && a[0] - 44 < -pos.y && -pos.y < a[1] - 44) {
      //   this.currentIndex = 0;
      //   this.$refs.navBar.currentIndex = 0;
      // }
      // if (this.currentIndex != 1 && a[1] - 44 < -pos.y && -pos.y < a[2] - 44) {
      //   this.currentIndex = 1;
      //   this.$refs.navBar.currentIndex = 1;
      // }
      // if (this.currentIndex != 2 && a[2] - 44 < -pos.y && -pos.y < a[3] - 44) {
      //   this.currentIndex = 2;
      //   this.$refs.navBar.currentIndex = 2;
      // }
      this.listernShowBackTop(pos)
    },
    gitData() {
      this.$http
        .get('/home/detail/recommend')
        .then(res => {
          this.recommendGoods = res.data[0]
          // console.log(JSON.stringify(this.recommendGoods, null, 2));
        })
        .catch(err => {
          console.log(err)
        })
    },
    positionItem() {
      this.elementPos = []
      this.elementPos.push(this.$refs.title.$el.offsetTop)
      this.elementPos.push(this.$refs.rate.$el.offsetTop)
      this.elementPos.push(this.$refs.des.$el.offsetTop)
      this.elementPos.push(this.$refs.recommend.$el.offsetTop)
      this.elementPos.push(Number.MAX_VALUE)
    },
    addShopCar() {
      this.$toast.show('商品数量+1', 2000)
      this.shopCarData.iid = this.$route.params.iid
      this.shopCarData.shopTitle = this.shopTitle
      // this.$store.commit("addShopDate", this.shopCarData);
      this.$store.dispatch('forData', this.shopCarData)
    }
  },
  created() {
    // getDetail(this.iid).then((res) => {
    //   console.log(res);
    // });
    this.topImages = this.shopInfo.topImages
    this.gitData()
    this.positionDebounce = debounce(this.positionItem, 20)
  },
  destroyed() {
    console.log(1)
  },
  mounted() {
    //   if (this.$route.path.indexOf("/im9p4u")) {
    //     this.$bus.$on("goodsImgLoad", () => {
    //       this.newRefresh();
    //       // console.log(this.$route.path);
    //     });
    //   }
  }
}
</script>
<style scoped>
.detail {
  position: relative;
  z-index: 1;
  background-color: #f5f5f5;
  height: 100vh;
  overflow: hidden;
}

.scroll {
  /* position: absolute;
  top: 44px; */
  height: calc(100% - 44px);
  /* bottom: 49px; */
}
</style>
