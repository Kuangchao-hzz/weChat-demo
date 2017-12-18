<template>
  <div class="orderIndex-container">
    <mt-header title="订单" @click.native="$router.go(-1)">
      <icon slot="left" type="ion ion-chevron-left" size="1.5"></icon>
    </mt-header>
    <link-list title="新增订单">
      <icon slot="right" type="ion ion-chevron-right" size="1.5"></icon>
    </link-list>
    <div class="gutter_line"></div>
    <link-list title="全部订单" border="child">
      <icon slot="right" type="ion ion-chevron-right" size="1.5"></icon>
    </link-list>
    <link-list title="待出行订单" border="child">
      <mt-badge slot="badge" type="primary">30</mt-badge>
      <icon slot="right" type="ion ion-chevron-right" size="1.5"></icon>
    </link-list>
    <link-list title="待授权订单" border="child">
      <icon slot="right" type="ion ion-chevron-right" size="1.5"></icon>
    </link-list>
    <link-list title="待付款订单" border="child">
      <icon slot="right" type="ion ion-chevron-right" size="1.5"></icon>
    </link-list>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    computed: {},
    methods: {

    }
  }
</script>
<style lang="stylus" type="text/stylus">
  @import "~assets/css/variable"
  @import "~assets/css/mixin"

</style>
