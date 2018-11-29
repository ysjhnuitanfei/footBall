<template>
  <div class="page scroll">
    <div class="content">
    <div class="suspend">
      <div style="background:#00a7f2; height: 50%"></div>
      <div style="background:yellow; height: 50%"></div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  mounted () {
    document.querySelector('.scroll').addEventListener('scroll', () => {
      this.bindScroll()
    })
  },
  methods: {
    bindScroll () {
      var boxClientH = document.querySelector('.scroll').clientHeight
      var scrollDom = document.querySelector('.suspend').getBoundingClientRect().bottom
      var elHeight = document.querySelector('.suspend').scrollHeight
      // 内容距离底部超过本身一半
      var elAnimateTop = (scrollDom - boxClientH - elHeight) + elHeight / 2
      // 内容距离顶部小于本身一半
      var elAnimateBottom = scrollDom - elHeight / 2
      // 如果往上滑，内容距离底部超过本身一半，则触发
      if (elAnimateTop <= 0 && elAnimateBottom >= 0) {
        console.log('111')
      }
    }
  }
}
</script>

<style scoped>
.content {
  height: 5000px;
}
.suspend {
  margin: 2000px auto 0;
  width: 300px;
  height: 400px;
  background: #f00;
}
</style>
