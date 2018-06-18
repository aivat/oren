const switchAge = {
    state: {
        switchAge: true
    },
    getters: {
    }, 
    actions: {
      setRangeAge ({ commit }) {
        commit('setRangeAge')
      },
      initialiseStoreRangeAge({ commit }, state) {
        if ( localStorage.getItem('storeRangeAge') ) {
          commit ('setRangeAgeFromLocalStorage', JSON.parse(localStorage.getItem('storeRangeAge')))
        }
      }
    },  
    mutations: {
        setRangeAge (state) {
            state.switchAge = !state.switchAge
            localStorage.setItem('storeRangeAge', JSON.stringify(state))
        },
        setRangeAgeFromLocalStorage (state, storeFromLocalStorage) {
            state.switchAge = storeFromLocalStorage.switchAge
        }
    }
}

export default switchAge

