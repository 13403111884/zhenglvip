const DataAnalysis = () => import(/* webpackChunkName: "group-foo" */ '../views/dataAnalysis.vue')
const UserManage = () => import(/* webpackChunkName: "group-foo" */ '../views/userManage.vue')
const MovieManage = () => import(/* webpackChunkName: "group-foo" */ '../views/movieManage.vue')

export default [
  {
    path: '/',
    name: 'dataAnalysis',
    component: DataAnalysis
  },
  {
    path: '/dataAnalysis',
    name: 'dataAnalysis',
    component: DataAnalysis
  },
  {
    path: '/userManage',
    name: 'userManage',
    component: UserManage
  },
  {
    path: '/movieManage',
    name: 'movieManage',
    component: MovieManage
  }
]