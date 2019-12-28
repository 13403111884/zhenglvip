export default {
  fetchMovie ({ commit }, id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ id })
      }, 500)
    }).then(res => {
      commit('setMoive', { res })
    })
  }
}
