import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutatons'
import actions from './actions'
import modules from './modules'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shopData: []
  },
  mutations,
  actions,
  modules,
  getters
})
