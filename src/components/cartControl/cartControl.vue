<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont iconjian" v-if="food.count>0" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count"  v-if="food.count>0">{{food.count}}</div>
    <div class="iconfont iconjia" @click="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  props:{
    food:Object
  },
  methods:{
    updateFoodCount(isAdd){
      /* 
      问题1: 状态在哪里,更新状态的方法在哪里
      问题2: 开始count值是undefined
      */
      this.$store.dispatch('updateFoodCount',{isAdd,food:this.food})
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "../../assets/css/mixins.styl"
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)

    .iconjian
      display inline-block
      padding 6px
      line-height 24px
      font-size 24px
      color $green
      &.move-enter-active, &.move-leave-active
        transition all .5s
      &.move-enter, &.move-leave-to
        opacity 0
        transform translateX(15px) rotate(180deg)

    .cart-count
      display: inline-block
      vertical-align: top
      width: 12px
      padding-top: 6px
      line-height: 24px
      text-align: center
      font-size: 10px
      color: rgb(147, 153, 159)
    .iconjia
      display: inline-block
      padding: 6px
      line-height: 24px
      font-size: 24px
      color $green
</style>