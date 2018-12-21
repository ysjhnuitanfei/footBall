import fetch from '@/utils/fetch'

export default {
  // 获取首页赛事信息，资讯
  getBanner (params) {
    return fetch({
      url: '/static/data/home.do',
      method: 'get',
      params
    })
  },
  // 获取动态
  getReply (params) {
    return fetch({
      url: '/static/data/reply.do',
      method: 'get',
      params
    })
  }
}
