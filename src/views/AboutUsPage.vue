<template>
  <div class="about-us-page">
    <AppHeader class="app-header" />
    <div class="header-row">
      <div class="back-b-row">
        <button class="back-b" @click="$router.push('/')">&lt;-back</button>
      </div>
      <p class="about-us-h1">about us</p>
      <div>&nbsp;</div>
    </div>
    <div class="main">
      <div>&nbsp;</div>
      <div class="board">
        <p class="position">web-designer</p>
        <div class="name">
          mariana:
          <p class="contact">&nbsp;https://www.linkedin.com</p>
        </div>
        <p class="position">frontend</p>
        <div class="name">
          sofia:
          <p class="contact">&nbsp;https://www.linkedin.com</p>
        </div>
        <p class="position">backend</p>
        <div class="name">
          daniil:
          <p class="contact">&nbsp;https://www.linkedin.com</p>
        </div>
      </div>
      <div>&nbsp;</div>
    </div>
    <div class="button-back-b-row">
      <button class="bottom-back-b" @click="$router.push('/')">&lt;-back</button>
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
body {
  margin: 0;
  padding: 0;
}

.header-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
}

/* .about-us-page  */
/* grid-template-areas:
    'header header header'
    'button h1 empty'
    'empty board empty'; */

.main {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}

.back-b {
  font-family: 'HomeVideoFont';
  font-size: 2.25rem;
  background-color: transparent;
  border: transparent;
  color: rgba(255, 255, 255, 1);
  border: 1px solid transparent;
  padding: 10px;
}

.back-b:hover {
  border: 1px solid rgba(255, 255, 255, 1);
}

.button-back-b-row {
  display: flex;
  justify-content: center;
}

.bottom-back-b {
  font-family: 'HomeVideoFont';
  font-size: 1.5rem;
  background-color: transparent;
  border: transparent;
  color: rgba(255, 255, 255, 1);
  border: 1px solid transparent;
  margin-top: 10%;
  padding: 10px;
}

.bottom-back-b:hover {
  border: 1px solid rgba(255, 255, 255, 1);
}

.about-us-h1 {
  font-family: 'HomeVideoFont';
  font-size: 5.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 40px rgba(255, 255, 255, 0.4);
  text-align: center;
  margin: 50px 0px;
}

.board {
  padding: 20px 10px;
  display: grid;
  justify-items: center;
  border: 1px solid rgba(255, 255, 255, 1);
  backdrop-filter: blur(2px);
}

.position {
  font-family: 'HomeVideoFont';
  font-size: 27px;
  color: rgba(255, 255, 255, 1);
}

.name {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'HomeVideoFont';
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 1);
}

.contact {
  font-family: 'HomeVideoFont';
  font-size: 1.5rem;
  color: rgba(20, 224, 209, 1);
  text-wrap: wrap;
  word-wrap: break-word;
}

@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@media (width >= 1280px) {
  .bottom-back-b {
    display: none;
  }
}

@media (max-width: 1280px) {
  .about-us-h1 {
    font-size: 5rem;
  }
  .bottom-back-b {
    display: none;
  }
}

@media (max-width: 1024px) {
  .bottom-back-b {
    display: none;
  }
}

@media (max-width: 768px) {
  .back-b {
    font-size: 1.5rem;
  }
  .about-us-h1 {
    font-size: 3.5rem;
  }
  .bottom-back-b {
    display: none;
  }
}

@media (max-width: 600px) {
  .back-b {
    display: none;
  }
  .about-us-h1 {
    margin-top: 10%;
    margin-bottom: 20%;
    font-size: 3rem;
  }

  .contact {
    font-size: 1rem;
  }

  .bottom-back-b {
    display: block;
  }
}

@media (max-width: 480px) {
  .about-us-h1 {
    font-size: 2.5rem;
  }

  .name {
    font-size: 1rem;
  }
}

@media (max-width: 380px) {
  .about-us-h1 {
    font-size: 2rem;
  }
}

@media (max-width: 320px) {
  .about-us-h1 {
    font-size: 1.5rem;
  }
  .position {
    font-size: 1rem;
  }

  .name {
    font-size: 0.7rem;
  }

  .contact {
    font-size: 0.7rem;
  }
}
</style>
