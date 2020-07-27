import Vue from 'vue'
import VueRouter from 'vue-router'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import App from './App.vue'
import Store from './store'
import Router from './router'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  store: Store,
  router: Router
}).$mount('#app')
