<template>
  <div>
    <AppSection
      title="This is my Title"
      color="red"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis eveniet ex ipsum nesciunt non quia reiciendis rem reprehenderit voluptatum? $$ 2x + 4 $$ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, molestias!
      </p>
      <AppBlockQuote color="blue">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, explicabo!
      </AppBlockQuote>
      <AppColumns>
        <AppColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur, esse libero magnam maiores natus nisi numquam officiis. Asperiores, facilis!
        </AppColumn>
        <AppColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, nobis?
        </AppColumn>
      </AppColumns>
    </AppSection>

    <AppSection
      title="Section"
      color="blue"
    >
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

import AppSection from "../components/AppSection";
import AppBlockQuote from "../components/AppBlockQuote";
import AppColumns from "../components/AppColumns";
import AppColumn from "../components/AppColumn";
import AppModal from "../components/AppModal";
import AppInteractive from "../components/AppInteractive";


export default {
  components: {AppInteractive, AppColumn, AppBlockQuote, AppSection, AppColumns, AppModal}
}

</script>

<style>


</style>

