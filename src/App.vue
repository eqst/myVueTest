<template>
  <div id="app1">
    <Header v-show="$route.meta.isShowFooter"/>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import FooterGuide from "./components/footerGuide";
import Header from './components/header/header'
import {reqAdress} from './api'
export default {
  components: {
  FooterGuide,
  Header
  },
  async mounted() {
    this.$store.dispatch('getAddress')
    // console.log(result);
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 
</style>
