const Home = () => import(/* webpackChunkName: "index" */ '@components')

export default [
  {
    path: '/',
    name: '',
    component: Home,
    redirect: { name: 'dataAnalysis' },
    meta: { title: '', icon: 'md-analytics', code: [] },
    children: [
      {
        path: 'dataAnalysis',
        name: 'dataAnalysis',
        meta: { title: '图表', icon: 'md-analytics', code: [] },
        component: () => import(/* webpackChunkName: "index" */ '@views/dataAnalysis')
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    component: Home,
    redirect: { name: 'userManage' },
    meta: { title: '表格', icon: 'md-appstore', code: [] },
    children: [
      {
        path: 'userManage',
        name: 'userManage',
        meta: { code: [] },
        meta: { title: 'user表格', icon: 'md-apps', code: [] },
        component: () => import(/* webpackChunkName: "Manage" */ '@views/userManage')
      },
      {
        path: 'movieManage',
        name: 'movieManage',
        meta: { code: [] },
        meta: { title: 'movie表格', icon: 'ios-archive',  code: [] },
        component: () => import(/* webpackChunkName: "Manage" */ '@views/movieManage')
      }
    ]
  }
]