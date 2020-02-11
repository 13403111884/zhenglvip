import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import state from './state'
import mutations from './mutations'
import modules from './modules'

import routesList from '@/router/routes'

const setJurisdiction = (roles, item) => {
  if (item.meta && item.meta.roles && item.meta.roles.length) {
    return roles.some(role => item.meta.roles.includes(role))
  } else {
    return true
  }
}

const getRouter = (routes, roles) => {
  return routes.filter(item => {
    if (setJurisdiction(roles, item)) {
      if (item.children && item.children.length) {
        item.children = getRouter(item.children, roles)
      }
      return true
    }
    return false
  })
}

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state,
    mutations,
    getters: {
      userList: state => state.userList,
      movieList: state => state.movieList,
      analysisList: state => state.analysisList,
      Juris: _ => routesList,
      Routers: state => state.routers
    },
    actions: {
      getUserlist ({ commit }) {
        // return axios.get('/api/getUserlist').then((res) => {
        //     commit('setUserlist', res.data.userlist)
        // })
      },
      getMovielist ({ commit }) {
        // return axios.get('/api/getMovielist').then((res) => {
        //   commit('setMovielist', res.data.movielist)
        // })
      },
      getAnalysis ({ commit }) {
        // return axios.get('/api/getAnalysis').then((res) => {
        //   commit('setAnalysis', res.data);
        // })
      },
      Copy ({ commit }) {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.setAttribute('value', this.content)
        if (commit('judgeClient') === 'iOS') {
          input.setAttribute('readonly', 'readonly')
          input.setSelectionRange(0, -1)
        } else {
          input.select()
        }
        if (document.execCommand('copy')) {
          document.execCommand('copy')
        }
        document.body.removeChild(input)
      },
      GenerateRoutes ({ commit, state }) {
        const { roles } = state
        return new Promise(async (resolve, reject) => {
          try {
            commit(
              'setRouter',
              getRouter(routesList, roles)
            )
            resolve(state.routers)
          } catch (err) {
            reject(err)
          }
        })
      }
    },
    modules
  })
}
