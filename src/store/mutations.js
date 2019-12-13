import {
  REQ_ADDRESS,
  REQ_CATEGORYS,
  REQ_SHOPS
} from './mutation_type'

export default {
  [REQ_ADDRESS](){
    state.address = address
  },
  [REQ_CATEGORYS](){
    state.categorys = categorys
  },
  [REQ_SHOPS](){
    state.shops = shops
  }
}