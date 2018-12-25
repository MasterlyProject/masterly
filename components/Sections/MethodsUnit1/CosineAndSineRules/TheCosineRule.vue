<template>
  <div>
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
import AppVideo from '@/components/Utilities/AppVideo'
import AppImage from '@/components/Utilities/AppImage'
import AppBlockQuote from '@/components/Utilities/AppBlockQuote'
import AppMathProof from '@/components/Utilities/AppMathProof'
import AppToggle from '@/components/Utilities/AppToggle'


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppVideo,
    AppImage,
    AppBlockQuote,
    AppMathProof,
    AppToggle
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