<template>
  <button class="log-in-button">log in</button>
</template>

<script setup></script>

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
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 1);
}

@media (width <= 768px) {
  .log-in-button {
    font-size: 1.5rem;
  }
}
</style>
