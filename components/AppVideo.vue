<template>
  <div class="container">
    <div
      v-if="styleId === 2"
      class="modal-background">
    </div>
    <div
      :class="{ minimise: (styleId === 1), modal: (styleId === 2)}"
      class="parent">
      <div
        :style="_container"
        class="video-container">
        <slot class="video">
          Add modal content
        </slot>
        <script src="https://player.vimeo.com/api/player.js"></script>
      </div>
      <div
        :style="_strip"
        class="video-strip">
        <div
          v-if="styleId === 1"
          @click="minimise"
          class="btn">
          <img src="@/assets/images/Icons/maximise.svg"/>
        </div>
        <div
          v-if="styleId !== 1"
          @click="minimise"
          class="btn">
          <img src="@/assets/images/Icons/minimise.svg"/>
        </div>
        <div
          @click="modal"
          class="btn">
          <img src="@/assets/images/Icons/modal.svg"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppVideo",
  data () {
    return {
      styleId: 0
    }
  },
  computed: {
    _container: function () {
      if (this.styleId !== 0) {
        return {
          'padding': '0'
        }
      }
      else {
        return {
          'margin-bottom': '15px'
        }
      }
    },
    _strip: function () {
      if (this.styleId !== 0) {
        return {
          'padding-left': '10px',
          'background': 'none',
          'bottom': '0',
          'align-self': 'flex-start'
        }
      }
    }
  },
  methods: {
    minimise () {
      if(this.styleId === 1) {
        this.styleId = 0
      }
      else {
        this.styleId = 1
      }
    },
    modal () {
      if(this.styleId === 2) {
        this.styleId = 0
      }
      else {
        this.styleId = 2
      }
    }
  }
}
</script>

<style scoped>

.parent {
  display: flex;
}

.video-container {
  flex: 1 1 auto;
  padding: 5px;
  background-color: #f4f5f7;
}

.modal-background {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.minimise {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 450px;
  padding: 0;
}

.modal {
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 60px;
  margin: 0 auto;
  max-width: 900px;
  padding: 0;
}

.video-strip {
  padding: 5px 5px 0 5px;
  flex: 0 0;
  height: 100%;
  margin-left: -5px;
  background-color: #f4f5f7;
}

.btn {
  width: 26px;
  margin-bottom: -3px;
}

.btn:hover {
  cursor: pointer;
}

</style>
