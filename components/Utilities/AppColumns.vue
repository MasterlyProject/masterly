<template>
  <div
    :style="style"
    class="columns"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: "AppColumns",
  props: {
    width: {
      type: String,
      required: false,
      default: '100%'
    }
  },
  computed: {
    style: function () {
      return {
        'max-width': this.width,
      }
    }
  }
}
</script>

<style scoped>

.columns {
  width: calc(100% + 20px);
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto
}

</style>
