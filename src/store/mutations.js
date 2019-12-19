import {
  REQ_ADDRESS,
  REQ_CATEGORYS,
  REQ_SHOPS,
  REQ_SAVETOKEN,
  REQ_SAVEUSER,
  RESET_TOKEN,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  ADD_FOOD_COUNT,  
  REDUCE_FOOD_COUNT,  
} from './mutation_type'

export default {
  [REQ_ADDRESS](state,address){
    state.address = address
  },
  [REQ_CATEGORYS](state,categorys){
    state.categorys = categorys
  },
  [REQ_SHOPS](state,shops){
    state.shops = shops
  },
  [REQ_SAVETOKEN](state,{token}){
    state.token = token
  },
  [REQ_SAVEUSER](state,{user}){
    state.user = user
  },
  [RESET_TOKEN] (state) {
    state.token = ''
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },
  
  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },
  
  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [ADD_FOOD_COUNT](state, {food}) {
    //原本就有的
    if (food.count) { //如果food中有count
      food.count ++
    }else{//如果food中没有,就指定属性count=
      // 新添加的属性,没有数据绑定
      // 给响应式(有数据绑定)对象添加属性,没有数据绑定效果
      // food.count = 1
      // 解决---添加绑定----Vue.set(target,key,value)
      Vue.set(food,'count',1)
    }
  },

  [REDUCE_FOOD_COUNT](state, {food}) {
    if (food.count > 0) { //如果food中有count
      food.count --
    }
  },
}