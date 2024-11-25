<template>
  <div class="game-container">
    <div class="game-board">
      <!-- * Переписать логику под отображение x/o в ячейках доски-->
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
  </div>
</template>

<script setup>
import appState from '@/state'
</script>

<style>
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.game-container {
  position: relative;
  margin: 0 auto;
}

.game-board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  background-image: url('/assets/frame.svg');
}

.box {
  font-family: 'HomeVideoFont';
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 130px;
  width: 160px;
  height: 160px;
  background-color: transparent;
  border: transparent;
}

.x {
  color: rgba(255, 74, 88, 1);
}

.o {
  color: rgba(20, 224, 209, 1);
}

.menu-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

@media (max-width: 1280px) {
  .game-board {
    background-image: url('/assets/frame.svg');
    background-size: 450px 450px;
    background-repeat: no-repeat;
    gap: 7px;
  }

  .box {
    font-size: 110px;
    width: 145px;
    height: 145px;
  }
}

@media (max-width: 768px) {
  .game-board {
    background-image: url('/assets/frame.svg');
    background-size: 400px 400px;
    background-repeat: no-repeat;
    gap: 7px;
  }

  .box {
    font-size: 100px;
    width: 130px;
    height: 130px;
  }
}

@media (max-width: 480px) {
  .game-board {
    background-image: url('/assets/frame.svg');
    background-size: 320px 320px;
    background-repeat: no-repeat;
    gap: 7px;
  }

  .box {
    font-size: 80px;
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 320px) {
  .game-board {
    background-image: url('/assets/frame.svg');
    background-size: 240px 240px;
    background-repeat: no-repeat;
    gap: 5px;
  }

  .box {
    font-size: 65px;
    width: 75px;
    height: 75px;
  }
}
</style>
