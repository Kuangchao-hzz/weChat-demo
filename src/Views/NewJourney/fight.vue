<template>
  <div class="fight-container">
    <div class="way-and-return">
      <div class="way__cont" :class="{'active': isOneWay}" @click="isOneWay = true">
        <span>单程</span>
      </div>
      <div class="return__cont" :class="{'active': !isOneWay}" @click="isOneWay = false">
        <span>往返</span>
      </div>
    </div>
    <div class="out-place-in" :style="handleOutPlaceIn">
      <p class="default">出发地</p>
      <div style="height: 100%;" @click="placeTransformFn">
        <icon type="ion-shuffle" size="2"></icon>
      </div>
      <p class="default">目的地</p>
    </div>
    <div class="out-time-in">
      <div class="out__time" @click="datetimePickerOpen('fightTimePickerRef', 'departure')">
        <span>{{handleFightOutTime.date}}</span>
        <small>{{handleFightOutTime.week}}</small>
      </div>
      <div class="in__time" @click="datetimePickerOpen('fightTimePickerRef', 'oneWayDeparture')" v-if="!isOneWay">
        <span>{{handleFightInTime.date}}</span>
        <small>{{handleFightInTime.week}}</small>
      </div>
    </div>
    <div class="submit-btn base-padding">
      <mt-button type="primary" size="large">查询</mt-button>
    </div>
    <mt-datetime-picker
      ref="fightTimePickerRef"
      type="date"
      v-model="constNowDate"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>

  </div>
</template>
<script>
  const weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  export default {
    data () {
      return {
        departure: 'departure',
        isOneWay: true, // 是否单程
        placeTransform: true, // 目的地切换状态
        constNowDate: new Date(), // 出发时间初始值
        fightDepartureTime: new Date(), // 出发时间,
        fightOneWayDepartureTime: new Date() // 回程出发时间
      }
    },
    computed: {
      handleOutPlaceIn () {
        return {
          'flex-direction': this.placeTransform ? 'row' : 'row-reverse'
        }
      },
      handleFightOutTime () {
        let date = moment(this.fightDepartureTime)
        return {
          date: `${date.format('MM')}月${date.format('DD')}日`,
          week: `${weeks[date.format('d')]}`
        }
      },
      handleFightInTime () {
        let date = moment(this.fightOneWayDepartureTime)
        return {
          date: `${date.format('MM')}月${date.format('DD')}日`,
          week: `${weeks[date.format('d')]}`
        }
      }
    },
    methods: {
      datetimePickerOpen (picker, departure) {
        console.log(departure)
        this.departure = departure
        this.$refs[picker].open()
      },
      placeTransformFn () {
        this.placeTransform = !this.placeTransform
      },
      // 判断需要触发的是单程的时间还是返程的时间 'departure' : 'oneWayDeparture'
      handleChange (value) {
        this.departure === 'departure' ? this.fightDepartureTime = value : this.fightOneWayDepartureTime = value
      }
    },
    watch: {
      isOneWay () {
        this.fightOneWayDepartureTime = moment(this.fightDepartureTime).add(1, 'd')
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  @import "~assets/css/variable"
  @import "~assets/css/mixin"
  .fight-container
    .way-and-return
      display flex
      box-sizing border-box
      border_b_line(1px)
      >div
        text-align center
        flex: 1 0 50%
        font-size $font_size_p
        span
          padding 1.5rem
          display inline-block
        &.active
          span
            box-sizing border-box
            border_b_line_active(2px)
    .out-place-in
      display flex
      align-items center
      border_b_line(1px)
      >*
        flex: 1 0 33.333%
        text-align center
        box-sizing border-box
        font-size $font_size_p_s
        &.default
          padding 1.5rem
          color $font_color_bg
    .out-time-in
      display flex
      >div
        width: 50%
        padding 1.5rem
        span
          font-size $font_size_p
        small
          color $font_color_bg
</style>
