import Vue from 'vue'
import 'lib-flexible/flexible'
import VeeValidate,{ Validator } from "vee-validate";
import zh from 'vee-validate/dist/locale/zh_CN'
import App from './App.vue'
import store from './store'
import router from './router'
import Header from './components/header/header.vue'

Validator.addLocale(zh)
Vue.config.productionTip = false
Vue.component('Header',Header)
const config = {
  locale: 'zh_CN'
}
Vue.use(VeeValidate,config)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
