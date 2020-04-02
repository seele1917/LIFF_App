import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { lemonchiffon } from 'color-name';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    props: true, 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/redirect', redirect: to => {
      // console.log(to.query.url)
      window.location = to.query.url
      liff.closeWindow()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL, 
  routes
})

export default router
