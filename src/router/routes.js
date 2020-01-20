const Home = () => import(/* webpackChunkName: "index" */ '@components')
const error304 = () => import(/* webpackChunkName: "index" */ '@components/error/304')
const error400 = () => import(/* webpackChunkName: "index" */ '@components/error/400')
const error401 = () => import(/* webpackChunkName: "index" */ '@components/error/401')
const error403 = () => import(/* webpackChunkName: "index" */ '@components/error/403')
const error404 = () => import(/* webpackChunkName: "index" */ '@components/error/404')
const error500 = () => import(/* webpackChunkName: "index" */ '@components/error/500')
const error503 = () => import(/* webpackChunkName: "index" */ '@components/error/503')

export default [
  {
    path: '/',
    name: 'index',
    component: Home,
    redirect: { name: 'dataAnalysis' },
    children: [
      {
        path: 'dataAnalysis',
        name: 'dataAnalysis',
        component: () => import(/* webpackChunkName: "index" */ '@views/dataAnalysis')
      }
    ]
  },
  {
    path: '/manage',
    name: 'manage',
    component: Home,
    redirect: { name: 'userManage' },
    meta: { code: [] },
    children: [
      {
        path: 'userManage',
        name: 'userManage',
        meta: { code: [] },
        component: () => import(/* webpackChunkName: "Manage" */ '@views/userManage')
      },
      {
        path: 'movieManage',
        name: 'movieManage',
        meta: { code: [] },
        component: () => import(/* webpackChunkName: "Manage" */ '@views/movieManage')
      }
    ]
  },
  {
    path: '*',
    name: 'error',
    components: {
      default: error400,
      error304: error304,
      error400: error400,
      error401: error401,
      error403: error403,
      error404: error404,
      error500: error500,
      error503: error503
    },
    props: {
      default: true,
      error304: false,
      error400: false,
      error401: false,
      error403: false,
      error404: false,
      error500: false,
      error503: false
    }
  }
]