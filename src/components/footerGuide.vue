<template>
  <div class="footer-guide">
    <span class="guide-item" :class = "on: $route.path==='/takeout" @click = "goto(/takeout)">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>
        首页
      </span>
    </span>
    <span class="guide-item" :class = "on: $route.path==='/search" @click = "goto(/search)">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>
        搜索
      </span>
    </span>
    <span class="guide-item" :class = "on: $route.path==='/indent" @click = "goto(/indent)">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>
        订单
      </span>
    </span>
    <span class="guide-item" :class = "on: $route.path==='/mine" @click = "goto(/mine)">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>
        个人
      </span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footer-guide
    position fixed
    display flex
    bottom 0
    left 0
    justify-content space-between
      .guide-item
        display block
        width 100px
        height 50px
  .on
    color green 

</style>
