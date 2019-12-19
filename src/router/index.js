import Vue from 'vue'
import VueRouter from 'vue-router'

import TakeOut from '../pages/takeout/take_out.vue'
import Mine from '../pages/mine/mine'
import Search from '../pages/search/search'
import Indent from '../pages/indent/indent.vue'
import Login from '../pages/login/login.vue'
import UserInfo from "../pages/userInfo_my/userInfo.vue";
import Shop from "../pages/shop/Shop.vue";
import Goods from '../pages/shop/Goods.vue'
import Ratings from '../pages/shop/Ratings.vue'
import Info from '../pages/shop/Info.vue'


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
      path : '/shop',
      component:Shop,
      children: [
        {
          path: '/shop/goods',
          component: Goods
        },
        {
          path: 'ratings',
          component: Ratings
        },
        {
          path: '/shop/info',
          component: Info
        },
        
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/userinfo',
      component:UserInfo
    },
    {
      path:'/',
      redirect:'/takeout'
    }
  ]
})