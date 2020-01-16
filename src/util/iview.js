import {
  Split,
  Button,
  Table,
  Modal,
  Menu,
  Submenu,
  MenuItem,
  MenuGroup
} from 'view-design'

export default {
  install: (Vue) => {
    Vue.component('Split', Split)
    Vue.component('Button', Button)
    Vue.component('Table', Table)
    Vue.component('Menu', Menu)
    Vue.component('Submenu', Submenu)
    Vue.component('MenuItem', MenuItem)
    Vue.component('MenuGroup', MenuGroup)

    Vue.prototype.$Modal = Modal
  }
}