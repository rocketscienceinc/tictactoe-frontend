<template>
  <div class="window">
    <p class="window__top-top-text">
      Sorry the player has<br />
      left the game
    </p>
    <button class="window__bottom-leave-game-b" @click="leave_b">leave game</button>
  </div>
</template>

<script setup>
import '@/styles/window.css'
import appState from '@/state'

function leave_b() {
  appState.playerMark = ''
  window.location.reload()
}
</script>

<style>
.window__top-top-text {
  font-size: clamp(1.1rem, 2.1vw, 2.2rem);
  text-align: center;
  margin-bottom: 20%;
}

.window__bottom-leave-game-b {
  color: white;
  border: 1px solid white;
  background-color: transparent;
  font-size: clamp(1rem, 2vw, 2rem);
  padding: 7px 10px;
  margin-bottom: 20%;
  transition: text-shadow 0.3s ease;
}

.window__bottom-leave-game-b:hover {
  text-shadow:
    0 0 5px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.7),
    0 0 100px rgba(255, 255, 255, 0.9);

  box-shadow:
    0 0 5px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 100px rgba(255, 255, 255, 0.9);
}
</style>
