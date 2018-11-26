<template>
  <div class="splend">
    <div class="splend-title clearfix">
      <div class="text">精彩赛事</div>
      <div class="more">更多</div>
    </div>
    <div class="splend-item" v-for="(item, index) in list" :key="index">
      <img class="splend-league-bg" :src="item.imgUrl">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          imgUrl: require('@/assets/images/home/league1.png')
        },
        {
          imgUrl: require('@/assets/images/home/league2.png')
        }
      ]
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
        top: 10px;
        width: 10px;
        height: 60px;
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
      background: #41a1f5;
      border-radius: 0;
    }
  }

  .splend-item {
    margin-top: 10px;
    .splend-league-bg {
      display: block;
      width: 1000px;
    }
  }
}
</style>
