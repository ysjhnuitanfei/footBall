// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/'

import VueLazyLoad from 'vue-lazyload'

// 以插件形式引入toast组件
import {ToastPlugin} from 'vux'

Vue.use(ToastPlugin)
Vue.use(VueResource)
Vue.use(VueLazyLoad, {
  error: './static/errorimg.png',
  loading: './static/loading.gif'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
const FastClick = require('fastclick')
FastClick.attach(document.body)
