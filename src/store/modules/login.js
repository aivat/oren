import  axios from 'axios'
const state = {
    showModalLogin: false
}

const actions = {
  setModalLogin ({ commit }) {
      commit('setModalLogin')
  },
  getAuth ({ commit }, user) {
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
        console.log('response.data=', response.data)
        console.log('response=', response)
        // commit('setLikeMut', { id: likeValue.id, like: likeValue.like, isLikeDown: likeValue.isLikeDown, isLikeUp: likeValue.isLikeUp })
        // console.log('response[].id', newResponse[newResponse.length-1].id)
    })
    .catch(e => {
        console.log(e.message)
        // commit('setLoading', false)
    });    
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