<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: isShowSms}" @click="isShowSms=true">短信登录</a>
          <a href="javascript:;" :class="{on: !isShowSms}" @click="isShowSms=false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on : isShowSms}">
            <section class="login_message">
              <input v-model="phone" maxlength="11" name="phone" v-validate="'required|mobile'" placeholder="手机号"  value="text">
              <span></span>
              <button :disabled="!isPhone || computer>0" class="get_verification" 
                :class="{right_phone_number: isPhone}" @click.prevent="clickGetCode()"
                >{{computer>0 ? `短信已发送(${computer}s)` : '发送验证码'}}</button>
              <span style="color: red;" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
            </section>
            <section class="login_verification">
              <input type="text" maxlength="6" v-model="code" name="code" v-validate="{required:true,regex:/^\d{6}$/}"  placeholder="验证码">
              <span style="color:red;" v-show="errors.has('code')">{{errors.first('code')}}</span>
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !isShowSms}">
            <section>
              <section class="login_message">
                <input type="tel" name="name" v-model="name" 
                  v-validate="'required'" 
                  maxlength="11" placeholder="手机/邮箱/用户名">
                <span style="color:red" v-show="errors.has('name')">{{errors.first('name')}}</span>
              </section>
              <section class="login_verification">
                <input :type="isShowPSW ? 'text' : 'password'" maxlength="8" placeholder="密码"
                  v-model="pasword" name="pasword" v-validate="'required'"
                >
                <div class="switch_button" :class="isShowPSW ? 'on' : 'off'" @click="isShowPSW = !isShowPSW">
                  <div class="switch_circle" :class="{right: isShowPSW}"></div>
                  <span class="switch_text">{{isShowPSW ? 'abc' : ''}}</span>
                </div>
                <span style="color:red" v-show="errors.has('pasword')">{{errors.first('pasword')}}</span>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码">
                <img class="get_verification" @click="updateCaptcha" ref="captcha"  
                src="http://localhost:4000/captcha" alt="captcha">
                <span style="color:red" v-show="errors.has('captcha')">{{errors.first('captcha')}}</span>
              </section>
            </section>
          </div>                                                                                                                                                       
          <button class="login_submit" @click.prevent="isLogin">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script type="text/ecmascript-6">
  // import Vue from "vue"
  // import VeeValidate from 'vee-validate'
  // import zh_CN from 'vee-validate/dist/locale/zh_CN'
  import {Toast , MessageBox} from 'mint-ui'
  export default {
    data(){
      return {
        name:'',
        phone:'',
        code:'',
        pasword:'',
        pictureImg:'',
        isShowSms:true,
        isShowPSW:false, 
        captcha:'',
        computer:0
      }
    },
    computed:{
      isPhone () {
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      async clickGetCode(){
        this.computer = 30
        const intervalId = setInterval(() => {
          this.computer --
          if (this.computer <= 0) {
            this.computer = 0
            clearInterval(intervalId)
          }
        }, 1000);
        const result = await this.$API.reqCode(this.phone)
        if (result.code === 0) {
          Toast('验证码已发送')
        }else {
          this.computer = 0
          MessageBox('提示',result.msg || "发送失败")
        }
      },
      async isLogin(){
        let numbers
        if (this.isShowPSW) {
          numbers = ['name','pasword','pictureImg']
        }else if (this.isShowSms) {
          numbers = ['phone','code']
        }
        const success = await this.$validator.validateAll(numbers)
        let result
        if (success) {
          const {isShowPSW,phone,code,pasword,captcha} = this
          if (isShowPSW) {
            result = await this.$API.reqPSWLogin({name,pasword,cap})
            this.updateCaptcha()
            this.captcha = ''
          }else {
            result = await this.$API.reqSmsLogin({phone,code})
          }
          if (result.code === 0) {
            const user = result.data
          }
        }
      },
      updateCaptcha () {
        this.$refs.captcha.src = 'http://localhost:4000/captcha?time=' + Date.now()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../assets/css/mixins.styl'
  .loginContainer
      width 100%
      height 100%
      background #fff
      .loginInner
        padding-top 60px
        width 80%
        margin 0 auto
        .login_header
          .login_logo
            font-size 40px
            font-weight bold
            color #02a774
            text-align center
          .login_header_title
            padding-top 40px
            text-align center
            >a
              color #333
              font-size 14px
              padding-bottom 4px
              &:first-child
                margin-right 40px
              &.on
                color #02a774
                font-weight 700
                border-bottom 2px solid #02a774
        .login_content
          >form
            >div
              display none
              &.on
                display block
              input
                width 100%
                height 100%
                padding-left 10px
                box-sizing border-box
                border 1px solid #ddd
                border-radius 4px
                outline 0
                font 400 14px Arial
                &:focus
                  border 1px solid #02a774
              .login_message
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .get_verification
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  border 0
                  color #ccc
                  font-size 14px
                  background transparent
                  &.right_phone_number
                    color black
              .login_verification
                position relative
                margin-top 16px
                height 48px
                font-size 14px
                background #fff
                .switch_button
                  font-size 12px
                  border 1px solid #ddd
                  border-radius 8px
                  transition background-color .3s,border-color .3s
                  padding 0 6px
                  width 34px
                  height 16px
                  line-height 16px
                  color #fff
                  position absolute
                  top 50%
                  right 10px
                  transform translateY(-50%)
                  &.off
                    background #fff
                    .switch_text
                      float right
                      color #ddd
                  &.on
                    background #02a774
                  >.switch_circle
                    //transform translateX(27px)
                    position absolute
                    top -1px
                    left -5px
                    width 18px
                    height 16px
                    border 1px solid #ddd
                    border-radius 50%
                    background #fff
                    box-shadow 0 2px 4px 0 rgba(0,0,0,.1)
                    transition transform .3s
                    &.right
                      transform translateX(25px)
              .login_hint
                margin-top 12px
                color #999
                font-size 14px
                line-height 20px
                >a
                  color #02a774
            .login_submit
              display block
              width 100%
              height 42px
              margin-top 30px
              border-radius 4px
              background #4cd96f
              color #fff
              text-align center
              font-size 16px
              line-height 42px
              border 0
          .about_us
            display block
            font-size 12px
            margin-top 20px
            text-align center
            color #999
        .go_back
          position absolute
          top 5px
          left 5px
          width 30px
          height 30px
          >.iconfont
            font-size 20px
            color #999
      
</style>
