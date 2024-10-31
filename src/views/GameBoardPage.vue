<script>
import AppHeader from '@/components/AppHeader.vue'
import WaitingWindow from '@/components/windows/WaitingWindow.vue'
import GameBoard from '@/components/GameBoard.vue'

import StatusWindow from '@/components/windows/StatusWindow.vue'

export default {
  components: {
    WaitingWindow,
    AppHeader,
    GameBoard,
    StatusWindow
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <WaitingWindow />
  <StatusWindow />
  <div class="page">
    <GameBoard />
    <!-- * TODO: Попросить бэк сделать запрос на выход из игры. 
    Идея: В статистику не будет указываться как завершённая игра, но будет входить в статистику того, как часто пользователь
    выходит во время игр. -->
    <button class="leave-b" @click="$router.push('/')">leave the game</button>
  </div>
</template>

<style>
/**
* TODO: Исправить проблемы с вёрсткой на мобильных устройствах (белые поля и другое) (Есть видео подсказка в телеграмме)
*/

@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.page {
  display: grid;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
}

.leave-b {
  font-family: 'HomeVideoFont';
  background-color: transparent;
  border: transparent;
  color: white;
  font-size: 40px;
  margin-top: 100px;
}

/**
* TODO: Исправить проблемы с анимацией кнопки на мобильных устройствах (Есть видео подсказка в телеграмме)
*/

.leave-b:hover {
  font-size: 50px;
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(255, 255, 255, 0.253);
}
</style>
