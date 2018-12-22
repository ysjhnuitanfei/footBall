<template>
  <div class="page clearfix">
    <div class="team">
      <div class="refresh">刷新中</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      container: null,
      dragStart: null
    }
  },
  created () {

  },
  mounted () {
    this.container = document.querySelector('.team')
    this.rebox = document.querySelector('.refresh')

    this.container.addEventListener('touchstart', this.touchStart)
    this.container.addEventListener('touchmove', this.touchMove)
    this.container.addEventListener('touchend', this.touchEnd)
  },
  methods: {
    touchStart (event) {
      event = event.touches[0]
      this.dragStart = event.clientY
      console.log(this.dragStart)
    },
    touchMove (event) {
      // 如果没有获取到初始坐标
      if (this.dragStart === null) {
        return
      }
      // 获取移动过程中屏幕Y坐标变化的值
      var targetY = event.touches[0].clientY
      // 滑动的百分比值 = （初始Y坐标 - 实时Y坐标）/ 浏览器实际像素高
      this.percentage = Number((this.dragStart - targetY) / window.screen.height)
      let translateY = -this.percentage * 300

      if (this.percentage < 0) {
        event.preventDefault()

        // 创建刷新标识
        // 当下拉距离大于阈值时触发
        if (Math.abs(this.percentage) > 0.8) {
          this.state = 1
        } else {
          this.state = 0
        }
        // 下拉容器translateY位移
        this.rebox.style.webkitTransform = 'translate3d(0,' + translateY + 'px,0)'
      }
    },
    touchEnd () {
      this.rebox.style.webkitTransition = '330ms'
      this.rebox.style.webkitTransform = 'translate3d(0,2.2rem,0)'
      setTimeout(() => {
        this.rebox.style.webkitTransition = '330ms'
        this.rebox.style.webkitTransform = 'translate3d(0,0,0)'
      }, 1000)
      self.percentage = 0
    }
  }
}
</script>

<style lang="less" scoped>
.team {
  position: relative;
  height: 400px;
  background: #f00;
  .refresh {
    position: absolute;
    width: 100%;
    top: -100px;
    text-align: center;
  }
}
</style>
