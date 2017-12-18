<template>
  <div class="orderIndex-container">
    <mt-header title="管理"></mt-header>
    <link-list title="待审批事项" border="root">
      <icon slot="left" type="ion ion ion-clipboard" size="2"></icon>
      <icon slot="right" type="ion ion-chevron-right" size="1.5"></icon>
    </link-list>
    <link-list title="已审批事项" border="root">
      <icon slot="left" type="ion ion-clipboard" size="2"></icon>
      <mt-badge slot="badge" type="primary">30</mt-badge>
      <icon slot="right" type="ion ion-chevron-right" size="1.5"></icon>
    </link-list>
    <link-list title="差旅支出分析" border="root">
      <icon slot="left" type="ion ion-clipboard" size="2"></icon>
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
