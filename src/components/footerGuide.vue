<template>
  <div class="footer-guide">
    <span class="guide-item" :class ="{on: $route.path==='/takeout'}" @click="goto('/takeout')">
      <span>
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>
        首页
      </span>
    </span>
    <span class="guide-item" :class ="{on: $route.path==='/search'}" @click="goto('/search')">
      <span>
        <i class="iconfont icon-search2"></i>
      </span>
      <span>
        搜索
      </span>
    </span>
    <span class="guide-item" :class ="{on: $route.path==='/indent'}" @click="goto('/indent')">
      <span>
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>
        订单
      </span>
    </span>
    <span class="guide-item" :class ="{on: $route.path==='/mine'}" @click="goto('/mine')">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>
        个人
      </span>
    </span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'FooterGuide',
    methods: {
      goto(path){
        this.$router.replace(path)
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../assets/css/mixins.styl'
  .footer-guide
    top-border-1px(#cccccc)
    display flex
    position fixed
    bottom 0
    left 0
    width 100%
    height 50px
    background-color #ffffff
    .guide-item
      display flex
      flex-direction column
      text-align center
      width 25%
      &.on
        color green 
      span
        margin-top 3px
        font-size 12px
        i
          font-size 22px
</style>
