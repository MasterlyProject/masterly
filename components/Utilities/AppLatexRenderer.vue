<template>
  <div class="latex-container">
    <div
      v-show="isCode"
      class="latex-code"
    >
      <textarea
        id="input"
        v-model="code"
        @keyup="updateRender"
      />
    </div>
    <p
      id="rendered-latex"
      class="latex-render"
      @click="toggleCode"
    >
      {{ code }}
    </p>
  </div>
</template>

<script>
export default {
  name: "AppLatexRenderer",
  data () {
    return {
      code: '$$ 2x+8 $$',
      isCode: false
    }
  },
  methods: {
    updateRender() {
      this.updateSize()
      // Render Math Function
    },
    updateSize() {
      input.style.height = "1px"
      input.style.height = ( 25 + input.scrollHeight ) + "px"
    },
    toggleCode() {
      this.isCode = !this.isCode
    }
  }
}
</script>

<style lang="stylus" scoped>

.latex-code
  background-color #f4f5f7
  padding 20px
  width 100%
  margin-bottom 20px

.latex-code textarea
  border none
  font-size inherit
  background none
  resize none
  overflow auto
  margin-bottom -27px
  outline none
  width 100%
  height 47px

.latex-render
  text-align center
  cursor pointer

.latex-render:hover
  background-color #f4f5f7

</style>

