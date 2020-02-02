import state from './state'
import mutations from './mutations'

import routesList from '@/router/routes'

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
      return new Promise((resolve, reject) => {
        commit(
          'setRouter',
          commit(
            'getRouter',
            routesList, roles
          )
        )
        resolve()
      })
    }
  }
}
