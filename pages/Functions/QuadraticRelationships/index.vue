<template>
  <div>

    <IntroductionToQuadraticRelationships />
    <TheGeneralForm />
    <TheTurningPointForm />
    <TheInterceptForm />
    <CompletingTheSquare />
    <TheQuadraticFormula />

  </div>
</template>

<script>
import IntroductionToQuadraticRelationships from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/QuadraticRelationships/IntroductionToQuadraticRelationships'
import TheGeneralForm from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/QuadraticRelationships/TheGeneralForm'
import TheTurningPointForm from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/QuadraticRelationships/TheTurningPointForm'
import TheInterceptForm from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/QuadraticRelationships/TheInterceptForm'
import CompletingTheSquare from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/QuadraticRelationships/CompletingTheSquare'
import TheQuadraticFormula from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/QuadraticRelationships/TheQuadraticFormula'

export default {
  components: {
    IntroductionToQuadraticRelationships,
    TheGeneralForm,
    TheTurningPointForm,
    TheInterceptForm,
    CompletingTheSquare,
    TheQuadraticFormula
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>

<style scoped>


</style>