<template>
  <div>

    <AppSection
      title="Components Overview"
      color="blue"
    >

      <AppSubtitle>
        AppModal
      </AppSubtitle>

      <AppModal :mini-player="false">
        <AppVideo
          video-id="204135196"
          color="green"
        />
      </AppModal>

      <AppInteractive
        name="a"
        src="/scripts/interactives/mathMethodsUnit1/cosineAndSineRules/a.js"
      />

      <p>
        $$ 2x + 4 $$
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

export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppInteractive,
    AppVideo
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>

<style>


</style>

