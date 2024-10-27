<template>
  <button class="log-in-button">{{ appState.userId }}</button>
  <!-- Позже использовать редирект. <button @click="goToLogInPage">Log in</button>-->
</template>

<script setup>
import appState from '../state'
</script>

<style>
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.log-in-button {
  font-family: 'HomeVideoFont';
  background-color: transparent;
  border: transparent;
  font-size: 10px;
  color: rgba(255, 255, 255, 1);
}

@media (max-width: 600px) {
  .log-in-button {
    font-size: 20px;
  }
}
</style>
