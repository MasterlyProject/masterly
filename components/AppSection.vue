<template>
<section class="blue" :style="sectionColor">
  {{color}}
  <slot/>
</section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    color: String
  },
  computed: {
    sectionColor() {
      return {
        'border-top-color': this.color
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.blue
  max-width 700px
  width 100%
  margin 40px auto
  padding 40px
  box-shadow 0 0 10px rgba(0, 0, 0, 0.05);
  border-top 5px solid

</style>
