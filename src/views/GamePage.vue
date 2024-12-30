<template>
  <body>
    <appHeader @quit_the_game="quit_the_game()" />
    <div
      class="front-layer"
      v-if="
        appState.gameStatus !== 'ongoing' &&
        appState.gameStatus !== 'leave' &&
        appState.gameStatus !== 'opponent_out' &&
        appState.gameStatus !== 'request_for_rematch'
      "
    >
      <menuWindow
        class="front-layer__window"
        v-if="
          appState.gameStatus !== 'ongoing' &&
          appState.gameStatus !== 'waiting' &&
          appState.gameStatus !== 'leave' &&
          appState.gameStatus !== 'opponent_out' &&
          appState.gameStatus !== 'mode_selection' &&
          appState.gameStatus !== 'request_for_rematch'
        "
        @play_with_ai="play_with_ai()"
        @privat_game="privat_game()"
        @public_game="public_game()"
        @join_game="join_game()"
        v-model="formData"
      />

      <selectingMode class="front-layer__window" v-if="appState.gameStatus === 'mode_selection'" />

      <publicWaitingForOpponent
        class="front-layer__window"
        v-if="appState.gameType === 'public' && appState.gameStatus === 'waiting'"
      />
      <privateWaitingWindow
        class="front-layer__window"
        v-if="appState.gameType === 'private' && appState.gameStatus === 'waiting'"
      />

      <div
        class="privateWaitingWindow__waiting-text"
        v-if="appState.gameType === 'private' && appState.gameStatus === 'waiting'"
      >
        waiting for your opponent...
      </div>
    </div>

    <div class="middle-layer_two" v-if="appState.gameStatus === 'leave'">
      <playerLeftGame class="playerLeft_window" />
    </div>

    <div class="middle-layer_three" v-if="appState.gameStatus === 'opponent_out'">
      <opponentDisconnected class="opponent-disconnected_window" />
    </div>

    <div class="middle-layer_four" v-if="appState.gameStatus === 'request_for_rematch'">
      <toTakeRevenge class="to-take-revenge_window" />
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
        class="back-layer__sending-a-request"
        v-if="showAlert && appState.gameStatus === 'finished'"
      >
        Rematch request created, waiting for opponent to confirm
      </div>
      <div
        class="back-layer__rejecting-the-request"
        v-if="showAlertTwo && appState.gameStatus === 'finished'"
      >
        Opponent rejects rematch
      </div>
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

      <div class="back-layer__texts-box">
        <div
          class="back-layer__internet-status_offline"
          v-if="appState.connectionStatus === 'offline'"
        >
          no internet connection
        </div>
        <div
          class="back-layer__internet-status_established"
          v-if="appState.connectionStatus === 'established'"
        >
          internet connected
        </div>

        <div class="back-layer__ws-status_closed" v-if="appState.wsConnection === 'closed'">
          No connection to server
        </div>

        <div class="back-layer__ws-status_open" v-if="appState.wsConnection === 'open'">
          Connection to server is established
        </div>
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
import selectingMode from '@/components/selectingMode.vue'
import toTakeRevenge from '@/components/toTakeRevenge.vue'
import privateWaitingWindow from '@/components/privateWaitingWindow.vue'
import publicWaitingForOpponent from '@/components/publicWaitingForOpponent.vue'
import opponentDisconnected from '@/components/opponentDisconnected.vue'
import leaveGame from '@/components/leaveGame.vue'
import playerLeftGame from '@/components/playerLeftGame.vue'

const formData = ref({ roomCode: '' })
const router = useRouter()
const visibilityLeaveGame = ref(false)
const showAlert = ref(false)
const showAlertTwo = ref(false)

const quit_the_game = () => {
  if (appState.gameStatus === 'ongoing') {
    visibilityLeaveGame.value = true
  }
  if (appState.gameStatus === 'waiting') {
    emit('game:leave', { player: { id: appState.userId } })
    visibilityLeaveGame.value = false
    appState.playerMark = ''
    window.location.reload()
  }
}

const leave_game = () => {
  emit('game:leave', { player: { id: appState.userId } })
  visibilityLeaveGame.value = false
  appState.playerMark = ''
  window.location.reload()
}

const play_with_ai = () => {
  appState.gameStatus = 'mode_selection'
  console.log(appState.gameStatus)
}

const privat_game = () => {
  emit('game:new', { player: { id: appState.userId }, game: { type: 'private' } })
}

const public_game = () => {
  emit('game:new', { player: { id: appState.userId }, game: { type: 'public' } })
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
    appState.playerTurn = payload.game.player_turn
  })

  register('game:new', (payload) => {
    console.log('Получено действие game:new', payload)
    appState.board = payload.game.board
    appState.gameId = payload.game.id
    appState.gameType = payload.game.type
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
    appState.gameType = payload.game.type
    appState.gameStatus = payload.game.status
    appState.playerMark = payload.player.mark
    appState.playerTurn = payload.game.player_turn
  })

  register('game:rematch', (payload) => {
    if (payload.message === 'Rematch request created, waiting for opponent to confirm') {
      showAlert.value = true
      showAlertTwo.value = false
    }
    if (payload.message === 'Rematch request was declined') {
      showAlert.value = false
      showAlertTwo.value = true
      setTimeout(() => {
        showAlertTwo.value = false
      }, 2000)
    }
    if (payload.message === 'Your opponent wants a rematch.') {
      appState.gameStatus = 'request_for_rematch'
    }

    if (payload.message === 'Rematch confirmed. New game has started!') {
      showAlert.value = false
      showAlertTwo.value = false
      appState.board = payload.game.board
      appState.gameId = payload.game.id
      appState.gameType = payload.game.type
      appState.gameStatus = payload.game.status
      appState.playerMark = payload.player.mark
      appState.playerTurn = payload.game.player_turn
    }
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
.middle-layer_two,
.middle-layer_three,
.middle-layer_four {
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
.playerLeft_window,
.opponent-disconnected_window,
.to-take-revenge_window {
  grid-area: window;
}

.back-layer {
  display: grid;
  grid-template-areas:
    '. game-status .'
    '. board .'
    '.text.';
  align-items: center;
  justify-items: center;
}

.back-layer__texts-box {
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.back-layer__internet-status_offline,
.back-layer__internet-status_established,
.back-layer__empty,
.back-layer__ws-status_closed,
.back-layer__ws-status_open {
  font-size: clamp(0.8rem, 1.7vw, 2rem);
}

.back-layer__internet-status_offline,
.back-layer__ws-status_closed {
  color: var(--red);
}

.back-layer__internet-status_established,
.back-layer__ws-status_open {
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

.back-layer__rejecting-the-request {
  grid-area: game-status;
  font-size: clamp(0.8rem, 1.5vw, 2.5rem);
  color: var(--red);
  text-align: center;
}
.back-layer__sending-a-request {
  grid-area: game-status;
  font-size: clamp(0.8rem, 1.5vw, 2.5rem);
  color: var(--yellow);
  text-align: center;
}

.buttons {
  grid-area: buttons;
}
</style>
