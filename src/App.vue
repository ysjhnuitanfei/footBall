<template>
  <div id="app" class="content">
    <headerview :showHeader="showHeader" :title="title" :preBtn="preBtn" :menu="menu" :goIndex="goIndex" :refesh="refesh"></headerview>
    <div class="page-content">
      <Loading :isLoading="isLoading"></Loading>
      <Error :error="error"></Error>
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
    <Footer :showFooter="showFooter"></Footer>
  </div>
</template>

<script>
import Headerview from '@/public/HeaderView/Index.vue'
import Footer from '@/public/Footer/Index.vue'
import Loading from '@/public/Loading/Index.vue'
import Error from '@/public/Error/Index.vue'
import { mapState } from 'vuex'

export default {
  name: 'App',
  components: {
    Headerview,
    Footer,
    Loading,
    Error
  },
  computed: {
    ...mapState({
      isLoading: state => state.loading.isLoading,
      showHeader: state => state.headerview.showHeader,
      showFooter: state => state.footer.showFooter,
      title: state => state.headerview.title,
      preBtn: state => state.headerview.preBtn,
      menu: state => state.headerview.menu,
      goIndex: state => state.headerview.goIndex,
      refesh: state => state.headerview.refesh,
      error: state => state.error
    })
  },
  mounted () {
  }
}
</script>

<style lang="less">
// 引入全局css
@import "./app.less";
</style>
