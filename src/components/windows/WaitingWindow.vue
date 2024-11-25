<template>
  <div class="waiting-window">
    <div v-if="appState.gameStatus === 'waiting'" class="modal">
      <div class="one">&nbsp;</div>
      <div class="two">&nbsp;</div>
      <div class="three">&nbsp;</div>
      <div class="four">&nbsp;</div>
      <div class="modal-content">
        <div class="code-part">
          <p class="main-text">Code to join this room:</p>
          <p class="code-to-join">{{ appState.gameId }}</p>
        </div>
        <div class="link-part">
          <p class="main-text">or use link:</p>
          <div class="link">
            <p class="link-to-join">https://tictactoe.kg/join/{{ appState.gameId }}</p>
            <button class="copy-link-button" id="copyLinkButton" @click="changeButtonCopyLink">
              {{ buttonCopyLink }}
            </button>
          </div>
        </div>
        <button class="make-qr-button">make qr</button>
      </div>
      <div class="six">&nbsp;</div>
      <div class="777">&nbsp;</div>
      <div class="waiting-text"><p>waiting for your opponent...</p></div>
      <div class="999">&nbsp;</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import appState from '@/state'

const buttonCopyLink = ref('copy link')

const changeButtonCopyLink = () => {
  buttonCopyLink.value = 'link copied'
}
</script>

<style scoped>
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.waiting-window {
  display: grid;
}

.modal {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.567);
  display: grid;
  grid-template-columns: 4fr 6fr 4fr;
  grid-template-rows: 4fr 7fr 4fr;
  grid-auto-rows: 1fr;
  gap: 5px;
}

.modal-content {
  font-family: 'HomeVideoFont';
  background-color: rgba(101, 101, 101, 0.5);
  backdrop-filter: blur(10px);
  border: transparent;
  text-align: center;
  font-size: 2.3em;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2%;
}

.code-part {
  display: flex;
  flex-direction: column;
}
.main-text {
  margin: 0%;
}

.link-part {
  display: flex;
  flex-direction: column;
}

.code-to-join {
  font-family: 'HomeVideoFont';
  color: rgba(232, 144, 5, 1);
  font-size: 1em;
  margin: 0%;
  margin-top: 4%;
}

.link {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1%;
}

.copy-link-button {
  font-family: 'HomeVideoFont';
  font-size: 1.5rem;
  border: transparent;
  background-color: transparent;
  color: white;
  transition: all 0.3s ease;
  padding: 0%;
}

.copy-link-button:focus {
  background-color: white;
  color: rgba(50, 41, 47, 1);
}

.link-to-join {
  color: rgba(20, 224, 209, 1);
  font-size: 1.5rem;
}

.make-qr-button {
  font-family: 'HomeVideoFont';
  font-size: 1.8rem;
  border: transparent;
  background-color: transparent;
  color: white;
}

.waiting-text {
  font-family: 'HomeVideoFont';
  font-size: 1.6rem;
  color: white;
  text-align: center;
  padding-top: 10%;
}

@media (max-width: 650px) {
  .modal-content {
    font-size: 1.5rem;
  }
  .link-to-join {
    font-size: 1rem;
  }
  .copy-link-button {
    font-size: 1rem;
  }

  .make-qr-button {
    font-size: 1.1rem;
  }

  .modal {
    grid-template-columns: 3fr 4fr 3fr;
    grid-template-rows: 4fr 5fr 4fr;
  }

  .waiting-text {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .modal-content {
    font-size: 1rem;
  }
  .link-to-join {
    font-size: 0.6rem;
  }
  .copy-link-button {
    font-size: 0.7rem;
  }

  .make-qr-button {
    font-size: 0.8rem;
  }

  .modal {
    grid-template-columns: 1fr 5fr 1fr;
    grid-template-rows: 2.5fr 2fr 4fr;
  }

  .waiting-text {
    padding-top: 20%;
    font-size: 1rem;
  }
}
</style>
