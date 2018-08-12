import  axios from 'axios'
const state = {
    showModalLogin: false,
    token: localStorage.getItem('user-token') || '', 
    status: '', 
    hasLoadedOnce: false
}

const actions = {
  setModalLogin ({ commit }) {
      commit('setModalLogin')
  },
  authRequestq2 ({ commit }, user) {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvb3JlbmJ1cmcub25saW5lIiwiZXhwIjoxNTQ0MTc2MzUzLCJsb2dpbiI6ImFpdmF0IiwiaWRfdXNlciI6MX0.cA2jx7RaPHNZPoTdxyqaqZ3_AOPIdoGWD8jXCbx87Ok'
    axios.defaults.headers.common['Authorization'] = token
    const url = 'http://lba.ru/auth.php'
    // console.log('like=', likeValue.like)
    // console.log('url=', url)
    axios.post(url, {
        login: user.login,
        password: user.password
    })
    .then(response =>{
        // let newResponse = response.data
        // console.log(newResponse)
        // commit('setLoading', false)
        // commit('setInstorens', newResponse)
        // commit('setLastIdInstoren', newResponse[newResponse.length-1].id)
        console.log('user.login=', user.login)
        console.log('response.data=', response.data)
        console.log('response=', response)
        // commit('setLikeMut', { id: likeValue.id, like: likeValue.like, isLikeDown: likeValue.isLikeDown, isLikeUp: likeValue.isLikeUp })
        // console.log('response[].id', newResponse[newResponse.length-1].id)
    })
    .catch(e => {
        console.log(e.message)
        // commit('setLoading', false)
    });    
    },
    AUTH_REQUEST ({commit, dispatch}, user) {
        return new Promise((resolve, reject) => {
          const url = 'http://lba.ru/auth.php'
        //   commit(AUTH_REQUEST)
          axios.post(url, {
            login: user.login,
            password: user.password
        })
          .then(resp => {
            console.log('response.data=', resp.data)
            localStorage.setItem('user-token', resp.data)
            // Here set the header of your ajax library to the token value.
            // example with axios
            // axios.defaults.headers.common['Authorization'] = resp.token
            // commit(AUTH_SUCCESS, resp)
            // dispatch(USER_REQUEST)
            resolve(resp)
          })
          .catch(err => {
            // commit(AUTH_ERROR, err)
            localStorage.removeItem('user-token')
            reject(err)
          })
        })
      }
}

const mutations = {
    setModalLogin(state, secrets) {
        state.showModalLogin = !state.showModalLogin
        console.log('state.showModalLogin', state.showModalLogin)
        state.showModalLogin == true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'
  },
  AUTH_REQUEST (state) {
    state.status = 'loading'
  },
  AUTH_SUCCESS (state, resp) {
    state.status = 'success'
    state.token = resp.token
    state.hasLoadedOnce = true
  },
  AUTH_ERROR (state) {
    state.status = 'error'
    state.hasLoadedOnce = true
  },
  AUTH_LOGOUT (state) {
    state.token = ''
  } 

}

export default {
  state,
  actions,
  mutations
}