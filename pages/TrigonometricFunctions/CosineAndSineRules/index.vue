<template>
  <div>

    <RevisionOfRightTriangles />

    <TheUnitCircle />

    <AreaRule />

    <TheSineRule />

    <TheCosineRule />

    <AmbiguousCase />

    <AngleOfInclination />

  </div>
</template>

<script>
import RevisionOfRightTriangles from '@/components/Sections/MethodsUnit1/CosineAndSineRules/RevisionOfRightTriangles'
import TheUnitCircle from '@/components/Sections/MethodsUnit1/CosineAndSineRules/TheUnitCircle'
import AreaRule from '@/components/Sections/MethodsUnit1/CosineAndSineRules/AreaRule'
import TheSineRule from '@/components/Sections/MethodsUnit1/CosineAndSineRules/TheSineRule'
import TheCosineRule from '@/components/Sections/MethodsUnit1/CosineAndSineRules/TheCosineRule'
import AmbiguousCase from '@/components/Sections/MethodsUnit1/CosineAndSineRules/AmbiguousCase'
import AngleOfInclination from '@/components/Sections/MethodsUnit1/CosineAndSineRules/AngleOfInclination'


export default {
  components: {
    RevisionOfRightTriangles,
    TheUnitCircle,
    AreaRule,
    TheSineRule,
    TheCosineRule,
    AmbiguousCase,
    AngleOfInclination
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>

<style scoped>


</style>