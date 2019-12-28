const A = () => import(/* webpackChunkName: "index" */ 'views/A/A')
const B = () => import(/* webpackChunkName: "index" */ 'views/B/B')

export default [
  {
    path: '/',
    redirect: '/a'
  },
  {
    path: '/a',
    name: 'A',
    component: A
  },
  {
    path: '/b',
    name: 'B',
    component: B
  }
]
