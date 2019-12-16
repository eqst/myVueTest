import axios from 'axios'
import qs from 'qs'
import { Indicator,Toast ,MessageBox } from 'mint-ui'
import store from '../store'
import router from '../router';

const instance = axios.create({
  baseURL:'/api',
  outTime:10000
})

instance.interceptors.request.use((config)=>{
  Indicator.open()
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  const token = store.state.token
  if (token) {
    config.headers['Authorization'] = token
  }else {
    const needCheck = config.headers.needCheck
    if (needCheck) {
      throw new Error('没有登陆,无法请求')
    }
  }
  return config
})

instance.interceptors.response.use(
  response => {
    Indicator.close()
    return response.data
  },
  error => { 
    if (!response) {
      const path = router.currentRoute.path
      if (path !== '/login') {
        router.replace('/login')
        Toast(error.message)
      }
    }else {
      if (error.response.status === 401) {
        const path = router.currentRoute.path
        if (path!== '/login') {
          router.replace('/login')
          Toast(error.response.data.message || "登陆失败,请重新登陆")
        }
      }else if (error.response.status === 404) {
        MessageBox('提示','访问资源不存在')
      }else{
        MessageBox('提示','情求出错:'+error.message)
      }
    }
    return new Promise(() => {})
  }
)

export default instance