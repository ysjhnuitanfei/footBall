<template>
  <div class="spinners" v-if="isLoading">
    <!-- <div class="preloader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div> -->
    <div class="laodingCon">
        <div class="ball"></div>
        <div class="ballshadow"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['isLoading'],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.spinners {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  transform: translate(-50%, -50%);
  display:flex;/*多轮布局*/
  align-items:center;/*垂直*/
  justify-content:center;/*水平*/
  z-index: 9999;
  // 足球loading
  .laodingCon{
    width:120px;height: 150px;
    .ball {
      animation: ball 300ms cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite alternate;
      height: 120px;
      width: 120px;
      background: url('~@/assets/images/loading/loading-ball.png') no-repeat center;
      background-size: 100%
    }
    .ballshadow {
      animation: shadow 300ms cubic-bezier(0.165, 0.840, 0.440, 1.000) infinite alternate;
      background: #000;
      margin-left: 10px;
      height: 30px;
      width: 100px;
      animation-delay: 0;
      border-radius: 100%;
    }
  }
  // 方块loading
  .preloader {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    animation: preloader 5s infinite linear;
    span {
      width: 70px;
      height: 70px;
      position: absolute;
      background: red;
      display: block;
      animation: preloader_span 1s infinite linear;
      &:nth-child(1) {
        background: #2ecc71;
      }
      &:nth-child(2) {
        left: 80px;
        background: #9b59b6;
        animation-delay: -0.2s;
      }
      &:nth-child(3) {
        top: 80px;
        background: #3498db;
      }
      &:nth-child(4) {
        top: 80px;
        left: 80px;
        background: #f1c40f;
        animation-delay: -0.6s;
      }
    }
  }
}

// 足球动画
@keyframes ball {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50px);
  }
}
@keyframes shadow {
  0% {
    opacity: 0.2;
    transform: scale(0.3);
  }
  100% {
    opacity: 0.05;
    transform: scale(1);
  }
}

// 方块动画
@keyframes preloader {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes preloader_span {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
