const openMenu = {
    state: {
        isActiveMenu: false,
    },
    getters: {
        getIsActiveMenu: state => {
            return state.isActiveMenu
        }
    }, 
    actions: {
        openMenu ({ commit }, value) {
            commit('setOpenMenu', { itemValue: value })
        }
    },  
    mutations: {
        setOpenMenu(state, { itemValue }) {
            state.isActiveMenu = itemValue
            console.log('state.isActiveMenu=', state.isActiveMenu)
        }
    }
}

export default  openMenu