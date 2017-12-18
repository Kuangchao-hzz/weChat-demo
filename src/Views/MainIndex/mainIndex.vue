<template>
  <div class="mainIndex-container">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="../../assets/images/weather/banner1.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/images/weather/banner2.png">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../../assets/images/weather/banner3.png">
      </mt-swipe-item>
    </mt-swipe>
    <div class="journey_list_group">
      <router-link to="/NewJourney" tag="div" class="group__list active base-padding">
        <span class="list__label">
            <icon type="ion ion-ios-list-outline" size="2"></icon>
          </span>
        <p class="list__text">新增行程</p>
      </router-link>
      <div class="gutter_line"></div>
      <div class="group__list base-padding" style="border-bottom: 1px #333 solid">
        <span class="list__label">
          <icon type="ion ion-ios-list-outline" size="2"></icon>
        </span>
        <p class="list__text">近期行程</p>
      </div>
    </div>
    <div class="journey_cont_group">
      <none-data></none-data>
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
  .mainIndex-container
    width 100%
    height 100%
    .mint-swipe
      height 12.5rem
      .mint-swipe-item
        img
          width 100%
          height 100%
    .journey_list_group
      width 100%
      .group__list
        display flex
        align-items center
        padding-top 5px
        padding-bottom 5px
        box-sizing border-box
        .list__label
          padding-top 1rem
          padding-right 1rem
          padding-bottom 1rem
          color $font_color_default
        .list__text
          color $font_color_default
          font-size $font_size_p_s
        &.active
          .list__label, .list__text
            color $font_color_active
</style>
