// const state = {
//   value: -50
// }
const range = {
    state () {
      return {
        secrets: 0,
        news: -50
      }
    },
    getters: {
        // getValue(state, { type } ){
        //     return state[type]
        // } 
        getValue: (state) => (type) => {
            return state[type]
          }
    }, 
    actions: {
        setRange ({ commit },  rangeValue, type ) {
            console.log( rangeValue +'=' + type)
        commit('setRange', { typeItem: type, itemValue: rangeValue });
      }
    },  
    mutations: {
        setRange (state, { typeItem, itemValue }) {
          state[typeItem] = itemValue
        }
    }
}
// const state = () => {
//     return {
//         value: -50
//     }
// }

// const getters = {
//   getValue: (state) => state.value
// }

// const actions = {
//   setRange ({ commit }, rangeValue) {
//     commit('setRange', rangeValue);
//   }
// }

// const mutations = {
//   setRange (state, rangeValue) {
//     state.value = rangeValue;
//   }
// }

// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }

export default  range

