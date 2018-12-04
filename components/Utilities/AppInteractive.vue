<template>
  <div
    :id="id"
    :style="style"
  />
</template>

<script>
export default {
  name: "AppInteractive",
  props: {
    name: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: false,
      default: '700px'
    },
    height: {
      type: String,
      required: false,
      default: '300px'
    },
    center: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data () {
    return {
      id: "box" + this.name
    }
  },
  computed: {
    style: function () {
      let margin = '0 0'
      if (this.center) {
        margin = '0 auto'
      }
      return {
        'width': this.width,
        'height': this.height,
        'margin': margin
      }
    }
  },
  mounted () {
    let interactive = document.createElement('script')
    interactive.setAttribute('src', this.src)
    document.body.appendChild(interactive)
  }
}
</script>

<style lang="stylus" scoped>

</style>
