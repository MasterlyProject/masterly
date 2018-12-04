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

      <AppColumns>
        <AppColumn>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi consequuntur deleniti dolore illo iste iusto maxime recusandae vel?</p>
        </AppColumn>
        <AppColumn>
          <p>Lorem ipsum dolor</p>
        </AppColumn>
      </AppColumns>

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
import AppColumns from '@/components/Utilities/AppColumns'
import AppColumn from '@/components/Utilities/AppColumn'


export default {
  components: {
    AppSubtitle,
    AppSection,
    AppModal,
    AppInteractive,
    AppVideo,
    AppColumns,
    AppColumn
  },
  mounted () {
    renderMathInElement(document.getElementById("content"))
  }
}

</script>

<style>


</style>

