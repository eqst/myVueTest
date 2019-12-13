import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
  baseUrl:'/api',
  outTime:10000
})

instance.interceptors.request.use((config)=>{
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    alert('网络延迟,稍后再试')
    return new Promise(() => {})
  }
)

export default instance