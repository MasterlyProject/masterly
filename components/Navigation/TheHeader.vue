<template>
  <header>
    <img src="@/static/masterlyLogo.png">
    <div class="spacer"></div>
    <ul class="nav-items">
      <li class="nav-item">Profile</li>
      <nuxt-link to="/probability">
        <li class="nav-item">Login</li>
      </nuxt-link>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style lang="stylus" scoped>

header
  background-color white
  width 100%
  display flex
  flex-flow row nowrap
  align-items center
  height 60px
  position fixed
  z-index 19
  padding 0 40px

img
  max-width 150px
  width 100%

.spacer
  flex 1 1 auto

.nav-items
  display flex
  flex-flow row nowrap

.nav-item
  list-style none
  margin 0 20px

</style>
