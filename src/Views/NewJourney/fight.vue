<template>
  <div class="fight-container">
    <div class="way-and-return">
      <div class="way__cont active">
        <span>单程</span>
      </div>
      <div class="return__cont">
        <span>往返</span>
      </div>
    </div>
    <div class="out-place-in">
      <p class="default">出发地</p>
      <div>
        <icon type="ion-shuffle" size="2"></icon>
      </div>
      <p class="default">目的地</p>
    </div>
    <div class="out-time-in">
      <div class="out__time">
        <span>12月15日</span>
        <small>周五</small>
      </div>
      <div class="in__time">
        <span>12月16日</span>
        <small>周六</small>
      </div>
    </div>
    <div class="submit-btn base-padding">
      <mt-button type="primary" size="large">查询</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    computed: {},
    methods: {}
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"
  .fight-container
    .way-and-return
      display flex
      box-sizing border-box
      border_b_line(1px)
      >div
        text-align center
        flex: 1 0 50%
        font-size $font_size_p
        span
          padding 1.5rem
          display inline-block
        &.active
          span
            box-sizing border-box
            border_b_line_active(2px)
    .out-place-in
      display flex
      align-items center
      border_b_line(1px)
      >*
        flex: 1 0 33.333%
        text-align center
        box-sizing border-box
        font-size $font_size_p_s
        &.default
          padding 1.5rem
          color $font_color_bg
    .out-time-in
      display flex
      >div
        flex: 1 0 50%
        padding 1.5rem
        span
          font-size $font_size_p
        small
          color $font_color_bg
</style>
