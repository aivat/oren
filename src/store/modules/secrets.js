import shopSecrets from '../../api/shopSecrets'
import  axios from 'axios'
// initial state
const state = {
  all: [],
  lastIdSecret: 0,
  loading: false,
  error: false
}

// getters
const getters = {
  allSecrets: state => state.all,
  lastIdSecret: state => state.lastIdSecret,
  secretLoading: state => state.loading,
  secretError: state => state.error,
  getRatingSecret: (state) => (id) => {
    const secret = state.all.find(secret => secret.id == id) 
    return secret.plus - secret.minus
  },
  getIsLikeSecret: (state) => (id) => {
    const secret = state.all.find(secret => secret.id == id) 
    return secret.is_liked
  }
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
  },
  getAllSecrets ({ commit, state, rootState }, lastIdSecret) {
    commit('setLoading', true)
    if (lastIdSecret == 0) {
      commit('resetSecrets')
    }
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvb3JlbmJ1cmcub25saW5lIiwiZXhwIjoxNTQ0MTc2MzUzLCJsb2dpbiI6ImFpdmF0IiwiaWRfdXNlciI6MX0.cA2jx7RaPHNZPoTdxyqaqZ3_AOPIdoGWD8jXCbx87Ok'
    // axios.defaults.headers.common['Authorization'] = token
    // const url = 'http://orenburg.io/api/v1/secrets?lastSecrets=' + lastIdSecret + '&rating=' + rootState.range.secrets
    const url = 'http://lba.ru/api/v1/secrets?lastSecrets=' + lastIdSecret + '&rating=' + rootState.range.secrets
    axios.get(url)
    .then(response =>{
        console.log(response)
        commit('setLoading', false)
        if ( !rootState.switchAge.switchAge ) {
          var newResponse = response.data.filter(function(item) {
            return item.sex_material == 0
          })
        } else  {
          var newResponse = response.data
        }
        commit('setSecrets', newResponse)
        // commit('setLastSecret', lastIdSecret+30)
        commit('setLastSecret', newResponse[newResponse.length-1].id)
        console.log('newResponse=', newResponse.length)
        console.log('newResponse[].id', newResponse[newResponse.length-1].id)
        //this.users = this.users.concat(response.data)
        //this.loading = false
        //this.count = this.count + 10
        //this.first = this.first + 1
    })
    .catch(e => {
        console.log(e.message)
        commit('setLoading', false)
        //this.error = true
        //this.loading = false
    });
  },
  setLikeSecret ({ commit }, likeValue) {
      // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvb3JlbmJ1cmcub25saW5lIiwiZXhwIjoxNTQ0MTc2MzUzLCJsb2dpbiI6ImFpdmF0IiwiaWRfdXNlciI6MX0.cA2jx7RaPHNZPoTdxyqaqZ3_AOPIdoGWD8jXCbx87Ok'
      // axios.defaults.headers.common['Authorization'] = token
      const url = 'http://lba.ru/api/v1/secrets/' + likeValue.id + '/like'
      console.log('like=', likeValue.like)
      console.log('url=', url)
      console.log('headers1=', axios.defaults.headers.common['Authorization'])
      axios.post(url, {
        like: likeValue.like
      })
      .then(response =>{
          // let newResponse = response.data
          console.log(response.data)
          console.log('headers2=', axios.defaults.headers.common['Authorization'])
          // commit('setLoading', false)
          // commit('setInstorens', newResponse)
          // commit('setLastIdInstoren', newResponse[newResponse.length-1].id)
          // console.log('response=', newResponse.length)
          commit('setLikeMut', { id: likeValue.id, like: likeValue.like, isLikeDown: likeValue.isLikeDown, isLikeUp: likeValue.isLikeUp })
          // console.log('response[].id', newResponse[newResponse.length-1].id)
      })
      .catch(e => {
          console.log(e.message)
          // commit('setLoading', false)
      });    
  }
}

// mutations
const mutations = {
  setSecrets(state, secrets) {
    state.all = state.all.concat(secrets);
  },
  setLastSecret(state, lastSecret) {
    state.lastIdSecret = lastSecret;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  resetSecrets(state) {
    state.all = []
  },
  setLikeMut(state, { id, like, isLikeDown, isLikeUp }) {
    const secret = state.all.find(secret => secret.id == id) 
    console.log('id=', id)
    // const secretID = state.all.indexOf(id)
    // state.all['secretID'] = state.all['secretID'].plus - 1
    // console.log('secretID=',secretID)
    if (like == -1) {
      if (isLikeUp) {
        secret.is_liked = -1
        secret.plus = Number(secret.plus) - 1
        secret.minus = Number(secret.minus) + 1
        return
      }
      if (isLikeDown) {
        secret.minus = Number(secret.minus) - 1
        secret.is_liked = 0
      } else {
        secret.is_liked = -1
        // console.log('secret.minus=',secret.minus)
        secret.minus = Number(secret.minus) + 1
        // console.log('secret.minus=',secret.minus)
      }
    }
    if (like == 1) {
      console.log('secret=',secret)
      if (isLikeDown) {
        secret.is_liked = 1
        console.log('secret.plus=',secret.plus)
        console.log('secret.minus=',secret.minus)
        secret.plus = Number(secret.plus) + 1
        secret.minus = Number(secret.minus) - 1
        console.log('secret.plus2=',secret.plus)
        console.log('secret.minus2=',secret.minus)
        return
      }
      if (isLikeUp) {
        secret.plus = Number(secret.plus) - 1
        secret.is_liked = 0
      } else {
        secret.is_liked = 1
        secret.plus = Number(secret.plus) + 1
      }
      console.log('secret.plus3=',secret.plus)
        console.log('secret.minus3=',secret.minus)
    }
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