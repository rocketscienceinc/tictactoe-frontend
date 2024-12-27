<template>
  <div class="window">
    <p class="window__top-text">your opponent disconnected</p>
    <button class="window__leave-game-b" @click="leave_game_b">leave game</button>
    <p>or</p>
    <p class="window__bottom-text">
      you can wait for 1:00 and the <br />
      match will end automatically
    </p>
  </div>
</template>

<script setup>
import '@/styles/window.css'
import appState from '@/state'

const leave_game_b = () => {
  appState.playerMark = ''
  window.location.reload()
}
</script>

<style>
.window__top-text {
  font-size: clamp(1.1rem, 2.1vw, 2.2rem);
  margin-bottom: 8%;
}
.window__leave-game-b {
  color: white;
  border: 1px solid white;
  background-color: transparent;
  font-size: clamp(1rem, 2vw, 2rem);
  padding: 7px 10px;
  margin-bottom: 2%;
  transition: text-shadow 0.3s ease;
}

.window__leave-game-b:hover {
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

.window__bottom-text {
  font-size: clamp(0.8rem, 1.2vw, 1.5rem);
  margin-top: 2%;
  margin-bottom: 7%;
}
</style>
