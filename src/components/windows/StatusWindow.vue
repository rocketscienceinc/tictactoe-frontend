<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <p
        :class="{
          'game-status': true,
          win: statusText === 'you win!',
          lose: statusText === 'you lose!'
        }"
      >
        {{ statusText }}
      </p>

      <button class="new-room-b">new room</button>
      <button class="play-again-b">play again</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusWindow',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    statusText: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.modal {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.567);
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
}

.modal-content {
  font-family: 'HomeVideoFont';
  background-color: rgba(101, 101, 101, 0.601);
  border: transparent;
  text-align: center;
  margin-top: 250px;
  padding: 25px;
  font-size: 32px;
  color: white;
  width: 560px;
  height: 328px;
}

.new-room-b {
  font-family: 'HomeVideoFont';
  border: transparent;
  background-color: transparent;
  font-size: 28px;
  color: rgba(190, 190, 190, 1);
  margin-right: 20px;
  padding: 15px;
}

.play-again-b {
  font-family: 'HomeVideoFont';
  border: transparent;
  background-color: transparent;
  font-size: 28px;
  color: rgba(190, 190, 190, 1);
  margin-left: 20px;
  padding: 15px;
}

.game-status {
  font-size: 76px;
  margin-bottom: 50px;
}

.play-again-b:hover {
  border: 1px solid white;
  color: white;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
}

.new-room-b:hover {
  border: 1px solid white;
  color: white;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
}

.win {
  color: rgba(20, 224, 209, 1);
}

.lose {
  color: rgba(255, 74, 88, 1);
}
</style>
