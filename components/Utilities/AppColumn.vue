<template>
  <div
    :style="style"
    class="column"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: "AppColumn",
  props: {
    align: {
      type: String,
      required: false,
      default: 'center'
    },
    width: {
      type: String,
      required: false,
      default: '200px'
    }
  },
  computed: {
    style: function () {
      console.log(this.align)
      let align = this.align

      if (align === 'start')
        align = 'flex-start'
      if (align === 'end')
        align = 'flex-end'

      return {
        'align-self': align,
        'flex-basis': this.minWidth
      }
    }
  }
}
</script>

<style scoped>

.column {
  flex: 1 1;
  margin: 0 10px;
}

</style>
