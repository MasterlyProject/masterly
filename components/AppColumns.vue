<template>
<div class="columns">
  <slot/>
</div>
</template>

<script>
export default {
  name: "AppColumns"
}
</script>

<style scoped>

.columns {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

</style>
