<template>
  <div class="loading-svg-container">
    <svg :width="handleSize" :height="handleSize">
      <g fill="none" stroke-width="1">
        <path id="circle-path" :d="handleBgCirCle" stroke="#ddd"></path>
        <circle r="5" :fill="bgColor">
          <animateMotion dur="3s" rotate="auto" repeatCount="indefinite">
            <mpath xlink:href="#circle-path"></mpath>
          </animateMotion>
        </circle>
        <path :d="handleAnimatePath" :stroke="bgColor" transform="rotate(0)"
              :style="handleOrigin">
          <animateTransform xmlns="http://www.w3.org/2000/svg"
                            attributeType="xml"
                            attributeName="transform"
                            type="rotate" from="0"
                            to="360" begin="0" dur="3s" fill="freeze" repeatCount="indefinite"/>
        </path>
      </g>
    </svg>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        angle: 30
      }
    },
    props: {
      padding: {
        type: String,
        default: '0'
      },
      width: {
        type: String,
        default: '100'
      },
      bgColor: {
        type: String,
        default: '#333c5c'
      }
    },
    computed: {
      handleOrigin () {
        return {
          transformOrigin: `${this.handleSize / 2}px ${this.handleSize / 2}px 0px`
        }
      },
      handleSize () {
        return parseInt(this.width) + parseInt(this.padding)
      },
      handleBgCirCle () {
        let r = `${this.width / 2} ${this.width / 2}`
        let startXY = `${this.handleSize / 2} ${this.padding / 2}`
        let endXY = `${this.handleSize / 2} ${this.handleSize - (this.padding / 2)}`
        return `M ${startXY}, A ${r} 0 1 1 ${endXY}, M ${endXY}, A ${r} 0 0 1 ${startXY}`
      },
      handleAnimatePath () {
        let r = `${this.width / 2} ${this.width / 2}`
        let startXY = `${this.handleSize / 2} ${this.padding / 2}`
        let endXY = `${(this.width / 2) + ((this.width / 2) * (Math.sin(this.angle * 3.14 / 180))) + (this.padding / 2)} ${(this.width / 2) + ((this.width / 2) * (Math.cos(this.angle * 3.14 / 180))) + (this.padding / 2)}`
        return `M ${startXY}, A ${r} 0 1 0 ${endXY}`
      }
    },
    methods: {}
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  .loading-svg-container
    position absolute
    left 50%
    top 45%
    transform translate(-50%, -50%)
</style>
