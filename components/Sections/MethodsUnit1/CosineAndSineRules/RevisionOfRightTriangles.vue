<template>
  <div>
    <AppSection
      title="Revision of Right Triangles"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        The Right Triangle
      </AppSubtitle>

      <p>
        A triangle containing a right angle has powerful properties as the sides can be related by the Pythagorean theorem and their ratios are the basis of trigonometry.
      </p>

      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.01.svg">
      </AppImage>

      <p>
        <ul>
          <li>The hypotenuse is the longest side of a right triangle</li>
          <li>The adjacent side is always between angle \(\theta\) and the right angle</li>
          <li>The opposite side is always opposite the angle \(\theta\)</li>
        </ul>
      </p>

      <AppSubtitle>
        Pythagorean Theorem
      </AppSubtitle>

      The Pythagorean theorem relates the sides of a right triangle.

      <AppBlockQuote color="green">
        In any right triangle, the sum of the square of the adjacent and opposite sides is equal to the square of the hypotenuse.
      </AppBlockQuote>

      <p>
        This can be incorporated into a mathematical formula.
        <br> <br>
        For a right triangle with adjacent and opposite sides measured as \(a\) and \(b\) respectively and the length of the hypotenuse is \(c\), the theorem can be expressed as:
      </p>

      <AppBlockQuote color="green">
        $$c^2 = a^2 + b^2$$
      </AppBlockQuote>

      <AppSubtitle>
        Trigonometry
      </AppSubtitle>

      <AppColumns>
        <AppColumn>
          <!-- COLUMN 1 GOES HERE -->
          <p style="text-align: center; font-weight: bold;">SOH</p>
          <AppBlockQuote color="green">
            $$
            \begin{aligned}
            \sin \theta &= \frac{\text{opposite}}{\text{hypotenuse}} 
            \end{aligned}
            $$
          </AppBlockQuote>
        </AppColumn>
        <AppColumn>
          <!-- COLUMN 2 GOES HERE -->
          <p style="text-align: center; font-weight: bold;">CAH</p>
          <AppBlockQuote color="green">
            $$
            \begin{aligned}
            \cos \theta &= \frac{\text{adjacent}}{\text{hypotenuse}} 
            \end{aligned}
            $$
          </AppBlockQuote>
        </AppColumn>
        <AppColumn>
          <!-- COLUMN 3 GOES HERE -->
          <p style="text-align: center; font-weight: bold;">TOA</p>
          <AppBlockQuote color="green">
            $$
            \begin{aligned}
            \tan \theta &= \frac{\text{opposite}}{\text{adjacent}}  
            \end{aligned}
            $$
          </AppBlockQuote>
        </AppColumn>
      </AppColumns>

      <p>
        SOH CAH TOA requires the use of an adjacent, opposite and hypotenuse side thus it should be clear that a right triangle must be constructed in order to define sine, cosine and tangent of \(\theta\). In order to sustain a right triangle, \(\theta\) must be between \(0^{\circ}\) and \(90^{\circ}\)  \(\left(0^{\circ}&lt;\theta&lt;90^{\circ}\right)\).
        Our definitions for sine, cosine and tangent break down when \(\theta\) is beyond this domain. This is because we can no longer define a hypotenuse, adjacent and opposite side to manipulate their ratios using SOH CAH TOA in order to find sine, cosine and tangent of \(\theta\). At the moment we are restricted to finding trigonometric values for angles between \(0^{\circ}\) and \(90^{\circ}\). 
        We want to extend our current trigonometric definitions to compliment for angles beyond this domain. This can be achieved by investigating the unit circle.
      </p>

    </AppSection>
  </div>
</template>

<script>

import AppSection from '@/components/Utilities/AppSection'
import AppSubtitle from '@/components/Utilities/AppSubtitle'
import AppModal from '@/components/Utilities/AppModal'
import AppVideo from '@/components/Utilities/AppVideo'
import AppColumns from '@/components/Utilities/AppColumns'
import AppColumn from '@/components/Utilities/AppColumn'
import AppImage from '@/components/Utilities/AppImage'
import AppBlockQuote from '@/components/Utilities/AppBlockQuote'


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppVideo,
    AppColumns,
    AppColumn,
    AppImage,
    AppBlockQuote,
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>
