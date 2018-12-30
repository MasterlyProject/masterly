<template>
  <div>
    <AppSection
      title="The Intercept Form"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <AppSubtitle>Intercept Form</AppSubtitle>
      
      <p>The equation for the Intercept form is given below.</p>
      
      <AppBlockQuote color="blue">$$y=a(x-b)(x-c)$$</AppBlockQuote>

      <AppSubtitle>Interacting with the Intercept Form</AppSubtitle>

      <p>The interactive element below shows how the graph of a quadratic changes when variables \(a\), \(b\) and \(c\) change in the intercept form.</p>

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
        <li>The parabola is concave down when \(a &lt; 0\) (a negative value)</li>
      </ul>
      <br>
      <p>The variable \(a\) controls the dilation about the \(y\) axis, in other words, the parabola gets wider and narrower when \(a\) changes.</p>

      <h4>Sliders \(b\) and \(c\)</h4>
      <p>
        Leave variable \(a\) at a constant value and investigate what happens to the parabola when \(b\) and \(c\) change.
        <br>
        You should notice:
      </p>

      <ul>
        <li>The values of \(b\) and \(c\) are equivalent to the \(x\) intercept values.</li>
        <li>The coordinates of the \(x\) intercepts are \((b,0)\) and \((c,0)\).</li>
      </ul>

      <br>
      
      <p>
        Also notice when \(c=b\), the parabola only has one \(x\) intercept and this occurs at the turning point. Remember that the only time a parabola can have one \(x\) intercept is when the turning point is touching the \(x\) axis. The equation of the quadratic will simplify to,

        $$\begin{aligned} 
        y &= a(x-b)(x-b) 
        \\
        y &= a{(x-b)}^{2}
        \end{aligned}$$

        You should notice that a parabola needs at least one \(x\) intercept to be represented in the intercept form. If a parabola has no \(x\) intercepts, there will exist no \(b\) or \(c\) value to satisfy the intercept form. All quadratics can be represented in the general form and turning point form but not all quadratics can be represented in the intercept form.
      </p>

      <AppSubtitle>Equation of the Line of Symmetry</AppSubtitle>

      <p>Watch the short video to see the derivation of the equation of the line of symmetry for parabolas in the intercept form.</p>

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <p>The equation of the line of symmetry for a quadratic given in the intercept form is shown below.</p>

      <AppBlockQuote color="blue">$$\frac{b+c}{2}$$</AppBlockQuote>

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
