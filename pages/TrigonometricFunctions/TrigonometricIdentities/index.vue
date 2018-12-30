<template>
  <div>

    <PythagoreanIdentity />
    <CosineIdentity />
    <SineIdentity />
    <TangentIdentity />

  </div>
</template>

<script>
import PythagoreanIdentity from '@/components/Sections/MethodsUnit1/Trigonometricidentities/PythagoreanIdentity'
import CosineIdentity from '@/components/Sections/MethodsUnit1/Trigonometricidentities/CosineIdentity'
import SineIdentity from '@/components/Sections/MethodsUnit1/TrigonometricIdentities/SineIdentity'
import TangentIdentity from '@/components/Sections/MethodsUnit1/TrigonometricIdentities/TangentIdentity'



export default {
  components: {
    PythagoreanIdentity,
    CosineIdentity,
    SineIdentity,
    TangentIdentity
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>

<style scoped>


</style>