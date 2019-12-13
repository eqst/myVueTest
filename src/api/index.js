// 接口请求函数模块
import ajax from './ajax'

//请求地址
const reqAdress = (longitude, latitude) => ajax(`/position/${longitude},${latitude}`)

//请求商品分类列表
const reqCategorys = () => ajax('index_category')

//请求商铺信息
const reqShops = ({longitude, latitude}) => ajax('/shop',{params:{longitude, latitude}})