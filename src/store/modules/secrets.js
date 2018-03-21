import shopSecrets from '../../api/shopSecrets'

// initial state
const state = {
  all: [],
  lastIdSecret: 1
}

// getters
const getters = {
  allSecrets: state => state.all,
  lastIdSecret: state => state.lastIdSecret
}

// actions
const actions = {
  getAllSecrets ({ commit }) {
    shopSecrets.getSecrets(secrets => {
      commit('setSecrets', secrets)
    })
  },
  getSecrets ({ commit, state }, lastSecret) {
    shopSecrets.getAllSecrets(lastSecret, secrets => {
      commit('setSecrets', secrets)
    }) 
    commit('setLastSecret', lastSecret+10)
  }
}

// mutations
const mutations = {
  setSecrets (state, secrets) {
    state.all = state.all.concat(secrets);
  },
  setLastSecret (state, lastSecret) {
    state.lastIdSecret = lastSecret;
  } 

//  decrementSecretInventory (state, { id }) {
//    const secret = state.all.find(secret => secret.id === id)
//    secret.inventory--
//  }
}

export default {
  state,
  getters,
  actions,
  mutations
}