<template>
  <div class='reply clearfix'>
    <!-- 公共标题 -->
    <div class="splend-title clearfix">
      <div class="text">精彩动态</div>
      <div class="more">更多</div>
    </div>
    <div class="reply-content clearfix" v-if="replyList.length > 0">
      <LoadMore ref="LoadMore" @loadMore="loadMore">
        <div class="reply-item" v-for="(item, index) in replyList" :key="index">
          <div class="reply-title ellipsis-line-2">{{ item.title }}</div>
          <div :class="['reply-img', item.imgArr.length > 1 ? 'reply-imgs' : '']" v-if="item.imgArr">
            <img :class="[item.imgArr.length == 1 ? 'reply-img-1': [item.imgArr.length == 2 ? 'reply-img-2':'reply-img-3']]" v-for="(img, size) in item.imgArr" :key="size" v-lazy="img">
            <div class="reply-count" v-if="item.count">{{ item.count }}图</div>
          </div>
          <div class="reply-source">
            <span>{{ item.userName }}</span>
            <div class="read">{{ item.read }}</div>
          </div>
        </div>
      </LoadMore>
    </div>
    <div v-else>暂无动态！</div>
  </div>
</template>
<script>
import API from '@/api'
import LoadMore from '@/public/LoadMore/Index.vue'
export default {
  name: '',
  components: {
    LoadMore
  },
  data () {
    return {
      replyList: [],
      pageIndex: -1
    }
  },
  mounted () {
    this.getReply()
  },
  methods: {
    loadMore () {
      this.getReply()
    },
    async getReply () {
      this.pageIndex++
      var result = await API.home.getReply({
        noLoading: true,
        acceptError: true,
        page: this.pageIndex
      })
      if (result.code == 0) {
        var news = result.data.news
        news = news.splice(this.pageIndex * 10, 10)
        this.replyList = this.replyList.concat(news)
        if (this.replyList) {
          this.replyList.forEach(item => {
            if (item && item.imgArr && item.imgArr.length > 3) {
              item.count = item.imgArr.length
              item.imgArr = item.imgArr.splice(0, 3)
            }
          })
        }
        if (news.length < 10) {
          if (this.$refs.LoadMore) {
            this.$refs.LoadMore.finish = true
          }
        }
      } else {
        console.log('error')
      }

      if (this.$refs.LoadMore) {
        this.$refs.LoadMore.loading = false
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
          height: 300px;
        }
        &.reply-img-2 {
          width: 490px;
          height: 260px;
        }
        &.reply-img-3 {
          width: 320;
          height: 240px;
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
        background: url('~@/assets/images/icon/look.png') no-repeat left center;
        background-size: 34px 34px;
      }
    }
  }
}
</style>
