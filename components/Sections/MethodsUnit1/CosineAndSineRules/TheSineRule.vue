<template>
  <div>
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
        
        <p>
          To derive the sine rule, we must prove the formula for both acute and obtuse triangles. The sine rule will apply to all triangles if the rule is true for both of these cases.
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

          <p>
            To derive the formula, create a perpendicular height from angle \(B\) to side \(b\). 
            This is shown by the green dashed line. Expressing the height in terms of a side and the sine of an angle will lead to the formula of the sine rule. 
            Consider the acute triangle \(\text{$\triangle $ABC}\).
          </p>

          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.12.svg">
          </AppImage>

          <p>
            First consider \(\text{$\triangle $ABD}\) 
            $$\begin{aligned} 
            \sin A &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{c} \\ h &= c\sin A \tag{1} 
            \end{aligned}$$ 
            Now consider \(\text{$\triangle $CBD}\) 
            $$\begin{aligned} \sin C &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{a} \\ h &= a\sin C \tag{2} 
            \end{aligned}$$ 
            Equating (1) and (2): 
            $$\begin{aligned} h &= h \\ c\sin A &= a\sin C \\ \frac { c }{ \sin{ C }} &= \frac{ a }{ \sin{ A }} \tag{3} 
            \end{aligned}$$
          </p>
          
          <p>
            To include angle \(B\) and side \(b\) in the relationship, construct another perpendicular height from angle \(A\) to side \(a\). 
            This is shown by the green dashed line in the graphic below.
          </p>

          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.13.svg">
          </AppImage>

          <p>
            First consider \(\text{$\triangle $ABD}\) 
            $$\begin{aligned} \sin B &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{c} \\ h &= c\sin B \tag{4} \end{aligned}$$
            Now consider \(\text{$\triangle $ACD}\) 
            $$\begin{aligned} \sin C &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{b} \\ h &= b\sin C \tag{5} \end{aligned}$$ 
            Equating (4) and (5): 
            $$\begin{aligned} h &= h \\ c\sin B &= b\sin C \\ \frac { c }{ \sin{ C }} &= \frac{ b }{ \sin{ B }} \tag{6} \end{aligned}$$
            Thus by equating (3) and (6),
          </p>
          <AppBlockQuote color="green" > $$\frac { a }{ \sin  A } =\frac { b }{ \sin  B } =\frac { c }{ \sin  C }$$ </AppBlockQuote>
        </section>

        <section v-show="flag">
          <AppSubtitle>Derivation for Obtuse Triangles</AppSubtitle>
          <p>
            To derive the formula, create a perpendicular height from angle \(B\) to the extension of side \(b\). This is shown by the green dashed line. Expressing the height in terms of a side and the sine of an angle will lead to the formula of the sine rule.
            <br><br>
            Consider obtuse triangle  \(\text{$\triangle $ABC}\)
          </p>
          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.10.svg">
          </AppImage>
          <p>
            First consider \(\text{$\triangle $ABD}\) 
            $$\begin{aligned} \sin A &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{c} \\ h &= c\sin A \tag{1} \end{aligned}$$
            Now consider \(\text{$\triangle $CBD}\) 
            $$\begin{aligned} \sin ({180}^{\circ}-C) &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{a} \\ h &= a\sin ({180}^{\circ}-C) \\ h &= a\sin C \tag{2}  \end{aligned}$$
            Equating (1) and (2):
            $$\begin{aligned} h &= h \\ c\sin A &= a\sin C \\ \frac { c }{ \sin{ C }} &= \frac{ a }{ \sin{ A }} \tag{3} \end{aligned}$$
          </p>
          <p>
            To include angle \(B\) and side \(b\) in the relationship, construct another perpendicular height from angle \(A\) to the extension of side \(a\). This is shown by the green dashed line in the graphic below.
          </p>
          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.14.svg">
          </AppImage>

          <p>
            First consider \(\text{$\triangle $ABD}\) 
            $$\begin{aligned} \sin B &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{c} \\ h &= c\sin B \tag{4} \end{aligned}$$
            Now consider \(\text{$\triangle $ACD}\) 
            $$\begin{aligned} \sin \left({180}^{\circ}-C\right) &= \frac{\text{opposite}}{\text{hypotenuse}}=\frac{h}{b} \\ h &= b\sin ({180}^{\circ}-C) \\ h &= b\sin C\tag{5} \end{aligned}$$
            Equating (4) and (5): 
            $$\begin{aligned} h &= h \\ c\sin B &= b\sin C \\ \frac { c }{ \sin{ C }} &= \frac{ b }{ \sin{ B }} \tag{6}  \end{aligned}$$
            Thus by equating (3) and (6),
          </p>
          <AppBlockQuote color="green" > $$\frac { a }{ \sin  A } =\frac { b }{ \sin  B } =\frac { c }{ \sin  C }$$ </AppBlockQuote>


        </section>
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

      <AppColumns>
        <AppColumn width="250px">
          <!-- COLUMN 1 GOES HERE -->
          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.15.svg">
          </AppImage>
        </AppColumn>
        <AppColumn width="250px">
          <!-- COLUMN 2 GOES HERE -->
          <AppImage width="small">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.16.svg">
          </AppImage>
        </AppColumn>
      </AppColumns>

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
import AppColumns from '@/components/Utilities/AppColumns'
import AppColumn from '@/components/Utilities/AppColumn'


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppVideo,
    AppImage,
    AppBlockQuote,
    AppMathProof,
    AppToggle,
    AppColumns,
    AppColumn
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