<template>
  <div>

    <IntroductionToFunctions />
    <NotationAndCompositeFunctions />
    <DomainAndRange />
    <TypesOfRelationships />
    <GraphsOfFunctions />

  </div>
</template>

<script>
import IntroductionToFunctions from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/Functions/IntroductionToFunctions'
import NotationAndCompositeFunctions from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/Functions/FunctionNotationAndCompositeFunctions'
import DomainAndRange from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/Functions/DomainAndRange'
import TypesOfRelationships from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/Functions/TypesOfRelationships'
import GraphsOfFunctions from '@/components/Sections/MethodsUnit1/FunctionsAndGraphs/Functions/GraphsOfFunctions'


export default {
  components: {
    IntroductionToFunctions,
    NotationAndCompositeFunctions,
    DomainAndRange,
    TypesOfRelationships,
    GraphsOfFunctions
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>

<style scoped>


</style>