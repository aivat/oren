import  axios from 'axios'

const state = {
  instorens: [],
  lastIdInstoren: 0,
  loading: false,
  error: false
}

const getters = {
  instorens: state => state.instorens,
  lastIdInstoren: state => state.lastIdInstoren,
  instoryLoading: state => state.loading,
  instoryError: state => state.error
}

const actions = {
  getInstorens ({ commit, state, rootState }, lastIdInstoren) {

    // const url = 'http://lba.ru/api/v1/secrets/10?lastSecrets=' + lastIdInstoren + '&rating=' + rootState.range.secrets

    // axios.get(url)
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvb3JlbmJ1cmcub25saW5lIiwiZXhwIjoxNTQ0MTc2MzUzLCJsb2dpbiI6ImFpdmF0IiwiaWRfdXNlciI6MX0.cA2jx7RaPHNZPoTdxyqaqZ3_AOPIdoGWD8jXCbx87Ok'
    axios.defaults.headers.common['Authorization'] = token
    axios.post('http://lba.ru/api/v1/secrets/1102/like', {
      like: 1
    })
    // const url = 'http://lba.ru/api/v1/secrets?lastSecrets=0'
    // axios.get(url)
    .then(response =>{
        let newResponse = response.data
        console.log(newResponse)
        commit('setLoading', false)
        commit('setInstorens', newResponse)
        commit('setLastIdInstoren', newResponse[newResponse.length-1].id)
        console.log('response=', newResponse.length)
        // console.log('response[].id', newResponse[newResponse.length-1].id)
    })
    .catch(e => {
        console.log(e.message)
        commit('setLoading', false)
    });
  }
}

// mutations
const mutations = {
  setInstorens(state, instorens) {
    state.instorens = state.instorens.concat(instorens);
  },
  setLastIdInstoren(state, idInstorens) {
    state.lastIdInstoren = idInstorens;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  resetInstorens(state) {
    state.instorens = []
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