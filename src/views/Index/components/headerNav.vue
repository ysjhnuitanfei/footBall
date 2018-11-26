<template>
  <div class='headerInfo'>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img class="banner-img" :src="item.imgUrl">
        <div class="banner-text">{{item.title}}</div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'headerinfo',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperList: [
        {
          title: '巴西双循环11人制火热进行中',
          imgUrl: '@/assests/images/home/banner1.jpg'
        },
        {
          title: '巴西双循环11人制火热进行中',
          imgUrl: '@/assests/images/home/banner2.jpg'
        },
        {
          title: '巴西双循环11人制火热进行中',
          imgUrl: '@/assests/images/home/banner3.jpg'
        },
        {
          title: '巴西双循环11人制火热进行中',
          imgUrl: '@/assests/images/home/banner4.jpg'
        },
        {
          title: '巴西双循环11人制火热进行中',
          imgUrl: '@/assests/images/home/banner5.jpg'
        }
      ],
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        loop: true,
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
  }
}
</script>
<style lang="less">
.headerInfo {
  position: relative;
  height: 500px;
  .swiper-container {
    position: relative;
    height: 100%;
    .banner-img {
      width: 100%;
      height: 100%;
      background: #00a7f2;
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
