<template>
  <div class="splend">
    <!-- 公共标题 -->
    <div class="splend-title clearfix">
      <div class="text">精彩赛事</div>
      <div class="more">更多</div>
    </div>
    <!-- 精彩赛事 -->
    <div class="splend-item" v-for="(item, index) in hot" :key="index">
      <div class="splend-img clearfix">
        <img class="splend-league-bg" :src="item.imgUrl">
      </div>
      <!-- 模拟对应赛事的对阵信息 -->
      <div class="splend-item-swiper">
        <swiper ref="againstList" :options="swiperOption">
          <swiper-slide v-for="(list, round) in item.list" :key="round">
            <div class="against-card">
              <div class="camp-info">
                <div class="camp-round">第{{ list.round }}轮</div>
                <div class="camp-time">{{ list.startTime }}</div>
              </div>
              <div class="camp-schdule">
                <div class="team-logo">
                  <img :src="list.homeLogo">
                  <div class="team-name">{{ list.homeName }}</div>
                </div>
                <div class="schdule-info">{{ list.score }}</div>
                <div class="team-logo">
                  <img :src="list.awayLogo">
                  <div class="team-name">{{ list.awayName }}</div>
                </div>
              </div>
              <div class="camp-address">{{ list.address }}</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: '',
  props: ['hot'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
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
  padding: 0 40px 40px 40px;
  width: 100%;
  background: #fff;
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
      line-height: 60px;
      text-align: center;
      font-size: 32px;
      color: #fff;
      background: linear-gradient(to right, #00a7f2, #41a1f5);
      border-radius: 50px;
    }
  }

  .splend-item {
    margin-top: 40px;
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
      margin-top: 10px;
      width: 850px;
      /* prettier-ignore */
      border: solid 1px #ccc;
      border-radius: 15px;
      overflow: hidden;
    }
    .against-card {
      height: auto;
      overflow: hidden;
      .camp-info {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 20px;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 30px;
          right: 30px;
          height: 1px;
          background: #ccc;
        }
        .camp-round {
          position: relative;
          margin-left: 20px;
          width: 120px;
          line-height: 50px;
          text-align: center;
          font-size: 32px;
          color: #fff;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #41a1f5;
            transform: skewX(-20deg);
            z-index: -1;
          }
        }
        .camp-time {
          margin-left: 20px;
          font-size: 36px;
          color: #666;
        }
      }

      .camp-schdule {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
        padding: 0 20px;

        .team-logo {
          margin: 0 20px;
          width: 300px;
          text-align: center;
          font-size: 0;
          img {
            width: 180px;
            height: 180px;
          }
          .team-name {
            line-height: 60px;
            font-size: 32px;
            color: #333;
          }
        }
        .schdule-info {
          padding-bottom: 60px;
          width: 200px;
          text-align: center;
          font-size: 48px;
          color: #333;
        }
      }

      .camp-address {
        position: relative;
        padding: 5px 30px 5px 80px;
        line-height: 50px;
        font-size: 32px;
        color: #666;
        background: url("~@/assets/images/icon/map.png") no-repeat 30px center;
        background-size: 40px 40px;
        &:before {
          content: "";
          position: absolute;
          top: 0;
          left: 30px;
          right: 30px;
          height: 1px;
          background: #ccc;
        }
      }
    }
  }
}
</style>
