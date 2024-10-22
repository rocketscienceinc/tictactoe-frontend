<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-content">
      <p>Code to join this room:</p>
      <p class="code-to-join">{{ codeJoinText }}</p>
      <p>or use link:</p>
      <p class="link-to-join">https://tictactoe.io/join/{{ codeJoinText }}</p>
      <p>waiting for your opponent...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaitingWindow',
  props: {
    isVisible: {
      type: Boolean,
      required: true
    },
    codeJoinText: {
      type: Number,
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

.code-to-join {
  font-family: 'HomeVideoFont';
  color: rgba(232, 144, 5, 1);
  font-size: 32px;
}

.link-to-join {
  color: rgba(20, 224, 209, 1);
  font-size: 24px;
}
</style>
