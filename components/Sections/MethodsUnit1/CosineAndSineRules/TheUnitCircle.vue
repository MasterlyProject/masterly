<template>
  <div>
    <AppSection
      title="The Unit Circle"
      color="green"
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
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.03.svg">
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

      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.04.svg">
      </AppImage>
      <p>
        The following calculations refer to the right triangle above created on the unit circle.
      </p>

      <h4 style="text-align: center; font-weight: bold;">SOH</h4>

      <p>
        $$
        \sin \theta = \frac{\text{opposite}}{\text{hypotenuse}} = \frac{y}{1}
        $$
      </p>

      <AppBlockQuote color="green">
        $$\sin \theta = y$$
      </AppBlockQuote>

      <p>
        This concludes that sine is the \(y\) component of a coordinate on the unit circle.
      </p>

      <h4 style="text-align: center; font-weight: bold;">CAH</h4>


      <p>
        $$
        \cos \theta = \frac{\text{adjacent}}{\text{hypotenuse}} = \frac{x}{1}
        $$
      </p>

      <AppBlockQuote color="green">
        $$\cos \theta = x$$
      </AppBlockQuote>

      <p>
        This concludes that cosine is the \(x\) component of a coordinate on the unit circle.
      </p>

      <h4 style="text-align: center; font-weight: bold;">TOA</h4>

      <p>
        Tangent can be derived by using our results from both sine and cosine.

        $$\tan \theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{y}{x}$$

        We can further simplify as we now know that \(\sin \theta=y\) and \(\cos \theta=x\).
      </p>

      <AppBlockQuote color="green">
        $$\tan \theta = \frac{\sin \theta}{\cos \theta}$$
      </AppBlockQuote>

      <p>
        We have discovered that tangent is related to both sine and cosine. However, there is also a more visual way of representing tangent on the unit circle which we will discuss in the next section.
      </p>
      
      <AppSubtitle>
        Representing Tangent in a More Visual Way
      </AppSubtitle>

      <p>
        Tangent can be represented more visually on the unit circle by considering the right triangle \(\triangle OPQ\).
      </p>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.05.svg">
      </AppImage>

      <p>
        The orange dashed line has the equation \(x=1\). We have extended our angle line (the line that starts at the origin and ends at the circumference) until it meets the orange dashed line (at point \(P\)). We have now made a new triangle, \(\triangle OPQ\).
        <br> <br>
        Consider \(\triangle OPQ\) in these calculations.
        <br>
        Note that length \(OQ\) is one unit being the radius of the unit circle.
    
        $$
        \begin{aligned}
        \tan \theta = \frac{\text{opposite}}{\text{adjacent}} = \frac{PQ}{OQ} = \frac{PQ}{1}
        \end{aligned}
        $$
      </p>

      <AppBlockQuote color="green">
        $$\tan \theta = PQ$$
      </AppBlockQuote>

      <p>
        In words, tangent is the \(y\) component of the coordinate where the \(x=1\) line intercepts the angle line
        <br>
        i.e. the height \(PQ\).
      </p>

      <AppSubtitle>
        Summary
      </AppSubtitle>

      <p>
        We have successfully extended our definitions for sine, cosine and tangent to complement for any angle of \(\theta\) using the unit circle. The graphic below summarises our findings. 
      </p>
      <p style="font-weight: bold;">Main Notes:</p>
      <ul>
        <li> Cosine is the \(x\) component of a coordinate on the unit circle.</li>
        <li> Sine is the \(y\) component of a coordinate on the unit circle.</li>
        <li> Tangent is the \(y\) component of the coordinate where the \(x=1\) line intercepts the angle line.</li>
        <li> \(\tan \theta=\frac{\sin \theta}{\cos \theta}\)  (an alternate relationship for tangent)<br><br></li>
      </ul>
      
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.06.svg">
      </AppImage>

      <AppSubtitle>
        Coordinates on the Unit Circle at common angles
      </AppSubtitle>

      <p>
        The graphic below shows the unit circle with coordinates at angles that are multiples of \(30^{\circ}\) and \(45^{\circ}\). Try to understand the relationship between the coordinates and the angles with sine, cosine and tangent.
      </p>
      <p style="font-weight: bold;">Reminder:</p>

      <ul>
        <li> Cosine is the \(x\) component of a coordinate on the unit circle.</li>
        <li> Sine is the \(y\) component of a coordinate on the unit circle.</li>
        <li> Tangent is related to both sine and cosine by \(\tan \theta=\frac{\sin \theta}{\cos \theta}\)<br><br></li>
      </ul>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.07.svg">
      </AppImage>

      <AppSubtitle>
        Interactive Elements
      </AppSubtitle>

      <p>
        The interactive elements below will help you further conceptualise the unit circle and its relationship to sine, cosine and tangent.
      </p>

      <AppModal :mini-player="false">
        <AppInteractive
          name="a"
          src="/scripts/interactives/mathMethodsUnit1/cosineAndSineRules/a.js"
        />
      </AppModal>

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

export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppInteractive,
    AppVideo,
    AppImage,
    AppBlockQuote,
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}
</script>
