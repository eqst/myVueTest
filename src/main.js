import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
import store from './store'
import router from './router'
import Header from './components/header/header.vue'

Vue.config.productionTip = false
Vue.component('Header',Header)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
