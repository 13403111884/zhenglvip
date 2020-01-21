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
  actions: {}
}
