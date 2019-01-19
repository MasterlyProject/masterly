<template>
  <div>
    <AppSection
      title="The Turning Point Form"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <AppSubtitle>Turning Point Form</AppSubtitle>
      
      <p>The equation of the turning point form is given as:</p>
      
      <AppBlockQuote color="blue">$$y=a{(x-b)}^{2}+c$$</AppBlockQuote>

      <AppSubtitle>Interacting with the Turning Point Form</AppSubtitle>

      <p>The interactive element below shows how the graph of a quadratic changes when variables \(a\), \(b\) and \(c\) change in the turning point form.</p>

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
      <p>The variable \(a\) controls the dilation about the \(y\) axis. In other words, the parabola gets wider and narrower when \(a\) changes.</p>

      <h4>Slider \(b\)</h4>
      <p>
        Leave variables \(a\) and \(c\) at a constant value and investigate what happens to the parabola when \(b\) changes.
        <br>
        You should notice:
      </p>

      <ul>
        <li>The parabola moves left and right</li>
        <li>The value of \(b\) is equivalent to the \(x\) component of the turning point</li>
      </ul>

      <h4>Slider \(c\)</h4>
      <p>
        Leave variables \(a\) and \(b\) at a constant value and investigate what happens to the parabola when \(c\) changes.
        <br><br>
        You should notice:
      </p>

      <ul>
        <li>The parabola moves up and down</li>
        <li>The value of \(c\) is equivalent to the \(y\) component of turning point</li>
      </ul>
      <br>
      <p>The coordinates of the turning point is \((b,c)\) for a parabola given in the turning point form.</p>

      <AppSubtitle>Equation of the Line of Symmetry</AppSubtitle>

      <p>The equation of the line of symmetry for a quadratic given in the turning point form is shown below.</p>

      <AppBlockQuote color="blue">$$x=b$$</AppBlockQuote>

      <p>
        The equation of the line of symmetry is always the \(x\) component of the turning point as we have already discussed.
        <br><br>
        The coordinates of the turning point are \((b,c)\) for equations given in the turning point form thus the \(x\) component is \(b\) giving the equation of the line of symmetry as \(x=b\).
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
