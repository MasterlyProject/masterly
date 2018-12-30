<template>
  <div>
    <AppSection
      title="Tangents Angle Sum and Difference Identity"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        What is the Angle Sum and Difference Identity for Tangent?
      </AppSubtitle>

      <p>
        How do we expand \(\tan\left({45}^{\circ}+{45}^{\circ}\right)\)? It may be assumed that the crab claw method can help in this situation. Lets find out if this is the case.
        <br><br>
        Firslty, the real result of \(\tan\left({45}^{\circ}+{45}^{\circ}\right)\) is shown bellow.

        $$\begin{aligned} \tan\left({45}^{\circ}+{45}^{\circ}\right) &= \tan\left({90}^{\circ}\right) \\ &= \text{undefined} \end{aligned}$$

        We get the following result by using the crab claw method of expansion.

        $$\begin{aligned} \tan\left({45}^{\circ}+{45}^{\circ}\right) &= \tan\left({45}^{\circ}\right)+\tan\left({45}^{\circ}\right) \\ &= 1+1 \\ &= 2\end{aligned}$$

        Notice that there is a contradiction between the real result and the result obtained by using the crab claw method of expansion. This contradiction will also occur when subtracting two angles. This concludes that the crab claw method cannot be used for the expansion of tangent.
        <br><br>
        The angle sum and difference identity for tangent is instead used for the expansion of tangent. The formulas and derivations follow in the next couple of sections.
      </p>

      <AppSubtitle>
        Derivation of the Angle Sum and Difference Identity for Tangent
      </AppSubtitle>

      <p>For two angles \(A\) and \(B\) the angle sum and difference identity for tangent is shown below.</p>

      <AppMathProof>
        <AppBlockQuote 
          slot="equation"
          color="green" 
        >
          $$\tan \left( {A \pm B } \right) = \frac{\tan A \pm \tan B }{1 \mp \tan A \tan B }$$
        </AppBlockQuote>

        <AppToggle 
          color="green"
          @toggle="toggleButton"
        >
          <div v-show="flag">Angle Sum Identity</div>
          <div v-show="!flag">Angle Difference Identity</div>
        </AppToggle>

        <section v-show="flag">
          <AppSubtitle>
            Derivation of Tangents Angle Sum Identity
          </AppSubtitle>

          <p>
            The angle sum identity for tangent can be found by using the fact that \(\tan \theta = \frac{\sin \theta}{\cos \theta}\).
            <br><br>
            Use the fact that \(\tan \theta = \frac{\sin \theta}{\cos \theta}\) for \(\theta = A+B\).

            $$\begin{aligned}
            \tan \left(A+B\right) &= \frac{\sin \left(A+B\right)}{\cos \left(A+B\right)}
            \end{aligned}$$
            Expand using the angle sum identity for sine and cosine.
            $$\begin{aligned}
            &= \frac{\sin A\cos B+\cos A\sin B}{\cos A\cos B-\sin A\sin B}
            \end{aligned}$$

            Divide each component of the fraction by \(\cos A \cos B\). This has the same effect as multiplying the fraction by \(\frac{\cos A \cos B}{\cos A \cos B}\) which will not change the expression as it is the same as multiplying by one. This step will help simplify the expression as elements will cancel out.

            $$\begin{aligned}
            &= \frac{\frac{\sin A\cos B}{\cos A \cos B}+\frac{\cos A\sin B}{\cos A \cos B}}{\frac{\cos A\cos B}{\cos A \cos B}-\frac{\sin A\sin B}{\cos A \cos B}}
            \\
            &= \frac{\frac{\sin A\cancel{\cos B}}{\cos A \cancel{\cos B}}+\frac{\cancel{\cos A}\sin B}{\cancel{\cos A} \cos B}}{\frac{\cancel{\cos A}\cancel{\cos B}}{\cancel{\cos A} \cancel{\cos B}}-\frac{\sin A\sin B}{\cos A \cos B}}
            \\
            &= \frac{\frac{\sin A}{\cos A}+\frac{\sin B}{\cos B}}{1-\frac{\sin A}{\cos A}\frac{\sin B}{\cos B}}
            \end{aligned}$$

            Use the fact that \(\tan \theta = \frac{\sin \theta}{\cos \theta}\) one more time to get the angle sum identity for tangent.
          </p>
          <AppBlockQuote color="green">$$\tan \left(A+B\right) = \frac{\tan A + \tan B}{1 - \tan A \tan B}$$</AppBlockQuote>
        </section>

        <section v-show="flag">
          <AppSubtitle>
            Derivation of Tangents Angles Difference Identity
          </AppSubtitle>
          <p>
            The angle difference identity for tangent can be found by using the fact that \(\tan \theta = \frac{\sin \theta}{\cos \theta}\).
            <br><br>
            Use the fact that \(\tan \theta = \frac{\sin \theta}{\cos \theta}\) for \(\theta = A-B\).
            $$\begin{aligned}
            \tan \left(A-B\right) &= \frac{\sin \left(A-B\right)}{\cos \left(A-B\right)}
            \end{aligned}$$
            Expand using the angle difference identity for sine and cosine.
            $$\begin{aligned}
            &= \frac{\sin A\cos B-\cos A\sin B}{\cos A\cos B+\sin A\sin B}
            \end{aligned}$$
            Divide each component of the fraction by \(\cos A \cos B\). This has the same effect as multiplying the fraction by \(\frac{\cos A \cos B}{\cos A \cos B}\) which will not change the expression as it is the same as multiplying by one. This step will help simplify the expression as elements will cancel out.

            $$\begin{aligned}
            &= \frac{\frac{\sin A\cos B}{\cos A \cos B}-\frac{\cos A\sin B}{\cos A \cos B}}{\frac{\cos A\cos B}{\cos A \cos B}+\frac{\sin A\sin B}{\cos A \cos B}}
            \\
            &= \frac{\frac{\sin A\cancel{\cos B}}{\cos A \cancel{\cos B}}-\frac{\cancel{\cos A}\sin B}{\cancel{\cos A} \cos B}}{\frac{\cancel{\cos A}\cancel{\cos B}}{\cancel{\cos A} \cancel{\cos B}}+\frac{\sin A\sin B}{\cos A \cos B}}
            \\
            &= \frac{\frac{\sin A}{\cos A}-\frac{\sin B}{\cos B}}{1+\frac{\sin A}{\cos A}\frac{\sin B}{\cos B}}
            \end{aligned}$$

            Use the fact that \(\tan \theta = \frac{\sin \theta}{\cos \theta}\) one more time to get the angle difference identity for tangent.
          </p>
          <AppBlockQuote color="green">$$\tan \left(A-B\right) = \frac{\tan A - \tan B}{1 + \tan A \tan B}$$</AppBlockQuote>
          <p>
            The angle sum identity and angle difference identity are often combined into one formula for neatness and convenience. By combining the two identities, we get the angle sum and difference identity for tangent.
          </p>
          <AppBlockQuote color="green">$$\tan \left(A \pm B\right) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}$$</AppBlockQuote>
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
      text: 'Angle Difference Identity',
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
