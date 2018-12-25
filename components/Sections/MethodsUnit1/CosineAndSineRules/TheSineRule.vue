<template>
  <div>
    <AppSection
      title="The Sine Rule"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        Derivation of the Sine rule
      </AppSubtitle>

      <p>
        For any triangle with angles \(A\), \(B\) and \(C\) and corresponding opposite sides \(a\), \(b\) and \(c\), the sine rule is given by,
      </p>

      <AppMathProof>
        <AppBlockQuote 
          slot="equation"
          color="green" 
        >
          $$
          \frac { a }{ \sin  A } =\frac { b }{ \sin  B } =\frac { c }{ \sin  C } 
          $$
        </AppBlockQuote>
        
        <h3>
          Derivation for Acute Triangles
        </h3>

        <h3 style="text-weight:bold;">
          Derivation for Obtuse Triangles
        </h3>

        <AppBlockQuote color="green">
          $$
          \frac { a }{ \sin  A } =\frac { b }{ \sin  B } =\frac { c }{ \sin  C } 
          $$
        </AppBlockQuote>
      </AppMathProof>

      <AppSubtitle>
        When to use the Sine Rule
      </AppSubtitle>

      <p>
        There are many formulas related to triangles including the area rule, sine rule and cosine rule and it is important to know when to use which formula to solve problems. The sine rule is used when we are given,
      </p>

      <ul>
        <li>
          two sides
        </li>
        <li>
          two angles
        </li>
      </ul>

      <p>
        <br>
        in which we are solving for one of these (i.e. our variable \(x\) counts as one of these sides or angles).
      </p>

      <AppSubtitle>
        How to check if your solution looks reasonable
      </AppSubtitle>

      <p>
        In tests and exams, this cool trick can be used to check if your solutions involving the sine rule looks reasonable.
        <br>
        Consider the two triangles below with different sized angles and sides.
      </p>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.02.svg">
      </AppImage>

      <p>
        The graphic shows two triangles. One triangle has an angle and opposite side labelled '\(A\)' and '\(a\)' respectively and the other triangle has an angle and opposite side labelled '\(B\)' and '\(b\)' respectively. Notice that angle '\(A\)' is larger than '\(B\)' and side '\(a\)' is longer than '\(b\)'. We can conclude the following result in the statement below.
      </p>
      
      <AppBlockQuote color="green">
        The largest angle in a triangle will always have the longest opposite side.
      </AppBlockQuote>

      <p>
        This statement can be used to compare two sets of angles and opposite sides within a triangle. If you solved for one of these angles or sides and it does not agree with the statement above, then your solution must be incorrect. However, if the solution agrees with the statement then you can have good reason to beleive you are correct.
        <br>
        The sine rule uses the information of two angles and their opposite sides thus the fact above can be used to compare the validity of the solution. This fact only applies to the sine rule as the cosine rule does not possess enough information to compare the angles and sides in a triangle as we will soon find out.
      </p>

     

    </AppSection>
  </div>
</template>


<script>

import AppSection from '@/components/Utilities/AppSection'
import AppSubtitle from '@/components/Utilities/AppSubtitle'
import AppModal from '@/components/Utilities/AppModal'
import AppVideo from '@/components/Utilities/AppVideo'
import AppImage from '@/components/Utilities/AppImage'
import AppBlockQuote from '@/components/Utilities/AppBlockQuote'
import AppMathProof from '@/components/Utilities/AppMathProof'
import AppToggle from '@/components/Utilities/AppToggle'


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppVideo,
    AppImage,
    AppBlockQuote,
    AppMathProof,
    AppToggle
  },
  data() {
    return {
      flag: true,
      text: 'Acute Proof'
    }
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  },
  methods: {
    toggleButton() {
      this.flag = !this.flag
    }
  }
}

</script>
