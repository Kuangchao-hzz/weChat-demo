<template>
  <div class="newJourney-container">
    <mt-header title="新增行程">
      <icon slot="left" type="ion ion-chevron-left" size="1.5"  @click.native="$router.go(-1)"></icon>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="fight">机票</mt-tab-item>
      <mt-tab-item id="hotel">酒店</mt-tab-item>
      <mt-tab-item id="train">火车票</mt-tab-item>
      <mt-tab-item id="other">其它</mt-tab-item>
    </mt-navbar>
    <div class="gutter_line"></div>
    <div class="gutter_line"></div>
    <mt-tab-container v-model="selected" swipeable>
      <mt-tab-container-item id="fight">
        <fight></fight>
      </mt-tab-container-item>
      <mt-tab-container-item id="hotel">
        酒店
      </mt-tab-container-item>
      <mt-tab-container-item id="train">
        火车票
      </mt-tab-container-item>
      <mt-tab-container-item id="other">
        其它
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  import Fight from './fight.vue'
  export default {
    data () {
      return {
        selected: 'fight'
      }
    },
    computed: {},
    methods: {},
    components: {
      Fight
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  @import "~assets/css/variable"
  @import "~assets/css/mixin"
  .newJourney-container
    width 100%
    height 100%
    color #333
    .mint-navbar
      .mint-tab-item
        .mint-tab-item-label
          font-size $font_size_p
        &.is-selected
          margin-bottom 0
          border_b_line_active(1px)
</style>
