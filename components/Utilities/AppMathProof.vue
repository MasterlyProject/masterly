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
      {{ text }}
    </h5>
    <slot
      v-if="!isOpen"
      name="equation"
    />
    <div v-show="isOpen">
      <div class="proof">
        <slot/>
      </div>
      <h5 class="proof-qed">
        q.e.d
      </h5>
    </div>
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
      text: 'show proof'
    }
  },
  methods: {
    proofText () {
      if (this.isOpen) {
        this.text = 'hide proof'
      } 
      else {
        this.text = 'show proof'
      }
    },
    toggleProof () {
      this.isOpen = !this.isOpen
      this.proofText()
      if (this.isOpen) {
        this.style = {
          'background-color': '#f4f5f7',
          'border' : '1px solid #e5e5e5'
        }
        this.textStyle = {
          'width': '85px'
        }
      }
      else {
        this.style = ''
        this.textStyle = {
          'width': '100px'
        }
      }
    }
  }
}
</script>

<style scoped>

.proof-container {
  overflow: scroll;
}

.proof-text {
  padding: 5px;
  font-size: 12px;
  text-transform: uppercase;
  color: #929395;
  cursor: pointer;
}

.proof {
  padding: 20px 50px;
}

.proof-qed {
  text-align: right;
  padding: 5px;
  font-size: 12px;
  text-transform:uppercase;
  color: #929395;
}

</style>
