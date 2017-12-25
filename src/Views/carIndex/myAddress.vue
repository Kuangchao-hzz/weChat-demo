<template>
  <div class="my-address-container">
    <div class="new-address">
      <mt-button type="primary" size="large">
        <icon type="ion ion-plus-round" size="2"></icon>
        新增地址
      </mt-button>
    </div>
    <div class="gutter_line"></div>
    <div class="my-address-list">
      <swiper-out>
        <div slot="btn">设为家庭地址</div>
        <div slot="btn">编辑</div>
        <div slot="btn">删除</div>
      </swiper-out>
    </div>

  </div>
</template>

<script>
  import SwiperOut from '../../common/swiper-out/swiper-out.vue'
  export default {
    name: 'my-address',
    components: {
      SwiperOut
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"
 .my-address-container
   width 100%
   height 100%
   padding-top 4rem
   background #ddd
   box-sizing border-box
   position: fixed
   left 0
   top 0
   z-index 999
   .new-address
     padding 1rem
     font-size $font_size_p_s
     background #fff
   .my-address-list
     padding 0 15px
     background #fff
</style>
