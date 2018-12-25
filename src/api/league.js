import fetch from '@/utils/fetch'

export default {
  // 获取赛事列表
  getLeague (params) {
    return fetch({
      url: '/static/data/league.json',
      method: 'get',
      params
    })
  }
}
