<script>
import WaitingWindow from '@/components/WaitingWindow.vue'

export default {
  components: {
    WaitingWindow //Импорт м. окна
  },

  data() {
    return {
      cells: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '], // Поле
      currentPlayer: 'X', // Первый ход в игре
      showModal: true //Показывает м. окно
    }
  },

  methods: {
    // Демо версия ходов в игре
    check(index) {
      /* Можно поставить символ ЕСЛИ ячейка пуста */
      if (this.cells[index] === ' ') {
        this.cells[index] = this.currentPlayer // Ход игрока на поле
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X' // Смена currentPlayer
        // TODO: заменить текст "X/O" на красивые SVG изображения X и O.
      }
    },
    handleCloseModal() {
      this.showModal = false //Закрываем м. окно
    }
  }
}
</script>

<template>
  <header></header>
  <main>
    <WaitingWindow :isVisible="showModal" @close="handleCloseModal" />
    <!--Окно ожидания второго игрока-->
    <div class="game-board">
      <!--Игровое поле как массив(cells). Ячейки (cell) = индекс массива (index). -->
      <div v-for="(cell, index) in cells" :key="index" class="box" @click="check(index)">
        <!-- Цикл для обновления состояния ячеек через индекс -->
        {{ cell }}
        <!--Отображение состояния ячейки (X, O, _ )-->
      </div>
    </div>
    <div class="button2">
      <!-- Test button-->
      <button id="ReturnB" @click="$router.push('/')">Return to menu</button>
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

#ReturnB {
  margin-left: 30px;
  background-color: rgb(202, 202, 202);
}
</style>
