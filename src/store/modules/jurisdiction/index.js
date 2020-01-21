import state from './state'
import mutations from './mutations'

export default {
  state,
  mutations,
  getters: {
    jurisdiction: state => {
      return state.routesList
    }
  },
  actions: {
    GenerateRoutes ({ commit, state }, data) {
      console.log(state.routesList)
      return new Promise(resolve => {
        commit(
          'setRouter',
          commit(
            'getRouter',
            { asyncRouterMap: state.routesList , roles: state.code, type: 'roles' }
          )
        )
        resolve()
      })
    }
  }
}
