const footer = {
  state: {
    showFooter: false
  },
  actions: {

  },
  mutations: {
    // 头部状态方法&状态设置
    setFooter (state, footerStatus) {
      if (footerStatus && footerStatus.showFooter) {
        state.showFooter = footerStatus.showFooter
      } else {
        state.showFooter = false
      }
    }
  }
}
export default footer
