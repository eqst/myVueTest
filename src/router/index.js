import Vue from 'vue'
import VueRouter from 'vue-router'

import TakeOut from '../components/take_out.vue'
import Mine from '../components/mine'
import Search from '../components/search'
import Indent from '../components/indent.vue'

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