<template>
  <div>
    <AppSection
      title="Pythagorean Identity"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        Derivation of the Pythagorean identity
      </AppSubtitle>

      <p>The Pythagorean identity relates sine and cosine to the Pythagorean theorem.</p>

      <AppMathProof>
        <AppBlockQuote 
          slot="equation"
          color="green" 
        >
          $$\cos ^2 \theta + \sin^2 \theta = 1$$
        </AppBlockQuote>

        <AppImage width="large">
          <img src="@/assets/images/MethodsUnit1/TrigonometricIdentities/TrigIden.01.svg">
        </AppImage>
        
        <p>
          Consider the right triangle in the unit circle presented in the graphic.
          <br>
          Use the Pythagorean theorem.

          $$\begin{aligned}
          x^2 + y^2 &= 1^2
          \\
          x^2 + y^2 &= 1
          \end{aligned}$$

          We know \(\cos \theta = x\) and \(\sin \theta = y\) from the unit circle definition of sine and cosine. Let us replace the values of \(x\) and \(y\). This will result in the Pythagorean identity.
        </p>
        <AppBlockQuote color="green" > $$\cos ^2 \theta + \sin^2 \theta = 1$$ </AppBlockQuote>
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


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppVideo,
    AppImage,
    AppBlockQuote,
    AppMathProof
  }
}
</script>
