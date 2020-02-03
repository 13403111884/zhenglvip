export default {
  setRouter: (state, routers) => {
    if (!routers) return
    state.routers = state.defaultRoute.concat(routers)
  }
}
