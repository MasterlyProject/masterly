<template>
  <div>
    <AppSection color="blue" title="Revision on Right Triangles">
      <AppSubtitle>
        The Right Trinagle
      </AppSubtitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate dolorem enim est harum id itaque minima mollitia, nulla. Aliquam ex impedit, ipsa molestias nesciunt officia quia quibusdam tempore voluptas.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex minus molestias odio qui reprehenderit unde voluptates. Doloribus id quidem tenetur? Blanditiis culpa cupiditate esse modi mollitia neque omnis possimus, repellat!</p>
      <AppImage imagePath="@/static/masterlyLogo.png"/>
      <AppColumns>
        <AppColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos fugiat labore magnam maiores nam omnis repellat vel. Asperiores, iusto.
        </AppColumn>
        <AppColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, vitae.
        </AppColumn>
      </AppColumns>
      <div v-katex="'\\frac{a_i}{1+x}'"></div>
      <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
      <AppBlockQuote color="red">
        <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
      </AppBlockQuote>
      <AppBlockQuote color="green">
        <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
      </AppBlockQuote>
      <AppBlockQuote color="blue">
        <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
      </AppBlockQuote>
      <AppSpacer space="20px"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolorem earum nihil repellat similique! Assumenda distinctio eveniet non rerum sit.</p>
    </AppSection>
    <AppSection color="blue" title="Revision on Right Triangles">
      <AppSubtitle>
        The Right Trinagle
      </AppSubtitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cupiditate dolorem enim est harum id itaque minima mollitia, nulla. Aliquam ex impedit, ipsa molestias nesciunt officia quia quibusdam tempore voluptas.
      </p>
      <AppImage imagePath="@/static/masterlyLogo.png"/>
      <AppColumns>
        <AppColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eos fugiat labore magnam maiores nam omnis repellat vel. Asperiores, iusto.
        </AppColumn>
        <AppColumn>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, vitae.
        </AppColumn>
      </AppColumns>
      <div v-katex="'\\frac{a_i}{1+x}'"></div>
      <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
      <AppBlockQuote color="red">
        <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
      </AppBlockQuote>
      <AppBlockQuote color="green">
        <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
      </AppBlockQuote>
      <AppBlockQuote color="blue">
        <div v-katex:display="'\\frac{a_i}{1+x}'"></div>
      </AppBlockQuote>
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

export default {
  components: {
    AppSpacer,
    AppColumn,
    AppColumns,
    AppImage,
    AppSubtitle,
    AppSection,
    AppBlockQuote
  }
}

</script>

<style>


</style>

