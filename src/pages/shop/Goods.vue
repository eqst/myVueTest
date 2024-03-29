<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="left">
        <ul ref="leftUl">
          <!-- current -->
          <li class="menu-item" v-for="(good, index) in goods" :key="good.name" 
            :class="{current: index===currentIndex}" @click="clickItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="right">
        <ul ref="rightUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" 
                :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span></div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- 组件标签对象就是组件对象 -->
    <Food :food="food" ref="food"/>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
import Food from '../../components/Food/Food'

  export default {
    data() {
      return {
        scrollY:0,
        tops:[],  
        food:{} //需要显示的food
      }
    },
    components:{
      Food
    },
    computed: {
      ...mapState(['goods']),

      currentIndex () {
        const {scrollY, tops} = this
        const index = tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
        if (index!==this.index && this.leftScroll) {
          // 将新的下标保存起来
          this.index = index
          // 让左侧列表滑动到当前分类处
          const li = this.$refs.leftUl.children[index]
          this.leftScroll.scrollToElement(li, 300)
        }
        return index
      }
    },
     methods: {
      // 初始化滑动
      _initScroll () {
        // 滑动的控制者--绑定监听滑动获取scrollY的值
        this.leftScroll = new BScroll(this.$refs.left, {
          click: true, // 分发自定义的click事件
        })
        this.rightScroll = new BScroll(this.$refs.right, {
          click: true,
          probeType: 1, // 非实时 / 触摸
          // probeType: 2, // 实时 / 触摸
          // probeType: 3 // 实时 / 触摸 / 惯性 / 编码
        })

        // 给右侧列表绑定scroll监听
        this.rightScroll.on('scroll', ({x, y}) => {
          console.log('scroll', x, y)
          this.scrollY = Math.abs(y)
        })

        // 给右侧列表绑定scrollEnd监听
        this.rightScroll.on('scrollEnd', ({x, y}) => {
          console.log('scrollEnd', x, y)
          this.scrollY = Math.abs(y)
        })
      },
      // 更新右侧的li,找到li的数组,遍历
      //this.$refs.rightUl-----ul
      //this.$refs.rightUl.children----li(伪数组,变为真去遍历)
      // Array.from(this.$refs.rightUl.children)----变为真数组
      // ES5
      _initTops () {
        const tops = []
        let top = 0
        tops.push(top)
        const lis = Array.prototype.slice.call(this.$refs.rightUl.children)
        lis.forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })

        // 更新tops数据
        this.tops = tops
      },

      clickItem (index) {
        // 得到对应的top
        const top = this.tops[index]

        // 立即更新scrollY为目标值(立即选中当前分类项)
        this.scrollY = top

        // 让右侧列表滑动到对应位置
        this.rightScroll.scrollTo(0, -top, 300)
      },

      /* 
      父组件调用子组件的方法: ref
      子组件调用父组件的方法: props
      */
      showFood (food) {
        // 更新数据
        this.food = food
        // 显示food组件界面
        this.$refs.food.toggleShow()
      } 
    },

    watch: {
      goods () { // goods数据有了
        this.$nextTick(() => {// 列表数据显示了
          this._initScroll()
          this._initTops()
        })
      }
    },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" >
  @import '../../assets/css/mixins.styl';
  .goods
    display: flex
    position: absolute
    top: 225px
    bottom: 46px
    width: 100%
    background: #fff;
    overflow: hidden
    .menu-wrapper
      flex: 0 0 auto
      width: 80px
      background: #f3f5f7
      .menu-item
        display: table
        height: 54px
        width: 100%
        padding: 0 12px
        line-height: 14px
        &.current
          position: relative
          z-index: 10
          margin-top: -1px
          background: #fff
          color: $green
          font-weight: 700
          .text
            border-none()
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
        .text
          display: table-cell
          width: 56px
          vertical-align: middle
          bottom-border-1px(rgba(7, 17, 27, 0.1))
          font-size: 12px
    .foods-wrapper
      flex: 1
      .title
        padding-left: 14px
        height: 26px
        line-height: 26px
        border-left: 2px solid #d9dde1
        font-size: 12px
        color: rgb(147, 153, 159)
        background: #f3f5f7
      .food-item
        display: flex
        margin: 18px
        padding-bottom: 18px
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        &:last-child
          border-none()
          margin-bottom: 0
        .icon
          flex: 0 0 57px
          margin-right: 10px
        .content
          flex: 1
          .name
            margin: 2px 0 8px 0
            height: 14px
            line-height: 14px
            font-size: 14px
            color: rgb(7, 17, 27)
          .desc, .extra
            line-height: 10px
            font-size: 10px
            color: rgb(147, 153, 159)
          .desc
            line-height: 12px
            margin-bottom: 8px
          .extra
            .count
              margin-right: 12px
          .price
            font-weight: 700
            line-height: 24px
            .now
              margin-right: 8px
              font-size: 14px
              color: rgb(240, 20, 20)
            .old
              text-decoration: line-through
              font-size: 10px
              color: rgb(147, 153, 159)
          .cartcontrol-wrapper
            position: absolute
            right: 0
            bottom: 12px
</style>
