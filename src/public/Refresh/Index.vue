<template>
  <div class="pull-refresh">
    <div class="refresh-state">
      <!-- <img :class="['refresh-icon', state == 0 ? 'state-0' : [state == 1 ? 'state-1' : [state == 2 ? 'state-2' : [state == 3 ? 'state-3' : 'state-4']]]]" src="~@/assets/images/loading/loading-ball.png"> -->
      <img :class="['refresh-icon', state == 0 ? '' : 'state-whirl']" src="~@/assets/images/loading/loading-ball.png">
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'refresh',
  props: ['isSuccess'],
  components: {
  },
  data () {
    return {
      container: null,
      dragThreshold: 0.8, // 下拉阈值
      moveCount: 300,
      dragStart: null, // 触发下拉时初始Y坐标位置
      isRefresh: false, // 是否在下拉或刷新过程中,作用：当处于刷新过程中，不可再进行下拉防止重复触发刷新
      state: 0 // 0:未开始加载， 1:释放刷新， 2:刷新中， 3:刷新成功， 4:刷新失败
    }
  },
  created () {

  },
  mounted () {
    this.container = document.querySelector('.pull-refresh')
    this.reState = document.querySelector('.refresh-state')
    this.bindEvent(this.container)
  },
  methods: {
    bindEvent (touchDom) {
      touchDom.addEventListener('touchstart', this.touchStart)
      touchDom.addEventListener('touchmove', this.touchMove)
      touchDom.addEventListener('touchend', this.touchEnd)
    },
    touchStart (event) {
      if (this.isRefresh) {
        return
      }
      event = event.touches[0]
      this.dragStart = event.clientY
      // 清除容器的动画
      this.reState.style.webkitTransition = 'none'
    },
    touchMove (event) {
      if (this.isRefresh) {
        return
      }
      // 如果没有获取到初始坐标
      if (this.dragStart === null) {
        return
      }
      // 获取移动过程中屏幕Y坐标变化的值
      var targetY = event.touches[0].clientY
      // 滑动的百分比值 = （初始Y坐标 - 实时Y坐标）/ 浏览器实际像素高
      this.percentage = Number((this.dragStart - targetY) / window.screen.height)
      let translateY = -this.percentage * this.moveCount
      // 当下拉容器父元素scrolltop是0
      if (document.querySelector('.pull-refresh').getBoundingClientRect().top === 0) {
        // 如果触发下拉
        if (this.percentage < 0) {
          event.preventDefault()

          // 创建刷新标识
          this.joinRefreshFlag = true
          // 当下拉距离大于阈值时触发
          if (Math.abs(this.percentage) > this.dragThreshold) {
            this.state = 1
          } else {
            this.state = 0
          }
          // 下拉容器translateY位移
          this.reState.style.webkitTransform = 'translate3d(0,' + translateY + 'px,0)'
          document.querySelector('.refresh-icon').style.webkitTransform = 'rotate(' + translateY + 'deg)'
        } else {
          this.joinRefreshFlag = false
        }
      } else {
        this.joinRefreshFlag = false
      }
    },
    touchEnd () {
      if (this.percentage === 0) {
        return
      }
      if (this.isRefresh) {
        return
      }
      // 如果下拉距离大于阈值时 且 刷新标识为true触发
      if (Math.abs(this.percentage) > this.dragThreshold && this.joinRefreshFlag) {
        // emit父元素方法
        this.$emit('refresh')
        this.isRefresh = true
        // 当前刷新状态
        this.state = 2
        // 容器当前样式：330毫秒位移至100px位置处
        this.reState.style.webkitTransition = '330ms'
        this.reState.style.webkitTransform = 'translate3d(0,2rem,0)'
      } else {
        this.isRefresh = false
        // 容器当前样式：330毫秒速度返回原位
        this.reState.style.webkitTransition = '330ms'
        this.reState.style.webkitTransform = 'translate3d(0,0,0)'
      }

      // 重置joinRefreshFlag
      this.joinRefreshFlag = null
      // 重置dragStart
      this.dragStart = null
      // 重置percentage
      this.percentage = 0
    },
    // 刷新是否成功
    finishLoad () {
      if (this.isSuccess) {
        this.state = 3
      } else {
        this.state = 4
      }
      // 1秒收执行自身，返回容器初始位置
      setTimeout(function () {
        this.isRefresh = false
        this.state = 0
        this.reState.style.webkitTransform = 'translate3d(0,0,0)'
      }.bind(this), 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.pull-refresh {
  position: relative;
  height: 100%;
  .refresh-state {
    position: absolute;
    width: 100%;
    top: -100px;
    text-align: center;
    z-index: 99999;
    .refresh-icon {
      width: 80px;
      height: 80px;
      background: #fff;
      border-radius: 50%;
      &.state-whirl {
        animation: whirl 1s infinite linear;
      }
    }
  }
}
@keyframes whirl {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>
