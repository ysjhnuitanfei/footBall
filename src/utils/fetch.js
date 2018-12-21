import axios from 'axios'
import Utils from '../utils'
import store from '../store'

const service = axios.create({
  baseURL: process.env.API_HOST, // api的base_url
  timeout: 10000 // 请求超时时间
  // transformRequest: data => qs.stringify(data)
})
// request拦截器
service.interceptors.request.use(
  config => {
    this.acceptError = config.params.acceptError
    // if (store.getters.token) {
    //   config.headers['X-Token'] = store.getters.token;
    // }
    if (!config.params) {
      config.params = config.params || {}
    }
    config.autoCloseLoading = config.params.loading

    // 开启loading
    if (config.params.loading) {
      Utils.showLoading()
    }
    delete config.params.loading
    if (config.params.acceptError) {
      config.acceptError = true
      delete config.params.acceptError
    }
    if ((config.method + '').toLocaleLowerCase() === 'post') {
      // config.data = qs.stringify(config.params);
      config.data = config.params
      config.params = {}
    }
    // set 默认值
    return config
  },
  error => ({
    status: 0,
    msg: error.message
  })
)
// respone拦截器
service.interceptors.response.use(
  response => {
    if (response.config.autoCloseLoading) {
      // 关闭loading
      store.commit('loadingStatus', {
        isLoading: false
      })
    }

    const result = response.data
    if (response.status === 200) {
      return result
    }
    return result
  },
  error => {
    // 如果断网
    if (!window.navigator.onLine) {
      error.message = '网络异常，请检查网络设置'
      store.commit('setError', {
        msg: error.message,
        show: true
      })
    }
    if (this.acceptError) {
      Utils.hiddenLoading()
      return Promise.resolve({
        code: 'ERROR',
        msg: error.message
      })
    } else {
      console.log('错误信息：' + error)
      if (error.message == 'Network Error') {
        error.message = '页面加载异常，请检查您的网络情况'
      }
      store.commit('setError', {
        msg: error.message,
        show: true
      })
      return Promise.reject(error)
    }
  }
)

export default service
