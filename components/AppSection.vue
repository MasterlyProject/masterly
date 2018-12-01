<template>
  <section
    :style="sectionColor"
    class="section"
  >
    <h2>{{ title }}</h2>
    <slot/>
  </section>
</template>

<script>
export default {
  name: 'AppSection',
  props: {
    color: {
      type: String,
      required: true,
      default:'black'
    },
    title: {
      type: String,
      required: false,
      default: 'Title'
    }
  },
  computed: {
    sectionColor() {

      var color = this.color

      switch(color) {
        case "red": color = '#ec6d5f'
          break
        case "green": color = '#27c9b8'
          break
        case  "blue": color = '#2caaca'
          break
      }

      return {
        'border-top-color': color
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.section
  max-width 900px
  width 100%
  margin 40px auto
  padding 0 40px 20px 40px
  box-shadow 0 0 10px rgba(0, 0, 0, 0.05);
  border-top 5px solid
  background-color white;

</style>
