// const state = {
//   value: -50
// }
const range = {
    state: {
        secrets: 0,
        news: 0
    },
    getters: {
        getValue: (state) => (type) => {
            if ( type == 'secrets') {
              return state.secrets
            }
            if ( type == 'news') {
              return state.news
            }
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
          // state[typeItem] = itemValue
          if ( typeItem == 'secrets') {
            state.secrets = itemValue
          }
          if ( typeItem == 'news') {
            state.news = itemValue
          }
          // state.typeItem = itemValue
          localStorage.setItem('store', JSON.stringify(state))
        },
        setRangeFromLocalStorage (state, storeFromLocalStorage) {
          state.secrets = storeFromLocalStorage.secrets
          state.news = storeFromLocalStorage.news
        }
    }
}

export default  range

