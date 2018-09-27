<template>
  <div class="banner-container">
    <img src="@/static/masterlyLogo.png">
    <p>Start Learning.</p>
  </div>
</template>

<script>
export default {
  name: "TheBanner"
}
</script>

<style lang="stylus" scoped>

.banner-container
  position relative
  z-index 200
  background-color #f4f5f7
  width 100vw
  height 100vh
  display flex
  flex-flow column nowrap
  align-items center
  justify-content center
  color lightgray

.banner-container img
  width 250px
  max-width 100%

</style>
