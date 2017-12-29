<template>
  <div class="order-detail-container">
    <div class="order-title base-padding">
      待支付
    </div>
    <div class="order-price base-padding">
      <p>订单总额 ￥48.5</p>
      <p>价格明细 <icon type="ion-chevron-down" size="1.5"></icon></p>
    </div>
    <div class="order-apply base-padding">
      <div class="btn">去付款</div>
    </div>
    <div class="order-info base-padding">
      <div class="user">
        <img class="avatar" src="">
        <div class="info">
          <p>
            <span>曾师傅</span>
            <span>京N7k45</span>
          </p>
          <p>银色 东风日产xxxxx</p>
        </div>
        <icon class="icon" type="ion-ios-telephone-outline" size="4"></icon>
      </div>
      <div class="form">
        <p>
          <span>[出发地]</span>
          <span>15：19</span>
        </p>
        <p>
          <span>普罗娜商务广场</span>
          <span>普陀区金沙江路靠近普罗娜商务广场</span>
        </p>
      </div>
      <div class="to">
        <p>
          <span>[目的地]</span>
          <span>15：19</span>
        </p>
        <p>
          <span>上海普陀区妇婴保健院</span>
          <span>普陀区长寿路170号</span>
        </p>
      </div>
      <div class="desc">
        实际时长XXX分钟，行驶XXX公里
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'order-abnormal'
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
 .order-detail-container
    .order-title
      font-size 20px
      background #46a1bb
      padding-top 1.5rem
      padding-bottom 1.5rem
      color #fff
    .order-price
      display flex
      justify-content space-between
      background #fff
      padding-top 1rem
      padding-bottom 1rem
      font-size 14px
    .order-apply
      padding-top 1rem
      padding-bottom 1rem
      text-align center
      font-size 16px
      .btn
        padding 1rem 0
        background #fff
        border 1px #75b9cc solid
        color #43a0ba
        border-radius 2px
    .order-info
      .user
        padding 1rem
        display flex
        justify-content space-between
        align-items center
        background #fff
        border-bottom 1px #f7f9fb solid
        img
          width 4rem
          height 4rem
        .info
          width 100%
          padding-left 10px
          p
            line-height 20px
            &:nth-child(1)
              span:nth-child(1)
                font-size 14px
              span:nth-child(2)
                background #786d84
                color #fff
                padding 5px 15px
                font-size 1rem
      .form, .to
        padding 1rem
        background #fff
        border-bottom 1px #f7f9fb solid
        line-height 24px
        display flex
        >p
          display flex
          align-content space-between
          flex-wrap wrap
          span
            width 100%
          &:nth-child(1)
             width 20%
          &:nth-child(2)
            width 80%

      .desc
        padding 2rem 0
        background #fff
        text-align center
</style>
