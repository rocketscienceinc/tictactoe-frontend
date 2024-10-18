<template>
  <header></header>
  <div class="menu-board">
    <button class="create-room-button menu-item" @click="$router.push('/game')">create room</button>
    <button class="play-with-bot-button menu-item" @click="$router.push('/game')">
      play with bot
    </button>
    <div class="join-box">
      <input class="join-input" type="text" placeholder="your room code" />
      <button class="join-button">Join</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.menu-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
}

button {
  margin-bottom: 20px;
}

.join-input {
  font-family: 'HomeVideoFont';
  background-color: rgba(36, 30, 34, 0.501);
  border: 1px solid rgba(217, 217, 217, 1);
  color: white;
  width: 200px;
  height: 32px;
  padding-left: 17px;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
}

.join-input::placeholder {
  padding-left: 15px;
  font-size: large;
}

.join-box {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.join-button {
  font-family: 'HomeVideoFont';
  width: 80px;
  height: 36px;
  font-size: 15px;
  padding: 1px;
  background-color: rgba(217, 217, 217, 1);
  border: transparent;
}

.create-room-button {
  font-family: 'HomeVideoFont';
  background-color: transparent;
  border: transparent;
  color: rgba(255, 255, 255, 1);
  font-size: 57px;
}

.play-with-bot-button {
  font-family: 'HomeVideoFont';
  background-color: transparent;
  border: transparent;
  color: rgba(255, 255, 255, 1);
  font-size: 57px;
}

.create-room-button:hover {
  font-size: 80px;
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(255, 255, 255, 0.253);
}

.play-with-bot-button:hover {
  font-size: 80px;
  text-shadow:
    0 0 10px rgba(255, 255, 255, 0.8),
    0 0 20px rgba(255, 255, 255, 0.6),
    0 0 30px rgba(255, 255, 255, 0.4),
    0 0 40px rgba(255, 255, 255, 0.253);
}

@media (max-width: 600px) {
  .create-room-button {
    font-size: 45px;
  }

  .play-with-bot-button {
    font-size: 45px;
  }
}
</style>
