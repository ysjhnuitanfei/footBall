<template>
  <div class='page lottery'>
    <div class="activity"></div>
    <div class="marquee">
      <div class="marqueeBox">
        <div class="marqueeList" :style="{'animation-duration': marqueeSpeed + 's'}">
          <span v-for="(item, index) in marqueeList" :key="index">{{ item }}</span>
          <!--重复渲染一次-->
          <span v-for="(item, index) in marqueeList" :key="index">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      marqueeSpeed: 0,
      marqueeList: ['恭喜 赵X 抽中优惠券', '恭喜 1X 抽中优惠券', '恭喜 2X 抽中优惠券', '恭喜 3X 抽中优惠券', '恭喜 4X 抽中优惠券'],
      marqueeListCopy: [],
      prizeList: [
        {
          id: 1,
          name: 'vivo Z3',
          imgUrl: require('@/assets/images/lottery/prize.png')
        },
        {
          id: 2,
          name: '优惠券',
          imgUrl: require('@/assets/images/lottery/prize.png')
        },
        {
          id: 3,
          name: '优惠券',
          imgUrl: require('@/assets/images/lottery/prize.png')
        },
        {
          id: 4,
          name: '优惠券',
          imgUrl: require('@/assets/images/lottery/prize.png')
        },
        {
          id: 5,
          name: '优惠券',
          imgUrl: require('@/assets/images/lottery/prize.png')
        },
        {
          id: 6,
          name: '优惠券',
          imgUrl: require('@/assets/images/lottery/prize.png')
        },
        {
          id: 7,
          name: '优惠券',
          imgUrl: require('@/assets/images/lottery/prize.png')
        },
        {
          id: 8,
          name: '谢谢参与',
          imgUrl: require('@/assets/images/lottery/prize.png')
        }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      var marqueeBox = document.querySelector('.marqueeBox').offsetWidth
      var marqueeList = document.querySelector('.marqueeList').scrollWidth
      this.marqueeSpeed = Math.round(Number(marqueeList / marqueeBox)) * 3
    })
  },
  methods: {
  }
}
</script>
<style lang="less">
.lottery {
  .activity {
    width: 1080px;
    height: 400px;
    background: #f00;
  }
  .marqueeBox {
    position: relative;
    margin: 0 50px;
    height: 80px;
    overflow: hidden;
    border-width: 5px 10px;
    border-style: solid;
    border-color: #f00;
    background: blue;
  }
  .marqueeList {
    position: absolute;
    animation: roll 12s linear infinite;
    white-space: nowrap;
  }
  .marqueeList span {
    font-size: 40px;
    color: #fff;
    padding: 5px 10px
  }

  @keyframes roll {
    from {
        transform: translate(0, 0);
    }
    to {
        transform: translate(-50.2%, 0);
    }
  }
}
</style>
