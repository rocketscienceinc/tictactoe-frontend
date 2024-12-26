<template>
  <body>
    <appHeader />
    <div class="qr-code-main">
      <div>
        <vue-qrcode :value="url" :options="{ width: 300 }" :level="'H'" />
      </div>
      <button class="qr-code-main__back-button" @click="$router.push('/game')">
        &lt;-back to room code
      </button>
    </div>
  </body>
</template>

<script setup>
import appHeader from '@/components/appHeader.vue'
import appState from '@/state'
import VueQrcode from '@chenfengyuan/vue-qrcode'

const gameId = appState.gameId
const url = `${window.location.origin}/join/${gameId}`
</script>

<style scoped>
.qr-code-main {
  display: grid;
  align-items: center;
  justify-items: center;
  align-content: center;
}

.qr-code-main__back-button {
  font-size: clamp(0.8rem, 2vw, 2rem);
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 7px 10px;
  margin-top: 3%;
}

.qr-code-main__back-button:hover {
  border: 1px solid white;
}
</style>
