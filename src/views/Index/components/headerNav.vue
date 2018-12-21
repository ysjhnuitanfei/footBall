<template>
  <div class='header-info'>
    <swiper ref="mySwiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in bannerList" :key="index">
        <img class="banner-img" :src="item.imgUrl">
        <div class="banner-text">{{item.title}}</div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'headerinfo',
  props: ['bannerList'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        paginationClickable: true,
        autoplay: true,
        autoplayDisableOnInteraction: false,
        loop: false,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    }
  },
  created () {

  },
  methods: {

  },
  mounted () {
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style lang="less" scoped>
.header-info {
  position: relative;
  height: 550px;
  background: #fff;
  .swiper-container {
    position: relative;
    height: 100%;
    .swiper-pagination {
      bottom: 80px;
      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        &.swiper-pagination-bullet-active {
          background: #41a1f5;
        }
      }
    }
    .banner-img {
      width: 100%;
      height: 100%;
      background: #ccc;
    }
    .banner-text {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      text-align: center;
      line-height: 80px;
      font-size: 40px;
      background: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
