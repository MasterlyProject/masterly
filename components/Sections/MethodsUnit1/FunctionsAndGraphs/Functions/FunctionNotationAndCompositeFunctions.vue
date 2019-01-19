<template>
  <div>
    <AppSection
      title="Function Notation and Composite Functions"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <AppSubtitle>Function Notation</AppSubtitle>
      <p>Consider the <strong>function notation</strong>: $$y=f\left(x\right)$$</p>
      <ul>
        <li>The <strong>input</strong> is \(x\)</li>
        <li>The <strong>function</strong> is \(f\)</li>
        <li>The <strong>output</strong> is \(y\)</li>
      </ul>
      <br>
      <p>By translating this into a <strong>map</strong>:</p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.04.svg">
      </AppImage>
      <br>
      <p>Consider the following function: $$f\left(x\right) = 4x+5$$ Suppose we want to find the <strong>output</strong> of \(f\left(2\right)\). The input has now changed from a general variable \(x\) into the value \(2\). Thus we simply sub \(2\) into our equation.</p>
      <p>
        $$\begin{aligned}
        f\left(x\right) &= 4x+5
        \\
        f\left(2\right) &= 4(2)+5
        \\ 
        &=13
        \end{aligned}$$
        By translating this into a map:
      </p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.05.svg">
      </AppImage>
      <br>
      <p>Note that we can use any variable or function symbol to represent our function.</p>

      <ul>
        <li>\(g\left(x\right) = 4x+5\)</li>
        <li>\(f\left(a\right) = 4x+5\)</li>
        <li>\(h\left(z\right) = 4x+5\)</li>
      </ul>
      <br>
      <p>are all valid notations to represent our function.</p>

      <AppSubtitle>Composite Functions</AppSubtitle>

      <p>
        Suppose we want to find the <strong>output</strong> of \(g\left(2\right)\).

        $$\begin{aligned}
        g\left(x\right) &= x^2
        \\
        g\left(2\right) &= (2)^2
        \\ 
        &=4
        \end{aligned}$$

        By translating this into a map:
      </p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.06.svg">
      </AppImage>
      <br>
      <p>
        Now suppose we want to find the <strong>output</strong> of \(f\left(g\left(2\right)\right)\). The input has now changed from a general variable \(x\) into the function output of \(g\left(2\right)\). Thus we simply sub \(g\left(2\right)\) into our equation.

        $$\begin{aligned}
        f\left(x\right) &= 4x+5
        \\
        f\left(g\left(2\right)\right) &= 4\cdot g\left(2\right)+5
        \\ 
        &=4(4)+5
        \\
        &=21
        \end{aligned}$$
        By translating this into a map:
      </p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.07.svg">
      </AppImage>
      <br>
      <p>
        We could also alternatively find \(f\left(g\left(2\right)\right)\) by first finding the function \(f\left(g\left(x\right)\right)\) and then substituting in \(2\) for \(x\).

        $$\begin{aligned}
        f\left(x\right) &= 4x+5
        \\
        f\left(g\left(x\right)\right) &= 4\cdot g\left(x\right)+5
        \\ 
        &=4x^2+5
        \end{aligned}$$
        and now to find \(f\left(g\left(2\right)\right)\),
        $$\begin{aligned}
        f\left(g\left(x\right)\right) &=4x^2+5
        \\ 
        &=4(2)^2+5
        \\
        &=21
        \end{aligned}$$

        These are examples of <strong>composite functions</strong>. A <strong>composite function</strong> is a regarded as a <strong>function</strong> that has another <strong>function</strong> as its <strong>input</strong>. In this case we had the <strong>composite function</strong> \(f\left(g\left(x\right)\right)\) where \(f\left(x\right)\) has \(g\left(x\right)\) as its input.
      </p>

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
import AppColumn from '@/components/Utilities/AppColumn'
import AppColumns from '@/components/Utilities/AppColumns'


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppInteractive,
    AppVideo,
    AppImage,
    AppBlockQuote,
    AppColumn,
    AppColumns
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}
</script>
