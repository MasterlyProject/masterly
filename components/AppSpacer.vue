<template>
  <div class="spacer" :style="_space"/>
</template>

<script>
export default {
  name: "AppSpacer",
  props: {
    space: {
      type: String,
      required: true
    }
  },
  computed: {
    _space: function () {
      return {
        'height': this.space
      }
    }
  }
}
</script>

<style scoped>

.spacer {

}

</style>
