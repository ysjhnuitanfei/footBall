<template>
  <div class="pull-refresh" :class="{'page-hidden':state != 0}">
    <div class="pull-down-content clearfix">
      <div class="refresh-state flex flex-center">
        <div class="loading-pull  trans-rotate" v-if="state == 0">
          <img class="full" src="~@/assets/images/loading/loading-pull.png">
        </div>
        <div class="loading-pull  trans-rotate" v-if="state == 1">
          <img class="full" src="~@/assets/images/loading/loading-pulled.png">
        </div>
        <div class="loading-pull trans-rotate-none" :class="{'trans-refresh':state==2}" v-if="state == 2">
          <img class="full" src="~@/assets/images/loading/loading-refresh.png">
        </div>
        <div class="loading-pull trans-rotate-none" v-if="state == 3">
          <img class="full" src="~@/assets/images/loading/loading-ok.png">
        </div>
        <div class="loading-pull trans-rotate-none" v-if="state == 4">
          <img class="full" src="~@/assets/images/loading/loading-error.png">
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['isSuccess'],
  components: {
  },
  data () {
    return {
      container: null, // 下拉容器
      dragThreshold: 0.8, // 下拉阈值
      moveCount: 300,
      // 0:未开始加载， 1:释放刷新， 2:刷新中， 3:刷新成功， 4:刷新失败
      state: 0,
      dragStart: null, // 触发下拉时初始Y坐标位置
      refreshing: false, // 是否在下拉或刷新过程中,作用：当处于刷新过程中，不可再进行下拉防止重复触发刷新
      percentage: null
    }
  },
  mounted () {
    this.container = document.querySelector('.pull-down-content')
    this.bindEvent()
  },
  methods: {
    touchStart (event) {
      var self = this
      if (self.refreshing) {
        return
      }
      // 当前的event对象 = event中的touches[0]对象
      event = event.touches[0]
      // 初始位置的Y坐标等于点击位置位于窗口的垂直坐标
      self.dragStart = event.clientY
      // 清除容器的动画
      self.container.style.webkitTransition = 'none'
    },
    touchMove (event) {
      var self = this
      if (self.refreshing) {
        return
      }
      // 如果没有获取到初始坐标
      if (self.dragStart === null) {
        return
      }

      // 获取移动过程中屏幕Y坐标变化的值
      var targetY = event.touches[0].clientY
      // 滑动的百分比值 = （初始Y坐标 - 实时Y坐标）/ 浏览器实际像素高
      self.percentage = (self.dragStart - targetY) / window.screen.height
      // translateY位移比例
      let translateY = -self.percentage * self.moveCount
      // 当下拉容器父元素scrolltop是0
      if (document.querySelector('.page').scrollTop === 0) {
        // 且是往下滚动时触发
        if (self.percentage < 0) {
          event.preventDefault()

          // 创建刷新标识
          self.joinRefreshFlag = true
          // 当下拉距离大于阈值时触发
          if (Math.abs(self.percentage) > self.dragThreshold) {
            this.state = 1
          } else {
            this.state = 0
          }
          // 下拉容器translateY位移
          self.container.style.webkitTransform = 'translate3d(0,' + translateY + 'px,0)'
          document.querySelector('.trans-rotate').style.webkitTransform = 'rotate(' + translateY + 'deg)'
        } else {
          self.joinRefreshFlag = false
        }
        // 拉倒底部继续上拉回弹效果，如果不用，删除此判断
      } else if (this.container.getBoundingClientRect().bottom <= window.innerHeight) {
        if (self.percentage > 0) {
          event.preventDefault()
          // 下拉容器-translateY位移
          self.container.style.webkitTransform = 'translate3d(0,' + translateY + 'px,0)'
        }
      } else {
        self.joinRefreshFlag = false
      }
    },
    touchEnd (event) {
      var self = this
      // 如果没有下拉动作
      if (self.percentage === 0) {
        return
      }
      if (self.refreshing) {
        return
      }
      // 如果下拉距离大于阈值时 且 刷新标识为true触发
      if (Math.abs(self.percentage) > self.dragThreshold && self.joinRefreshFlag) {
        // emit父元素方法
        this.$emit('pullRefresh')
        self.refreshing = true
        // 当前刷新状态
        this.state = 2
        // 容器当前样式：330毫秒位移至1.2rem位置处
        self.container.style.webkitTransition = '330ms'
        self.container.style.webkitTransform = 'translate3d(0,1.2rem,0)'
      } else {
        self.refreshing = false
        // 容器当前样式：330毫秒速度返回原位
        self.container.style.webkitTransition = '330ms'
        self.container.style.webkitTransform = 'translate3d(0,0,0)'
      }

      // 重置joinRefreshFlag
      self.joinRefreshFlag = null
      // 重置dragStart
      self.dragStart = null
      // 重置percentage
      self.percentage = 0
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
        this.refreshing = false
        this.state = 0
        this.container.style.webkitTransform = 'translate3d(0,0,0)'
      }.bind(this), 1000)
    },
    bindEvent () {
      var touchDom = this.container
      touchDom.addEventListener('touchstart', this.touchStart)
      touchDom.addEventListener('touchmove', this.touchMove)
      touchDom.addEventListener('touchend', this.touchEnd)
    }
  }
}
</script>
<style lang="less" >
// 当处理下拉，刷新中，刷新结果状态中，禁止页面滚动
.page-hidden {
  overflow: hidden !important;
}
.pull-down-content {
  position: relative;
  .refresh-state {
    position: absolute;
    width: 100%;
    height: 1.2rem;
    top: -1.2rem;
    .loading-pull {
      width: 64px;
      height: 64px;
      &.trans-rotate-none {
        transform: none !important;
        &.trans-refresh {
          img {
            animation: refresh 1s infinite linear;
          }
        }
      }
    }

    .pull-text {
      margin-left: 10px;
      font-size: 46px;
      color: #00a7f2;
    }
  }
}
@keyframes refresh {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
