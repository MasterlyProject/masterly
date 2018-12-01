<template>
  <div
    :style="style"
    class="proof-container"
  >
    <h5
      :style="textStyle"
      class="proof-text"
      @click="toggleProof"
    >
      {{ proofText }}
    </h5>
    <slot
      v-if="!isOpen"
      name="equation"
    >
      place a block quote here
    </slot>
    <div
      v-show="isOpen"
      class="proof"
    >
      <slot/>
    </div>
    <h5
      v-show="isOpen"
      class="proof-qed"
    >
      q.e.d
    </h5>
  </div>
</template>

<script>
export default {
  name: "AppMathProof",
  data () {
    return {
      isOpen: false,
      style: '',
      textStyle: {
        'width': '100px'
      },
      proofText: 'show proof'
    }
  },
  methods: {
    toggleProof () {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.style = {
          'background-color': '#f4f5f7',
          'border' : '1px solid #e5e5e5'
        }
        this.textStyle = {
          'width': '85px'
        }
        this.proofText = 'hide proof'
      }
      else {
        this.style = ''
        this.textStyle = {
          'width': '100px'
        }
        this.proofText = 'show proof'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

.proof-container
  overflow scroll

.proof-text
  padding 5px
  font-size 12px
  text-transform uppercase
  color #929395
  cursor pointer

.proof
  padding 20px 50px

.proof-qed
  text-align right
  padding 5px
  font-size 12px
  text-transform uppercase
  color #929395

</style>
