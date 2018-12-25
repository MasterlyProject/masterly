<template>
  <div>

    <AppSection
      title="The Unit Circle"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        What is the Unit Circle?
      </AppSubtitle>

      <p>
        Main Features:
        <ul>
          <li>Has a radius of one</li>
          <li>Centered at \(\left(0,0\right)\)</li>
        </ul>
      </p>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.02.svg">
      </AppImage>

      <p>
        The unit circle is defined as a circle centred at the origin \((0,0)\) of the \(x-y\) plane and has a radius equal to one unit. 
        <br>
        Angles are measured starting \(0^{\circ}\) on the positive \(x\) axis where moving anticlockwise will produce a positive angle and clockwise will produce a negative angle. The graphic above shows \(\theta\) to be a positive angle through this convention. 
        <br>
        Defining the unit circle and its angles in this way will help extend our current definitions for sine, cosine, and tangent to compliment for all angles of \(\theta\).
      </p>

      <AppSubtitle>
        The Unit Circle Definition of Sine, Cosine and Tangent
      </AppSubtitle>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.02.svg">
      </AppImage>

      <p>
        We can start to derive our trigonometric functions using the unit circle definition by firstly drawing a vertical line from our \((x,y)\) coordinate down to the \(x\) axis shown by the orange dashed line in the graphic. Notice we now have a right triangle with our angle θ thus the SOH CAH TOA mnemonic can be used.
        <br> <br>
        <ul>
          <li> The hypotenuse of the triangle has a length equal to one unit as it is the radius of the unit circle.</li>
          <li> The opposite side length is the \(y\) component of the \((x,y)\) coordinate.</li>
          <li> The adjacent side length is the \(x\) component of the \((x,y)\) coordinate.</li>
        </ul>
        <br>
        We can use the labeled right triangle and our current knowledge on trigonometry to find the unit circle definition for sine, cosine and tangent.
      </p>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.02.svg">
      </AppImage>

      <p>
        The following calculations refer to the right triangle above created on the unit circle.
      </p>

      <center style="font-weight: bold;">
        <h4>SOH</h4>
      </center>

      <p>
        $$
        \sin \theta = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{y}{1}
        $$
      </p>

      <AppBlockQuote color="blue">
        $$\sin \theta = y$$
      </AppBlockQuote>

      <p>
        This concludes that sine is the \(y\) component of a coordinate on the unit circle.
      </p>

      <center style="font-weight: bold;">
        <h4>CAH</h4>
      </center>

      <p>
        $$
        \cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}} = \frac{x}{1}
        $$
      </p>

      <AppBlockQuote color="blue">
        $$\cos \theta = x$$
      </AppBlockQuote>

      <p>
        This concludes that cosine is the \(x\) component of a coordinate on the unit circle.
      </p>

      <center style="font-weight: bold;">
        <h4>TOA</h4>
      </center>

      <p>
        Tangent can be derived by using our results from both sine and cosine.

        $$\tan \theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{y}{x}$$

        We can further simplify as we now know that \(\sin \theta=y\) and \(\cos \theta=x\).
      </p>

      <AppBlockQuote color="blue">
        $$\tan \theta = \frac{\sin \theta}{\cos \theta}$$
      </AppBlockQuote>

    </AppSection>

    <AppSection
      title="The Sine Rule"
      color="blue"
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
          color="blue" 
        >
          $$
          \frac { a }{ \sin  A } =\frac { b }{ \sin  B } =\frac { c }{ \sin  C } 
          $$
        </AppBlockQuote>
        
        <p>To derive the formula, create a perpendicular height from angle \(B\) to side \(b\). This is shown by the orange dashed line. Expressing the height in terms of a side and the sine of an angle will lead to the formula of the sine rule. Consider the acute triangle \(\text{$\triangle $ABC}\).</p>
        <AppImage width="medium">
          <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.02.svg">
        </AppImage>

        <p>
          First consider \(\text{$\triangle $ABD}\)

          $$\begin{aligned} \sin A &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{c} \\ h &= c\sin A \end{aligned} \tag{1}$$
          
          Now consider \(\text{$\triangle $CBD}\) 
          
          $$\begin{aligned} \sin C &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{a} \\ h &= a\sin C  \tag{2} \end{aligned}$$
          
          Equating (1) and (2): 
          
          $$\begin{aligned} h &= h \\ c\sin A &= a\sin C \\ \frac { c }{ \sin{ C }} &= \frac{ a }{ \sin{ A }} \end{aligned}$$
        </p>

        <AppBlockQuote color="blue">
          $$
          \frac { c }{ \sin{ C }} = \frac{ a }{ \sin{ A }}
          $$
        </AppBlockQuote>

      </AppMathProof>

    </AppSection>

  </div>
</template>

<script>

import AppSection from '@/components/Utilities/AppSection'
import AppSubtitle from '@/components/Utilities/AppSubtitle'
import AppModal from '@/components/Utilities/AppModal'
import AppInteractive from '@/components/Utilities/AppInteractive'
import AppVideo from '@/components/Utilities/AppVideo'
import AppColumns from '@/components/Utilities/AppColumns'
import AppColumn from '@/components/Utilities/AppColumn'
import AppImage from '@/components/Utilities/AppImage'
import AppBlockQuote from '@/components/Utilities/AppBlockQuote'
import AppMathProof from '@/components/Utilities/AppMathProof'


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppInteractive,
    AppVideo,
    AppColumns,
    AppColumn,
    AppImage,
    AppBlockQuote,
    AppMathProof
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>

<style>


</style>

