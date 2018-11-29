<template>
  <div class='grab'>
    <div class="get-doll" ref="robot">
        <div class="part-head"></div>
        <div class="part-rope"></div>
        <div class="part-claw">
          <div class="part-claw-head"></div>
          <div class="part-paw">
            <div class="part-paw-con">
              <div class="part-paw-l"></div>
              <div class="part-paw-r"></div>
            </div>
          </div>
        </div>
        <div class="prize-item">
          <div class="prize-info"></div>
        </div>
    </div>
    <div class="startBtn" @click="startLottery">抓</div>
  </div>
</template>
<script>
export default {
  name: '',
  components: {
  },
  data () {
    return {
      isStart: false
    }
  },
  mounted () {
  },
  methods: {
    startLottery () {
      if (this.isStart) return
      this.isStart = true
      let dollEl = this.$refs.robot.classList
      if (dollEl.contains('up-active')) {
        dollEl.remove('up-active')
      }
      if (this.isStart) {
        dollEl.add('down-active')
      }
    }
  }
}
</script>
<style lang="less">
.grab {
  padding: 100px;
}
.startBtn {
  text-align: center;
  line-height: 100px;
  background: #f00;
  border-radius: 50px;
}
.get-doll {
  position: relative;
  height: 800px;
  display: flex;
  flex-direction: column;
  border: 10px solid #0e8acb;
  border-radius: 10px;
  overflow: hidden;

  // 娃娃机器布局
  .part-head {
    height: 57px;
    background: url("~@/assets/images/grab/part1.png") no-repeat center center;
  }
  .part-rope {
    height: 114px;
    background-size: 66px;
    background: url("~@/assets/images/grab/part2.png") no-repeat center center;
    background-size: 66px;
    transition-property: height;
    transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
    transition-duration: 1s;
  }
  .part-claw {
    position: relative;
    top: -26px;
    .part-claw-head {
      position: relative;
      height: 123px;
      background: url("~@/assets/images/grab/part3.png") no-repeat center center;
      background-size: 183px 123px;
      z-index: 3;
    }
    .part-paw {
      top: -20px;
      display: flex;
      justify-content: center;
      position: relative;
      .part-paw-con {
        display: flex;
        width: 180px;
        height: 117px;
        .part-paw-l,
        .part-paw-r {
          flex: auto;
          background-size: 75px 117px !important;
        }
        .part-paw-l {
          transform: rotate(50deg);
          transform-origin: 5px 8px;
          background: url("~@/assets/images/grab/part4l.png") no-repeat;
          background-position: left center;
        }
        .part-paw-r {
          transform: rotate(-50deg);
          transform-origin: 85px 10px;
          background: url("~@/assets/images/grab/part4r.png") no-repeat;
          background-position: right center;
        }
      }
    }
  }

  &.down-active {
    // 机器下降开始抓
    .part-rope {
      height: 380px;
    }
    .part-paw-l {
      transform: rotate(23deg) !important;
      transition: transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1) 600ms;
    }
    .part-paw-r {
      transform: rotate(-23deg) !important;
      transition: transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1) 600ms;
    }
  }
  /* 机械手臂和抓夹上升 */
  &.up-active {
    .part-rope {
      height: 114px;
      transition-duration: 2s;
    }
    .part-paw-l {
      transform: rotate(50deg);
      transition: transform 100ms cubic-bezier(0.17, 0.17, 0.67, 1) 2000ms;
    }
    .part-paw-r {
      transform: rotate(-50deg);
      transition: transform 100ms cubic-bezier(0.17, 0.17, 0.67, 1) 2000ms;
    }
  }

  .prize-item {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    .prize-info {
      width: 200px;
      height: 200px;
      margin: auto;
      background: #00f7f2;
    }
  }
}
</style>
