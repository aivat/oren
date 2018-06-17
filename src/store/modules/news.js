import shopNews from '../../api/shopNews'

const state = {
    all: []
}

const getters = {}

// actions
const actions = {
  getAllNews ({ commit }, category) {
    shopNews.getNews(
        category,
        news => {
            commit('setNews', news)
        }
    )
  }
}

// mutations
const mutations = {
  setNews (state, news) {
    state.all = news
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}