<script>
import { emit, ws, register } from '@/websocket'
import config from './config'
import appState from './state'

appState.userId = localStorage.getItem(config.cookieName)

ws.addEventListener('open', () => {
  emit('connect', { player: { id: appState.userId } })
})
export default {
  mounted() {
    register('connect', (payload) => {
      console.log('Получили сообщения от action connect', payload)
      localStorage.setItem(config.cookieName, payload.player.id)
      appState.userId = payload.player.id
      if (payload.game !== undefined) {
        appState.board = payload.game.board
        appState.gameId = payload.game.id
        appState.gameStatus = payload.game.status
        this.$router.push('/game')
      }
    })
  }
}
</script>

<template>
  <main><router-view></router-view></main>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
