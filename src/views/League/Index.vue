<template>
  <div class="page clearfix">
    <div class="league">
      <LoadMore ref="LoadMore" @loadMore="loadMore">
        <div class="league-item clearfix" v-for="(item, index) in leagueList" :key="index">
          <div class="le-logo">
            <img v-lazy="item.cover" class="le-cover">
            <div class="le-heat">{{ item.heat }}</div>
          </div>
          <div class="league-info">
            <div class="league-title">
              <span :class="['le-label', item.state == 0 ? 'le-label-0' : item.state == 1 ? 'le-label-1' : 'le-label-2']">{{ item.state == 0 ? '报名中' : item.state == 1 ? '进行中' : '已结束' }}</span>
              <span class="le-title ellipsis">{{ item.title }}</span>
            </div>
            <div class="le-info">
              <div class="le-l">{{ item.address }} {{ item.people }} {{ item.type }}</div>
              <div class="le-r" v-if="item.day">距离比赛{{ item.state == 0 ? '开始' : item.state == 1 ? '结束' : '' }}还有{{ item.day }}天</div>
            </div>
          </div>
        </div>
      </LoadMore>
    </div>
  </div>
</template>

<script>
import API from '@/api'
import LoadMore from '@/public/LoadMore/Index.vue'
export default {
  components: {
    LoadMore
  },
  data () {
    return {
      leagueList: null,
      pageIndex: -1
    }
  },
  created () {
    this.getLeagueInfo()
  },
  mounted () {
  },
  methods: {
    loadMore () {
      this.getLeagueInfo()
    },
    async getLeagueInfo () {
      this.pageIndex++
      var result = await API.league.getLeague({
        noLoading: true,
        acceptError: true,
        page: this.pageIndex
      })
      if (result.code == 0) {
        var leagueList = result.data.list
        leagueList = leagueList.splice(this.pageIndex * 5, 5)
        this.leagueList = leagueList
        if (leagueList.length < 5) {
          if (this.$refs.LoadMore) {
            this.$refs.LoadMore.finish = true
          }
        }
      }
      if (this.$refs.LoadMore) {
        this.$refs.LoadMore.loading = false
      }
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  .league {
    .league-item {
      padding: 20px;
      background: #fff;
      &:not(:first-of-type) {
        margin-top: 20px;
      }
      .le-logo {
        position: relative;
        height: 500px;
        .le-cover {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 20px;
        }
        .le-heat {
          position: absolute;
          right: 10px;
          bottom: 10px;
          padding: 2px 10px 2px 40px;
          color: #fff;
          font-size: 32px;
          background: rgba(0, 0, 0, .5) url('~@/assets/images/icon/heat.png') no-repeat 5px center;
          background-size: 34px 34px;
          border-radius: 10px;
        }
      }

      .league-info {
        margin-top: 10px;
        .league-title {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          .le-label {
            padding: 2px 10px;
            line-height: 46px;
            font-size: 34px;
            color: #fff;
            background: #41a1f5;
            border-radius: 10px;
            &.le-label-0 {
             background: #41a1f5;
            }
            &.le-label-1 {
             background: chocolate;
            }
            &.le-label-2 {
              background: #999;
            }
          }
          .le-title {
            margin-left: 10px;
            flex: 1;
            line-height: 80px;
            font-size: 46px;
            color: #333;
          }
        }
        .le-info {
          position: relative;
          line-height: 40px;
          font-size: 34px;
          color: #666;
          .le-l {
            overflow: hidden;
          }
          .le-r {
            position: absolute;
            top: 0;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
