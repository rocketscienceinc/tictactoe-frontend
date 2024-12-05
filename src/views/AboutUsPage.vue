<template>
  <body>
    <appHeader />
    <main>
      <div class="top-container">
        <div class="top-container__container_for_button">
          <button class="top-container__back-button" @click="$router.push('/')">&lt;-BACK</button>
        </div>
        <p class="top-container__header">ABOUT US</p>
      </div>
      <div class="botton-container">
        <div class="botton-container__board">
          <p class="botton-container__board__position">web-designer</p>
          <div class="botton-container__board__position__contact web-designer-container">
            <p class="botton-container__board__position__contact__name">mariana:&nbsp;</p>
            <div class="botton-container__board__position__contact__url">
              <a href="https://www.linkedin.com/in/aastashov/" class="custom-link">linkedin</a>
            </div>
            <p class="custom-link">&nbsp;|&nbsp;Behance</p>
          </div>

          <p class="botton-container__board__position">frontend</p>
          <div class="botton-container__board__position__contact">
            <p class="botton-container__board__position__contact__name">sofia:&nbsp;</p>
            <div class="botton-container__board__position__contact__url">
              <a href="https://www.linkedin.com/in/aastashov/" class="custom-link">linkedin</a>
            </div>
            <p class="custom-link">&nbsp;|&nbsp;GitHub</p>
          </div>

          <p class="botton-container__board__position backend-container">backend</p>
          <div class="botton-container__board__position__contact">
            <p class="botton-container__board__position__contact__name">daniil:&nbsp;</p>
            <div class="botton-container__board__position__contact__url">
              <a href="https://www.linkedin.com/in/aastashov/" class="custom-link">linkedin</a>
            </div>
            <p class="custom-link">&nbsp;|&nbsp;GitHub</p>
          </div>
        </div>
      </div>
      <!-- empty div for spacing -->
      <div class="footer">
        <div class="footer__container_for_button">
          <div class="footer__back-button" @click="$router.push('/')">&lt;-BACK</div>
        </div>
      </div>
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

<style>
main {
  display: grid;
}
.top-container {
  display: grid;
  grid-template-areas: 'b-back header .';
  grid-template-columns: 2fr 4fr 2fr;
}

.top-container__container_for_button {
  display: grid;
  grid-area: b-back;
  align-items: center;
  justify-content: center;
}

.top-container__header {
  display: grid;
  grid-area: header;
  color: white;
  text-shadow:
    0 0 5px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.7),
    0 0 100px rgba(255, 255, 255, 0.9);
  font-size: clamp(2.5rem, 6.4vw, 4.5rem);
  margin: 0%;
  align-items: center;
  justify-content: center;
}

.top-container__back-button,
.footer__back-button {
  color: white;
  font-size: clamp(1.5rem, 2.2vw, 3rem);
  border: 1px solid transparent;
  background-color: transparent;
  padding: 7px 10px;
}

.top-container__back-button:hover {
  border: 1px solid white;
}

.footer__back-button:hover {
  border: 1px solid white;
}

.botton-container {
  display: grid;
  grid-template-areas:
    '. board .'
    '. . .';
  grid-template-columns: 2fr 4fr 2fr;
}

.botton-container__board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-area: board;
  border: 1px solid white;
  backdrop-filter: blur(3px);
}

.botton-container__board__position {
  color: white;
  font-size: clamp(0.9rem, 1.6vw, 2rem);
  margin-bottom: 1%;
}

.botton-container__board__position__contact__name {
  color: white;
}

.botton-container__board__position__contact {
  display: flex;
  align-items: center;
  font-size: clamp(0.8rem, 1.4vw, 1.8rem);
}

.custom-link {
  color: rgba(20, 224, 209, 1);
  text-decoration: none;
}

@media (max-width: 1280px) {
  .botton-container {
    grid-template-columns: 1fr 3fr 1fr;
  }
}

@media (min-width: 769px) {
  .footer__container_for_button {
    display: none;
  }
}

@media (max-width: 768px) {
  .top-container__back-button {
    display: none;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .botton-container {
    grid-template-columns: 1fr 6fr 1fr;
  }
}

@media (max-width: 500px) {
  .top-container__header {
    margin-top: 30%;
  }
  .botton-container {
    grid-template-columns: 1fr 10fr 1fr;
  }

  .botton-container__board {
    height: 190px;
    padding-top: 18px;
    padding-bottom: 9px;

    .botton-container__board__position,
    .botton-container__board__position__contact__name,
    .botton-container__board__position__contact,
    .botton-container__board__position__contact__url {
      margin: 0.5px;
    }

    .web-designer-container {
      margin-bottom: 10px;
    }

    .backend-container {
      margin-top: 10px;
    }
  }
}
</style>
