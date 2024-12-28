<template>
  <header class="header">
    <div
      class="header__full-title"
      v-if="
        appState.gameStatus !== 'ongoing' &&
        appState.gameStatus !== 'waiting' &&
        appState.gameStatus !== 'leave' &&
        appState.gameStatus !== 'finished' &&
        appState.gameStatus !== 'opponent_out' &&
        appState.gameStatus !== 'mode_selection' &&
        appState.gameStatus !== 'request_for_rematch'
      "
    >
      <button class="header__full-title__button" @click="go_to_home_page">
        <div class="header__full-title__tic">TIC</div>
        <div class="header__full-title__tac">TAC</div>
        <div class="header__full-title__toe">TOE</div>
      </button>
    </div>
    <div
      class="header__short-title"
      v-if="
        appState.gameStatus === 'waiting' ||
        appState.gameStatus === 'ongoing' ||
        appState.gameStatus === 'finished' ||
        appState.gameStatus === 'mode_selection' ||
        appState.gameStatus === 'request_for_rematch' ||
        appState.gameStatus === 'leave' ||
        appState.gameStatus === 'opponent_out'
      "
      @click="$emit('quit_the_game')"
    >
      <button class="header__short-title__button">
        <div class="header__short-title__tic">T</div>
        <div class="header__short-title__tac">T</div>
        <div class="header__short-title__toe">T</div>
      </button>
    </div>
    <div class="header__game-mark" :class="markColor">{{ appState.playerMark }}</div>
    <div class="header__log-in-button">log in</div>
  </header>
</template>

<script setup>
import appState from '@/state'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const markColor = computed(() => {
  const mark = appState.playerMark || ''
  if (mark.toUpperCase() === 'X') {
    return 'header__game-mark__x'
  } else if (mark.toUpperCase() === 'O') {
    return 'header__game-mark__o'
  }
  return ''
})

const router = useRouter()
const go_to_home_page = () => {
  router.push('/')
}
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
}

.header__full-title,
.header__short-title {
  display: flex;
  margin-left: 2%;
}

.header__full-title__tic,
.header__full-title__tac,
.header__full-title__toe,
.header__short-title__tic,
.header__short-title__tac,
.header__short-title__toe {
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
}

.header__full-title__tac,
.header__full-title__toe,
.header__short-title__tac,
.header__short-title__toe {
  margin-left: 10%;
}

.header__full-title__tic,
.header__short-title__tic {
  color: rgba(255, 255, 255, 1);
  text-shadow:
    0 0 20px rgba(255, 255, 255, 0.8),
    -2px 2px 0 rgba(195, 187, 187, 1);
}

.header__full-title__tac,
.header__short-title__tac {
  color: var(--red);
  text-shadow:
    0 0 20px rgba(255, 74, 88, 0.8),
    -2px 2px 0 rgba(204, 41, 54, 1);
}

.header__full-title__toe,
.header__short-title__toe {
  color: var(--blue);
  text-shadow:
    0 0 20px rgba(20, 224, 209, 0.8),
    -2px 2px 0 rgba(4, 154, 143, 1);
}

.header__full-title__button,
.header__short-title__button {
  display: flex;
  border: 1px solid transparent;
  background-color: transparent;
}

.header__game-mark {
  font-size: clamp(1.5rem, 2.8vw, 3rem);
  margin-left: 3%;
  text-align: center;
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

@media (max-width: 700px) {
  .header__game-mark {
    margin-left: 6%;
  }
}
</style>
