<template>
  <div class="wait-order-container">
    <div class="order__group base-padding">
      <div class="cont">
        <p>司机已将订单改派</p>
        <p>预估等待 20分钟</p>
      </div>
    </div>
    <div class="close-order base-padding">
      <div class="btn btn-text">取消订单</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wait-order'
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
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
  .btn
    width 100%
    margin 0 auto
    padding 15px 0
    text-align center
    border 1px #ddd solid
    font-size 18px
    background #fff
</style>
