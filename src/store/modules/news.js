import shopNews from '../../api/shopNews'

const state = {
    all: []
}

const getters = {}

// actions
const actions = {
  getAllNews ({ commit }) {
    shopNews.getNews(
        "society",
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