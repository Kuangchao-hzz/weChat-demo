<template>
  <div class="node-data">
    <img src="../../assets/images/journey_none.png" width="124" height="124">
    <p>{{title}}</p>
    <p>{{small}}</p>
  </div>
</template>
<script>
  export default {
    name: 'none-data',
    props: {
      title: {
        type: String,
        default: '暂未发现行程'
      },
      small: {
        type: String,
        default: '您可以通过购买或新增行程来告诉我'
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"
  .node-data
    padding-top 4rem
    text-align center
    p:nth-of-type(1)
      margin-top 1rem
      font-size $font_size_p_s
      color $font_color_default
    p:nth-of-type(2)
      line-height 2.4rem
      font-size $font_size_default
      color $font_color_desc
</style>
