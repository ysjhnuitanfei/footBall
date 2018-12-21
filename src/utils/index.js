import fetch from './fetch'
import toast from './toast'
import store from '../store'

function showLoading () {
  store.commit('loadingStatus', {
    isLoading: true
  })
}

function hiddenLoading () {
  store.commit('loadingStatus', {
    isLoading: false
  })
}

export default {
  fetch,
  toast,
  showLoading,
  hiddenLoading
}
