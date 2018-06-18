import shopNews from '../../api/shopNews'

const state = {
    all: [],
    category: ''
}

const getters = {}

// actions
const actions = {
  getAllNews ({ state, commit, rootState }) {
    shopNews.getNews(
        state.category,
        rootState.range.news,
        rootState.switchAge.switchAge,
        news => {
            commit('setNews', news)
        }
    )
    console.log('state.category=', state.category)
  },
  getCategory({ commit },  categoryValue) {
    commit('setCategory', categoryValue)
    console.log('categoryValue', categoryValue)
  }
}

// mutations
const mutations = {
  setNews (state, news) {
    state.all = news
  },
  setCategory (state, categoryValue) {
    state.category = categoryValue
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}