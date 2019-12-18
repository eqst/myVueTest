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
  RECEIVE_GOODS
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
}