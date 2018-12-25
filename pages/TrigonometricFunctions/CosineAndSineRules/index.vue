<template>
  <div>

    <RevisionOfRightTriangles />

    <TheUnitCircle />

    <AreaRule />


    <TheSineRule />

    <TheCosineRule />

  </div>
</template>

<script>
import RevisionOfRightTriangles from '@/components/Sections/MethodsUnit1/CosineAndSineRules/RevisionOfRightTriangles'
import TheUnitCircle from '@/components/Sections/MethodsUnit1/CosineAndSineRules/TheUnitCircle'
import AreaRule from '@/components/Sections/MethodsUnit1/CosineAndSineRules/AreaRule'
import TheSineRule from '@/components/Sections/MethodsUnit1/CosineAndSineRules/TheSineRule'
import TheCosineRule from '@/components/Sections/MethodsUnit1/CosineAndSineRules/TheCosineRule'


export default {
  components: {
    RevisionOfRightTriangles,
    TheUnitCircle,
    AreaRule,
    TheSineRule,
    TheCosineRule
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>

<style scoped>


</style>

