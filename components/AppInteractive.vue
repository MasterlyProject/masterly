<template>
  <div>
    <div
      :id="id"
      :style="style"
    />
    <div v-html="path"/>
  </div>
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
      path: "<script src=\'" + this.src + "\'><\/script>",
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
  }
}
</script>

<style lang="stylus" scoped>

</style>
