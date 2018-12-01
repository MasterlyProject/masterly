<template>
  <div>
    <button @click="show">
      open Modal
    </button>
    <modal
      :name="name"
      resizable="true"
      adaptive="true"
      width="800px"
    >
      <div class="modal-container">
        <slot/>
      </div>
    </modal>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    show () {
      this.$modal.show(this.name)
    },
    hide () {
      this.$modal.hide(this.name)
    },
  }
}
</script>

<style scoped>

.modal-container {
  padding: 40px;
  margin: -20px;
}

</style>
