import LoadingComponent from './modules/loading'

let showLoading = false
let loadingNode = null

export default (Vue) => {
  const LoadingConstructor = Vue.extend(LoadingComponent)
  Vue.prototype.$loadingShow = function (tips) {
    if (showLoading) {
      return
    }
    setLoading(tips)
    loadingNode.isLoading = showLoading = true
  }

  Vue.prototype.$loadingHide = function () {
    loadingNode.isLoading = showLoading = false
    setLoading()
  }

  function setLoading (tips) {
    loadingNode = new LoadingConstructor({
      data: {
        isLoading: showLoading,
        content: tips || '加载中...'
      }
    })
    loadingNode.$mount()
    document.body.appendChild(loadingNode.$el)
  }
}
