<template>
  <div class='infor-content clearfix'>
    <!-- 公共标题 -->
    <div class="splend-title clearfix">
      <div class="text">精彩资讯</div>
      <div class="more" @click="golottery">更多</div>
    </div>
    <!-- 内容部分 -->
    <div class="infor-info-content" v-if="information.length > 0">
      <div class="infor-item" v-for="(item, index) in information" :key="index">
        <img class="infor-cover" v-lazy="item.cover">
        <div class="infor-info">
          <div class="infor-title ellipsis-line-2">{{ item.title }}</div>
          <div class="infor-source">
            <span>{{ item.source }}</span>
            <div class="read">{{ item.read }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="default-page" v-if="isReply">
      <img src="@/assets/images/icon/default.png">
      <span>暂无内容！</span>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['information'],
  components: {
  },
  data () {
    return {
      isReply: false
    }
  },
  mounted () {
  },
  methods: {
    golottery () {
      this.$router.push({ path: '/lottery' })
    }
  },
  watch: {
    information (val) {
      if (val.length < 1) {
        this.isReply = true
      } else {
        this.isReply = false
      }
    }
  }
}
</script>
<style lang="less" scoped>
.infor-content {
  margin-top: 30px;
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

  .infor-info-content {
    .infor-item {
      display: flex;
      padding: 20px 0;
      border-bottom: solid 1px #e0e0e0;
      .infor-cover {
        width: 340px;
        height: 220px;
        border-radius: 10px;
        background: #f0f0f0;
      }
      .infor-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20px;
        .infor-title {
          text-align: justify;
          font-size: 46px;
          line-height: 60px;
          color: #333;
        }
        .infor-source {
          position: relative;
          line-height: 40px;
          font-size: 34px;
          color: #666;
          span {
            padding-right: 100px;
          }
          .read {
            position: absolute;
            right: 0;
            top: 0;
            padding-left: 40px;
            height: 100%;
            background: url("~@/assets/images/icon/look.png") no-repeat left
              center;
            background-size: 34px 34px;
          }
        }
      }
    }
  }

  .default-page {
    padding: 50px 0;
    text-align: center;
    img {
      margin: auto;
      width: 300px;
    }
    span {
      display: inline-block;
      width: 100%;
      font-size: 34px;
      color: #999;
    }
  }
}
</style>
