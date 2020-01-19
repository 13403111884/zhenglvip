const DataAnalysis = () => import(/* webpackChunkName: "group-foo" */ '../views/dataAnalysis')
const UserManage = () => import(/* webpackChunkName: "group-foo" */ '../views/userManage')
const MovieManage = () => import(/* webpackChunkName: "group-foo" */ '../views/movieManage')
const Menus = () => import(/* webpackChunkName: "group-foo" */ '../components')

export default [
  {
    path: '/',
    redirect: { name: 'dataAnalysis' }
  },
  {
    path: '/home',
    name: 'home',
    component: Menus,
    redirect: { name: 'dataAnalysis' },
    children: [
      {
        path: 'dataAnalysis',
        name: 'dataAnalysis',
        component: DataAnalysis
      },
      {
        path: 'userManage',
        name: 'userManage',
        component: UserManage
      },
      {
        path: 'movieManage',
        name: 'movieManage',
        component: MovieManage
      }
    ]
  }
]