import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import store from './store'
import router from './router'
import Header from './components/header/header.vue'
import CartControl from "./components/cartControl/cartControl.vue";
import './vee';
import i18n from './i18n'
import * as API from './api'
import './mock/mock-server'
import Star from './components/star/star.vue'
Vue.prototype.$API = API

Vue.config.productionTip = false
Vue.component('Header',Header)
Vue.component('Star',Star)
Vue.component('CartControl',CartControl)

new Vue({
  render: h => h(App),
  store,
  i18n,
  router
}).$mount('#app')
