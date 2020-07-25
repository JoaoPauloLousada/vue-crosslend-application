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
    }
  },
  mutations: {
    updateUserName (state, payload) {
      state.userName = payload.userName
    }
  },
  actions: {

  }
}

export default uiModule
