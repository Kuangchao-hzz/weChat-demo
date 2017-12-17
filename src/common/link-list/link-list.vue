<template>
  <div class="link-list base-padding">
    <div class="list__group" :class="{'list__group_b': border}">
      <p class="title">{{title}}</p>
      <div class="badge">
        <slot name="badge"></slot>
      </div>
      <div class="icon-right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'link-list',
    data () {
      return {}
    },
    props: {
      title: {
        type: String,
        default: '标题'
      },
      border: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  @import "~assets/css/variable"
  @import "~assets/css/mixin"

  .link-list
    .list__group
      width 100%
      padding-top 1.5rem !important
      padding-bottom 1.5rem !important
      font-size $font_size_p_s
      color $font_color_default
      display table
      >*
        display table-cell
        &.badge
          text-align right
        &.icon-right
          text-align right
      &.list__group_b
        border_b_line(1px)
</style>
