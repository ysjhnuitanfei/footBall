import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/'

Vue.use(Router)
const Index = resolve => require(['@/views/Index/Index'], resolve)
const League = resolve => require(['@/views/League/Index'], resolve)
const Team = resolve => require(['@/views/Team/Index'], resolve)
const User = resolve => require(['@/views/User/Index'], resolve)

const Lottery = resolve => require(['@/views/Lottery/Index'], resolve)

let router = new Router({
  routes: [{
    path: '/',
    redirect: 'index',
    component: Index,
    name: '',
    children: [{
      path: '/index',
      component: Index,
      name: 'index',
      meta: {
        title: '球迷宝',
        showHeader: false,
        showFooter: true,
        keepAlive: true
      }
    }]
  },
  {
    path: '/league',
    component: League,
    name: 'league',
    meta: {
      title: '赛事',
      showHeader: false,
      showFooter: true
    }
  },
  {
    path: '/team',
    component: Team,
    name: 'team',
    meta: {
      title: '球队',
      showHeader: false,
      showFooter: true
    }
  },
  {
    path: '/user',
    component: User,
    name: 'user',
    meta: {
      title: '我的信息',
      showHeader: false,
      showFooter: true
    }
  },
  {
    path: '/lottery',
    component: Lottery,
    name: 'lottery',
    meta: {
      title: '抽奖',
      showHeader: true,
      showFooter: false
    }
  }
  ]
})

router.beforeEach(function (to, from, next) {
  // if (to.path) {
  //   window._hmt.push(['_trackPageview', '/#' + to.fullPath])
  // }
  if (!window.navigator.onLine) {
    // 网络断开
    store.commit('setError', {
      msg: '网络异常，请检查网络设置',
      show: true
    })
    window.location.hash = '#' + to.fullPath
    return
  } else {
    store.commit('loadingStatus', {
      isLoading: true,
      immediately: true
    })
  }

  let meta = (to && to.meta) || {}
  let title = meta.title || '首页'
  let showHeader = meta.showHeader
  let showFooter = meta.showFooter
  // 如果没有定义showheader，默认返回true
  if (meta && meta.showHeader == undefined) {
    showHeader = true
  }
  // 如果没有定义showFooter，默认返回false
  if (meta && meta.showFooter == undefined) {
    showFooter = false
  }
  // 如果没有定义返回按钮，默认返回true
  let preBtn = meta.preBtn
  if (meta && meta.preBtn == undefined) {
    preBtn = true
  }
  store.commit('setHeader', {
    title: title,
    showHeader: showHeader,
    preBtn: preBtn,
    menu: meta.menu,
    goIndex: meta.goIndex,
    refesh: meta.goIndex
  })
  store.commit('setFooter', {
    showFooter: showFooter
  })

  next()
})

router.afterEach(function (transition) {
  if (transition.matched.length === 0) {
    store.commit('loadingStatus', {
      isLoading: false
    })
    // 页面地址不存在，显示错误页
    store.commit('setError', {
      msg: '页面走丢了！',
      show: true
    })
    return
  } else {
    // 页面存在，关闭错误页
    store.commit('setError', {
      msg: '',
      show: false
    })
  }
  store.commit('loadingStatus', {
    isLoading: false
  })
  document.title = transition.meta.title || ''
})
export default router
