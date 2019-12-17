
// import Vue from 'vue'
import {
  reqAdress,
  reqCategorys,
  reqShops,
  reqAutoLogin,
  reqShopInfo,
  reqShopGoods,
  reqShopRating
} from '../api'

import {
  REQ_ADDRESS,
  REQ_CATEGORYS,
  REQ_SHOPS,
  REQ_SAVEUSER,
  REQ_SAVETOKEN,
  RESET_USER,
  RESET_TOKEN,
  REQ_SHOPINFO,
  REQ_SHOPRATING,
  REQ_SHOPGOODS
} from './mutation_type'

export default {
  async getAddress ({commit,state}){
    //从状态中获取经纬度
    const {longitude, latitude } =state
    const result = await reqAdress(longitude, latitude)
    // console.log(result);
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
      typeof callback === "function" && callback()
    }
  },

  saveUser ({commit},user){
    console.log(user);
    const token = user.token
    localStorage.setItem('token_key',token)
    delete user.token
    commit(REQ_SAVEUSER,{user})
    commit(REQ_SAVETOKEN,{token})
  },

  async autoLogin ({commit,state}) {
    if (state.token && !state.user._id) {
      const result = await reqAutoLogin()
      if (result.code === 0) {
        const user = result.data
        commit(REQ_SAVEUSER,{user})
      }
    }
  },

  logout ({commit}) {
    localStorage.removeItem('token_key')
    commit(RESET_USER)
    commit(RESET_TOKEN)
  },

  async getShopInfo ({commit},callback){
    const result = await reqShopInfo()
    // console.log(result);
    if (result.code === 0) {
      const info = result.data
      commit(REQ_SHOPINFO,{info})
      typeof callback === "function" && callback()
    }
  },

  async getShopRating ({commit},callback){
    const result = await reqShopRating()
    // console.log(result);
    if (result.code === 0) {
      const rating = result.data
      commit(REQ_SHOPRATING,{rating})
      typeof callback === "function" && callback()
    }
  },

  async getShops ({commit},callback){
    const result = await reqShopGoods()
    if (result.code === 0) {
      const goods = result.data
      commit(REQ_SHOPGOODS,{goods})
      typeof callback === "function" && callback()
    }
  },
}