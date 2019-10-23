import Vue from 'vue'
import VueRouter from 'vue-router'
import Wechat from '../views/wechat/wechat.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'wechat',
    component: Wechat
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/contact.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../views/detail/detail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router