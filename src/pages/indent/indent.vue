<template>
  <div>
    <section class="order">
      <Header title="订 单"/>
      <section class="order_no_login">
        <img src="../../assets/images/order/person.png">
        <h3>登录后查看外卖订单</h3>
        <button @click="$router.push('/login')">立即登陆</button>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .order  //订单
    width 100%
    .order_no_login
      padding-top 140px
      width 60%
      margin 0 auto
      text-align center
      >img
        display block
        width 100%
        height 30%
      >h3
        padding 10px 0
        font-size 17px
        color #6a6a6a
      >button
        display inline-block
        background #02a774
        font-size 14px
        color #fff
        border 0
        outline none
        border-radius 5px
        padding 10px 20px
        

</style>
