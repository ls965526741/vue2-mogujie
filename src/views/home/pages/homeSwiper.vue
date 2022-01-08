<template>
  <swiper>
    <swiper-item v-for="(item, index) in homeSwiper" :key="index">
      <img :src="item" alt="" @load="swiperImgLoad" />
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index'

export default {
  name: 'HomeSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    homeSwiper: {
      type: Array,
      dafault() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  methods: {
    swiperImgLoad() {
      if (!this.isLoad) {
        // console.log(1);
        this.$emit('swiperImgLoad')
        this.isLaod = true
      }
    }
  }
}
</script>
