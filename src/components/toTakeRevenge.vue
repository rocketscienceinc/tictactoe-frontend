<template>
  <div class="window">
    <p class="window__top-text-block">
      your opponent wants <br />
      to take revenge
    </p>
    <div class="window__box-from-buttons">
      <button class="window__box-from-buttons__accept-b" @click="approval_of_revenge">
        accept
      </button>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <button class="window__box-from-buttons__decline-b" @click="refusal_of_revenge">
        decline
      </button>
    </div>
    <p class="window__bottom-text-block">
      if you decline, you will be redirected to the <br />game mode selection
    </p>
  </div>
</template>

<script setup>
import '@/styles/window.css'
import appState from '@/state'
import { emit } from '@/websocket'

const approval_of_revenge = () => {
  emit('game:rematch', { player: { id: appState.userId }, answer: 'yes' })
}

const refusal_of_revenge = () => {
  emit('game:rematch', { player: { id: appState.userId }, answer: 'no' })
  window.location.reload()
}
</script>

<style>
.window__top-text-block,
.window__bottom-text-block {
  text-align: center;
}

.window__top-text-block {
  font-size: clamp(1.5rem, 2.3vw, 3rem);
  margin-bottom: 8%;
}

.window__bottom-text-block {
  margin-top: 10%;
}

.window__box-from-buttons {
  display: flex;
}

.window__box-from-buttons__accept-b {
  font-size: clamp(1.5rem, 2.3vw, 3rem);
  color: var(--blue);
  border: 1px solid transparent;
  background-color: transparent;
}

.window__box-from-buttons__decline-b {
  font-size: clamp(1.5rem, 2.3vw, 3rem);
  color: var(--red);
  border: 1px solid transparent;
  background-color: transparent;
}
</style>
