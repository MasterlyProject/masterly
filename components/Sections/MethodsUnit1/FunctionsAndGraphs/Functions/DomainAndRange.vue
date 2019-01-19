<template>
  <div>
    <AppSection
      title="Domain and Range"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <AppSubtitle>Domain, Range and Codomain</AppSubtitle>
      <p>The map below will start our discussion on the concept of domain, range and codomain.</p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.01.svg">
      </AppImage>
      <br>
      <ul>
        <li>The <strong>domain</strong> is the set of <strong>input</strong> values i.e. it is the set: \(\left\{ A,B \right\}\).</li>
        <li>The <strong>codomain</strong> is the set of <strong>possible outputs</strong> i.e. it is the set: \(\left\{ C,D,E \right\}\).</li>
        <li>The <strong>range</strong> is the set of <strong>output</strong> values mapped by an <strong>input</strong> i.e. it is the set: \(\left\{C,D\right\}\).</li>
      </ul>
      <br>
      <p>To clarify the difference between <strong>codomain</strong> and <strong>range</strong> - the <strong>codomain</strong> is the set of values that could possibly come out of the relationship and the <strong>range</strong> is the set that actually does come out. This means that the <strong>range</strong> will be a <strong>subset</strong> of (or sometimes equal to) the <strong>codomain</strong>. This is illustrated below.</p>

      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.08.svg">
      </AppImage>
      <br>
      <p>Consider the example below.</p>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.09.svg">
      </AppImage>
      <br>
      <ul>
        <li>The <strong>domain</strong> is defined by the set: \(\left\{ 1,2,3 \right\}\).</li>
        <li>The <strong>codomain</strong> is defined by the set: \(\left\{ 0,2,4,6,8 \right\}\).</li>
        <li>The <strong>range</strong> is defined by the set: \(\left\{2,4,6\right\}\).</li>
      </ul>


      <AppSubtitle>Understand the Concept of the Graph of a Function</AppSubtitle>
      <p>TODO</p>
      <p>As an informal introduction to sets - they are just a list of numbers (items?) that cannot repeat?. We will discuss sets more formally later in the course in the context of probability (link) but for now I will say that  set is: ...</p>
      <br>
      remember that the \(\real\) numbers are not the domain for \(\sqrt{x}\) for example. you cannot just say that the x-axis is the reals/domain.

      <p>The graph of a function is the set of all points whose co-ordinates (x, y) satisfy the function [FOR THE GIVEN DOMAIN] \displaystyle{y}= f{({x})}y=f(x). This means that for each x-value there is a corresponding y-value which is obtained when we substitute into the expression for  \(f{({x})}\).</p>
      I think we should start backwards. Start with the graph of a function. Disect its domain and range. Then put it into map form.
      <p>
        start with the graph. What is the domain? what is the range? how about the codomain? can we convert this to a map now. Explain what a set (and SUBSET) is informally so we can understand a set as {1,2,3,...} and \(\{x \epsilon Z | x >0\}\)={1,2,3,4,...}. Look at Domain and range examples (some a graph, find DomRan and some with equation, find DomRan [graph first then find DomRan])
      </p>
    </AppSection>
  </div>
</template>

<script>

import AppSection from '@/components/Utilities/AppSection'
import AppSubtitle from '@/components/Utilities/AppSubtitle'
import AppModal from '@/components/Utilities/AppModal'
import AppInteractive from '@/components/Utilities/AppInteractive'
import AppVideo from '@/components/Utilities/AppVideo'
import AppImage from '@/components/Utilities/AppImage'
import AppBlockQuote from '@/components/Utilities/AppBlockQuote'
import AppColumn from '@/components/Utilities/AppColumn'
import AppColumns from '@/components/Utilities/AppColumns'


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppInteractive,
    AppVideo,
    AppImage,
    AppBlockQuote,
    AppColumn,
    AppColumns
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}
</script>
