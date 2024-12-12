<template>
  <body>
    <appHeader />
    <div class="front-layer">
      <menuWindow class="front-layer__window" v-if="isVisible" />
      <privateWaitingWindow class="front-layer__window" v-if="isVisibleTwo" />
      <selectingMode class="front-layer__window" v-if="isVisibleThree" />
      <waitingForOpponent class="front-layer__window" v-if="isVisibleFour" />
      <opponentDisconnected class="front-layer__window" v-if="isVisibleFive" />
      <toTakeRevenge class="front-layer__window" v-if="isVisibleSix" />
      <leaveGame class="front-layer__window" v-if="isVisibleSeven" />
      <playerLeftGame class="front-layer__window" v-if="isVisibleEight" />
    </div>
    <div class="back-layer">
      <gameBoard class="back-layer__board" />
      <div class="buttons">
        <button @click="creating_privat_game" class="position">creating private game</button>
        <!-- <button @click="selecting_mode_for_play_with_ai" class="position">
          selecting a mode for play with ai
        </button>
        <button @click="waiting_for_opponent" class="position">waiting for opponent</button>
        <button @click="opponent_disconnected" class="position">opponent disconnected</button>
        <button @click="to_take_revenge" class="position">to take revenge</button>
        <button @click="leave_game" class="position">leave game</button>
        <button @click="player_left_game" class="position">player left game</button> -->
      </div>
    </div>
  </body>
</template>
<script>
import '@/styles/window.css'
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

export default {
  components: {
    appHeader,
    gameBoard,
    menuWindow,
    privateWaitingWindow,
    selectingMode,
    waitingForOpponent,
    opponentDisconnected,
    toTakeRevenge,
    leaveGame,
    playerLeftGame
  },
  data() {
    return {
      isVisible: true,
      isVisibleTwo: false, // Начальное состояние видимости
      isVisibleThree: false,
      isVisibleFour: false,
      isVisibleFive: false,
      isVisibleSix: false,
      isVisibleSeven: false,
      isVisibleEight: false
    }
  },
  methods: {
    creating_privat_game() {
      this.isVisible = false // Переключение состояния видимости
      this.isVisibleTwo = true
    },
    selecting_mode_for_play_with_ai() {
      this.isVisible = false
      this.isVisibleThree = true
    },
    waiting_for_opponent() {
      this.isVisible = false
      this.isVisibleFour = true
    },
    opponent_disconnected() {
      this.isVisible = false
      this.isVisibleFive = true
    },
    to_take_revenge() {
      this.isVisible = false
      this.isVisibleSix = true
    },
    leave_game() {
      this.isVisible = false
      this.isVisibleSeven = true
    },
    player_left_game() {
      this.isVisible = false
      this.isVisibleEight = true
    }
  }
}
</script>

<style>
.position {
  position: relative;
  z-index: 3;
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

.buttons {
  grid-area: buttons;
}
</style>
