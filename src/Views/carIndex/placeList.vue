<template>
  <div class="place-list-container">
    <div class="select_search_group base-padding">
      <div class="place">
        上海
        <icon type="ion ion-chevron-down" size="1"></icon>
      </div>
      <div class="search__cont">
        <icon type="ion ion-search" size="2"></icon>
        <input type="text" placeholder="请输入下车地点">
      </div>
      <div class="close">取消</div>
    </div>
    <div class="gutter_line"></div>
    <div class="select_place_group">
      <div class="place-form base-padding" @click="$router.push({path: '/carIndex/myAddress'})">
        <icon type="ion-home" size="2"></icon>
        <div class="title">
          <p>家</p>
          <small>点击设置</small>
        </div>
      </div>
      <div class="place-to base-padding">
        <icon type="ion-home" size="2"></icon>
        <div class="title">
          <p>家</p>
          <small>点击设置</small>
        </div>
      </div>
    </div>
    <div class="gutter_line"></div>
    <div class="place-list-group base-padding">
      <icon type="ion ion-ios-location" size="2"></icon>
      <div class="item">
        <p class="title">
          <span class="tag">当前</span>
          普罗娜商务广场
        </p>
        <p class="small">普陀区金沙江路靠近普罗娜商务广场</p>
      </div>
    </div>
    <div class="place-list-group base-padding">
      <icon type="ion ion-ios-location" size="2"></icon>
      <div class="item">
        <p class="title">
          <span class="tag">当前</span>
          普罗娜商务广场
        </p>
        <p class="small">普陀区金沙江路靠近普罗娜商务广场</p>
        <div class="exit">
          <div class="exit-item">北门</div>
          <div class="exit-item">北门</div>
          <div class="exit-item">北门</div>
          <div class="exit-item">北门</div>
          <div class="exit-item">北门</div>
        </div>
      </div>
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

 .place-list-container
   width 100%
   height 100%
   background #fff
   padding-top 4rem
   position: fixed
   left 0
   top 0
   .select_search_group
     display flex
     justify-content space-between
     align-content center
     padding-top 1.5rem
     padding-bottom 1.5rem
     .place
       width 28%
       line-height 2rem
       color $font_color_default
       border-right 1px #ddd solid
       font-size $font_size_p_s
       span
         margin 0 .5rem
     .close
       width 20%
       text-align right
       line-height 2rem
       font-size $font_size_p_s
       border-left 1px #ddd solid
       color $font_color_default
     .search__cont
       width 100%
       display flex
       align-content center
       span
         color $font_color_bg
         margin 0 1rem
       input
         height 100%
         font-size $font_size_p_s
         outline none
   .select_place_group
     display: flex
     padding 1rem 0
     >div
       width 50%
       display flex
       align-content center
       .title
         display inline-block
         padding 0 1rem
         font-size $font_size
         p
           font-size $font_size_p_s
           padding-bottom .8rem
         small
           color $font_color_desc
     .place-form
       border-right 1px #ddd solid
   .place-list-group
     display flex
     align-items center
     padding-top 1rem
     padding-bottom 1rem
     border_b_line(1px)
     >span
       display block
     .item
       width 100%
       padding-left 1rem
       line-height 2rem
       .title
         font-size $font_size_p_s
         line-height 2rem
         .tag
           background #ddd
           padding .2rem
           font-size $font_size
       .small
          color $font_color_desc
       .exit
         display flex
         width 100%
         flex-wrap wrap
         .exit-item
           width 25%
           margin-right 1.5rem
           margin-top 1rem
           padding .5rem 0
           border 1px solid #ddd
           border-radius 4px
           text-align center
           font-size $font_size_default
</style>
