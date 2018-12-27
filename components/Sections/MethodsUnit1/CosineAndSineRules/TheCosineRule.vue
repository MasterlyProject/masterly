<template>
  <div>
    <AppSection
      title="The Cosine Rule"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        Derivation of the Cosine rule
      </AppSubtitle>

      <p>
        For any triangle with angles \(A\), \(B\) and \(C\) and corresponding opposite sides \(a\), \(b\) and \(c\), the cosine rule is given by,
      </p>

      <AppMathProof>
        <AppBlockQuote 
          slot="equation"
          color="green" 
        >
          $$
          c^2 = a^2 + b^2 - 2ab\cos C
          $$
        </AppBlockQuote>
        
        <p>
          To derive the cosine rule, we must prove the formula for both acute and obtuse triangles. The cosine rule will apply to all triangles if the rule is true for both of these cases.
        </p>
        
        <AppToggle 
          color="green"
          @toggle="toggleButton"
        >
          <div v-show="flag">Acute Proof</div>
          <div v-show="!flag">Obtuse Proof</div>
        </AppToggle>

        <section v-show="flag">
          <AppSubtitle>Derivation for Acute Triangles</AppSubtitle>
          <p>Consider the acute triangle \(\text{$\triangle $ABC}\)</p>

          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.09.svg">
          </AppImage>

          <p>
            First consider \(\text{$\triangle $CBD}\) 
            <br>
            Use the Pythagorean theorem 
            $$\begin{aligned} {h}^{2}+{x}^{2} &= {a}^{2} \tag{1} \end{aligned}$$ 

            Use cosine to find an expression for \(x\) 

            $$\begin{aligned} \cos C &= \frac{\text{adjacent}}{\text{hypotenuse}}=\frac{x}{a} \\ x &= a\cos C \tag{2} \end{aligned}$$ 

            Now consider \(\text{$\triangle $ABD}\) 
            <br>
            Use the Pythagorean theorem 

            $$\begin{aligned} {c}^{2} &= {h}^{2}+{(b-x)}^{2} \\ {c}^{2} &= {h}^{2}+{x}^{2}+{b}^{2}-2xb \tag{3} \end{aligned}$$

            Sub \((1)\) and \((2)\) into \((3)\)
          </p>
          
          <AppBlockQuote color="green" > $$c^2 = a^2 + b^2 - 2ab\cos C$$ </AppBlockQuote>
        </section>

        <section v-show="flag">
          <AppSubtitle>Derivation for Obtuse Triangles</AppSubtitle>

          <p>Now consider the obtuse triangle \(\text{$\triangle $ABC}\)</p>

          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.17.svg">
          </AppImage>

          <p>
            First consider \(\text{$\triangle $CBD}\) 
            <br>
            Use the Pythagorean theorem 

            $$\begin{aligned} {h}^{2}+{x}^{2} &= {a}^{2} \tag{1} \end{aligned}$$ 

            Use cosine to find an expression for \(x\) 

            $$\begin{aligned} \cos ({180}^{\circ}-C) &= \frac{\text{adjacent}}{\text{hypotenuse}}=\frac{x}{a} \\ x &= a\cos ({180}^{\circ}-C) \\ x &= -a\cos C \tag{2} \end{aligned}$$

            Now consider \(\text{$\triangle $ABD}\)
            <br>
            Use the Pythagorean theorem 

            $$\begin{aligned} {c}^{2} &= {h}^{2}+{(b+x)}^{2} \\ {c}^{2} &= {h}^{2}+{x}^{2}+{b}^{2}+2xb \tag{3} \end{aligned}$$

            Sub \((1)\) and \((2)\) into \((3)\)
          </p>

          <AppBlockQuote color="green" > $$c^2 = a^2 + b^2 - 2ab\cos C$$ </AppBlockQuote>
          
        </section>
      </AppMathProof>

      <AppSubtitle>
        Supplementary Angles of Cosine
      </AppSubtitle>

      <p>
        Here we will discuss how \(\cos(180^\circ - C) = - \cos C\) which is used to simplify the obtuse triangle proof. 
        Consider the graphic below of a unit circle with an arbitrary angle \(\phi\) and the angle \(180^\circ - \phi\). 
        Remember that cosine of an angle is the value read off the \(x\) axis on the unit circle.
      </p>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.18.svg">
      </AppImage>

      <ul>
        <br>
        <li>\(\cos \phi\) is represented by the \(x\) value on the blue dashed line.</li>
        <li>\(\cos(180^\circ - \phi)\)  is represented by the \(x\) value on the orange dashed line.</li>
      </ul>
      <p>
        <br>
        Notice that the orange and blue dashed lines have the same distance from the origin but the orange is on the negative \(x\) axis and the blue is on the positive. This means they both have the same value but the orange is negative. This concludes that \(-\cos(180^\circ - \phi) = \cos \phi\), or by rearranging, \(\cos(180^\circ - C) = - \cos C\).
      </p>

      <AppSubtitle>
        When to use the Cosine Rule
      </AppSubtitle>

      <p>
        There are many formulas related to triangles including the area rule, sine rule and cosine rule and it is important to know when to use which formula. The cosine rule is used when we are given:
      </p>

      <ul>
        <li>three sides</li>
        <li>one angle</li>
        <br>
      </ul>

      <p>in which we are solving for one of these.</p>

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