<template>
  <div>
    <AppSection
      color="blue"
      title="Revision on Right Triangles"
    >
      <AppSubtitle>
        The Right Trinagle
      </AppSubtitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate dolorem enim est harum id itaque minima mollitia, nulla. Aliquam ex impedit, ipsa molestias nesciunt officia quia quibusdam tempore voluptas.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minus molestias odio qui reprehenderit unde voluptates. Doloribus id quidem tenetur? Blanditiis culpa cupiditate esse modi mollitia neque omnis possimus, repellat!</p>
      <AppColumns>
        <AppColumn>
          <AppImage>
            <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/cns_14_Supp_Cos.svg">
          </AppImage>
        </AppColumn>
        <AppColumn>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, neque, quis? Adipisci architecto assumenda facilis nostrum officiis quam reiciendis ullam velit voluptates voluptatibus. Inventore libero nam quam sequi sint sunt!</p>
        </AppColumn>
      </AppColumns>
      <AppColumns>
        <AppColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos fugiat labore magnam maiores nam omnis repellat vel. Asperiores, iusto.
        </AppColumn>
        <AppColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, vitae.
        </AppColumn>
      </AppColumns>

      <AppSpacer space="20px"/>

      <AppModal>
        <AppInteractive
          name="a"
          src="/scripts/interactives/mathMethodsUnit1/cosineAndSineRules/a.js"
        />
      </AppModal>


      <AppMathProof>

        <template slot="equation">
          <AppBlockQuote color="blue">
            Yay
          </AppBlockQuote>
        </template>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam at aut blanditiis distinctio doloremque doloribus ea, eos iusto, labore libero maiores modi, nemo nostrum perferendis qui recusandae sint temporibus?
        </p>

        <AppBlockQuote color="blue">
          Yay
        </AppBlockQuote>

      </AppMathProof>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem earum nihil repellat similique! Assumenda distinctio eveniet non rerum sit.
      </p>

      <div class="math">
        <p>
          \( 3x + 4 \)
        </p>
      </div>
      <p class="math">
        $$ 3x + 2 $$
      </p>
      <p class="math">
        6x + 4
      </p>
      <no-ssr>
        <AppLatexRenderer/>
      </no-ssr>

      <AppImage width="large">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/cns_14_Supp_Cos.svg">
      </AppImage>
      <AppImage width="medium">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/cns_14_Supp_Cos.svg">
      </AppImage>
      <AppImage width="small">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/cns_14_Supp_Cos.svg">
      </AppImage>
      <AppImage width="100px">
        <img src="@/assets/images/MethodsUnit1/CosineAndSineRules/cns_14_Supp_Cos.svg">
      </AppImage>

    </AppSection>
  </div>
</template>

<script>

import AppSection from '@/components/AppSection';
import AppSubtitle from "@/components/AppSubtitle";
import AppImage from "@/components/AppImage";
import AppColumns from "@/components/AppColumns";
import AppColumn from "@/components/AppColumn";
import AppBlockQuote from '@/components/AppBlockQuote'
import AppSpacer from "@/components/AppSpacer";
import AppModal from '@/components/AppModal'
import AppMathProof from "@/components/AppMathProof";
import AppLatexRenderer from "@/components/AppLatexRenderer";
import AppInteractive from "@/components/AppInteractive";

export default {

  components: {
    AppInteractive,
    AppLatexRenderer,
    AppMathProof,
    AppSpacer,
    AppColumn,
    AppColumns,
    AppImage,
    AppSubtitle,
    AppSection,
    AppBlockQuote,
    AppModal
  },
  mounted() {
    renderMathInElement(document.body)
  }
}

</script>

<style lang="stylus" scoped>

</style>

