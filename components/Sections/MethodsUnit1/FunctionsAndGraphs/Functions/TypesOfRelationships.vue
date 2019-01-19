<template>
  <div>
    <AppSection
      title="Types of Relationships"
      color="blue"
    >

      <AppModal :mini-player="true">
        <AppVideo
          video-id="204135196"
          color="blue"
        />
      </AppModal>

      <AppSubtitle>One-to-One Relationships</AppSubtitle>
      <AppBlockQuote color="blue">A <strong>one-to-one</strong> relationship is defined as a relationship where <strong>one</strong> element in the <strong>range</strong> corresponds to <strong>exactly one</strong> element in the <strong>domain</strong>.</AppBlockQuote>
      <p>In other words, a <strong>one-to-one</strong> relationship occurs when <strong>one input</strong> produces <strong>exactly one output</strong>. The map below visually shows a <strong>one-to-one</strong> relationship.</p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.01.svg">
      </AppImage>
      <br>
      <p>Notice that every input produces \textbf{exactly one} output.</p>
      <ul>
        <li>\(A\rightarrow C\)</li>
        <li>\(B\rightarrow D\)</li>
      </ul>
      <br>
      <p>
        This follows the definition of a <strong>function</strong> thus any relationship that is <strong>one-to-one</strong> will be a <strong>function</strong>.
        <br>
        Consider the example below of a <strong>one-to-one function</strong>.
      </p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.10.svg">
      </AppImage>
      <ul>
        <li>The domain is defined by the set \(\left\{ 1,4,9 \right\}\).</li>
        <li>The codomain is defined by the set \(\left\{ 0,1,2,3,4 \right\}\).</li>
        <li>The range is \(\left\{1,2,3\right\}\).</li>
      </ul>
      <br>
      <p>Notice here that one element in the range corresponds to exactly one element in the domain.</p>

      <ul>
        <li>\(1\rightarrow 1\)</li>
        <li>\(9\rightarrow 3\)</li>
      </ul>
      <br>
      <p>This follows the definition of a <strong>one-to-one function</strong>.</p>

      <AppSubtitle>Many-to-One Relationships</AppSubtitle>
      <AppBlockQuote color="blue">A <strong>many-to-one</strong> relationship is defined as a relationship where <strong>one</strong> element in the <strong>range</strong> corresponds to <strong>more than one</strong> element in the <strong>domain</strong>.</AppBlockQuote>
      <p>In other words, a <strong>many-to-one</strong> relationship occurs when <strong>many inputs</strong> produce <strong>exactly one output</strong>. The map below visually shows a <strong>many-to-one</strong> relationship.</p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.11.svg">
      </AppImage>
      <br>
      <p>Notice that every input still produces exactly one output.</p>
      <ul>
        <li>\(A\rightarrow D\)</li>
        <li>\(B\rightarrow D\)</li>
      </ul>
      <br>
      <p>
        This follows the definition of a function thus any relationship that is <strong>many-to-one</strong> will be a <strong>function</strong>.
        <br>
        Consider the example below of a <strong>many-to-one function</strong>.
      </p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.12.svg">
      </AppImage>
      <ul>
        <li>The domain is defined by the set \(\left\{ -2,-1,0,1,2 \right\}\).</li>
        <li>The codomain is defined by the set \(\left\{ 0,1,2,3,4 \right\}\).</li>
        <li>The range is \(\left\{0,1,4\right\}\).</li>
      </ul>
      <br>
      <p>Notice here that <strong>one element</strong> in the <strong>range</strong> can correspond to <strong>more than one</strong> element in the <strong>domain</strong>.</p>

      <ul>
        <li>\(-2\rightarrow 4\)</li>
        <li>\(-1\rightarrow 1\)</li>
        <li>\(0\rightarrow 0\)</li>
        <li>\(1\rightarrow 1\)</li>
        <li>\(2\rightarrow 4\)</li>
      </ul>
      <br>
      <p>This follows the definition of a <strong>many-to-one function</strong>.</p>


      <AppSubtitle>One-to-Many Relationships</AppSubtitle>
      <AppBlockQuote color="blue">A <strong>one-to-many</strong> relationship is defined as a relationship where <strong>more than one</strong> element in the <strong>range</strong> corresponds to <strong>exactly one</strong> element in the <strong>domain</strong>.</AppBlockQuote>
      <p>In other words, a <strong>one-to-many</strong> relationship occurs when <strong>one input</strong> produce <strong>many outputs</strong>. The map below visually shows a <strong>one-to-many</strong> relationship.</p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.13.svg">
      </AppImage>
      <br>
      <p>Notice that an input can produce more than one output.</p>
      <ul>
        <li>\(A\rightarrow C,D\)</li>
        <li>\(B\rightarrow E\)</li>
      </ul>
      <br>
      <p>
        This goes against the definition of a function thus any relationship that is <strong>one-to-many</strong> is <strong>not a function</strong>.
        <br>
        Consider the example below of a <strong>one-to-many</strong> relationship.
      </p>
      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/Functions/Functions.14.svg">
      </AppImage>
      <ul>
        <li>The domain is defined by the set \(\left\{ 0,1,4 \right\}\).</li>
        <li>The codomain is defined by the set \(\left\{ -2,-1,0,1,2 \right\}\).</li>
        <li>The range is \(\left\{-2,-1,0,1,2\right\}\).</li>
      </ul>
      <br>
      <p>Notice here that more than one element in the range can correspond to one element in the domain.</p>

      <ul>
        <li>\(0\rightarrow 0\)</li>
        <li>\(1\rightarrow -1,1\)</li>
        <li>\(4\rightarrow -2,2\)</li>
      </ul>
      <br>
      <p>This follows the definition of a <strong>one-to-many</strong> <strong>relationship</strong>.</p>

      
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
