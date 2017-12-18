<template>
  <div id="app">
    <router-view/>
    <mt-tabbar v-model="selected" v-show="handleFooterIsShow">
      <mt-tab-item id="/mainIndex" @click.native="goPage">
        <icon slot="icon" type="ion ion-home" size="2"></icon>
        首页
      </mt-tab-item>
      <mt-tab-item id="/planIndex" @click.native="goPage">
        <icon slot="icon" type="ion ion-home" size="2"></icon>
        计划
      </mt-tab-item>
      <mt-tab-item id="/orderIndex" @click.native="goPage">
        <icon slot="icon" type="ion ion-home" size="2"></icon>
        订单
      </mt-tab-item>
      <mt-tab-item id="/accountIndex" @click.native="goPage">
        <icon slot="icon" type="ion ion-home" size="2"></icon>
        报销
      </mt-tab-item>
      <mt-tab-item id="/adminIndex" @click.native="goPage">
        <icon slot="icon" type="ion ion-home" size="2"></icon>
        管理
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        selected: '/mainIndex'
      }
    },
    mounted () {
      if (typeof this.$store.state.currentPage === 'object') {
        this.selected = this.$store.state.currentPage.path
      }
    },
    computed: {
      handleFooterIsShow () {
        let pageWhite = ['/mainIndex', '/planIndex', '/orderIndex', '/accountIndex', '/adminIndex']
        if (pageWhite.findIndex(page => page === this.$store.state.currentPage.path) > -1) {
          return true
        }
        return false
      }
    },
    methods: {
      goPage () {
        this.$router.push(this.selected)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  #app
    width 100%
    height 100%
</style>
