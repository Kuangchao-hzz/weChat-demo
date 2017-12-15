<template>
  <div class="signup-container">
    <div class="signup__logo">
      <img src="../../assets/images/logo.png">
      <h2>商旅助手</h2>
    </div>
    <div class="signup__form">
      <div class="input-group">
        <span class="input-label">
          <icon type="ion ion-person" size="2"></icon>
        </span>
        <input class="form-control" v-model="username" placeholder="手机号/邮箱" type="text">
      </div>
      <div class="input-group">
        <span class="input-label">
          <icon type="ion ion-locked" size="2"></icon>
        </span>
        <input class="form-control"  v-model="password" placeholder="请输入密码" type="password">
      </div>
      <div class="submit-btn base-padding">
        <mt-button type="primary" size="large" @click="_api_signup" v-if="!loading">立即登录</mt-button>
        <mt-button type="primary" size="large" disabled v-else>
          <img src="../../assets/images/loading.gif" width="20" height="20" style="vertical-align: middle;">
          登录中...</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
  import { apiSignup } from 'api/signup'
  import { ERR_CODE_OK } from 'api/config'
  export default {
    data () {
      return {
        loading: false,
        username: '18721193515',
        password: 'tanreyuanjianxin'
      }
    },
    computed: {},
    methods: {
      _api_signup () {
        let params = {
          username: this.username,
          password: this.password
        }
        this.loading = true
        setTimeout(() => {
          apiSignup(params).then(res => {
            this.loading = false
            if (res.code === ERR_CODE_OK) {
              console.log(res)
            } else {
              this.$message(res.msg)
            }
          })
        }, 1000)
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import "~assets/css/variable.styl"
  .signup-container
    width 100%
    height: 100%
    position relative
    background url("../../assets/images/bg/loginBg.b4f6efd.png") no-repeat
    background-size: 100%
    .signup__logo
      width 100%
      display block
      padding-top 8rem
      padding-bottom 5rem
      box-sizing border-box
      text-align center
      h2
        font-size 2.2rem
        color #1176CC
        margin-top 2rem
        font-weight 600
    .signup__form
      width 100%
      .input-group
        width 100%
        position relative
        display flex
        align-items center
        border-collapse separate
        margin-bottom 15px
        border-bottom 2px solid #4fc08d
        .input-label
          color $success_btn_bg_color
          padding 1rem
        .form-control
          float left
          width 100%
          border none
          outline none
          font-size 1.5rem
          display table-cell
          height 34px
          background transparent
      .submit-btn
        padding 20px 40px 0 40px
        button
          border-radius 0
          background $success_btn_bg_color
</style>
