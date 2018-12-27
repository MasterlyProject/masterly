<template>
  <div>
    <AppSection
      title="Angle of Inclination"
      color="green"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppSubtitle>
        Angle of Inclination
      </AppSubtitle>
      
      <AppBlockQuote color="green" >The angle of inclination is the angle between a line and the positive \(x\) axis.</AppBlockQuote>
      <p>Some examples follow below where \(\theta_i\) represents the angle of inclination.</p>
      <AppColumns>
        <AppColumn width="250px">
          <!-- COLUMN 1 GOES HERE -->
          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.19.svg">
          </AppImage>
        </AppColumn>
        <AppColumn width="250px">
          <!-- COLUMN 2 GOES HERE -->
          <AppImage width="medium">
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.20.svg">
          </AppImage>
        </AppColumn>
      </AppColumns>

      <p>
        There exists a relationship between the gradient of a line and its angle of inclination.
        <br><br>
        Suppose we cut a section from a line and made a right triangle as shown below. Note that the angle of the triangle against the green line will be the angle of inclination as they are <strong>corresponding angles</strong>.
      </p>
      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/CosAndSin.21.svg">
      </AppImage>

      <p>
        Consider \(\tan \theta\)
    
        $$\begin{aligned}
        \tan \theta_i &= \frac{\text{opposite}}{\text{adjacent}} = \frac{\Delta y}{\Delta x}
        \\
        \tan \theta_i &= \frac{\Delta y}{\Delta x} \tag{1}
        \end{aligned}$$
    
        Consider the gradient \((m)\) of the line
        $$\begin{aligned}
        m &= \frac{\text{rise}}{\text{run}} = \frac{\Delta y}{\Delta x}
        \\
        m &= \frac{\Delta y}{\Delta x} \tag{2}
        \end{aligned}$$
        Now by equating \((1)\) and \((2)\):
      </p>
      <AppBlockQuote color="green" >$$\tan \theta_i = m$$</AppBlockQuote>
      <p>This concludes that the gradient of a line is equal to the tangent of its angle of inclination.</p>


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