import sLoading from './loading'
import sProgressbar from './progressbar'
import sTable from './table'

import { mapping } from './mapping.js'

mapping.fn.install = (Vue) => {
  Vue.component('s-Table', {
    props: { title: 'Title' },
    template: sTable
  })
  Vue.component('s-Progressbar', sProgressbar)

  const LoadingConstructor = Vue.extend(sLoading)
  Vue.prototype.$loadingShow = function (tips) {
    if (mapping.showLoading) {
      return
    }
    setLoading(tips)
    mapping.loadingNode.isLoading = mapping.showLoading = true
  }

  Vue.prototype.$loadingHide = function () {
    mapping.loadingNode.isLoading = mapping.showLoading = false
    setLoading()
  }

  function setLoading (tips) {
    mapping.loadingNode = new LoadingConstructor({
      data: {
        isLoading: mapping.showLoading,
        content: tips || '加载中...'
      }
    })
    mapping.loadingNode.$mount()
    document.body.appendChild(mapping.loadingNode.$el)
  }

  Vue.prototype.$textTip = ({ str = '未知错误', t = 2000, fn }) => {
    const tipStyle = `
        background:rgba(0,0,0,.3); color: #fff; border-radius: 3px; padding: 20px 10px;
        line-height: 40px; text-align: center; font-size: 30px;
        position: fixed; left: 50%; top: 20%; z-index: 9999;
        -webkit-transform: translate(-50%); transform: translate(-50%);`

    var dom = document.createElement('div')
    dom.setAttribute('id', mapping.Counter)
    dom.setAttribute('style', tipStyle)
    dom.innerHTML = str

    document.body.appendChild(dom)

    if ((dom.offsetHeight - 20) / 18 > 1) {
      dom.style.width = '55%'
    }
    const tip = document.getElementById(mapping.Counter)
    mapping.Counter++
    setTimeout(function () {
      tip.parentNode.removeChild(tip)
      if (fn) { fn() }
    }, t)
  }
}

export default mapping.fn
