<script>
import { emit, ws, register } from '@/websocket'
import config from './config'
import appState from './state'

// emit — функция для отправки сообщений на сервер через WebSocket.
// ws — объект WebSocket для установки соединения и обработки событий.
// register — функция для регистрации обработчиков.
// config — файл конфигурации, содержащий настройки (например, cookieName).
// appState — реактивное состояние приложения, содержащее данные о пользователе и игре.

appState.userId = localStorage.getItem(config.cookieName)

ws.addEventListener('open', () => {
  //Когда WebSocket-соединение установлено (open), отправляется сообщение connect с userId (если он есть).
  emit('connect', { player: { id: appState.userId } }) //emit отправляет данные на сервер в формате JSON, где action — это connect, а payload содержит id игрока/пользователя.
})

export default {
  mounted() {
    //Функция-обработчик для действия/события 'connect'
    register('connect', (payload) => {
      console.log('Получили сообщения от action connect', payload)

      localStorage.setItem(config.cookieName, payload.player.id)
      appState.userId = payload.player.id
      appState.playerMark = payload.player.mark

      //Обновляем userId в localStorage и appState (что помогает в дальнейшем сохранять пользователя между сессиями)

      if (payload.game !== undefined) {
        //Коротко: если игра уже активна на стороне сервера, то: обновляем состояние игры (board, gameId, gameStatus) + переводим на страницу с игрой.
        appState.board = payload.game.board
        appState.gameId = payload.game.id
        appState.gameStatus = payload.game.status
        this.$router.push(`/game`)
        //Если игрок случайно выйдит из игры, закрыв вкладку или у него вырубился интернет, то при входе на http://tictactoe.kg/ пользователя перекинет на активную игру.
      } else {
        this.$router.push(`/`)
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
