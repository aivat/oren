import  axios from 'axios'
const state = {
    showModalLogin: false,
    token: localStorage.getItem('userToken') || '', 
    status: '',
    error: '',
    hasLoadedOnce: false,
    login: ''
}
const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
}

const actions = {
  setModalLogin ({ commit }) {
      commit('setModalLogin')
  },
  authRequestq2 ({ commit }, user) {
    // const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvb3JlbmJ1cmcub25saW5lIiwiZXhwIjoxNTQ0MTc2MzUzLCJsb2dpbiI6ImFpdmF0IiwiaWRfdXNlciI6MX0.cA2jx7RaPHNZPoTdxyqaqZ3_AOPIdoGWD8jXCbx87Ok'
    // axios.defaults.headers.common['Authorization'] = token
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
            console.log('errqwe=', resolve)
          const url = 'http://lba.ru/auth.php'
          const axiosParams = {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            }
        }
        //   commit(AUTH_REQUEST)
          axios.post(url, {
            login: user.login,
            password: user.password
        }, axiosParams)
          .then(resp => {
            console.log('response.data=', resp.data)
            console.log('err=', resp.status)
            localStorage.setItem('userToken', resp.data)
            // Here set the header of your ajax library to the token value.
            // example with axios
            commit( 'AUTH_LOGIN', user.login)
            axios.defaults.headers.common['Authorization'] = resp.data
            commit('AUTH_SUCCESS', resp.data)
            
            // dispatch(USER_REQUEST)
            resolve(resp)
          })
          .catch( err => {
            commit('AUTH_ERROR', err.response.data)
            console.log('err=', err)
            console.log('err2=', err.response.status)
            console.log('err2=', err.response)
            localStorage.removeItem('userToken')
            reject(err)
          })
        })
      },
    AUTH_LOGOUT ({commit, dispatch}) {
        return new Promise((resolve, reject) => {
            commit('AUTH_LOGOUT')
            localStorage.removeItem('userToken')
            // remove the axios default header
            delete axios.defaults.headers.common['Authorization']
            resolve()
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
  AUTH_SUCCESS (state, token) {
    state.status = 'success'
    state.token = token
    state.hasLoadedOnce = true
  },
  AUTH_ERROR (state, err) {
    state.status = 'error'
    state.error = err
    state.hasLoadedOnce = true
  },
  AUTH_LOGOUT (state) {
    state.token = ''
  },
  AUTH_LOGIN (state, login) {
    state.login = login
  }  

}

export default {
  state,
  getters,
  actions,
  mutations
}