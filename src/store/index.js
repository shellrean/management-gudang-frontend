import Vue from 'vue'
import Vuex from 'vuex'

import barang from './barang.store'
import pengirim from './pengirim.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    barang,
    pengirim
  }
})
