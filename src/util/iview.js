import {
  Sider,
  Layout,
  Header,
  Content,
  Button,
  Icon,
  Card,
  Table,
  Modal,
  Menu,
  Submenu,
  Tooltip,
  Poptip,
  Dropdown,
  DropdownMenu,
  DropdownItem,
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
    Vue.component('Icon', Icon)
    Vue.component('Card', Card)
    Vue.component('Table', Table)
    Vue.component('Dropdown', Dropdown)
    Vue.component('DropdownMenu', DropdownMenu)
    Vue.component('DropdownItem', DropdownItem)
    Vue.component('Tooltip', Tooltip)
    Vue.component('Poptip', Poptip)
    Vue.component('Menu', Menu)
    Vue.component('Submenu', Submenu)
    Vue.component('MenuItem', MenuItem)
    Vue.component('MenuGroup', MenuGroup)

    Vue.prototype.$Modal = Modal
  }
}