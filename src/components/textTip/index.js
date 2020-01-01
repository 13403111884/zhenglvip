let Counter = 0

export default (Vue) => {
  Vue.prototype.$textTip = ({ str = '未知错误', t = 2000, fn }) => {
    const tipStyle = `
      background:rgba(0,0,0,.3); color: #fff; border-radius: 3px; padding: 20px 10px;
      line-height: 40px; text-align: center; font-size: 30px;
      position: fixed; left: 50%; top: 20%; z-index: 9999;
      -webkit-transform: translate(-50%); transform: translate(-50%);`

    var dom = document.createElement('div')
    dom.setAttribute('id', Counter)
    dom.setAttribute('style', tipStyle)
    dom.innerHTML = str

    document.body.appendChild(dom)

    if ((dom.offsetHeight - 20) / 18 > 1) {
      dom.style.width = '55%'
    }
    const tip = document.getElementById(Counter)
    Counter++
    setTimeout(function () {
      tip.parentNode.removeChild(tip)
      if (fn) { fn() }
    }, t)
  }
}
