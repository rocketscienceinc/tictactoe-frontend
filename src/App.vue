<template>
  <div class="app-background"><router-view></router-view></div>
</template>
<script>
import { register } from '@/websocket'
import config from '@/config.js'
import appState from './state'

appState.userId = localStorage.getItem(config.cookieName)

export default {
  mounted() {
    register('connect', (payload) => {
      console.log('Получили сообщения от action connect', payload)

      localStorage.setItem(config.cookieName, payload.player.id)
      appState.userId = payload.player.id
      appState.playerMark = payload.player.mark

      if (payload.game !== undefined) {
        appState.board = payload.game.board
        appState.gameId = payload.game.id
        appState.gameType = payload.game.type
        appState.gameStatus = payload.game.status
        appState.playerTurn = payload.game.player_turn
        this.$router.push('/game')
      }
    })
  }
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'HomeVideoFont', sans-serif;
  height: 100vh;
}

.app-background {
  background-image: url('/assets/background.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(50, 41, 47, 1);
  height: 100vh;
  width: 100%;
}

button {
  font-family: 'HomeVideoFont', sans-serif;
}

h1,
p {
  color: white;
}

@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

:root {
  --blue: rgba(20, 224, 209, 1);
  --red: rgba(255, 74, 88, 1);
  --yellow: rgba(249, 173, 54, 1);
}
</style>
