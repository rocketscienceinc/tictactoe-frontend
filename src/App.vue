<script setup>
import AppHeader from './components/AppHeader.vue'
// import getCookie from './utils/cookies.js'

// const uid = getCookie('c1')
// console.log('uid:', uid)
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
