import axios from 'axios'
import store from '@store'

const baseURL = ''
const service = axios.create({ timeout: 10000 })

// 请求拦截器
service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

// 响应拦截器
service.interceptors.response.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

function connector (method, url, params) {
  return new Promise((resolve, reject) => {
    service({
      method,
      url,
      baseURL,
      withCredentials: false,
      data: method === 'post' || method === 'put' || method === 'delete' ? params : null,
      params: method === 'get' ? params : null
    }).then(res => {
      if (res.data.errCode) {
        store.commit('textTip', { str: res.data.errMsg, t: 2000 })
      }
      resolve({
        ...res.data,
        headers: res.headers
      })
    }).catch(err => {
      reject(err)
    })
  })
}

export default connector
