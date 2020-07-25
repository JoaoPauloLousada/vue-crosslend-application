import VueRouter from 'vue-router'

const Home = () => import('../pages/Home')
const Documents = () => import('../pages/Documents')

const routes = [
  { path: '/', component: Home },
  { path: '/documents', component: Documents }
]

const router = new VueRouter({
  routes
})

export default router
