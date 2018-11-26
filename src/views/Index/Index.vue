<template>
  <keep-alive>
    <div class="page clearfix">
      <headerNav></headerNav>
      <splendId></splendId>
    </div>
  </keep-alive>
</template>
<script>
import headerNav from './components/headerNav'
import splendId from './components/splendId'

export default {
  name: '',
  components: {
    headerNav,
    splendId
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {

  }
}
</script>
<style lang="less" scoped>
.page {
}
</style>
