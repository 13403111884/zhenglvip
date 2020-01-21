export default {
  setRouter: (state, routers) => {
    state.addRouters = routers
    state.routers = constantRouterMap.concat(routers)
  },
  setJurisdiction (state, {roles, route, type}) {
    if (route.meta && route.meta[type]) {
      return roles.some(role => route.meta[type].includes(role))
    } else {
      return true
    }
  },
  getRouter (state, {asyncRouterMap, roles, type}) {
    const accessedRouters = asyncRouterMap.filter(route => {
      if (commit('setJurisdiction', { roles, route, type })) {
        if (route.children && route.children.length) {
          route.children = commit('getRouter', { asyncRouterMap: route.children, roles, type })
        }
        return true
      }
      return false
    })
    return accessedRouters
  }
}