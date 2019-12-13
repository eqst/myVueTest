
import Vue from 'vue'
import {
  reqAdress,
  reqCategorys,
  reqShops
} from '../api'

import {
  REQ_ADDRESS,
  REQ_CATEGORYS,
  REQ_SHOPS
} from './mutation_type'

export default {
  async getAddress ({commit,state}){
    //从状态中获取经纬度
    const {longitude, latitude} =state
    const result = await reqAdress(longitude, latitude)
    if (result.code === 0) {
      const address = result.data
      commit(REQ_ADDRESS,address)
    }
  },

  async getCategorys ({commit}){
    //从状态中商品分类列表
    const result = await reqCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(REQ_CATEGORYS,categorys)
    }
  },

  async getShops ({commit,state}){
    //从状态中获取经纬度
    const {longitude, latitude} =state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(REQ_SHOPS,shops)
    }
  }
}