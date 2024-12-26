<template>
  <body>
    <appHeader @go_to_home_page="go_to_home_page()" />
    <div
      class="front-layer"
      v-if="appState.gameStatus !== 'ongoing' && appState.gameStatus !== 'leave'"
    >
      <menuWindow
        class="front-layer__window"
        v-if="appState.gameStatus === '' || appState.gameStatus === 'finished'"
        @privat_game="privat_game()"
        @public_game="public_game()"
        @join_game="join_game()"
        v-model="formData"
      />
      <privateWaitingWindow
        class="front-layer__window"
        v-if="appState.gameType === 'private' && appState.gameStatus === 'waiting'"
      />
      <publicWaitingForOpponent
        class="front-layer__window"
        v-if="appState.gameType === 'public' && appState.gameStatus === 'waiting'"
      />

      <div
        class="privateWaitingWindow__waiting-text"
        v-if="appState.gameType === 'private' && appState.gameStatus === 'waiting'"
      >
        waiting for your opponent...
      </div>
      <!-- 
      <selectingMode class="front-layer__window"  />
      <opponentDisconnected class="front-layer__window"  />
      <toTakeRevenge class="front-layer__window" /> -->
    </div>

    <div class="middle-layer_two" v-if="appState.gameStatus === 'leave'">
      <playerLeftGame class="playerLeft_window" />
    </div>

    <div class="middle-layer" v-if="visibilityLeaveGame">
      <leaveGame
        class="leave-game_window"
        v-if="visibilityLeaveGame"
        @continue_game="continue_game()"
        @leave_game="leave_game()"
      />
    </div>
    <div class="back-layer">
      <div class="back-layer__empty-game-status">это тут нужно</div>
      <div
        class="back-layer__game-status-text"
        v-if="appState.gameStatus === 'ongoing' && appState.playerTurn === appState.playerMark"
      >
        your turn
      </div>
      <div
        class="back-layer__game-status-text"
        v-if="appState.gameStatus === 'ongoing' && appState.playerTurn !== appState.playerMark"
      >
        waiting
      </div>

      <gameBoard class="back-layer__board" />
      <div
        class="back-layer__internet-status_offline"
        v-if="appState.connectionStatus === 'offline'"
      >
        No connection to server
      </div>
      <div class="back-layer__empty">просто это тут нужно, без вопросов, пожалуйста</div>
      <div
        class="back-layer__internet-status_established"
        v-if="appState.connectionStatus === 'established'"
      >
        Connection to server is established
      </div>
    </div>
  </body>
</template>

<script setup>
import '@/styles/window.css'

import { ref, onMounted } from 'vue'
import appState from '@/state'
import { emit, register } from '@/websocket'
import { useRouter } from 'vue-router'

import appHeader from '@/components/appHeader.vue'
import gameBoard from '@/components/gameBoard.vue'
import menuWindow from '@/components/menuWindow.vue'
import privateWaitingWindow from '@/components/privateWaitingWindow.vue'
import publicWaitingForOpponent from '@/components/publicWaitingForOpponent.vue'

// import selectingMode from '@/components/selectingMode.vue'
// import opponentDisconnected from '@/components/opponentDisconnected.vue'
// import toTakeRevenge from '@/components/toTakeRevenge.vue'
import leaveGame from '@/components/leaveGame.vue'
import playerLeftGame from '@/components/playerLeftGame.vue'

const formData = ref({ roomCode: '' })
const router = useRouter()
const visibilityLeaveGame = ref(false)

const go_to_home_page = () => {
  if (appState.gameStatus === 'ongoing') {
    visibilityLeaveGame.value = true
  } else {
    router.push('/')
  }
}

const leave_game = () => {
  emit('game:leave', { player: { id: appState.userId } })
  visibilityLeaveGame.value = false
  appState.playerMark = ''
  window.location.reload()
}

const privat_game = () => {
  emit('game:new', { player: { id: appState.userId }, game: { type: 'private' } })
  appState.gameType = 'private'
}

const public_game = () => {
  emit('game:new', { player: { id: appState.userId }, game: { type: 'public' } })
  appState.gameType = 'public'
}

const join_game = () => {
  emit('game:join', {
    player: { id: appState.userId },
    game: { id: formData.value.roomCode }
  })
  formData.value.roomCode = ''
  window.history.replaceState(null, '', window.location.pathname)
}

onMounted(() => {
  register('game:leave', (payload) => {
    console.log('Получено действие game:leave', payload)
    appState.board = payload.game.board
    appState.gameId = payload.game.id
    appState.gameStatus = payload.game.status
    appState.playerMark = payload.player.mark
    appState.playerTurn = payload.game.player_turn
  })

  register('game:new', (payload) => {
    console.log('Получено действие game:new', payload)
    appState.board = payload.game.board
    appState.gameId = payload.game.id
    appState.gameStatus = payload.game.status
    appState.playerMark = payload.player.mark
    appState.playerTurn = payload.game.player_turn
  })

  register('game:join', (payload) => {
    console.log('Получено действие game:join', payload)
    if (payload.error) {
      router.push({ name: 'Error404Page' })
      return
    }
    appState.board = payload.game.board
    appState.gameId = payload.game.id
    appState.gameStatus = payload.game.status
    appState.playerMark = payload.player.mark
    appState.playerTurn = payload.game.player_turn
    appState.playerMark = payload.player.mark
  })
})

const continue_game = () => {
  visibilityLeaveGame.value = false
}
</script>

<style>
.position {
  position: relative;
  z-index: 3;
}

.privateWaitingWindow__waiting-text {
  color: white;
  font-size: clamp(0.8rem, 2vw, 2rem);
  grid-area: text;
}

.middle-layer,
.middle-layer_two {
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-areas:
    '. . .'
    '. window .'
    '. . .';
  grid-template-rows: 4fr 6fr 3fr;
}

.leave-game_window,
.playerLeft_window {
  grid-area: window;
}

.back-layer {
  display: grid;
  grid-template-areas:
    '. game-status .'
    '. board .'
    '.buttons.';
  align-items: center;
  justify-items: center;
}

.back-layer__internet-status_offline,
.back-layer__internet-status_established,
.back-layer__empty {
  grid-area: buttons;
  font-size: clamp(0.8rem, 1.7vw, 2rem);
}

.back-layer__internet-status_offline {
  color: var(--red);
}

.back-layer__internet-status_established {
  color: var(--blue);
}

.back-layer__empty,
.back-layer__empty-game-status {
  visibility: hidden;
}

.back-layer__board {
  grid-area: board;
}

.back-layer__game-status-text,
.back-layer__empty-game-status {
  grid-area: game-status;
  color: white;
  font-size: clamp(0.8rem, 2vw, 2.5rem);
}

.buttons {
  grid-area: buttons;
}
</style>
