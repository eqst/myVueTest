
// import Vue from 'vue'
import {
  reqAdress,
  reqCategorys,
  reqShops,
  reqAutoLogin
} from '../api'

import {
  REQ_ADDRESS,
  REQ_CATEGORYS,
  REQ_SHOPS,
  REQ_SAVEUSER,
  REQ_SAVETOKEN,
  RESET_USER,
  RESET_TOKEN,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
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
    // console.log(result);
    if (result.code === 0) {
      const shops = result.data
      commit(REQ_SHOPS,shops)
      // typeof callback === "function" && callback()
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
   // 异步获取商家信息
   async getShopInfo({commit}, cb) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})

      typeof cb==='function' && cb()
    }
  },

  // 异步获取商家评价列表
  async getShopRatings({commit}, cb) {
    const result = await reqRatings()
    console.log(result);
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})

      typeof cb==='function' && cb()
    }
  },

  // 异步获取商家商品列表
  async getShopGoods({commit}, cb) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      typeof cb==='function' && cb()
    }
  },
}