<template>
  <div class="msite">
    <Header :title="address.name || '定位中...'">
      <span class="header_login" slot="right" @click="$router.replace('/login')">
        <span class="header_login_text">登录|注册</span>
      </span>
      <span class="header_search" slot="left" @click="$router.replace('/search')">
        <i class="iconfont icon-sousuo"></i>
      </span> 
    </Header>
    <nav class="msite_nav border-1px">
      <div ref = "categ" class="swiper-container" v-if="categorysArr.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key = "index">
            <div class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com' + category.image_url">
              </div>
              <span>{{category.title}}</span>
            </div>
          </div>
          
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src ="./../../assets/images/msite_back.svg" v-else/>
    </nav>
    <div class="msite_shop_list border-1px" v-if="shops.length" @click="$router.push('/shop')">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <div class="shop_container">
        <ul class="shop_list">
          <li class="shop_li border-1px" v-for="(shop,index) in shops" :key="index">
            <a>
              <div class="shop_left">
                <img class="shop_img" :src="'https://fuss10.elemecdn.com'+shop.image_path">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title" >{{shop.name}}</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports" v-for="(shop) in shop.supports">{{shop.icon_name}}</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <Star :score="shops[index].rating" :size="24"/>
                    <div class="rating_section">
                      {{shop.rating}}
                    </div>
                    <div class="order_section">
                      月售{{shop.recent_order_num}}单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_left">{{shop.delivery_mode.text}}</span>
                    <span class="delivery_style delivery_right">准时达</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥{{shop.float_minimum_order_amount}}起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约¥{{shop.float_delivery_fee}}</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
      <img src ="./../../assets/images/shop_back.svg"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  export default {
    computed: {
      ...mapState(['address','categorys','shops']),
      categorysArr () {
        //再开始时刻将小数组添加进大数组，后面直接更新小数组，大数组内的数据同步更新，
        //在小数组达到临界时，重新创建新的小数组，新的小数组为空，会将其自动添加进大数组
        const { categorys } = this
        // 定义数组
        const bigArr = []
        let smallArr = []
        // 遍历外围大数组
        categorys.forEach(category => {
          // 将小数组放入大数组中(只保存一次)
          if (smallArr.length===0) {
            bigArr.push(smallArr)
          }
          // 将c保存小数组
          smallArr.push(category)
          // 小数组的长度最大是8  ==> 如果小数组满, 创建一个新的小数组
          if (smallArr.length===8) {
            smallArr = []
          }
        })
        // 返回二维数组
        return bigArr
      },

    },
    async mounted () {
      this.$store.dispatch('getShops')
      this.$store.dispatch('getCategorys')
      new Swiper(this.$refs.categ, {
        pagination: {
          el: '.swiper-pagination',
        },
        loop: true
      })
    },
    watch:{
      categorys () {
        this.$nextTick (()=>{
          new Swiper(this.$refs.categ, {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mixins.styl"
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0 10px
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
      .shop_container
        margin-bottom 50px
        .shop_list
          .shop_li
            bottom-border-1px(#f1f1f1)
            width 100%
            >a
              clearFix()
              display block
              box-sizing border-box
              padding 15px 8px
              width 100%
              .shop_left
                float left
                box-sizing border-box
                width 23%
                height 75px
                padding-right 10px
                .shop_img
                  display block
                  width 100%
                  height 100%
              .shop_right
                float right
                width 77%
                .shop_detail_header
                  clearFix()
                  width 100%
                  .shop_title
                    text_ellipsis()
                    float left
                    width 200px
                    color #333
                    font-size 16px
                    line-height 16px
                    font-weight 700
                    &::before
                      content '品牌'
                      display inline-block
                      font-size 11px
                      line-height 11px
                      color #333
                      background-color #ffd930
                      padding 2px 2px
                      border-radius 2px
                      margin-right 5px
                  .shop_detail_ul
                    float right
                    margin-top 3px
                    .supports
                      float left
                      font-size 10px
                      color #999
                      border 1px solid #f1f1f1
                      padding 0 2px
                      border-radius 2px
                .shop_rating_order
                  clearFix()
                  width 100%
                  margin-top 18px
                  margin-bottom 8px
                  .shop_rating_order_left
                    float left
                    color #ff9a0d
                    .star //2x图 3x图
                      float left
                      font-size 0
                      .star-item
                        display inline-block
                        background-repeat no-repeat
                    .rating_section
                      float left
                      font-size 10px
                      color #ff6000
                      margin-left 4px
                    .order_section
                      float left
                      font-size 10px
                      color #666
                      transform scale(.8)
                  .shop_rating_order_right
                    float right
                    font-size 0
                    .delivery_style
                      transform-origin 35px 0
                      transform scale(.7)
                      display inline-block
                      font-size 12px
                      padding 1px
                      border-radius 2px
                    .delivery_left
                      color #fff
                      margin-right -10px
                      background-color #02a774
                      border 1px solid #02a774
                    .delivery_right
                      color #02a774
                      border 1px solid #02a774
                .shop_distance
                  clearFix()
                  width 100%
                  font-size 12px
                  .shop_delivery_msg
                    float left
                    transform-origin 0
                    transform scale(.9)
                    width: 200px
                    color #666
                  .segmentation
                    color #ccc

</style>