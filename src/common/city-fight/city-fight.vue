<template>
  <transition name="fade">
    <div class="city-fight-container" v-show="popupVisible">
      <mt-header title="选择城市" @click.native="closePopup">
        <icon slot="left" type="ion ion-chevron-left" size="1.5"></icon>
      </mt-header>
      <mt-search v-model="city"></mt-search>

      <!-- 热门城市 -->
      <div class="hot-city-container">
        <h2 class="base-padding">热门城市</h2>
        <div class="city__group">
          <div class="hot-city-item"
               @click.stop="clickChange(item)"
               v-for="item in cityListData">
            {{item.nameCn}}
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import {apiGetHotCityList} from 'api/newJourney'
  // import { ERR_CODE_OK } from 'api/config'
  export default {
    name: 'city-fight',
    data () {
      return {
        city: '',
        cityListData: []
      }
    },
    props: {
      popupVisible: {
        type: Boolean,
        default: false
      }
    },
    computed: {},
    methods: {
      // 取消popup
      closePopup () {
        this.$emit('update:popupVisible', false)
      },
      // 获取城市列表
      _apiGetHotCityList () {
        this.$indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        apiGetHotCityList({
          hotCityName: this.city
        }).then(res => {
          this.$indicator.close()
          this.cityListData = res
        })
      },
      clickChange ($city) {
        this.$emit('change', $city)
        this.closePopup()
      }
    },
    watch: {
      city () {
        this._apiGetHotCityList()
      },
      popupVisible () {
        if (this.popupVisible) {
          this._apiGetHotCityList()
        }
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"

  .city-fight-container
    width 100%
    height 100%
    background #fff
    position fixed
    left 0
    top 0
    .mint-search
      position relative
      height auto
    .hot-city-container
      h2
        font-size $font_size_p_s
        padding 1rem
      .city__group
        display flex
        flex-wrap wrap
        .hot-city-item
          width 25%
          font-size $font_size_p_s
          padding 1rem 0
          text-align center
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s
  .fade-enter, .fade-leave-to
    opacity: 0
</style>
