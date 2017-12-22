<template>
  <div class="car-index-container">
    <mt-header :title="pageTitle">
      <icon slot="left" type="ion ion-chevron-left" size="1.5"></icon>
    </mt-header>
    <select-place @subScribe="subScribeFn"></select-place>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="sl__nav base-padding">
        <span @click="closeTime">取消</span>
        <span>确定</span>
      </div>
      <mt-picker :slots="slots" @change="onValuesChange" class="base-padding"></mt-picker>
    </mt-popup>
  </div>
</template>
<script>
  import SelectPlace from './selectPlace.vue'
  import * as util from 'utils/utils'
  export default {
    data () {
      return {
        popupVisible: false,
        pickerValue: '',
        pageTitle: '',
        timeDate: [],
        slots: []
      }
    },
    mounted () {
      this.slots = this.generatePopupTimeDate()
    },
    computed: {

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
          if (moment(cutDate).minute() === _minute) {
            slotMinute.defaultIndex = _minute
          }
          slotMinute.values.push(`${_minute}分`)
        }
        slots.push(slotDate, slotHour, slotMinute)
        return slots
      }
    },
    components: {
      SelectPlace
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
          padding 1rem
          &:nth-child(2)
            color #f60
    .picker-slot-center:nth-child(1), .picker-slot-center:nth-child(2)
      display none
</style>
