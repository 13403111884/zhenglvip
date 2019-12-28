import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: () => import(/* webpackChunkName: "index" */ '../views/home.vue')
      },
      {
        path: '/list',
        component: () => import(/* webpackChunkName: "index" */ '../views/list.vue')
      },
      {
        path: '/detail/:id(\\d+)?',
        component: () => import(/* webpackChunkName: "index" */ '../views/detail.vue')
      }
    ]
  })
}
