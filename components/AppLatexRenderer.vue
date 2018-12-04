<template>
  <div class="latex-container">
    <div class="latex-code">
      <textarea v-model="code"></textarea>
    </div>
    <div 
      class="latex-render" 
      v-katex="{ 
          expression: '\\begin{aligned}' + code + '\\end{aligned}', 
          options: { 
            throwOnError: false, 
            displayMode: true,
            macros: {
              '\\vector': '(x_1,x_2,\\ldots,x_{1})',
              'sin': '\\sin'
            } 
          }
      }"
    >
    </div>
   
   <div>
    <input v-model="tempName" placeholder="edit me">
    <p>Message is: {{ tempName }}</p>
    <input v-model="tampValue" placeholder="edit me">
    <p>Message is: {{ tampValue }}</p>
    <!-- <button @click="updateMacros">submit</button> -->
  </div>



  </div>
</template>

<script>
export default {
  name: "AppLatexRenderer",
  data () {
    return {
      code: '\\text{write some latex code ...}',
      macros: [],
      tempName: '',
      tampValue: ''
    }
  },
  method: {
    updateMacros() {
      var m = tempName + ':' + tempValue
      macros.push(m)
      console.log(macros)
    }
  }
}
</script>

<style lang="stylus" scoped>

.latex-container
  background-color #f4f5f7
  padding 20px
  width 100%

</style>
