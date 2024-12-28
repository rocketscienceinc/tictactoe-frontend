<template>
  <div class="game-board">
    <div v-for="(cell, index) in appState.board" :key="index" class="box" @click="check(index)">
      <span
        :class="{
          x: cell === 'X',
          o: cell === 'O'
        }"
      >
        {{ cell }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { emit, register } from '@/websocket'
import appState from '@/state'

function check(index) {
  emit('game:turn', { player: { id: appState.userId }, cell: index })
}

register('game:turn', (payload) => {
  console.log('Получено действие game:turn', payload)
  if (payload.error) {
    alert(payload.error)
    return
  }
  appState.gameId = payload.game.id
  appState.winner = payload.game.winner
  appState.board = payload.game.board
  appState.gameStatus = payload.game.status
  appState.playerTurn = payload.game.player_turn
  appState.gameType = payload.game.type

  if (payload.game.status === 'finished') {
    appState.gameType = ''
  }
})
</script>

<style>
.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 5px;
  width: 500px;
  height: 500px;
  background-image: url('/assets/frame.svg');
  background-size: cover;
  font-size: clamp(5rem, 7vw, 7rem);
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.x {
  color: var(--red);
}

.o {
  color: var(--blue);
}

@media (max-width: 1500px) {
  .game-board {
    width: 450px;
    height: 450px;
  }
}

@media (width <= 640px) {
  .game-board {
    width: 400px;
    height: 400px;
  }
}

@media (max-width: 475px) {
  .game-board {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 380px) {
  .game-board {
    width: 250px;
    height: 250px;
  }
}
</style>
