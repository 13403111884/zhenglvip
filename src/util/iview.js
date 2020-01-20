import {
  Sider,
  Layout,
  Header,
  Content,
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
    Vue.component('Sider', Sider)
    Vue.component('Layout', Layout)
    Vue.component('Header', Header)
    Vue.component('Content', Content)
    Vue.component('Button', Button)
    Vue.component('Table', Table)
    Vue.component('Menu', Menu)
    Vue.component('Submenu', Submenu)
    Vue.component('MenuItem', MenuItem)
    Vue.component('MenuGroup', MenuGroup)

    Vue.prototype.$Modal = Modal
  }
}