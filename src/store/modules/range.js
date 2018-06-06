// const state = {
//   value: -50
// }
const range = {
    state: {
        secrets: -50,
        news: 50
    },
    getters: {
        getValue: (state) => (type) => {
            return state[type]
          }
    }, 
    actions: {
      setRange ({ commit },  rangeValue) {
        commit('setRange', { typeItem: rangeValue.type, itemValue: rangeValue.val })
      },
      initialiseStore({ commit }, state) {
        if(localStorage.getItem('store')) {
          commit ('setRangeFromLocalStorage', JSON.parse(localStorage.getItem('store')))
        }
      }
    },  
    mutations: {
        setRange (state, { typeItem, itemValue }) {
          state[typeItem] = itemValue
          localStorage.setItem('store', JSON.stringify(state))
        },
        setRangeFromLocalStorage (state, storeFromLocalStorage) {
          state.secrets = storeFromLocalStorage.secrets
          state.news = storeFromLocalStorage.news
        }
    }
}

export default  range

