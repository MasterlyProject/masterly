<template>
  <div>
    <AppSection
      title="The General Form"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <AppSubtitle>General Form</AppSubtitle>
      
      <p>The equation of the general form is given as:</p>
      
      <AppBlockQuote color="blue">$$y=a{x}^{2}+bx+c$$</AppBlockQuote>

      <AppSubtitle>Interacting with the General Form</AppSubtitle>

      <p>The interactive element below shows how the graph of a quadratic changes when variables \(a\), \(b\) and \(c\) change in the general form.</p>

      <AppModal :mini-player="false">
        <AppInteractive
          name="a"
          src="/scripts/interactives/mathMethodsUnit1/cosineAndSineRules/a.js"
        />
      </AppModal>

      <h4>Slider \(a\)</h4>
      <p>
        Leave variables \(b\) and \(c\) at a constant value and investigate what happens to the parabola when \(a\) changes.
        <br><br>
        You should notice:
      </p>

      <ul>
        <li>The parabola dilates about the \(y\) axis (gets wider and narrower)</li>
        <li>The parabola is concave up when \(a>0\) (a positive value)</li>
        <li> The parabola is concave down when \(a &lt; 0\) (a negative value) </li>
      </ul>
      <br>
      <p>The variable \(a\) controls the dilation about the \(y\) axis, in other words, the parabola gets wider and narrower when \(a\) changes.</p>

      <h4>Slider \(b\)</h4>
      <p>
        Leave variables \(a\) and \(c\) at a constant value and investigate what happens to the parabola when \(b\) changes.
        <br>
        You should notice:
      </p>

      <ul>
        <li>The path of the quadratic changes</li>
        <li>Notice that this path follows a parabolic shape</li>
      </ul>
      <br>
      <p>The equation of the path that a quadratic (in the general form) follows when variable \(b\) changes is \(y=-a{x}^{2}\).</p>

      <h4>Slider \(c\)</h4>
      <p>
        Leave variables \(a\) and \(b\) at a constant value and investigate what happens to the parabola when \(c\) changes.
        <br><br>
        You should notice:
      </p>

      <ul>
        <li>The parabola moves up and down</li>
        <li>The value of \(c\) is equivalent to the \(y\) intercept</li>
      </ul>
      <br>
      <p>This variable controls the vertical shift as the value of \(c\) is equivalent to the \(y\) intercept. The \(y\) intercept of a parabola given in the general form is \((0,c)\).</p>

      <AppSubtitle>Equation of the Line of Symmetry</AppSubtitle>

      <p>Watch the short video to see the derivation of the equation of the line of symmetry for parabolas in the general form.</p>

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <p>The equation of the line of symmetry for a quadratic given in the general form is shown below.</p>

      <AppBlockQuote color="blue">$$x=-\frac{b}{2a}$$</AppBlockQuote>

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
