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
export default {
  components: {
  FooterGuide,
  Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  // $bgColor red
  // #app1
  //   overflow hidden
  //   width 100%
  //   height 100%
  //   background-color bgColor
  //   font-size 20px
</style>
