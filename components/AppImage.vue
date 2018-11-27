<template>
  <img :src="image"/>
</template>

<script>
export default {
  name: "AppImage",
  props: {
    imagePath: {
      type: String,
      required: true
    }
  },
  computed: {
    image: function () {
      console.log(this.imagePath)
      return this.imagePath
    }
  }
}
</script>

<style scoped>

</style>
