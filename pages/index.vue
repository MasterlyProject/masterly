<template>
  <div>
    <TheHeader/>
    <TheBanner/>
    <div class="main">
      <div class="sidebar">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aperiam autem dolore dolorem error exercitationem facere perferendis vel veniam. Aliquid architecto quae quia quo quod quos rem sed similique ut! Deleniti ea eligendi facere harum minima neque nihil quibusdam quisquam voluptate. Consequatur culpa, libero. Ab, accusantium adipisci aperiam asperiores beatae delectus deleniti distinctio doloremque doloribus dolorum eum ex illo iusto modi molestias nam neque nesciunt nisi nobis perferendis perspiciatis quam reiciendis rem saepe similique sunt tempore temporibus velit voluptatibus voluptatum. A accusantium aliquid architecto, atque consectetur culpa cumque dignissimos dolore ducimus eligendi facilis fuga inventore ipsum libero maxime quibusdam quod similique soluta ullam vitae? Accusantium autem cum illum nesciunt quas. At atque aut cum cumque dolores in incidunt laudantium, nisi optio quae quo rerum similique. Accusamus accusantium amet aut autem beatae corporis, culpa dolor eligendi et eum eveniet excepturi id, illo impedit maiores maxime mollitia nemo nihil nulla odio odit possimus quasi qui quis repudiandae similique sint sunt tempora unde velit veniam veritatis vitae voluptatem. Accusamus amet fuga, ipsum laboriosam nesciunt possimus veritatis! A, accusamus asperiores deleniti dignissimos dolorem eveniet maxime qui recusandae, reiciendis saepe sapiente tenetur. Alias amet deserunt enim iste magnam mollitia non odio pariatur qui suscipit.</p>
      </div>
      <div class="content">
        <AppSection color="red">
          <p>text</p>
        </AppSection>
      </div>
    </div>
  </div>
</template>

<script>

import TheHeader from '@/components/Navigation/TheHeader'
import TheBanner from '@/components/TheBanner'
import AppSection from "@/components/AppSection";

export default {
  components: {
    AppSection,
    TheHeader,
    TheBanner
  }
}

</script>

<style>

.main {
  margin-top: 60px;
  position: relative;
  background-color: white;
  z-index: 18;
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid #e5e5e5;
}

.sidebar {
  flex: 1 1 250px;
  min-width: 250px;
  max-width: 250px;
  border-right: 1px solid #e5e5e5;
  background-color: #f4f5f7;
  height: 100%;
  overflow: scroll;
  padding: 40px;
}

.content {
  flex: 1 1 auto;
  overflow: scroll;
  height: 100%;
  background-color: white;
}


</style>

