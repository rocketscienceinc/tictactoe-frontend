<template>
  <body>
    <appHeader />
    <main>
      <div class="welcome-container">
        <p class="welcome-container__header">WELCOME</p>
        <button class="welcome-container__play-button" @click="$router.push('/game')">PLAY</button>
      </div>
      <div class="footer-container">
        <button class="buttons" @click="$router.push('/no-internet')">no-internet page</button>
        <button class="buttons" @click="$router.push('/error404')">error404 page</button>
        <button class="footer-container__about-us-button" @click="$router.push('/about-us')">
          ABOUT US
        </button>
      </div>
    </main>
  </body>
</template>

<script>
import appHeader from '@/components/appHeader.vue'

export default {
  name: 'WelcomePage',
  components: {
    appHeader
  }
}
</script>

<style>
body {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 9fr;
}

main {
  display: grid;
}

.welcome-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  z-index: 1;
}

.welcome-container__header {
  color: white;
  text-shadow:
    0 0 5px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.7),
    0 0 100px rgba(255, 255, 255, 0.9);
  font-size: clamp(3rem, 6.4vw, 4.5rem);
  margin: 0%;
  margin-bottom: 1%;
}
.welcome-container__play-button {
  color: white;
  font-size: clamp(2rem, 4.1vw, 3rem);
  border: 1px solid transparent;
  background-color: transparent;
  padding: 7px 10px;
}

.welcome-container__play-button:hover {
  border: 1px solid white;
}

.footer-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  .footer-container__about-us-button {
    color: white;
    font-size: clamp(1.5rem, 2.2vw, 3rem);
    border: 1px solid transparent;
    background-color: transparent;
    margin: 2% 2%;
    padding: 7px 10px;
  }
  .footer-container__about-us-button:hover {
    border: 1px solid white;
  }
}
</style>
