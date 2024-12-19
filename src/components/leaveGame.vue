<template>
  <div class="window">
    <p class="window__text-question">Do you really want to <br />leave the game?</p>
    <div class="window__box">
      <button class="window__box__leave-game-b">leave game</button>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <button class="window__box__continue-b">continue</button>
    </div>
  </div>
</template>

<script>
import '@/styles/window.css'
</script>

<style>
.window__text-question {
  font-size: clamp(1.5rem, 2.3vw, 2.5rem);
  text-align: center;
  margin-bottom: 15%;
}

.window__box {
  display: flex;
  margin-bottom: 15%;
}

.window__box__leave-game-b,
.window__box__continue-b {
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 7px 10px;
  font-size: clamp(1.3rem, 1.9vw, 2.2rem);
}

.window__box__leave-game-b:hover,
.window__box__continue-b:hover {
  border: 1px solid white;
}
</style>
