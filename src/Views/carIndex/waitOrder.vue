<template>
  <div class="wait-order-container">
    <div class="order__group base-padding">
      <div class="cont">
        <p>司机已将订单改派</p>
        <p>预估等待 20分钟</p>
      </div>
    </div>
    <h1>正在为你寻找车辆</h1>
    <h5>请等待其他司机师傅接单</h5>
    <div class="load-container" ref="loadContainer" :style="loadWidthSly">
      <load-svg :width="200" padding="20"></load-svg>
      <div class="time__cont">
        <p>已等待</p>
        <span>{{timeHandle}}</span>
      </div>
    </div>
    <div class="close-order base-padding">
      <div class="btn btn-text">取消订单</div>
    </div>
  </div>
</template>

<script>
  import LoadSvg from '../../common/loading/load-svg'
  let timer = null
  export default {
    created () {
      console.log(this)
    },
    name: 'wait-order',
    data () {
      return {
        loadWidth: 0,
        time: 62
      }
    },
    mounted () {
      this.loadWidth = this.$refs.loadContainer.clientWidth * 0.5
      clearInterval(timer)
      timer = setInterval(() => {
        this.time--
      }, 1000)
    },
    computed: {
      timeHandle () {
        let m = this.time / 60
        let s = this.time % 60 > 0 ? this.time % 60 : 0
        return `${parseInt(m)}:${s < 10 ? '0' + s : s}`
      },
      loadWidthSly () {
        return {
          height: (this.loadWidth + 120) + 'px'
        }
      }
    },
    components: {
      LoadSvg
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"

  .wait-order-container
    width 100%
    height 100%
    background #eaf0f3
    box-sizing border-box
    position: fixed
    left 0
    top 0
    z-index 999
    .order__group
      margin 20px 0
      .cont
        background #fff
        border-radius 4px
        overflow hidden
        box-shadow 3px 3px 5px rgba(0, 0, 0, .2)
        p
          padding 20px 0
          text-align center
          font-size 16px
          &:nth-child(1)
            border-bottom 1px #ddd solid
    >h1
      text-align center
      padding 1rem 0
      font-size 2rem
    >H5
      text-align center
      font-size 1.4rem
      color $font_color_desc
    .load-container
      position relative
      .time__cont
        position absolute
        left 50%
        top 45%
        transform translate(-50%, -50%)
        text-align center
        p
          font-size 1.5rem
          padding 1rem 0
          color $font_color_desc
        span
          font-size 4rem
          color #333c5c
  .btn
    width 100%
    margin 0 auto
    padding 15px 0
    text-align center
    border 1px #ddd solid
    font-size 18px
    background #fff
</style>
