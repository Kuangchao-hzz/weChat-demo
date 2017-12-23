<template>
  <div class="my-address-container">
    <div class="new-address">
      <mt-button type="primary" size="large">
        <icon type="ion ion-plus-round" size="2"></icon>
        新增地址
      </mt-button>
    </div>
    <div class="gutter_line"></div>
  </div>
</template>

<script>
  export default {
    name: 'my-address'
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"
 .my-address-container
   .new-address
     padding 1rem
     font-size $font_size_p_s
     background #fff
</style>
