<template>
  <div>
    <AppSection
      title="Graphs of Functions"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <AppSubtitle>Transformation of Functions</AppSubtitle>
      <p>
        Thus far we have explored the transformations of many functions. We are now going to generalise these transformations.
        <br><br>
        Consider the transformations on an arbitrary function \(f\left(x\right)\): $$y=a\cdot f\left(b(x-c)\right) + d$$ We can infer from our experience with many different functions,</p>

      <ul>
        <li>\(a\): <strong>vertical dilation</strong> by a scale factor of \(a\)</li>
        <li>\(b\): <strong>horizontal dilation</strong> by a scale factor of \(\frac{1}{b}\)</li>
        <li>\(c\): <strong>horizontal translation</strong></li>
        <li>\(d\): <strong>vertical translation</strong></li>
      </ul>
      <br>
      <p>
        Any function in the form shown above will have these properties. By knowing these properties and understanding how they affect a given graph will make graphing any function easy. If we can graph a function, it will be easy to spot the <strong>domain</strong> and <strong>range</strong> as previously discussed.
      </p>
      <p>
        <strong>Note when graphing transformations, always consider dilation's before translations.</strong> The videos for this section discuss this idea in more detail.
      </p>
      <AppSubtitle>Vertical Line Test</AppSubtitle>
      <p>
        The vertical line test is a visual way to determine if the graph of a relationship is a function or not. Remember that a function can only have one output (\(y\)) for each input (\(x\)).
        <br><br>
        The <strong>vertical line test</strong> is very simple. If you can draw a vertical line anywhere on a graph so that it cuts the graph in more than one spot, then the graph is <strong>not</strong> a function and <strong>fails</strong> the <strong>vertical line test</strong>. 
        <br><br>
        If a vertical line can only every cut a graph in at most one place, then the graph is a function and <strong>passes</strong> the <strong>vertical line test</strong>. 
        <br><br>
        Check which graphs are functions with the vertical line test in the interactive below.
      </p>
      <AppModal :mini-player="false">
        <AppInteractive
          name="a"
          src="/scripts/interactives/mathMethodsUnit1/cosineAndSineRules/a.js"
        />
      </AppModal>

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
