<template>
  <keep-alive>
    <div class="page clearfix">
      <PullRefresh ref="PullRefresh" @pullRefresh="refresh" :isSuccess="isSuccess">
        <div class="home-page clearfix">
          <LoadMore ref="LoadMore" @loadMore="loadMore">
            <headerNav v-if="bannerList" :bannerList="bannerList"></headerNav>
            <splendId v-if="hot" :hot="hot"></splendId>
            <information v-if="information.length > 0" :information="information"></information>
            <reply v-if="replyList.length > 0" :replyList="replyList"></reply>
          </LoadMore>
        </div>
      </PullRefresh>
    </div>
  </keep-alive>
</template>
<script>
import API from '@/api'
import PullRefresh from '@/public/PullRefresh/Index.vue'
import LoadMore from '@/public/LoadMore/Index.vue'
import headerNav from './components/headerNav'
import splendId from './components/splendId'
import information from './components/information'
import reply from './components/reply'

export default {
  name: '',
  components: {
    PullRefresh,
    LoadMore,
    headerNav,
    splendId,
    information,
    reply
  },
  data () {
    return {
      bannerList: null,
      hot: null,
      information: [],
      defaultPage: false,
      isSuccess: false,
      replyList: [],
      pageIndex: -1,
      isRefreshing: false
    }
  },
  created () {
    this.getBanner()
  },
  methods: {
    refresh () {
      this.isRefreshing = true // 正在刷新中
      this.pageIndex = -1
      if (this.$refs.LoadMore.finish) {
        this.$refs.LoadMore.finish = false
      }
      this.getBanner()
      this.getReply()
    },
    loadMore () {
      this.getReply()
    },
    // 获取赛事信息
    async getBanner () {
      await API.home.getBanner({
        noLoading: true,
        acceptError: true
      }).then((result) => {
        if (result.code == 0) {
          this.isSuccess = true
          this.bannerList = result.data.banner
          this.hot = result.data.hot
          this.information = result.data.information
        }
      }).catch((error) => {
        this.isSuccess = false
        console.log(error)
        this.defaultPage = true
      })
      this.$refs.PullRefresh.finishLoad()
    },
    // 获取动态
    async getReply () {
      this.pageIndex++
      var result = await API.home.getReply({
        noLoading: true,
        acceptError: true,
        page: this.pageIndex
      })
      if (result.code == 0) {
        if (this.isRefreshing) this.replyList = []
        var news = result.data.news
        news = news.splice(this.pageIndex * 5, 5)
        this.replyList = this.replyList.concat(news)
        if (this.replyList) {
          this.replyList.forEach(item => {
            if (item && item.imgArr && item.imgArr.length > 3) {
              item.count = item.imgArr.length
              item.imgArr = item.imgArr.splice(0, 3)
            }
          })
        }
        if (news.length < 5) {
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
      this.isRefreshing = false
    }
  },
  mounted () {
    this.getReply()
  }
}
</script>
<style lang="less" scoped>
.page {
}
</style>
