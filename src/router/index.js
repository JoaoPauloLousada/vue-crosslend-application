import VueRouter from 'vue-router'

const Home = () => import('../pages/Home')
const Documents = () => import('../pages/Documents')
const Contacts = () => import('@/pages/Contacts')

const routes = [
  { path: '/', component: Home },
  { path: '/documents', component: Documents },
  { path: '/contacts', component: Contacts }
]

const router = new VueRouter({
  routes
})

export default router
