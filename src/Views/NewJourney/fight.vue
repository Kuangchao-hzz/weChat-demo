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
      <p @click="citySelectOpen('departure')">
        <span class="default" v-if="!fightDeparturePlace.nameCn">出发地</span>
        <span>{{fightDeparturePlace.nameCn}}</span>
      </p>
      <div style="height: 100%;" @click="placeTransformFn">
        <icon type="ion-shuffle" size="2"></icon>
      </div>
      <p @click="citySelectOpen('placeDeparture')">
        <span class="default" v-if="!fightOneWayDeparturePlace.nameCn">目的地</span>
        <span>{{fightOneWayDeparturePlace.nameCn}}</span>
      </p>
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
      <mt-button type="primary" size="large" @click="_apiGetFightList">查询</mt-button>
    </div>
    <mt-datetime-picker
      ref="fightTimePickerRef"
      type="date"
      v-model="constNowDate"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </mt-datetime-picker>
    <city-fight :popupVisible.sync="popupVisible" @change="citySelected"></city-fight>
  </div>
</template>
<script>
  import {apiGetFightList} from 'api/newJourney'
  const weeks = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  export default {
    data () {
      return {
        popupVisible: false, // 城市popup
        departure: 'departure',
        placeDeparture: 'departure',
        isOneWay: true, // 是否单程
        fightDeparturePlace: {}, // 出发地
        fightOneWayDeparturePlace: {}, // 目的地
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
      // 获取航班信息
      _apiGetFightList () {
        let params = {
          fromCityCode: this.fightDeparturePlace.code,
          toCityCode: this.fightOneWayDeparturePlace.code,
          fromDate: moment(this.fightDepartureTime).format('YYYY-MM-DD'),
          sort: 'date_early',
          isFilter: true
        }
        this.$indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        apiGetFightList(params).then(res => {
          this.$apiHandleCatch(res).then(resolve => {
            let fightData = Object.assign({}, {
              params: Object.assign({}, params, {
                fightDeparturePlace: this.fightDeparturePlace,
                fightOneWayDeparturePlace: this.fightOneWayDeparturePlace
              }),
              data: res
            })
            localStorage.setItem('fightData', JSON.stringify(fightData))
            this.$indicator.close()
            this.$router.push('/toFightList')
          }, reject => {})
        })
      },
      // 选中城市
      citySelected (city) {
        this.placeDeparture === 'departure' ? this.fightDeparturePlace = city : this.fightOneWayDeparturePlace = city
      },
      // 显示选择城市组件
      citySelectOpen (outIn) {
        this.placeDeparture = outIn
        this.popupVisible = true
      },
      // 显示选择时间组件
      datetimePickerOpen (picker, departure) {
        console.log(departure)
        this.departure = departure
        this.$refs[picker].open()
      },
      // 去换 出发地 与目的地
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
      p
       padding 1.5rem
       .default
         color $font_color_bg
      >p, >div
        flex: 1 0 33.333%
        text-align center
        box-sizing border-box
        font-size $font_size_p_s
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
