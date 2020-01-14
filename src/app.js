import Vue from 'vue'
import App from './App.vue'
import { createStore } from './store'
import { createRouter } from './router'
import { sync } from 'vuex-router-sync'
import titleMixin from './util/title'
import * as filters from './util/filters'
import 'element-ui/lib/theme-chalk/index.css';

import { Button, Table, Modal, Menu, Submenu, MenuItem, MenuGroup } from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', MenuItem)
Vue.component('MenuGroup', MenuGroup)

Vue.prototype.$Modal = Modal

import {
  
} from 'element-ui';

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

// mixin for handling title
Vue.mixin(titleMixin)

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 导出一个工厂函数，用于创建新的根实例：利用一个可重复执行的工厂函数，为每个请求创建新的应用程序实例，避免导致状态污染
// 同样的规则使用于router、store 和 event bus 实例
export function createApp () {
  // 创建 store 和 router 实例
  const store = createStore()
  const router = createRouter()

  // 同步路由状态(route state)到 store
  sync(store, router)


  // 创建应用程序实例，将 router 和 store 注入
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return { app, router, store }
}
