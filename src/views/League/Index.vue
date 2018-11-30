<template>
  <div class="page">
    <div class="lottery">
      <div class="paw"></div>
    </div>
    <div class="btn" @click="startLottery">抽奖</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isStart: false
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    startLottery () {
      if (this.isStart) return
      this.isStart = true
      var pawEl = document.querySelector('.paw')
      pawEl.classList.remove('up-active')
      pawEl.classList.add('down-active')
      document.querySelector('.down-active').addEventListener('transitionend', () => {
        pawEl.classList.add('up-active')
        pawEl.classList.remove('down-active')
        document.querySelector('.up-active').addEventListener('transitionend', () => {
          pawEl.classList.remove('up-active')
          this.isStart = false
          this.removeTransition()
        })
      })
    },
    removeTransition () {
      var pawEl = document.querySelector('.paw')
      pawEl.removeEventListener('transitionend')
    }

  }
}
</script>

<style lang="less" scoped>
.lottery {
  width: 800px;
  height: 800px;
  margin: auto;
  border: solid 1px #f00;
  border-radius: 25px;
  .paw {
    width: 30px;
    height: 200px;
    background: blue;
    &.down-active {
      height: 600px;
      transition: height 2s;
    }
    &.up-active {
      height: 200px;
      transition: height 2s;
    }
  }
}
</style>
