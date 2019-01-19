<template>
  <div>
    <AppSection
      title="Introduction to Functions"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <AppSubtitle>What is a Function?</AppSubtitle>

      <p>The definition of a function is as follows:</p>
      <AppBlockQuote color="blue">A <strong>function</strong> is a <strong>relationship</strong> where every <strong>input</strong> produces <strong>exactly one output</strong>.</AppBlockQuote>
      <p>Consider the map below.</p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.01.svg">
      </AppImage>
      <br>
      <ul>
        <li>The <strong>inputs</strong> are the values that go into the relationship. These are sometimes called the \(x\) values. The <strong>inputs</strong> in the above example can be represented by the set: \(\left\{ A,B \right\}\).</li>
        <li>The <strong>relationship</strong> is the set of rules applied to the inputs to produce a given output.</li>
        <li>The <strong>output</strong> values are the result obtained after the relationship processes the input values. These are sometimes called the \(y\) values. The <strong>outputs</strong> in the above example can be represented by the set: \(\left\{ C,D \right\}\).</li>
      </ul>
      <br>
      <p>Notice that every input produces exactly one output.</p>
      <ul>
        <li>\(A\rightarrow C\)</li>
        <li>\(B\rightarrow D\)</li>
      </ul>
      <br>
      <p>As this follows the definition of a <strong>function</strong>, we can conclude that the <strong>relationship</strong> is a <strong>function</strong>.</p>

      <AppSubtitle>Example 1</AppSubtitle>
      <p>The example below shows how we can interpret functions with this map concept in a practical example.</p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.02.svg">
      </AppImage>
      <br>
      <ul>
        <li>The <strong>inputs</strong> are set: \(\left\{ 1,2,3 \right\}\).</li>
        <li>The <strong>relationship</strong> is \(y=2x\).</li>
        <li>The <strong>output</strong> values are set: \(\left\{ 2,4,6 \right\}\).</li>
      </ul>
      <br>
      <p>Notice that every input produces <strong>exactly one</strong> output.</p>
      <ul>
        <li>\(1\rightarrow 2\)</li>
        <li>\(2\rightarrow 4\)</li>
        <li>\(3\rightarrow 6\)</li>
      </ul>
      <br>
      <p>This concludes that the <strong>relationship</strong>, \(y=2x\), is indeed a <strong>function</strong> for the given inputs.</p>

      <AppSubtitle>Example 2</AppSubtitle>
      <p>Let us consider another example with the relationship \(y^2 = x\).</p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.03.svg">
      </AppImage>
      <br>
      <ul>
        <li>The <strong>inputs</strong> are set: \(\left\{ 0,1,4 \right\}\).</li>
        <li>The <strong>relationship</strong> is \(y^2 = x\).</li>
        <li>The <strong>output</strong> values are set: \(\left\{-2,-1,0,1,2\right\}\).</li>
      </ul>
      <br>
      <p>Notice that not every input produces exactly one output.</p>
      <ul>
        <li>\(0\rightarrow 0\)</li>
        <li>\(1\rightarrow -1,1\)</li>
        <li>\(4\rightarrow -2,2\)</li>
      </ul>
      <br>
      <p>This goes against the definition of a <strong>function</strong> as a single <strong>input</strong> does not necessarily produce exactly one <strong>output</strong> value. Thus the relationship, \(y^2=x\), is not a function.
        <br><br>
        It is important to note here that <strong>not</strong> every <strong>relationship</strong> is a <strong>function</strong>. However, all of the relationships we have learned thus far are <strong>functions</strong>. We will only learn about a small handful of relationships that are <strong>not functions</strong> (including \(y^2=x\)).</p>
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
