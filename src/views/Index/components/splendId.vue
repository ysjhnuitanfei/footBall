<template>
  <div class="splend">
    <!-- 公共标题 -->
    <div class="splend-title clearfix">
      <div class="text">精彩赛事</div>
      <div class="more">更多</div>
    </div>
    <!-- 精彩赛事 -->
    <div class="splend-item" v-for="(item, index) in list" :key="index">
      <img class="splend-league-bg" :src="item.imgUrl">
    </div>
    <!-- 模拟对应赛事的对阵信息 -->
    <div class="splend-item-swiper">
      <swiper ref="againstList" :options="swiperOption">
        <swiper-slide v-for="(item, index) in 3" :key="index">
          <div class="against-card">
            <div class="camp-info">
              <div class="camp-time">11-24 12:00</div>
              <div class="camp-address">南京明基医院</div>
            </div>
            <div class="camp-schdule">
              <div class="team-logo">
                <img src="@/assets/images/home/team-l1.png" >
              </div>
              <div class="schdule-info">VS</div>
              <div class="team-logo">
                <img src="@/assets/images/home/team-l1.png" >
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      list: [
        {
          imgUrl: require('@/assets/images/home/league1.png')
        },
        {
          imgUrl: require('@/assets/images/home/league2.png')
        }
      ],
      // swiper参数
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        resistanceRatio: 0.7,
        autoplayDisableOnInteraction: false

      }
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.splend {
  padding: 0 40px;
  .splend-title {
    position: relative;
    height: 120px;
    border-bottom: solid 1px #e0e0e0;
    .text {
      position: relative;
      margin-top: 20px;
      padding-left: 20px;
      line-height: 80px;
      color: #333;
      font-size: 46px;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 15px;
        width: 10px;
        height: 50px;
        background: #41a1f5;
        border-radius: 10px;
      }
    }
    .more {
      position: absolute;
      right: 0;
      top: 30px;
      width: 120px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      font-size: 30px;
      color: #fff;
      background: linear-gradient(to right, #00a7f2, #41a1f5);
      border-radius: 15px;
    }
  }

  .splend-item {
    margin-top: 20px;
    .splend-league-bg {
      display: block;
      width: 1000px;
    }
  }

  .splend-item-swiper {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: -20px;
      left: 300px;
      width: 0;
      height: 0;
      border-width: 0 20px 20px;
      border-style: solid;
      border-color: transparent transparent #fff; /*透明 透明  灰*/
    }
    .swiper-slide {
      margin-top: 20px;
      width: 900px;
      /* prettier-ignore */
      border: solid 2px #ccc;
      border-radius: 15px;
      overflow: hidden;
    }
    .against-card {
      height: 300px;
      .camp-info {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        .camp-time {
          font-size: 36px;
          color: #666;
        }
        .camp-address {
          font-size: 40px;
          color: #333;
        }
      }

      .camp-schdule {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;

        .team-logo {
          margin: 0 20px;
          width: 200px;
          height: 200px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
