<template>
  <div class='reply clearfix'>
    <!-- 公共标题 -->
    <div class="splend-title clearfix">
      <div class="text">精彩动态</div>
      <div class="more">更多</div>
    </div>
    <div class="reply-content clearfix" v-if="replyList.length > 0">
      <!-- <LoadMore ref="LoadMore" @loadMore="loadMore"> -->
      <div class="reply-item" v-for="(item, index) in replyList" :key="index">
        <div class="reply-title ellipsis-line-2" v-if="item.title">{{ item.title }}</div>
        <div :class="['reply-img', item.imgArr.length > 1 ? 'reply-imgs' : '']" v-if="item.imgArr">
          <img
            :class="[item.imgArr.length == 1 ? 'reply-img-1': [item.imgArr.length == 2 ? 'reply-img-2':'reply-img-3']]"
            v-for="(img, size) in item.imgArr" :key="size" v-lazy="img">
          <div class="reply-count" v-if="item.count">{{ item.count }}图</div>
        </div>
        <div class="reply-source">
          <span>{{ item.userName }}</span>
          <div class="read">{{ item.read }}</div>
        </div>
      </div>
      <!-- </LoadMore> -->
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
  props: ['replyList'],
  components: {
  },
  data () {
    return {
      isReply: false
    }
  },
  mounted () {
    // this.getReply()
  },
  methods: {

  },
  watch: {
    replyList (val) {
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
.reply {
  margin-top: 30px;
  padding: 0 40px;
  background: #fff;
  // 公共标题
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

  .reply-item {
    padding: 40px 0;
    border-bottom: solid 1px #e0e0e0;
    .reply-title {
      text-align: justify;
      line-height: 60px;
      font-size: 46px;
      color: #333;
    }
    .reply-img {
      position: relative;
      display: flex;
      justify-content: flex-start;
      margin-top: 10px;
      &.reply-imgs {
        justify-content: space-between;
      }
      img {
        margin-left: 15px;
        width: 320px;
        height: 220px;
        object-fit: cover;
        border-radius: 10px;
        background: #f0f0f0;
        &.reply-img-1 {
          width: 100%;
          height: 400px;
        }
        &.reply-img-2 {
          margin-left: 0;
          width: 490px;
          height: 300px;
        }
        &.reply-img-3 {
          margin-left: 0;
          width: 320;
          height: 300px;
        }
        &:first-of-type {
          margin-left: 0;
        }
      }
      .reply-count {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0 15px;
        text-align: center;
        line-height: 44px;
        font-size: 32px;
        color: #fff;
        background: #41a1f5;
        border-radius: 0 0 10px 0;
      }
    }
    .reply-source {
      position: relative;
      margin-top: 20px;
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
        background: url("~@/assets/images/icon/look.png") no-repeat left center;
        background-size: 34px 34px;
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
