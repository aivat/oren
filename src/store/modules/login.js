const state = {
    showModalLogin: false
}

const actions = {
  setModalLogin ({ commit }) {
      commit('setModalLogin')
  }
}

const mutations = {
    setModalLogin(state, secrets) {
        state.showModalLogin = !state.showModalLogin
        console.log('state.showModalLogin', state.showModalLogin)
        state.showModalLogin == true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  }
}

export default {
  state,
  actions,
  mutations
}