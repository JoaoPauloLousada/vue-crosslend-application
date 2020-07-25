const userModule = {
  state: {
    user: {}
  },
  mutations: {
    updateUserName (state, payload) {
      state.userName = payload.userName
    }
  },
  actions: {
    async findRepositories ({ commit, state }) {
    }
  }
}

export default userModule
