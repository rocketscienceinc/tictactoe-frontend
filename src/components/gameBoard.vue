<template>
  <div class="game-board">
    <div v-for="(cell, index) in board" :key="index" class="cell" @click="makeMove(index)">
      <span :class="{ x: cell === 'X', o: cell === 'O' }">{{ cell }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: Array(9).fill(null),
      currentPlayer: 'X'
    }
  },
  methods: {
    makeMove(index) {
      if (this.board[index]) return
      this.board[index] = this.currentPlayer
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
    }
  }
}
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

.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.cell span.x {
  color: rgba(255, 74, 88, 1);
}

.cell span.o {
  color: rgba(20, 224, 209, 1);
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
