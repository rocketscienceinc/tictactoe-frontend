<template>
  <body>
    <appHeader />
    <div class="top-page">
      <menuWindow class="top-page__menu" />
    </div>
    <div class="buttom-page">
      <gameBoard class="buttom-page__board" />
    </div>
  </body>
</template>
<script>
import appHeader from '@/components/appHeader.vue'
import gameBoard from '@/components/gameBoard.vue'
import menuWindow from '@/components/menuWindow.vue'
export default {
  components: {
    appHeader,
    gameBoard,
    menuWindow
  }
}
</script>

<style>
.top-page {
  display: grid;
  grid-template-areas:
    '. . .'
    '. menu .'
    '. . .';
  align-items: center;
  justify-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  z-index: 100;
}

.top-page__menu {
  grid-area: menu;
}

.buttom-page {
  display: grid;
  grid-template-areas:
    '. game-status .'
    '. board .'
    '. statuses timer';
  align-items: center;
  justify-items: center;
}

.buttom-page__board {
  grid-area: board;
}
</style>
