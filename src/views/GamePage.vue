<template>
  <div class="page">
    <AppHeader class="header" />
    <!-- <button @click="menuWindow = !menuWindow">скрыть меню</button> -->
    <div class="status-game">&nbsp;</div>
    <GameBoard />
    <WaitingWindow />
    <div class="internet-connection waiting-opponent timer button-back">&nbsp;</div>
  </div>
  <div class="page-two">
    <div class="one">&nbsp;</div>
    <div class="two">&nbsp;</div>
    <div class="three">&nbsp;</div>
    <div class="four">&nbsp;</div>
    <MenuWindow v-if="menuWindow" class="menu-window" />
    <div class="six">&nbsp;</div>
    <div class="six">&nbsp;</div>
    <div class="six">&nbsp;</div>
    <div class="six">&nbsp;</div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import GameBoard from '@/components/GameBoard.vue'
import MenuWindow from '@/components/windows/MenuWindow.vue'
import WaitingWindow from '@/components/windows/WaitingWindow.vue'
export default {
  components: {
    AppHeader,
    GameBoard,
    MenuWindow,
    WaitingWindow
  },
  data() {
    return { menuWindow: true }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.header {
  min-height: 100px;
}

.page-two {
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: grid;
  grid-template-columns: 4fr 6fr 4fr;
  grid-template-rows: 4fr 7fr 4fr;
  grid-auto-rows: 1fr;
  gap: 5px;
}

.page {
  height: 100vh;
  display: grid;
  grid-template-rows: 0.3fr 0.5fr 2fr 0.7fr;
}

@media (max-width: 1280px) {
  .page-two {
    grid-template-columns: 3fr 6fr 3fr;
    grid-template-rows: 4fr 7fr 3fr;
  }
}

@media (max-width: 1080px) {
  .page-two {
    grid-template-rows: 4fr 7fr 3fr;
  }
}

@media (max-width: 768px) {
  .page-two {
    grid-template-columns: 1fr 9fr 1fr;
    grid-template-rows: 4fr 5fr 4fr;
  }
}

@media (max-width: 600px) {
  .page-two {
    grid-template-columns: 1fr 11fr 1fr;
    grid-template-rows: 4fr 5fr 4fr;
  }
}

@media (max-width: 480px) {
  .page-two {
    grid-template-rows: 5fr 4fr 8fr;
  }
}

@media (max-width: 320px) {
  .page-two {
    grid-template-rows: 5fr 4fr 8fr;
  }
}
</style>
