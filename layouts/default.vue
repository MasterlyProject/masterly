<template>
  <div>
    <TheHeader/>
    <TheBanner/>
    <div class="main">
      <TheSidebar/>
      <div class="content">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>

import TheHeader from '@/components/Navigation/TheHeader'
import TheBanner from '@/components/TheBanner'
import TheSidebar from '@/components/Navigation/TheSidebar';

export default {
  components: {
    TheSidebar,
    TheHeader,
    TheBanner
  }
}

</script>

<style>

html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: white;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

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

.content {
  flex: 1 1 auto;
  overflow: scroll;
  height: 100%;
  background-color: #f4f5f7;
}

</style>
