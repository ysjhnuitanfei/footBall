<template>
  <keep-alive>
    <div class="page clearfix">
      <div class="home-page clearfix">
        <headerNav v-if="bannerList" :bannerList="bannerList"></headerNav>
        <splendId v-if="hot" :hot="hot"></splendId>
        <information v-if="information" :information="information"></information>
        <reply></reply>
      </div>
    </div>
  </keep-alive>
</template>
<script>
import API from '@/api'
import headerNav from './components/headerNav'
import splendId from './components/splendId'
import information from './components/information'
import reply from './components/reply'

export default {
  name: '',
  components: {
    headerNav,
    splendId,
    information,
    reply
  },
  data () {
    return {
      bannerList: null,
      hot: null,
      information: null,
      defaultPage: false
    }
  },
  created () {
    this.getBanner()
  },
  methods: {
    async getBanner () {
      await API.home.getBanner({
        noLoading: true,
        acceptError: true
      }).then((result) => {
        if (result.code == 0) {
          this.bannerList = result.data.banner
          this.hot = result.data.hot
          this.information = result.data.information
        }
      }).catch((error) => {
        console.log(error)
        this.defaultPage = true
      })
    }
  },
  mounted () {

  }
}
</script>
<style lang="less" scoped>
.page {
}
</style>
