<template>
  <div class="menu">
    <AppHeader class="fade-in h" />
    <div class="status-row">&nbsp;</div>
    <div class="ellipse-blur">
      <p class="welcome-h1 fade-in">Welcome</p>
      <div><button class="play-button fade-in" @click="$router.push('/game')">play</button></div>
    </div>
    <div class="about-us-colume fade-in">
      <button class="about-us" @click="$router.push('/about-us')">about us</button>
    </div>
  </div>
</template>
<script>
import AppHeader from '@/components/AppHeader.vue'
export default {
  components: {
    AppHeader
  }
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}

.h {
  min-height: 100px;
}

.menu {
  height: 100vh;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 3s forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.menu {
  display: grid;
  grid-template-rows: 0.4fr 0.6fr 2fr 0.7fr;
}

.welcome-h1 {
  font-family: 'HomeVideoFont';
  background-color: transparent;
  border: transparent;
  color: rgba(255, 255, 255, 1);
  font-size: 4rem;
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 40px rgba(255, 255, 255, 0.4),
    0 0 60px rgba(255, 255, 255, 0.4),
    0 0 100px rgba(255, 255, 255, 0.4);
  text-align: center;
  margin: 0%;
  padding-bottom: 3%;
}
.play-button {
  font-family: 'HomeVideoFont';
  font-size: 3rem;
  color: rgba(255, 255, 255, 1);
  background-color: transparent;
  border: 1px solid transparent;
  padding: 7px 10px;
}

.play-button:hover {
  border: 1px solid rgba(255, 255, 255, 1);
}

.ellipse-blur {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 538px; */
  /* height: 426px; */
  background: rgba(50, 41, 47, 0.6);
  opacity: 0.85;
  backdrop-filter: blur(2px);
  border-radius: 50%;
}

.about-us-colume {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-right: 40px;
  padding-bottom: 30px;
}

.about-us {
  font-family: 'HomeVideoFont';
  font-size: 2.25rem;
  background-color: transparent;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 1);
  padding: 7px 10px;
}

.about-us:hover {
  border: 1px solid rgba(255, 255, 255, 1);
}

@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@media (max-width: 1280px) {
  .ellipse-blur {
    width: 538px;
  }
}

@media (max-width: 1024px) {
  .ellipse-blur {
    width: 538px;
  }
}

@media (max-width: 768px) {
  .ellipse-blur {
    width: 479px;
  }
}

@media (max-width: 480px) {
  .ellipse-blur {
    width: 320px;
  }

  .about-us-colume {
    padding-right: 0%;
    padding-bottom: 0%;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 15%;
  }

  .about-us {
    font-size: 1.8rem;
    opacity: 0.8;
  }
}

@media (max-width: 320px) {
  .ellipse-blur {
    width: 280px;
  }

  .about-us-colume {
    padding-right: 0%;
    padding-bottom: 0%;
    margin-bottom: 15%;
    align-items: flex-end;
    justify-content: center;
  }

  .about-us {
    font-size: 1.8rem;
    opacity: 0.8;
  }
}
</style>
