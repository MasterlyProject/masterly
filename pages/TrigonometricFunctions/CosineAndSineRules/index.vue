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

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.01.svg">
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
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.01.svg">
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
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.02.svg">
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
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.03.svg">
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
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.01.svg">
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
        <li> \(\tan \theta=\frac{\sin \theta}{\cos \theta}\)  (an alternate relationship for tangent)</li>
      </ul>
      
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.01.svg">
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
        <li> Tangent is related to both sine and cosine by \(\tan \theta=\frac{\sin \theta}{\cos \theta}\)</li>
      </ul>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.01.svg">
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

    <AppSection
      title="The Area Rule"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        Convention used to Label a Triangle
      </AppSubtitle>
      
      <p>
        In relation to triangles, we are going to investigate the area rule, sine rule and cosine rule. These formulas use specific symbols that correspond to sides and angles of a triangle. We must follow a common convention to label these sides and angles so that the formulas stay consistent and make sense.
        <br>
        Consider the graphic below.
      </p>
      
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.01.svg">
      </AppImage>

      <p>
        The convention used to labelling sides and angles of triangles is shown below.
      </p>
      <ul>
        <li>Angles are always written in capital letters</li>
        <li>Sides are always written in lower case letters</li>
        <li>Sides are oriented opposite their angle (e.g. side \(a\) is opposite angle \(A\)</li>
      </ul>

      <AppSubtitle>
        Derivation of the Area Rule
      </AppSubtitle>

      <p> 
        The following formula is the area rule for any triangle with an angle \(C\) between two sides \(a\) and \(b\) i.e. follow the convention used to labelling a triangle.
      </p>

      <AppMathProof>
        <AppBlockQuote 
          slot="equation"
          color="green" 
        >
          $$
          A = \frac{1}{2}ab\sin C
          $$
        </AppBlockQuote>
        
        <p>
          To derive the area rule, we must prove the formula for both acute and obtuse triangles. The area rule will apply to all triangles if the rule is true for both of these cases.
        </p>

        <AppBlockQuote color="green">
          $$
          A = \frac{1}{2}ab\sin C
          $$
        </AppBlockQuote>

      </AppMathProof>

      <AppSubtitle>
        Supplementary Angles of Sine
      </AppSubtitle>

      <p>
        Here we will discuss how \(\sin(180^\circ - C)=\sin C\) which is used to simplify the obtuse triangle proof.
        <br>
        Consider the graphic below of a unit circle with an arbitrary angle \(\phi\) and the angle \(180^ \circ - \phi\). Remember that sine of an angle is the value read off the \(y\) axis on the unit circle.
      </p>

      <ul>
        <li>\(\sin \phi\) is represented by the \(y\) value on the blue dashed line.</li>
        <li>\(\sin(180^\circ - \phi)\) is represented by the y value on the orange dashed line.</li>
      </ul>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.01.svg">
      </AppImage>

      <p>Notice that the orange and blue dashed lines meet at the same \(y\) value. Remember that the \(y\) value on the unit circle represents sine of the angle. This means \(\sin(180^\circ - \phi)= \sin \phi\).</p>

    </AppSection>


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
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/Unit.01.svg">
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

