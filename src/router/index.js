import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home')
  },
  {
    path: '/aboutMe',
    name: 'Aboutme',
    component: () => import('../components/Aboutme.vue')
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: () => import('../components/Portfolio')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
