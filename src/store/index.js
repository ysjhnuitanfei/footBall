import Vue from 'vue'
import Vuex from 'vuex'

import headerview from './headerview'
import footer from './footer'
import loading from './loading'
import error from './error'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    headerview,
    footer,
    loading,
    error
  }
})
