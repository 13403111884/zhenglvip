import Loading from './loading'
import Progressbar from './progressbar'
import Table from './table'
import TextTip from './textTip'

export default {
  install: (Vue) => {
    Loading(Vue)
    Progressbar(Vue)
    Table(Vue)
    TextTip(Vue)
  }
}
