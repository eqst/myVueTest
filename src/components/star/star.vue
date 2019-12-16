<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>

</template>

<script type="text/ecmascript-6">
   export default {
    //声明接收属性
    props: {
      score: Number, // 评分
      size: Number, // 尺寸
    },

    computed: {
      starClasses () {
        // 传递过来的数据
        const score = this.score
        console.log(score);
        const arr = []

        // 向arr中添加n个on
        const scoreInteger = Math.floor(score)
        for (let index = 0; index < scoreInteger; index++) {
          arr.push('on')
        }
        // 如果大于0.5则添加半星half
        if (score - scoreInteger >= 0.5) {
          arr.push('half')
        }

        // 若数组长度小于五，添加灰星off
        while (arr.length<5) {
          arr.push('off')
        }

        return arr
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
@import "../../assets/css/mixins.styl"


  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('./images/star48_on')
        &.half
          bg-image('./images/star48_half')
        &.off
          bg-image('./images/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star36_on')
        &.half
          bg-image('./images/star36_half')
        &.off
          bg-image('./images/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('./images/star24_on')
        &.half
          bg-image('./images/star24_half')
        &.off
          bg-image('./images/star24_off')
</style>
