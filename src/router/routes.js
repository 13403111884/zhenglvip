export default [
  {
    path: '/',
    redirect: { name: 'dataAnalysis' }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "group-foo" */ '@components'),
    redirect: { name: 'dataAnalysis' },
    children: [
      {
        path: 'dataAnalysis',
        name: 'dataAnalysis',
        component: () => import(/* webpackChunkName: "group-foo" */ '@views/dataAnalysis')
      },
      {
        path: 'userManage',
        name: 'userManage',
        component: () => import(/* webpackChunkName: "group-foo" */ '@views/userManage')
      },
      {
        path: 'movieManage',
        name: 'movieManage',
        component: () => import(/* webpackChunkName: "group-foo" */ '@views/movieManage')
      }
    ]
  }
]