// 接口请求函数模块
import ajax from './ajax'

//请求地址
export const reqAdress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}`)

//请求商品分类列表
export const reqCategorys = () => ajax('/index_category')

//请求商铺信息
export const reqShops = ({longitude, latitude}) => ajax('/shops',{params:{longitude, latitude}})

//情求验证码
export const reqCode = (phone) => ajax.get('/sendcode',{
  params:{
    phone
  }
})

// 5.用户名密码登陆
export const reqPwdLogin = ({name, password, captcha}) => ajax.post('/login_pwd', {name, password, captcha})

// 6. 手机号验证码登陆
export const reqSmsLogin = ({phone, code}) => ajax.post('/login_sms', {phone, code})

export const reqAutoLogin = () => ajax.get('/auto_login')