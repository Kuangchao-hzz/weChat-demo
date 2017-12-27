<template>
  <div class="car-type-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="./car01.png"/></mt-swipe-item>
      <mt-swipe-item><img src="./car01.png"/></mt-swipe-item>
      <mt-swipe-item><img src="./car01.png"/></mt-swipe-item>
    </mt-swipe>
    <p class="car__title">预计时长XX分钟，行驶XXX公里</p>
    <div class="car_type_group">
      <div class="car__list" @click="$router.push({path: '/carIndex/carDetail'})">
        <div class="car__logo"><img src="./car02.png" height="100" width="100"/></div>
        <div class="car__name">滴滴专车</div>
        <div class="car__price">￥52</div>
        <div class="car__reserve">预定</div>
      </div>
      <div class="car__list">
        <div class="car__logo"><img src="./car02.png" height="100" width="100"/></div>
        <div class="car__name">神州专车</div>
        <div class="car__price">￥52</div>
        <div class="car__reserve">预定</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: '',
    data () {
      return {
        name: ''
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  .car-type-container
    width 100%
    height 100%
    padding-top 4rem
    background #f5f8f9
    box-sizing border-box
    position: fixed
    left 0
    top 0
    z-index 999
    .mint-swipe
      height 15rem
      .mint-swipe-item
        height 100%
        >img
          width 100%
          height 100%
    .car__title
      text-align center
      padding 20px 0
      font-size 18px
    .car_type_group
      padding 0 15px
      .car__list
        background #fff
        padding 0 10px
        display flex
        justify-content space-between
        align-items center
        border-bottom 1px #ddd solid
        >div
          font-size 14px
          &.car__logo
            width 5rem
            height 5rem
            img
              width 100%
              height 100%
          &.car__name
            width 40%
          &.car__price
            width 20%
            text-align right
            color #f60
          &.car__reserve
            padding 5px 10px
            background #46a1bb
            color #fff
            border-radius 2px
</style>
