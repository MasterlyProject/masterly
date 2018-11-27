<template>
  <div class="column">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "AppColumn"
}
</script>

<style scoped>

.column {
  flex: 1 1 200px;
  margin: 5px 5px 0 0;
}

</style>
