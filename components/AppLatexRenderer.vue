<template>
  <div class="latex-container">
    <div class="latex-code">
      <textarea v-model="code"></textarea>
    </div>
    <div class="letex-render">
      {{ code }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AppLatexRenderer",
  data () {
    return {
      code: ''
    }
  }
}
</script>

<style lang="stylus" scoped>

.latex-container
  background-color #f4f5f7
  padding 20px
  width 100%

</style>
