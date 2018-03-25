import Vue from 'vue'
import Vuex from 'vuex'
//import cart from './modules/cart'
import secrets from './modules/secrets'
import range from './modules/range'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    secrets,
    range
  },
  strict: debug
  //plugins: debug ? [createLogger()] : []
})