import state from './state'
import mutations from './mutations'

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

export default {
  state,
  mutations,
  getters: {
    Juris: _ => routesList,
    Routers: state => state.routers
  },
  actions: {
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
  }
}
