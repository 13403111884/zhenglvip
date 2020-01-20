export const setUserlist = (state, list) => {
  state.userList = list
}
export const setMovielist = (state, list) => {
  state.movieList = list
}
export const setAnalysis = (state, list) => {
  state.analysisList = list
}

export default {
  setUserlist,
  setMovielist,
  setAnalysis,
}