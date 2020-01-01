import Table from './modules/table'

export default (Vue) => {
  Vue.component('l-Table', {
    props: { title: 'Title' },
    template: Table
  })
}
