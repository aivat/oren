import shopSecrets from '../../api/shopSecrets'

// initial state
const state = {
  all: [],
  lastIdSecret: 1,
  loading: false,
  error: false
}

// getters
const getters = {
  allSecrets: state => state.all,
  lastIdSecret: state => state.lastIdSecret,
  secretLoading: state => state.loading,
  secretError: state => state.error
}

// actions
const actions = {
  // getAllSecrets ({ commit }) {
  //   shopSecrets.getSecrets(secrets => {
  //     commit('setSecrets', secrets)
  //   })
  // },
  
  getSecrets ({ commit, state }, lastSecret) {
    commit('setLoading', true);
    shopSecrets.getSecrets(lastSecret, secrets => {
      commit('setSecrets', secrets);
      commit('setLoading', false);
    }) 
    commit('setLastSecret', lastSecret+6)
  }
}

// mutations
const mutations = {
  setSecrets (state, secrets) {
    state.all = state.all.concat(secrets);
  },
  setLastSecret (state, lastSecret) {
    state.lastIdSecret = lastSecret;
  },
  setLoading (state, loading) {
    state.loading = loading;
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