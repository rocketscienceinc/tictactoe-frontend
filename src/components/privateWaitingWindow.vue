<template>
  <div class="window" v-bind="$attrs">
    <p class="window__text">Code to join this room:</p>
    <p class="window__code-to-join">{{ appState.gameId }}</p>
    <p class="window__text">or use link:</p>
    <p class="window__link-to-join">{{ generateSiteLink(appState.gameId) }}</p>
    <button class="window__copy-link" @click="copyLink">{{ ButtonText }}</button>
    <button class="window__make-qr" @click="$router.push('/qr')">make qr</button>
  </div>
</template>

<script setup>
import '@/styles/window.css'
import appState from '@/state'
import { ref } from 'vue'

const ButtonText = ref('copy link')

const generateSiteLink = (gameId) => {
  return `${window.location.origin}/join/${gameId}`
}

const copyLink = () => {
  let link = generateSiteLink(appState.gameId)
  navigator.clipboard
    .writeText(link)
    .then(() => {
      ButtonText.value = 'link copied'
      setTimeout(() => {
        ButtonText.value = 'copy link'
      }, 2000)
    })
    .catch(() => {
      console.error('Failed to copy')
    })
}
</script>

<style>
.window__text,
.window__code-to-join,
.window__text,
.window__link-to-join {
  margin: 0;
}
.window__text {
  font-size: clamp(1.1rem, 2.3vw, 2.2rem);
  margin-bottom: 2%;
}

.window__code-to-join {
  font-size: clamp(1.1rem, 2.3vw, 2.2rem);
  color: var(--yellow);
  margin-bottom: 5%;
}
.window__link-to-join {
  font-size: clamp(0.8rem, 1.5vw, 1.7rem);
  color: var(--blue);
  margin-bottom: 4%;
}

.window__copy-link {
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
  transition: all 0.3s ease;
}

.window__copy-link:hover {
  color: rgba(50, 41, 47, 1);
  background-color: white;
}

.window__make-qr {
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  font-size: clamp(0.8rem, 1.5vw, 1.5rem);
}
</style>
