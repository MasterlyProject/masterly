<!--

    Fix:
        when you click on the toggle, change the text
        
        depending if toggle is true/false, v-show <section> appropriate section </section> (I think you need to $emit to parent)
        
        Maybe implement v-scroll to top of AppProof button

-->

<template>
  <div>
    <!-- Rectangular switch -->
    <section>
      <input 
        id="checkbox"
        type="checkbox"
        checked
        @click="$emit('toggle')"
      >
      <label 
        :class="_color"
        for="checkbox"
      />
  
      <slot />
    </section>
  </div>
</template>

<script>
export default {
  name: "AppToggle",
  props: {
    color: {
      type: String,
      required: true,
    }
  },
  computed: {
    _color: function () {
      var color = this.color
     
      if ( !(color === "red"  || color === "green" || color === "blue") ) {
        color = "default"
      }
      return color
    }
  },
  methods: {
    hexToRGB(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }
}
</script>

<style scoped>
input {
  display: block;
  opacity: 0;
}
label {
  width: 60px;
  height: 30px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  background: rgb(189, 189, 189);
  border-radius: 30px;

  transform:rotateY(180deg);
  
  transition: background-color 0.4s;
  -moz-transition: background-color 0.4s;
  -webkit-transition: background-color 0.4s;
}
label:after {
  left: 0;
  width: 20px;
  height: 20px;
  margin: 5px;
  content: '';
  position: absolute;
  background: #FFF;
  border-radius: 10px;
}

input:checked + label {
  background: rgb(189, 189, 189);
}
.red {
  background-color: #ec6d5f;
}
.green {
  background-color: #27c9b8;
}
.blue {
  background-color: #2caaca;
}
.default {
  background-color: #2caaca;
}

input:checked + label:after {
  left: auto;
  right: 0;
}


</style>


