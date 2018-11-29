<template>
  <div class="container">
    <div class="title">
      <h5>Profile</h5>
    </div>
    <AppSidebarBtn
      text="My Progress"
      borderColor="red"/>
    <AppSidebarBtn
      text="Settings"
      borderColor="green"/>
    <AppSidebarBtn
      text="Account"
      borderColor="blue"/>
    <AppSidebarBtn
      text="Upgrade"
      borderColor="red"/>
    <AppSidebarBtn
      text="Referral Program"
      borderColor="green"/>
    <AppSidebarBtn
      text="Logout"
      borderColor="blue"/>
  </div>
</template>

<script>
import AppSidebarBtn from "./AppSidebarBtn";
export default {
  name: "TheProfileSidebar",
  components: {
    AppSidebarBtn
  }
}
</script>

<style lang="stylus" scoped>

.container
  flex 0 0 250px
  height 100vh
  border-left 1px solid #e5e5e5

.title
  padding 10px
  background-color rgba(8, 20, 36, 0.84)
  color white
  text-align center


</style>
