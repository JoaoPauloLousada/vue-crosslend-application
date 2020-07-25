import Vue from 'vue'
import Vuex from 'vuex'
import UserModule from './modules/user'
import DocumentsModule from './modules/documents'
import UIModule from './modules/ui'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: UserModule,
    documents: DocumentsModule,
    ui: UIModule
  }
})

export default store
