<script>
export default {
  data() {
    return {
      cells: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
      currentPlayer: 'X' // var MyMark
    }
  },
  methods: {
    check(index) {
      if (this.cells[index] === ' ') {
        this.cells[index] = this.currentPlayer
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
        // TODO: заместо текста "X/O" поставить красивые SVG изображения X и O.

        // console.log(`Player ${this.cells[index]} marked cell ${index}`)
      }
    }
  }
}
</script>

<template>
  <header></header>
  <main>
    <div class="button2">
      <button @click="$router.push('/')">Return to menu</button>
    </div>
    <div class="game-board">
      <div v-for="(cell, index) in cells" :key="index" class="box" @click="check(index)">
        {{ cell }}
      </div>
    </div>
  </main>
</template>

<style>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  font-size: 24px;
  width: 150px;
  height: 150px;
  background-color: rgb(225, 225, 225);
}
.game-board {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  gap: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
}
</style>
