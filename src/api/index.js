// 接口请求函数模块
import ajax from './ajax'

//请求地址
export const reqAdress = (longitude, latitude) => ajax(`/position/${latitude},${longitude}`)

//请求商品分类列表
export const reqCategorys = () => ajax('/index_category')

//请求商铺信息
export const reqShops = ({longitude, latitude}) => ajax('/shops',{params:{longitude, latitude}})