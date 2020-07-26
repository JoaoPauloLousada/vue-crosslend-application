const uiModule = {
  state: {
    menu: {
      items: [
        {
          id: 'home',
          name: 'Home',
          route: '/'
        },
        {
          id: 'documents',
          name: 'Documents',
          route: '/documents'
        },
        {
          id: 'contacts',
          name: 'Contacts',
          route: '/contacts'
        }
      ]
    },
    isLoading: false
  },
  mutations: {
    updateIsLoading (state, payload) {
      state.isLoading = payload.isLoading
    }
  },
  actions: {
    setIsLoading ({ commit }, isLoading) {
      commit('updateIsLoading', { isLoading })
    }
  }
}

export default uiModule
