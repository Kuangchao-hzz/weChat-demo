<template>
  <div class="wait-apply-order-container">
    <div class="list base-padding current">
      <div class="flex-left">
        <h5>普罗娜商务广场</h5>
        <p>上海普陀区妇婴保健院</p>
        <p>用车时间: 2017-12-19  13:29</p>
      </div>
      <div class="flex-right">
        <h5>￥23.5元</h5>
        <p>待付款</p>
        <p>用车</p>
      </div>
    </div>
    <div class="list base-padding">
      <div class="flex-left">
        <h5>上海和平饭店</h5>
        <p>特色江景套房</p>
        <p>入住时间: 2016-09-27 6:00</p>
        <p>离店时间: 2016-09-27 6:00</p>
      </div>
      <div class="flex-right">
        <h5>￥2000元</h5>
        <p>待付款</p>
        <p>酒店</p>
      </div>
    </div>
    <div class="list base-padding">
      <div class="flex-left">
        <h5>北京-苏州</h5>
        <p>上海航空FM9158</p>
        <p>出发时间: 2016-09-27 6:00</p>
      </div>
      <div class="flex-right">
        <h5>￥2000元</h5>
        <p>待付款</p>
        <p>机票</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wait-order'
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"
  .wait-apply-order-container
    .list
      display flex
      justify-content space-between
      padding-top 1rem
      padding-bottom 1rem
      background #fff
      margin-bottom 10px
      >div
        &.flex-left
          display flex
          align-content space-between
          flex-wrap wrap
          min-height 80px
          h5
            font-size 1.6rem
            line-height 24px
          p
            color #777
          >*
            width 100%
            text-align left
        &.flex-right
          display flex
          align-content space-between
          flex-wrap wrap
          h5
            font-size 16px
            color #f60
          p:nth-child(2)
            color #f60
          >*
            width 100%
            text-align right
      &.current
        .flex-left
          padding-left 2rem
          h5
            font-size 1.6rem
            color $font_color_default
            position relative
            &::before
              content ''
              display block
              width 1rem
              height 1rem
              border-radius 50%
              position absolute
              left -2rem
              top 50%
              transform translateY(-50%)
              background #46a1bb
          p
            font-size 1.4rem
            color $font_color_default
            position relative
            &:nth-child(2)::before
              content ''
              display block
              width 1rem
              height 1rem
              border-radius 50%
              position absolute
              left -2rem
              top 50%
              transform translateY(-50%)
              background #ff9800
</style>
