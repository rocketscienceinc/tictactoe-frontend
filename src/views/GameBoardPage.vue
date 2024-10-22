<script>
import AppHeader from '@/components/AppHeader.vue'
// import WaitingWindow from '@/components/windows/WaitingWindow.vue'
import GameBoard from '@/components/GameBoard.vue'
import StatusWindow from '@/components/windows/StatusWindow.vue'

export default {
  components: {
    // WaitingWindow,
    AppHeader,
    GameBoard,
    StatusWindow
  },

  data() {
    return {
      showModal: true
    }
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <StatusWindow :isVisible="showModal" :statusText="'you win!'" />
  <!-- <WaitingWindow :isVisible="showModal" :codeJoinText="1739553794" /> -->
  <div class="page">
    <GameBoard />
    <button class="leave-b" @click="$router.push('/')">leave the game</button>
  </div>
</template>

<style>
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

.leave-b:hover {
  font-size: 50px;
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(255, 255, 255, 0.253);
}
</style>
