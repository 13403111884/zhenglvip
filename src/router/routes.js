const DataAnalysis = () => import('../views/dataAnalysis.vue')
const UserManage = () => import('../views/userManage.vue')
const MovieManage = () => import('../views/movieManage.vue')

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