<template>
  <body>
    <appHeader />
    <main>
      <img src="/assets/error404.svg" width="77" height="77" />
      <h1>error</h1>
      <p>the page you were looking for not found</p>
      <button class="footer-container__about-us-button" @click="$router.push('/about-us')">
        ABOUT US
      </button>
    </main>
  </body>
</template>

<script>
import appHeader from '@/components/appHeader.vue'
export default {
  components: {
    appHeader
  }
}
</script>

<style></style>
