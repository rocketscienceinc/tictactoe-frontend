<template>
  <div class="header">
    <h1>
      <span class="tic">Tic</span>
      <span class="tac"> Tac</span>
      <span class="toe"> Toe</span>
    </h1>
    <!--Какой-то текст-->
    <div class="button-login">
      <LogIn />
    </div>
  </div>
</template>

<script setup>
import LogIn from './LogIn.vue'
defineProps({
  greetingMessage: String
})
</script>

<style scoped>
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(50, 41, 47, 0.37);
  backdrop-filter: blur(10px);
  margin: 0;
  padding: 10px;
}

h1 {
  margin-left: 2%;
  font-family: 'HomeVideoFont';
}

.tic {
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
}
.tac {
  color: rgba(255, 74, 88, 1);
  text-shadow: 0 0 20px rgba(255, 74, 88, 0.6);
}
.toe {
  color: rgba(20, 224, 209, 1);
  text-shadow: 0 0 20px rgba(20, 224, 209, 0.6);
}

.button-login {
  margin-right: 2%;
}

@media (max-width: 600px) {
  h1 {
    font-size: 30px;
  }
}
</style>
