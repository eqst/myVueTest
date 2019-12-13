import Vue from 'vue'
import VueRouter from 'vue-router'

import TakeOut from '../pages/takeout/take_out.vue'
import Mine from '../pages/mine/mine'
import Search from '../pages/search/search'
import Indent from '../pages/indent/indent.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/indent',
      component:Indent
    },
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/takeout',
      component:TakeOut
    },
    {
      path:'/',
      redirect:'/takeout'
    }
  ]
})