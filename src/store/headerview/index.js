const headerview = {
  state: {
    isLogin: false,
    // 全局头部配置
    showHeader: true,
    title: '',
    preBtn: false
  },
  actions: {

  },
  mutations: {
    // 头部状态方法&状态设置
    setHeader (state, headerinfo) {
      if (headerinfo && headerinfo.showHeader) {
        state.showHeader = headerinfo.showHeader
      } else {
        state.showHeader = false
      }
      if (headerinfo && headerinfo.title) {
        state.title = headerinfo.title
      }
      if (headerinfo && headerinfo.preBtn) {
        state.preBtn = headerinfo.preBtn
      } else {
        state.preBtn = false
      }
    },
    login (state) {
      state.isLogin = true
    }
  }
}
export default headerview
