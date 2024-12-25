<template>
  <header class="header">
    <div class="header__title">
      <div class="header__title__tic">TIC</div>
      <div class="header__title__tac">TAC</div>
      <div class="header__title__toe">TOE</div>
    </div>
    <div class="header__game-mark" :class="markColor">{{ appState.playerMark }}</div>
    <div class="header__log-in-button">log in</div>
  </header>
</template>

<script setup>
import appState from '@/state'
import { computed } from 'vue'

const markColor = computed(() => {
  const mark = appState.playerMark || ''
  if (mark.toUpperCase() === 'X') {
    return 'header__game-mark__x'
  } else if (mark.toUpperCase() === 'O') {
    return 'header__game-mark__o'
  }
  return ''
})
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px;
  min-height: 10vh;
  background-color: rgba(50, 41, 47, 0.37);
  backdrop-filter: blur(6px);
  position: relative;
  z-index: 2;

  .header__title {
    display: flex;
    margin-left: 2%;
  }

  .header__title__tic,
  .header__title__tac,
  .header__title__toe {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
  }

  .header__title__tac,
  .header__title__toe {
    margin-left: 10%;
  }

  .header__title__tic {
    color: rgba(255, 255, 255, 1);
    text-shadow:
      0 0 20px rgba(255, 255, 255, 0.8),
      -2px 2px 0 rgba(195, 187, 187, 1);
  }

  .header__title__tac {
    color: var(--red);
    text-shadow:
      0 0 20px rgba(255, 74, 88, 0.8),
      -2px 2px 0 rgba(204, 41, 54, 1);
  }

  .header__title__toe {
    color: var(--blue);
    text-shadow:
      0 0 20px rgba(20, 224, 209, 0.8),
      -2px 2px 0 rgba(4, 154, 143, 1);
  }

  .header__game-mark {
    font-size: clamp(1.5rem, 2.8vw, 3rem);
    margin-right: 2%;
  }

  .header__game-mark__x {
    color: var(--red);
  }

  .header__game-mark__o {
    color: var(--blue);
  }

  .header__log-in-button {
    margin-right: 2%;
    color: white;
    font-size: clamp(1.5rem, 2.2vw, 3rem);
    visibility: hidden;
  }

  .header__log-in-button:hover {
    /* Debug */
    color: rgb(255, 0, 0);
  }
}
</style>
