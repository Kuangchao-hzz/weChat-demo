<template>
  <div class="select-place-container">
    <div class="popup__group">
      <div class="user__car_time">
        <div class="car-now color-default">现在</div>
        <div class="car-subScribe" @click="subScribe">预约</div>
      </div>
      <div class="user__car_current">
        <div class="dot"></div>
        <small>[当前]</small>
        <p>普罗娜商务广场</p>
      </div>
      <div class="user__car_to" @click="selectPlaceFn">
        <div class="dot"></div>
        <p class="color-default">你要去哪儿</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'select-place',
    data () {
      return {
        pageTitle: '用车'
      }
    },
    computed: {},
    methods: {
      // 选择地址后的函数
      selectPlaceFn () {
        this.$router.push({
          path: '/carIndex/placeList'
        })
      },
      subScribe () {
        this.$emit('subScribe')
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"

  .select-place-container
    width 95%
    background #FFF
    position fixed
    left 50%
    bottom 0
    transform translateX(-50%)
    .popup__group
      padding 0 2rem
      >div
        height 5rem
      .user__car_time
        display flex
        justify-content space-between
        align-items center
        >div
          font-size $font_size_p_s
          color $font_color_default
          &.car-subScribe
            padding 0.6rem 1rem
            background #f60
            color $font_color_white
            border-radius .2rem
      .user__car_current
        display flex
        align-items center
        box-sizing border-box
        border_b_line(1px)
        border_t_line(1px)
        .dot
          dot_el(.4rem, #000)
          margin-right 1rem
        >small
          color $font_color_active
          margin-right .8rem
        >p
          color $font_color_default
          font-size $font_size_p_s
      .user__car_to
        display flex
        align-items center
        .dot
          dot_el(.4rem, #000)
          margin-right 1rem
        >p
          color $font_color_default
          font-size $font_size_p_s
    .color-default
      color $font_color_desc !important
</style>
