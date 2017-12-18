<template>
  <div class="planIndex-container">
    <mt-header title="计划" @click.native="$router.go(-1)">
      <icon slot="left" type="ion ion-chevron-left" size="1.5"></icon>
      <span slot="right">新增申请</span>
    </mt-header>
    <mt-navbar v-model="selected">
      <mt-tab-item id="all">全部</mt-tab-item>
      <mt-tab-item id="audit">已审批</mt-tab-item>
      <mt-tab-item id="unAudit">未审批</mt-tab-item>
      <mt-tab-item id="back">已驳回</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" swipeable>
      <mt-tab-container-item id="all">
        <none-data title="暂未发现计划"></none-data>
      </mt-tab-container-item>
      <mt-tab-container-item id="audit">
        <none-data title="暂未发现已审批的计划"></none-data>
      </mt-tab-container-item>
      <mt-tab-container-item id="unAudit">
        <none-data></none-data>
      </mt-tab-container-item>
      <mt-tab-container-item id="back">
        <none-data></none-data>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: 'all'
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
