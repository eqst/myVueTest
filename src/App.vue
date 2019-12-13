<template>
  <div id="app1">
    <main>
      <router-view></router-view>
    </main>
    <!-- <footer>
      <ul>
        <li>
          <router-link to = "/takeout">外卖</router-link>
        </li>
        <li>
          <router-link to = "/search">搜索</router-link>
        </li>
        <li>
          <router-link to = "/indent">订单</router-link>
        </li>
        <li>
          <router-link to = "/mine">我的</router-link>
        </li>
      </ul>
    </footer> -->
    <FooterGuide/>
  </div>
</template>

<script>

// import Indent from './components/indent'
// import Mine from './components/mine'
// import Search from './components/search'
// import TakeOut from './components/take_out'
import FooterGuide from "./components/footerGuide";
export default {
  // name: 'app',
  components: {
  //  Indent,
  //  Mine,
  //  Search,
  //  TakeOut
  FooterGuide
  },
  template:'<FooterGuide/>'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $bgColor red
  #app1
    overflow hidden
    // position relative
    width 100%
    height 100%
    background-color bgColor
    font-size 20px
  footer 
    width 100%
    height 30px
    position absolute
    bottom 0
    ul
      display flex
      justify-content space-around
</style>
