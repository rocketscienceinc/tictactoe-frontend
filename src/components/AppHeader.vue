<template>
  <div class="header">
    <p class="logo">
      <span class="tic">Tic</span>
      <span class="tac"> Tac</span>
      <span class="toe"> Toe</span>
    </p>
    <p class="logo2">
      <span class="tic">T</span>
      <span class="tac">T</span>
      <span class="toe">T</span>
    </p>
    <div class="mark"></div>
    <div class="button-login">
      <LogIn />
    </div>
  </div>
</template>

<script setup>
import LogIn from './LogIn.vue'
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
  margin: 0px;
}

.logo {
  font-family: 'HomeVideoFont';
  font-size: 2.5rem;
  padding-left: 2%;
  margin: 0px;
}

.logo2 {
  font-family: 'HomeVideoFont';
  font-size: 2.5rem;
  padding-left: 2%;
  margin: 0px;
}

.tic {
  color: rgba(255, 255, 255, 1);
  text-shadow:
    0 0 20px rgba(255, 255, 255, 0.8),
    -2px 2px 0 rgba(195, 187, 187, 1);
}
.tac {
  color: rgba(255, 74, 88, 1);
  text-shadow:
    0 0 20px rgba(255, 74, 88, 0.8),
    -2px 2px 0 rgba(204, 41, 54, 1);
}
.toe {
  color: rgba(20, 224, 209, 1);
  text-shadow:
    0 0 20px rgba(20, 224, 209, 0.8),
    -2px 2px 0 rgba(4, 154, 143, 1);
}

.button-login {
  margin-right: 2%;
  padding: 7px 10px;
}

.mark {
  font-family: 'HomeVideoFont';
  font-size: 2.5rem;
}

@media (width <= 768px) {
  .logo {
    font-size: 2rem;
  }
  .logo2 {
    display: none;
  }

  .button-login {
    margin-right: 1%;
    padding: 7px 10px;
  }
}
@media (width >= 768px) {
  .logo {
    display: initial;
  }

  .logo2 {
    display: none;
  }
}

@media (max-width: 480px) {
  .logo {
    font-size: 1.5rem;
  }
}

@media (max-width: 320px) {
  .logo {
    font-size: 1.5rem;
  }
}
</style>
