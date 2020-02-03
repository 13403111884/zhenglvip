const setJurisdiction = ({roles, item}) => {
  if (item.meta && item.meta.roles && item.meta.roles.length) {
    return roles.some(role => item.meta.roles.includes(role))
  } else {
    return true
  }
}

export default {
  setRouter: (state, routers) => {
    state.routers = state.defaultRoute.concat(routers)
    return state.defaultRoute.concat(routers)
  },
  getRouter (state, routesList, roles) {
    const accessedRouters = routesList.filter(item => {
      if (setJurisdiction({ roles, item })) {
        if (item.children && item.children.length) {
          item.children = this.commit('getRouter', item.children, roles)
        }
        return true
      }
      return false
    })
    console.log(accessedRouters)
    return accessedRouters
  }
}
