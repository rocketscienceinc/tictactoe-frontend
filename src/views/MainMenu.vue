<template>
  <header></header>
  <div class="menu-board">
    <button>New Game</button>
    <button>Private Game</button>
    <button>Game with bot</button>
    <div class="join-input">
      <input type="text" />
      <button class="join-button">Join</button>
    </div>
  </div>
  <!--<div class="button1">-->
  <!--<button @click="$router.push('/game')">Go to Game Board</button>-->
  <!--</div>-->
</template>

<script setup></script>

<style scoped>
.menu-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
}
button {
  margin-bottom: 20px;
  border-color: black;
  border-radius: 5px;
  border-width: 1px;
  height: 40px;
  width: 250px;
}

.join-input {
  margin-left: 110px;
}

.join-button {
  margin-left: 10px;
  width: 100px;
}

input {
  height: 30px;
  width: 245px;
  border-radius: 5px;
  border-width: 1px;
}
</style>
