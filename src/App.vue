<template>
  <div id="app">
    <TakeOut/>
    <Search/>
    <Indent/>
    <Mine/>
  </div>
</template>

<script>

import Indent from './components/indent'
import Mine from './components/mine'
import Search from './components/search'
import TakeOut from './components/take_out'
export default {
  name: 'app',
  components: {
   Indent,
   Mine,
   Search,
   TakeOut
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $bgColor red
  #app
    width 980px
    height 1440px
    background-color bgColor
    font-size 30px
</style>
