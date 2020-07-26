import { getUser } from '@/services/crosslend-api/user'

const userModule = {
  state: {
    data: {

    }
  },
  mutations: {
    updateUserData (state, payload) {
      state.data = payload.data
    }
  },
  actions: {
    async getUserData ({ commit, state }) {
      console.log('ACTION getUserData')
      try {
        const data = await getUser()
        commit('updateUserData', { data })
      } catch (e) {

      }
    }
  }
}

export default userModule
