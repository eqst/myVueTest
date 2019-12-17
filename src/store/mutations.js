import {
  REQ_ADDRESS,
  REQ_CATEGORYS,
  REQ_SHOPS,
  REQ_SAVETOKEN,
  REQ_SAVEUSER,
  RESET_TOKEN,
  RESET_USER
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
}