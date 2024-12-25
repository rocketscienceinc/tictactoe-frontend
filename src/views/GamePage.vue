<template>
  <body>
    <appHeader />
    <div class="front-layer" v-if="appState.gameStatus !== 'ongoing'">
      <menuWindow
        class="front-layer__window"
        v-if="appState.gameStatus === '' || appState.gameStatus === 'finished'"
        @privat_game="privat_game()"
        @join_game="join_game()"
        v-model="formData"
      />
      <privateWaitingWindow class="front-layer__window" v-if="appState.gameStatus === 'waiting'" />
      <div class="privateWaitingWindow__waiting-text" v-if="appState.gameStatus === 'waiting'">
        waiting for your opponent...
      </div>
      <selectingMode class="front-layer__window" v-if="isVisibleThree" />
      <waitingForOpponent class="front-layer__window" v-if="isVisibleFour" />
      <opponentDisconnected class="front-layer__window" v-if="isVisibleFive" />
      <toTakeRevenge class="front-layer__window" v-if="isVisibleSix" />
      <leaveGame class="front-layer__window" v-if="isVisibleSeven" />
      <playerLeftGame class="front-layer__window" v-if="isVisibleEight" />
    </div>
    <div class="back-layer">
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
import selectingMode from '@/components/selectingMode.vue'
import waitingForOpponent from '@/components/waitingForOpponent.vue'
import opponentDisconnected from '@/components/opponentDisconnected.vue'
import toTakeRevenge from '@/components/toTakeRevenge.vue'
import leaveGame from '@/components/leaveGame.vue'
import playerLeftGame from '@/components/playerLeftGame.vue'

const formData = ref({ roomCode: '' })
const router = useRouter()

// -----------------------------------
const isVisibleThree = ref(false)
const isVisibleFour = ref(false)
const isVisibleFive = ref(false)
const isVisibleSix = ref(false)
const isVisibleSeven = ref(false)
const isVisibleEight = ref(false)

const privat_game = () => {
  emit('game:new', { player: { id: appState.userId }, game: { type: 'private' } })
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
    // if (window.location.search != '') {
    //   window.location.search = ''
    // }
  })
})
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

.back-layer {
  display: grid;
  grid-template-areas:
    '. game-status .'
    '. board .'
    '.buttons.';
  align-items: center;
  justify-items: center;
}

.back-layer__board {
  grid-area: board;
}

.back-layer__game-status-text {
  grid-area: game-status;
  color: white;
  font-size: clamp(0.8rem, 2vw, 2.5rem);
}

.buttons {
  grid-area: buttons;
}
</style>
