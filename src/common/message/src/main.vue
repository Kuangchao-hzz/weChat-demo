<template>
  <transition appear v-on:enter="enter" name="fade">
    <div v-if="visible" class="message-container">
      {{message}}
    </div>
  </transition>
</template>

<script>
  export default {
    data () {
      return {
        name: 'message',
        time: 5000,
        visible: true
      }
    },
    mounted () {
      this.close()
    },
    methods: {
      enter () {
        console.log(111)
      },
      close () {
        setTimeout(() => {
          this.visible = false
        }, this.time)
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  .message-container
    width 100%
    padding 10px 0
    text-align center
    background #ddd
    position fixed
    left 0
    top 0
  /*.fade-enter-active, .fade-leave-active*/
      /*transition opacity .5s*/
  /*.fade-enter, .fade-leave-to*/
    /*opacity: 0*/
  .fade-enter-active
    transition all 1s
    top 0
  .fade-leave-active
    transition all 2s
    top -32px
  .fade-enter, .slide-fade-leave-to
    top -32px
</style>
