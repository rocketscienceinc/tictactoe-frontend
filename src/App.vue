<script setup>
import AppHeader from './components/AppHeader.vue'
import getCookie from './utils/cookies.js'
import config from '@/config.js'

const uid = getCookie(config.cookieName)
console.log('uid:', uid)
console.log(config.apiUrl)

</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main><router-view></router-view></main>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
