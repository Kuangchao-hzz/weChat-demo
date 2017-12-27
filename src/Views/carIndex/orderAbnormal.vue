<template>
	<div class="order-abnormal-container">
    <div class="order__code">
      <icon type="ion ion-ios-loop-strong" size="8"></icon>
      <p>抱歉，暂无司机接单</p>
    </div>
    <div class="btn btn-text">返回首页</div>
    <div class="btn btn-refresh">重新叫车</div>
  </div>
</template>

<script>
    export default {
        name: "order-abnormal"
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .order-abnormal-container
    width 100%
    height 100%
    padding-top 4rem
    background #eaf0f3
    box-sizing border-box
    position: fixed
    left 0
    top 0
    z-index 999
    .order__code
      padding-top 8rem
      padding-bottom 5rem
      text-align center
      >p
        line-height 4rem
        font-size 2rem
    .btn
      width 90%
      border 1px solid cadetblue
      border-radius 1px
      text-align center
      padding 1rem 0
      margin 0 auto
      margin-bottom 2rem
</style>
