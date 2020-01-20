import Vue from 'vue'
import Router from 'vue-router'
// import store from '@store'

// console.log(store)
// const routes = store.commit('setJurisdiction')
import routes from './routes'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        routes
    })
}
