<template>
  <div class="app-modal">
    <button @click="show">Button</button>
    <modal :name="_name">
        <slot/>
    </modal>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  props: {
    _name: {
      type: String,
      required: true
    }
  },
  computed: {
  },
  methods: {
    show () {
      this.$modal.show(this._name);
    },
    hide () {
      this.$modal.hide(this._name);
    }
  }
}
</script>

<style scoped>

.block-quote {
  padding: 10px 10px 10px 20px;
  border-left: 5px solid;
  opacity: 1;
  margin-bottom: 10px;
}

</style>
