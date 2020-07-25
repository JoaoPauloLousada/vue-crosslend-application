import { getDocuments as retrieveDocuments } from '../../services/crosslend-api/documents'
import { filterDocumentsListByExtensions, ALLOWED_FORMATS } from '@/services/helpers/documents'

const documentsModule = {
  state: {
    list: [],
    filteredList: [],
    paginator: {
      currentPage: 1,
      total: null,
      itemsPerPage: 6
    }
  },
  mutations: {
    updateDocuments (state, payload) {
      state.list = payload.documents
    },
    updateFilteredDocuments (state, payload) {
      state.filteredList = payload.filteredList
    },
    updateTotalOfPages (state, payload) {
      state.paginator.total = payload.total
    },
    updateCurrentPage (state, payload) {
      state.paginator.currentPage = payload.currentPage
    }
  },
  actions: {
    async getDocuments ({ commit, dispatch }) {
      try {
        const { documents } = await retrieveDocuments()
        commit('updateDocuments', { documents })
      } catch (e) {

      }
    },
    setFilteredList ({ commit, state }) {
      const filteredList = filterDocumentsListByExtensions(ALLOWED_FORMATS, state.list)
      commit('updateFilteredDocuments', { filteredList })
    },
    documentsfirstPage ({ commit }) {
      commit('updateCurrentPage', { currentPage: 1 })
    },
    documentsPreviousPage ({ commit, state }) {
      if (state.paginator.currentPage !== 1) {
        commit('updateCurrentPage', { currentPage: state.paginator.currentPage - 1 })
      }
    },
    documentsNextPage ({ commit, state }) {
      if (state.paginator.currentPage !== state.paginator.total) {
        commit('updateCurrentPage', { currentPage: state.paginator.currentPage + 1 })
      }
    },
    documentsLastPage ({ commit, state }) {
      commit('updateCurrentPage', { currentPage: state.paginator.total })
    },
    setTotalOfPages ({ commit, state }, listLength) {
      const total = parseInt(listLength / state.paginator.itemsPerPage)

      if (listLength % state.paginator.itemsPerPage === 0) {
        commit('updateTotalOfPages', { total })
      } else {
        commit('updateTotalOfPages', { total: total + 1 })
      }
    }
  }
}

export default documentsModule
