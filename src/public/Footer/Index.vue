<template>
  <div class="footer-content" v-if="showFooter">
    <div :class="['menu-item', menuPage=='index'?'active':'']" @click.stop="goHome">
      <img v-if="menuPage=='index'" class="item-icon" src="~@/assets/images/footer/home-active.png">
      <img v-else class="item-icon" src="~@/assets/images/footer/home.png">
      <div class="item-name">首页</div>
    </div>
    <div :class="['menu-item', menuPage=='league'?'active':'']" @click.stop="goLeague">
      <img v-if="menuPage=='league'" class="item-icon" src="~@/assets/images/footer/league-active.png">
      <img v-else class="item-icon" src="~@/assets/images/footer/league.png">
      <div class="item-name">赛事</div>
    </div>
    <div :class="['menu-item', menuPage=='team'?'active':'']" @click.stop="goTeam">
      <img v-if="menuPage=='team'" class="item-icon" src="~@/assets/images/footer/team-active.png">
      <img v-else class="item-icon" src="~@/assets/images/footer/team.png">
      <div class="item-name">球队</div>
    </div>
    <div :class="['menu-item', menuPage=='user'?'active':'']" @click.stop="goUser">
      <img v-if="menuPage=='user'" class="item-icon" src="~@/assets/images/footer/user-active.png">
      <img v-else class="item-icon" src="~@/assets/images/footer/user.png">
      <div class="item-name">我</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showFooter'],
  data () {
    return {
      menuPage: null
    }
  },
  created () {
    this.menuPage = this.$router.currentRoute.name
  },
  mounted () {

  },
  methods: {
    goHome () {
      this.$router.replace({ path: '/index' })
    },
    goLeague () {
      this.$router.replace({ path: '/league' })
    },
    goTeam () {
      this.$router.replace({ path: '/team' })
    },
    goUser () {
      this.$router.replace({ path: '/user' })
    }
  },
  watch: {
    $route (router) {
      this.menuPage = router.name
    }
  }
}
</script>

<style lang="less" scoped>
.footer-content {
  position: relative;
  width: 100%;
  height: 140px;
  border-top: solid 1px #999;
  font-size: 0;
  text-align: center;
  z-index: 99999;
  .menu-item {
    width: 25%;
    float: left;
    height: 100%;
    .item-icon {
      margin-top: 20px;
      width: 64px;
      height: 64px;
    }
    .item-name {
      line-height: 50px;
      font-size: 32px;
      color: #999;
    }
    &.active {
      .item-name {
        color: #41a1f5;
      }
    }
  }
}
</style>
