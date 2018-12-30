<template>
  <div>
    <AppSection
      title="Cosines Angle Sum and Difference Identity"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        What is the Angle Sum and Difference Identity for Cosine?
      </AppSubtitle>

      <p>
        How do we expand \(\cos(45^\circ+45^\circ)\)? It may be assumed that the crab claw method can help in this situation. Lets find out if this is the case.
        <br><br>
        Firstly, the real result of \(\cos(45^\circ+45^\circ)\) is shown below.

        $$\begin{aligned}
        \cos(45^\circ+45^\circ) &= \cos(90^\circ)
        \\
        &= 0
        \end{aligned}$$

        We get the following result by using the crab claw method of expansion.

        $$\begin{aligned}
        \cos(45^\circ + 45^\circ) &= \cos(45^\circ) + \cos(45^\circ)
        \\
        &=  \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}
        \\
        &= \frac{2\sqrt{2}}{2}
        \\
        &= \sqrt{2}
        \end{aligned}$$

        Notice that there is a contradiction between the real result and the result obtained by using the crab claw method of expansion. This contradiction will also occur when subtracting two angles. This concludes that the crab claw method cannot be used for the expansion of cosine. So then how do we expand cosine of two angles?
        <br><br>
        The angle sum and difference identity for cosine is instead used for the expansion of cosine. These formulas and their derivations are shown below.
      </p>

      <AppSubtitle>
        Derivation of the Angle Sum and Difference Identity for Cosine
      </AppSubtitle>

      <p>For two angles \(A\) and \(B\), the angle sum and difference identity for cosine is shown below.</p>

      <AppMathProof>
        <AppBlockQuote 
          slot="equation"
          color="green" 
        >
          $$\cos{\left(A\pm B\right)} = \cos A \cos B \mp \sin A \sin B$$
        </AppBlockQuote>

        <AppToggle 
          color="green"
          @toggle="toggleButton"
        >
          <div v-show="flag">Angle Difference Identity</div>
          <div v-show="!flag">Angle Sum Identity</div>
        </AppToggle>

        <section v-show="flag">
          <AppSubtitle>
            Derivation of Cosines Angle Difference Identity
          </AppSubtitle>
          <p>
            This identity can be derived by considering the graphic of the unit circle below. We will need to find an expression for the length \(PQ\) two different ways by using both the Pythagorean theorem and the cosine rule.
            <br><br>
            This unit circle shows coordinates \(P\) and \(Q\) at angles \(A\) and \(B\) respectively. These coordinates have also been represented in the form \(\left(\cos \theta, \sin \theta \right)\).
          </p>
          <AppImage width="large">
            <img src="@/assets/images/MethodsUnit1/TrigonometricIdentities/TrigIden.02.svg">
          </AppImage>
          <p>The next graphic shows length \(PQ\) as the hypotenuse of a right triangle.</p>
          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/TrigonometricIdentities/TrigIden.03.svg">
          </AppImage>

          <strong>Using the Pythagorean Theorem:</strong>
            
          <p>
            The vertical side of the right triangle is labelled as \(\Delta y\).

            $$\begin{aligned}
            \Delta y = \sin A - \sin B
            \end{aligned}$$

            <strong>Note:</strong> \(\Delta y\) is equal to the difference between the \(y\) components of coordinates \(P\) and \(Q\). 
            <br><br>
            Lets now use the Pythagorean theorem to find an expression for the length of \(PQ\).
            <br><br>
            <strong>Note:</strong> We will simplify using the Pythagorean identity \(\cos ^2 \theta + \sin ^2 \theta = 1\)

            $$\begin{aligned}
            {\left(PQ\right)}^{2} &= {\Delta x}^{2} + {\Delta y}^{2} \\ &= {\left(\cos B - \cos A\right)}^{2} + {\left(\sin A - \sin B\right)}^{2} \\ &= {\cos}^{2}B - 2\cos A\cos B + {\cos}^{2}A + {\sin}^{2}A - 2\sin A\sin B + {\sin}^{2}B \\ &= 1 + 1 - 2\cos A\cos B - 2\sin A\sin B \\ &= 2 - 2 \left(\cos A\cos B + \sin A\sin B\right) 
            \end{aligned}$$
            $$\begin{aligned}
            PQ = \sqrt{2 - 2 \left(\cos A\cos B + \sin A\sin B\right)} \tag{1}
            \end{aligned}$$
          </p>

          <strong>Using the Cosine Rule:</strong>
          <p>This next graphic shows length \(PQ\) as a side of a triangle.</p>
          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/TrigonometricIdentities/TrigIden.04.svg">
          </AppImage>

          <ul>
            <li>Sides \(OP\) and \(OQ\) have a length of one unit as they are equal to the radius of the unit circle.</li>
            <li>\(\angle POQ=A-B\)</li>
          </ul>

          <p>
            The general form for the cosine rule is: $${c}^{2}={a}^{2}+{b}^{2}-2ab \cos C$$
            <br><br>
            Lets now use the cosine rule to find an expression for the length \(PQ\). 

            $$\begin{aligned} 
            {(PQ)}^{2} &= {1}^{2} + {1}^{2} - 2(1)(1)\cos \left(A-B\right) \\ &= 2-2\cos\left(A-B\right) \end{aligned}$$
            $$\begin{aligned}PQ &= \sqrt{2-2\cos\left(A-B\right)} \tag{2}\end{aligned}$$

            Thus by equating \((1)\) and \((2)\) and completely simplifying,

            $$\begin{aligned} PQ&=PQ\\\sqrt{2-2\cos\left(A-B\right)} &= \sqrt{2 - 2 \left(\cos A\cos B + \sin A\sin B\right)} \\ 2-2\cos\left(A-B\right) &= 2 - 2 \left(\cos A\cos B + \sin A\sin B\right) \\ -2\cos\left(A-B\right) &= - 2 \left(\cos A\cos B + \sin A\sin B\right) \\ \cos\left(A-B\right) &= \cos A\cos B + \sin A\sin B 
            \end{aligned}$$
          </p>
          <AppBlockQuote color="green">$$ \cos \left(A-B\right)=\cos A\cos B+\sin A\sin B$$</AppBlockQuote>
        </section>

        <section v-show="!flag">
          <AppSubtitle>
            Derivation of Cosines Angle Sum Identity
          </AppSubtitle>

          <p>
            The angle sum identity for cosine can be derived by using the angle difference identity.
            <br><br>
            Consider the angle difference identity for cosine.

            $$ \cos \left(A-B\right)=\cos A\cos B+\sin A\sin B$$

            Let \(B=-B\) and note that,

            $$\begin{aligned}\cos\left(-\theta\right)&=\cos\theta\\\sin\left(-\theta\right)&=-\sin\theta\end{aligned}$$

            The above facts will be used for simplifications.

            $$\cos\left(A-(-B)\right) = \cos A\cos (-B)+\sin A\sin (-B)$$

            Now apply the facts about sine and cosine.

            $$\cos\left(A-(-B)\right) = \cos A\cos B-\sin A\sin B$$

            We will get the angle sum identity when the left hand side of the expression is simplified.
          </p>
          <AppBlockQuote color="green"> $$ \cos \left(A+B\right)=\cos A\cos B-\sin A\sin B$$</AppBlockQuote>
          <p>The angle sum identity and angle difference identity are often combined into one formula for neatness and convenience. By combining the two identities, we get the angle sum and difference identity for cosine.</p>
          <AppBlockQuote color="green">  $$ \cos \left(A\pm B\right)=\cos A\cos B\mp\sin A\sin B$$</AppBlockQuote>
        </section>
        
      </AppMathProof>

      

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
      text: 'Angle Difference Identity'
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
