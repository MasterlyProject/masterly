<template>
  <div>
    <AppSection
      title="Sines Angle Sum and Difference Identity"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        What is the Angle Sum and Difference Identity for Sine?
      </AppSubtitle>

      <p>
        How do we expand \(\sin\left({45}^{\circ}+{45}^{\circ}\right)\)? It may be assumed that the crab claw method can help in this situation. Let us find out if this is the case.
        <br><br>
        Firslty, the real result of \(\sin\left({45}^{\circ}+{45}^{\circ}\right)\) is shown below.

        $$\begin{aligned} \sin\left({45}^{\circ}+{45}^{\circ}\right) &= \sin\left({90}^{\circ}\right) \\ &= 1 \end{aligned}$$

        We get the following result by using the crab claw method of expansion.

        $$\begin{aligned} \sin\left({45}^{\circ}+{45}^{\circ}\right) &= \sin\left({45}^{\circ}\right)+\sin\left({45}^{\circ}\right) \\ &= \frac{\sqrt{2}}{2}+\frac{\sqrt{2}}{2} \\ &= \frac{2\sqrt{2}}{2} \\ &= \sqrt2 \end{aligned}$$

        Notice that there is a contradiction between the real result and the result obtained by using the crab claw method of expansion. This contradiction will also occur when subtracting two angles. This concludes that the crab claw method cannot be used for the expansion of sine.
        <br><br>
        The angle sum and difference identity for sine is instead used for the expansion of sine. The formulas and derivations are shown below.
      </p>

      <AppSubtitle>
        Derivation of the Angle Sum and Difference Identity for Sine
      </AppSubtitle>

      <p>For two angles \(A\) and \(B\) the angle sum and difference identity for sine is shown below.</p>

      <AppMathProof>
        <AppBlockQuote 
          slot="equation"
          color="green" 
        >
          $$\sin\left( A\pm B \right)=\sin A\cos B \pm \cos A\sin B$$
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
            Derivation of Sines Angle Difference Identity
          </AppSubtitle>

          <p>
            This identity can be derived by using cosines angle sum identity along with some facts that are noted below.

            $$\begin{aligned} \sin \theta &= \cos \left(\frac{\pi}{2}-\theta\right) \tag{1}\end{aligned}$$ 
            $$\begin{aligned} \cos \theta &= \sin \left(\frac{\pi}{2}-\theta\right) \tag{2} \end{aligned}$$

            Use fact \((1)\) on \(\sin \left(A-B\right)\) by letting \(\theta=A-B\).

            $$\sin \left(A-B\right)=\cos \left(\frac{\pi}{2}-(A-B)\right)$$

            Expand the brackets within cosine.

            $$\begin{aligned} \sin \left(A-B\right)&= \cos \left(\frac{\pi}{2}-(A-B)\right) \\ &= \cos \left(\frac{\pi}{2}-A+B\right)\end{aligned}$$

            Use cosines angle sum identity \((\cos \left(A+B\right)=\cos A\cos B-\sin A\sin B)\). Let \(A=\left(\frac{\pi}{2}-A\right)\).
            $$\begin{aligned} &= \cos \left(\left(\frac{\pi}{2}-A\right)+B \right) \\ &= \cos \left(\frac{\pi}{2}-A\right)\cos B - \sin \left(\frac{\pi}{2}-A\right)\sin B \end{aligned}$$

            Apply facts \((1)\) and \((2)\) to get the angle difference identity for sine.
          </p>
          <AppBlockQuote color="green">$$\sin \left(A-B\right)= \sin A \cos B - \cos A \sin B$$</AppBlockQuote>
        </section>

        <section v-show="flag">
          <AppSubtitle>
            Derivation of Sines Angle Difference Identity
          </AppSubtitle>
          <p>
            The angle sum identity for sine can be derived by using the angle difference identity.
            <br><br>
            Consider the angle difference identity for sine.
            $$ \sin \left(A-B\right)=\sin A\cos B-\cos A\sin B$$

            Let \(B=-B\) and note that,

            $$\begin{aligned}\cos\left(-\theta\right)&=\cos\theta\\\sin\left(-\theta\right)&=-\sin\theta\end{aligned}$$

            The above facts will be used for simplifications.

            $$\sin\left(A-(-B)\right) = \sin A\cos (-B)-\cos A\sin (-B)$$

            Now apply the facts about sine and cosine.

            $$\sin\left(A-(-B)\right) = \sin A\cos B+\cos A \sin B$$

            We will get the angle sum identity when the left hand side of the expression is simplified.
          </p>
          <AppBlockQuote color="green">$$\sin \left(A+B\right)= \sin A \cos B + \cos A \sin B$$</AppBlockQuote>
          <p>
            The angle sum identity and angle difference identity are often combined into one formula for neatness and convenience. By combining the two identities, we get the angle sum and difference identity for sine.
          </p>
          <AppBlockQuote color="green">$$\sin\left( A\pm B \right)=\sin A\cos B \pm \cos A\sin B$$</AppBlockQuote>
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
