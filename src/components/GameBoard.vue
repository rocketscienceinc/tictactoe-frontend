<template>
  <div class="game-board">
    <div v-for="(cell, index) in cells" :key="index" class="box" @click="check(index)">
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

<script>
/**
 * TODO: Отправка сообщение в websocket об ходе при клике на ячейку
 */

export default {
  data() {
    return {
      cells: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      currentPlayer: 'X',
      showModal: true
    }
  },

  methods: {
    check(index) {
      if (this.cells[index] === ' ') {
        this.cells[index] = this.currentPlayer
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
      }
    }
  }
}
</script>

<style>
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  background-image: url('/assets/frame.svg');
}

.box {
  font-family: 'HomeVideoFont';
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  width: 150px;
  height: 150px;
  background-color: transparent;
  border: transparent;
}

.x {
  color: rgba(255, 74, 88, 1);
}

.o {
  color: rgba(20, 224, 209, 1);
}
</style>
