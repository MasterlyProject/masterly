<template>
  <section
    :style="sectionStyle"
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
      required: false,
      default:'white'
    },
    title: {
      type: String,
      required: false,
      default: 'Title'
    },
    width: {
      type: String,
      required: false,
      default: '100%'
    },
    maxWidth: {
      type: String,
      required: false,
      default: '900px'
    }
  },
  computed: {
    sectionStyle() {
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
        'border-top-color': color,
        'width': this.width,
        'max-width': this.maxWidth
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.section
  margin 40px auto
  padding 0 40px 20px 40px
  box-shadow 0 0 10px rgba(0, 0, 0, 0.05);
  border-top 5px solid
  background-color white;

</style>
