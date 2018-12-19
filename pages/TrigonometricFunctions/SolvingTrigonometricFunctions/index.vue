<template>
  <div>

    <AppSection
      title="Revision of the Unit Circle"
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


      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/test.01.svg">
      </AppImage>

      <p>
        The unit circle is defined as a circle centred at the origin \((0,0)\) of the \(x−y\) plane and has a radius equal to one unit.
        Angles are measured starting \(0^\circ\) on the positive \(x\) axis where moving anti-clockwise will produce a positive angle and clockwise will produce a negative angle. The graphic above shows \(\theta\) to be a positive angle through this convention.
        The unit circle is used to help extend our current definitions for sine, cosine, and tangent to compliment for all angles of \(\theta\).
      </p>

      <AppSubtitle> 
        Trigonometry and the Unit Circle
      </AppSubtitle>

      <p>
        Main Notes:
        <ul>
          <li>Cosine is the \(x\) component of a coordinate on the unit circle.</li>
          <li>Sine is the \(y\) component of a coordinate on the unit circle.</li>
          <li>Tangent is the \(y\) component of the coordinate where the \(x=1\) line intercepts the angle line.</li>
          <li>\(\tan \theta=\frac{\sin \theta}{\cos \theta}\)  (an alternate relationship for tangent)</li>
        </ul>
      </p>

      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/test.01.svg">
      </AppImage>

      <p>
        Visit the The Unit Circle section in the Cosine and Sine Rule’s playlist for a more in depth look at the unit circle.  <a href="#">Click here</a> to go straight there.
      </p>

    </AppSection>


    <AppSection
      title="Unit Circle in Radians"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        The Unit Circle in Radians
      </AppSubtitle>

      <p>
        We can interpret the unit circle in radians now that we are familiar with the concept of radian measure. To recap, radians are just a unit that we use to measure the size of an angle which has a different scale to degrees. This can be compared to how distance can be measured in both kilometres \((km)\) and miles \((mi)\). The great thing about radians is that its scaling system is optimised for the angles in a circle. The unit circle is used to define sine, cosine and tangent for any angle and because this definition is based on angles in a circle, it makes sense to talk about sine, cosine and tangent in radians. Using radians in these situations will make solutions to problems come out much nicer as a more appropriate scaling system is used.
        <br> <br>
        The graphic below shows the unit circle with coordinates at angles that are multiples of \(\frac{\pi}{6}\) and \(\frac{\pi}{4}\). The corresponding angles in degrees are also shown. Try to understand the relationship between the coordinates and the angles with sine, cosine and tangent.
      </p>

      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/test.01.svg">
      </AppImage>

      <p>
        Reminder:
        <ul>
          <li>Cosine is the \(x\) component of a coordinate on the unit circle.</li>
          <li>Sine is the \(y\) component of a coordinate on the unit circle.</li>
          <li>Tangent is related to both sine and cosine by \(\tan \theta=\frac{\sin \theta}{\cos \theta}\)</li>
        </ul>
        <br>
        Visit the Radian Measure playlist for a more in depth look at the concept of radians.  <a href="#">Click here</a> go straight there.
      </p>

    </AppSection>

    <AppSection
      title="Exact Value coordinates"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        The Common Coordinates on the Unit Circle
      </AppSubtitle>

      <p>
        We can interpret the unit circle in radians now that we are familiar with the concept of radian measure. To recap, radians are just a unit that we use to measure the size of an angle which has a different scale to degrees. This can be compared to how distance can be measured in both kilometres \((km)\) and miles \((mi)\). The great thing about radians is that its scaling system is optimised for the angles in a circle. The unit circle is used to define sine, cosine and tangent for any angle and because this definition is based on angles in a circle, it makes sense to talk about sine, cosine and tangent in radians. Using radians in these situations will make solutions to problems come out much nicer as a more appropriate scaling system is used.
        <br> <br>
        The graphic below shows the unit circle with coordinates at angles that are multiples of \(\frac{\pi}{6}\) and \(\frac{\pi}{4}\). The corresponding angles in degrees are also shown. Try to understand the relationship between the coordinates and the angles with sine, cosine and tangent.
      </p>

      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/test.01.svg">
      </AppImage>

      <p>
        Reminder:
        <ul>
          <li>Cosine is the \(x\) component of a coordinate on the unit circle.</li>
          <li>Sine is the \(y\) component of a coordinate on the unit circle.</li>
          <li>Tangent is related to both sine and cosine by \(\tan \theta=\frac{\sin \theta}{\cos \theta}\)</li>
        </ul>
        <br>
        Visit the Radian Measure playlist for a more in depth look at the concept of radians.  <a href="#">Click here</a> go straight there.
      </p>

      <AppSubtitle>
        Deriving the Common Coordinates on the Unit Circle
      </AppSubtitle>

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

