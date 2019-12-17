import Vue from 'vue'
import VueRouter from 'vue-router'

import TakeOut from '../pages/takeout/take_out.vue'
import Mine from '../pages/mine/mine'
import Search from '../pages/search/search'
import Indent from '../pages/indent/indent.vue'
import Login from '../pages/login/login.vue'
import Userinfo from '../pages/userInfo/userInfo.vue'
import ShopInfo from '../pages/shopInfo/shopinfo.vue'

Vue.use(VueRouter)
export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/indent',
      component:Indent,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/mine',
      component:Mine,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        isShowFooter:true
      }
    },
    {
      path:'/takeout',
      component:TakeOut,
      meta: {
        isShowFooter: true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/userinfo',
      component:Userinfo
    },
    {
      path:'/shopinfo',
      component:ShopInfo
    },
    {
      path:'/',
      redirect:'/takeout'
    }
  ]
})