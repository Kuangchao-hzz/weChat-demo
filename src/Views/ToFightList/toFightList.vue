<template>
  <div class="to-fight-list">
    <mt-header :title="handleTitle">
      <icon slot="left" type="ion ion-chevron-left" size="1.5" @click.native.stop="$router.go(-1)"></icon>
    </mt-header>
    <div class="scroll-wrapper">
      <scroll ref="scroll" class="scroll-container" :data="handleFightList">
        <div>
          <div class="fight-list-container">
            <div class="fight_list__group base-padding"
                 v-for="(fight, index) in handleFightList">
              <div class="fight__item">
                <div class="fight__form">
                  <h5>{{fight.fromTime}}</h5>
                  <small>{{fight.fromInfo}}</small>
                </div>
                <div class="fight__line"></div>
                <div class="fight__to">
                  <h5>{{fight.toTime}}</h5>
                  <small>{{fight.toAirportName}}</small>
                </div>
                <div class="fight__price">
                  <h5><span style="font-size: 1rem">￥</span>{{fight.lowestPrice}}</h5>
                  <small v-if="fight.restSeatNum>=9">有票</small>
                  <small v-else>剩{{fight.restSeatNum}}张</small>
                </div>
              </div>
              <div class="fight__info">
                <p class="fight__title">{{fight.carrierInfo}}&nbsp;&nbsp;|&nbsp;&nbsp;{{fight.aircraftInfo}}</p>
                <p class="fight__lowPrice" v-if="fight.withinTwoHoursLowestPrice">低价</p>
              </div>
            </div>
          </div>
        </div>
      </scroll>
    </div>

  </div>
</template>
<script>
  import scroll from '../../common/scroll/scroll.vue'
  export default {
    data () {
      return {
        fightData: {}
      }
    },
    created () {
      this.fightData = JSON.parse(localStorage.getItem('fightData'))
    },
    computed: {
      handleTitle () {
        return `${this.fightData.params.fightDeparturePlace.nameCn} - ${this.fightData.params.fightOneWayDeparturePlace.nameCn}`
      },
      handleFightList () {
        let data = this.fightData.data.flightListForm[0].flightShowDetail
        if (data) {
          return data
        }
        return []
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scroll.refresh()
      })
    },
    methods: {},
    components: {
      scroll
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"
  .to-fight-list
    height 100%
    overflow hidden
    .scroll-wrapper
      height 100%
      box-sizing border-box
      border-bottom 4rem solid transparent
      .scroll-container
        height 100%
        overflow hidden
        .fight-list-container
          .fight_list__group
            padding-top 1rem
            padding-bottom 1rem
            border_t_line(1px)
            .fight__item
              display flex
              >div
                flex: 1 0 25%
                h5
                  font-size $font_size_p
                  color $font_color_default
                small
                  color $font_color_desc
                  font-size $font_size
                  padding .5rem 0
                  display block
                &.fight__price
                  text-align right
                  h5
                   color $font_color_importance
                &.fight__line
                  position relative
                  &::before
                    content ''
                    display block
                    width 80%
                    border-top 1px solid #000
                    position absolute
                    top 50%
                    right 2rem
                    transform translateY(-50%) scaleY(.5)
                  &::after
                    content ''
                    display inline-block
                    width 0
                    height 0
                    border-left .5rem solid #000
                    border-right .5rem solid transparent
                    border-top .2rem solid transparent
                    border-bottom .2rem solid #000
                    position absolute
                    top 50%
                    right 2rem
                    transform translateY(-100%)
                    transform-origin right
                    z-index 99
            .fight__info
              display flex
              justify-content space-between
              align-items center
              .fight__title
                padding-top .5rem
                font-size $font_size
                color $font_color_desc
              .fight__lowPrice
                padding .5rem
                background $font_color_importance
                border-radius .3rem
</style>
