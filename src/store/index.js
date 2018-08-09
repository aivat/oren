import Vue from 'vue'
import Vuex from 'vuex'
//import cart from './modules/cart'
import secrets from './modules/secrets'
import news from './modules/news'
import range from './modules/range'
import rangeLocal from './plugins/rangeLocal'
import switchAge from './modules/switchAge'
import openMenu from './modules/openMenu'
import instorens from './modules/instorens'
import login from './modules/login'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    secrets,
    range,
    openMenu,
    news,
    switchAge,
    instorens,
    login
  },
  strict: debug
  // plugins: [rangeLocal],
  // mutations: {
  //   initialiseStore(state) {
  //     console.log(JSON.parse(localStorage.getItem('store')))
  //     if(localStorage.getItem('store')) { 
  //       this.replaceState(
  //         Object.assign(state, JSON.parse(localStorage.getItem('store')))
  //       );
  //     }
  //   }
  // }

  //plugins: debug ? [createLogger()] : []
})