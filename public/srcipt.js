export const urlParams = (params) => {
  if (JSON.stringify(params) === '{}') return
  return Object.keys(params).map(key => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
  }).join('&')
}

export default {
  urlParams
}