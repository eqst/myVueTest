import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'


//使用声明
Vue.use(Vuex)

export default new Vuex.Store({
  state
})