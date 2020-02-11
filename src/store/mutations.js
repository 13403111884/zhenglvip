export const setUserlist = (state, list) => {
  state.userList = list
}
export const setMovielist = (state, list) => {
  state.movieList = list
}
export const setAnalysis = (state, list) => {
  state.analysisList = list
}

export const judgeClient = () => {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return 'iOS'
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return 'Android'
  } else {
    return 'PC'
  }
}

export default {
  setUserlist,
  setMovielist,
  setAnalysis,
  judgeClient,
  setRouter: (state, routers) => {
    if (!routers) return
    state.routers = state.defaultRoute.concat(routers)
  }
}