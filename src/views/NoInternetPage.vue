<template>
  <body>
    <appHeader />
    <main>
      <h1>no internet connection</h1>
      <img src="/assets/dinosaur.svg" width="77" height="77" />
      <p>check your internet connection and reload the page</p>
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
