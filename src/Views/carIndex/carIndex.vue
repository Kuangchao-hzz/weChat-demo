<template>
  <div class="car-index-container">
    <mt-header :title="pageTitle" style="background: #46a1bb">
      <icon slot="left" type="ion ion-chevron-left" size="1.5" @click.native="$router.go(-1)"></icon>
    </mt-header>
    <div id="mapContainer" class="map-container"></div>
    <select-place @subScribe="subScribeFn"></select-place>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="sl__nav base-padding">
        <span @click="closeTime">取消</span>
        <span>确定</span>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange" class="base-padding"></mt-picker>
    </mt-popup>
    <scroll class="page__container" v-show="handlePageRouter">
      <div>
        <router-view></router-view>
      </div>
    </scroll>
  </div>
</template>
<script>
  import SelectPlace from './selectPlace.vue'
  import Scroll from '../../common/scroll/scroll'
  import * as util from 'utils/utils'
  /* eslint-disable no-unused-vars */
  let map = null
  export default {
    data () {
      return {
        popupVisible: false,
        pickerValue: '',
        pageTitle: '用车',
        timeDate: [],
        slots: []
      }
    },
    mounted () {
      this.slots = this.generatePopupTimeDate()
      this.$nextTick(() => {
        map = new AMap.Map('mapContainer', {
          zoom: 10,
          center: [116.39, 39.9]
        })
      })
    },
    computed: {
      handlePageRouter () {
        console.log(this.$route)
        if (this.$route.name === 'carIndex') {
          return false
        }
        return true
      }
    },
    methods: {
      onValuesChange (vue, val) {
        console.log(val)
      },
      closeTime () {
        this.popupVisible = false
      },
      subScribeFn () {
        this.popupVisible = true
      },
      generatePopupTimeDate () {
        let slots = []
        let cutDate = new Date()
        let cutMonthDays = moment(cutDate).daysInMonth()
        let [slotDate, slotHour, slotMinute] = [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'left'
          }, {
            flex: 0.5,
            values: [],
            className: 'slot2',
            textAlign: 'right'
          }, {
            flex: 0.5,
            values: [],
            className: 'slot3',
            textAlign: 'right'
          }
        ]
        // 生成单列日期数数据
        for (let i = 0; i < cutMonthDays; i++) {
          let day = (i + 1) < 10 ? '0' + (i + 1) : (i + 1)
          // 如果等于当前日期, 则默认显示
          if (moment(cutDate).date() === day) {
            slotDate.defaultIndex = day - 1
          }
          let date = moment(`${cutDate.getFullYear()}-${cutDate.getMonth() + 1}-${day}`)
          slotDate.values.push(`${date.month() + 1}月${day}日 星期${util.getWeekFormat(moment(date).days())}`)
        }
        // 生成单列小时数数据
        for (let i = 1; i < 24; i++) {
          let _hour = i < 10 ? '0' + i : i
          // 如果等于当前小时, 则默认显示
          if (moment(cutDate).hours() === _hour) {
            slotHour.defaultIndex = _hour - 1
          }
          slotHour.values.push(`${_hour}点`)
        }
        // 生成单列分钟数数据
        for (let i = 0; i < 60; i++) {
          let _minute = i < 10 ? '0' + i : i
          // 如果等于当前分钟, 则默认显示
          if (moment(cutDate).minute() === i + 1) {
            slotMinute.defaultIndex = i + 1
          }
          slotMinute.values.push(`${_minute}分`)
        }
        slots.push(slotDate, slotHour, slotMinute)
        return slots
      }
    },
    components: {
      SelectPlace,
      Scroll
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  @import "~assets/css/variable"
  @import "~assets/css/mixin"

  .car-index-container
    width 100%
    height 100%
    background #ddd
    position relative
    .mint-popup
      width 100%
      .sl__nav
        display flex
        justify-content space-between
        font-size $font_size_p_s
        color $font_color_default
        border-bottom 1px #f60 solid
        span
          padding 1.5rem 0
          &:nth-child(2)
            color #f60
    .picker-slot-center:nth-child(1), .picker-slot-center:nth-child(2)
      display none
    .page__container
      width 100%
      overflow hidden
      background #ddd
      position: fixed
      left 0
      top 4rem
      bottom 0
      >div
        min-height 100%
    #mapContainer
      width 100%
      position absolute
      top 0
      bottom 0

</style>
