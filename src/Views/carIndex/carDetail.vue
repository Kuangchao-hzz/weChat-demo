<template>
  <div class="car-detail-container">
    <div class="gutter_line"></div>
    <div class="gutter_line"></div>
    <div class="popup__group">
      <div class="user__car_title">
        舒适型
      </div>
      <div class="user__car_list">
        <div class="dot"></div>
        <small>[当前]</small>
        <p>普罗娜商务广场</p>
      </div>
      <div class="user__car_list" @click="selectPlaceFn">
        <div class="dot"></div>
        <p class="">上海站</p>
      </div>
      <div class="user__car_list" @click="selectPlaceFn">
        <icon type="ion ion-clock" size="1.5"></icon>
        <p class="">12月19日 &nbsp;&nbsp;02 : 20</p>
      </div>
    </div>
    <div class="gutter_line"></div>
    <div class="gutter_line"></div>
    <div class="gutter_line"></div>
    <div class="link__item base-padding">
      <div class="item__left">支付方式</div>
      <div class="item__right">
        个人支付
      </div>
      <div class="item__icon">
        <icon type="ion-chevron-right" size="1.5"></icon>
      </div>
    </div>
    <div class="link__item base-padding">
      <div class="item__left">差旅类型</div>
      <div class="item__right">
        拜访客户
      </div>
      <div class="item__icon">
        <icon type="ion-chevron-right" size="1.5"></icon>
      </div>
    </div>
    <div class="link__item base-padding">
      <div class="item__left">费用归属</div>
      <div class="item__right">
        产品部
      </div>
      <div class="item__icon">
        <icon type="ion-chevron-right" size="1.5"></icon>
      </div>
    </div>
    <div class="link__item base-padding">
      <div class="item__left">附加信息</div>
      <div class="item__right color-default">
        请填写审批的附加信息
      </div>
    </div>
    <h2 class="detail-title base-padding">退改规则</h2>
    <div class="detail-rules base-padding">
      <p>1. 司机接单后开始计算时间，3分钟内可以免费取消订单，司机接单后3分钟，需要支付5元违约金</p>
      <p>2. 司机在开始服务后订单不可取消</p>
      <p>3. 订单不支持修改</p>
    </div>
    <div class="detail-submit" @click="subScribe">
      <div class="btn">叫车</div>
    </div>
    <mt-popup v-model="popupVisible" position="bottom">
      <div class="sl__nav base-padding">
        <span @click="closeTime">取消</span>
        <span>确定</span>
      </div>
      <div class="apply-method">
        <div class="item base-padding" :class="{'active': checkmark}" @click="checkmark = true">
          个人支付
        <icon type="ion-checkmark-circled" size="2.2" style="color: blueviolet"></icon>
        </div>
        <div class="item base-padding" :class="{'active': !checkmark}" @click="checkmark = false">
          企业支付
          <icon type="ion-checkmark-circled" size="2.2" style="color: blueviolet"></icon>
        </div>
      </div>
    </mt-popup>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        pageTitle: '用车',
        popupVisible: false,
        checkmark: true
      }
    },
    computed: {
      checkmarkHandle () {
        return this.checkmark
      }
    },
    methods: {
      // 选择地址后的函数
      selectPlaceFn () {
        this.$router.push({
          path: '/carIndex/placeList'
        })
      },
      subScribe () {
        this.popupVisible = true
      },
      closeTime () {
        this.popupVisible = false
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import "~assets/css/variable"
  @import "~assets/css/mixin"

  .car-detail-container
    .popup__group
      padding 0 1rem
      background #fff
      >div
        height 3rem
      .user__car_title
        display flex
        justify-content space-between
        align-items center
        font-size 16px
      .user__car_list
        display flex
        align-items center
        box-sizing border-box
        >span
          width 2rem
          text-align left
        .dot
          dot_el(.4rem, #46a1bb)
          margin-right 1rem
        >small
          color $font_color_active
          margin-right .8rem
        >p
          color $font_color_default
          font-size $font_size_p_s
    .link__item
      background #fff
      font-size 16px
      display flex
      justify-content space-between
      align-items center
      padding-top 1.5rem
      padding-bottom 1.5rem
      border-bottom 1px #ddd solid
      .item__right
        width 70%
        text-align right
    .detail-title
      width 100%
      background #ddd
      padding-top 1.5rem
      padding-bottom 1.5rem
    .detail-rules
      background #fff
      padding-top 1.5rem
      padding-bottom 1.5rem
      >p
        font-size 16px
        line-height 16px
    .detail-submit
      padding 20px 0
      .btn
        width 90%
        background #46a1bb
        margin 0 auto
        text-align center
        font-size 22px
        padding 15px 0
        color #fff
    .apply-method
      font-size 18px
      .item
        padding-top 2rem
        padding-bottom  2rem
        display flex
        justify-content space-between
        align-items center
        position relative
        span
          display none !important
          position absolute
          top 50%
          right 1.5rem
          transform translateY(-50%)
        &.active
          span
            display block !important
        &:nth-child(1)
          border-bottom 1px #ddd solid
    .color-default
      color $font_color_desc !important
</style>
