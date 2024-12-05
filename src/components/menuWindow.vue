<template>
  <div class="menu-board">
    <div class="menu-board__status-header">CHOOSE GAME TYPE</div>
    <button class="menu-board__buttons">play with ai</button>
    <button class="menu-board__buttons">public game</button>
    <button class="menu-board__buttons">privat game</button>
    <div class="menu-board__join-box">
      <input class="menu-board__join-box__input" type="text" placeholder="   your room code" />
      <button class="menu-board__join-box__button">join</button>
    </div>
  </div>
</template>

<style>
.menu-board {
  height: 380px;
  width: clamp(470px, 65vw, 650px);
  background-color: rgba(101, 101, 101, 0.5);
  backdrop-filter: blur(10px);
  display: grid;
  grid-gap: 3%;
  align-content: center;
  justify-content: center;
  justify-items: center;
}

.menu-board__status-header {
  font-size: clamp(1.5rem, 2.7vw, 2.6rem);
  color: rgba(249, 173, 54, 1);
  margin-bottom: 5px;
}

.menu-board__buttons {
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 2px 4px;
  font-size: clamp(1.1rem, 1.9vw, 1.7rem);
}

.menu-board__buttons:hover {
  border: 1px solid white;
}

.menu-board__join-box {
  display: flex;
  margin-top: 3px;
}

.menu-board__join-box__input {
  border-radius: 0%;
  border: 1px solid white;
  background-color: rgba(217, 217, 217, 0);
  font-family: 'HomeVideoFont', sans-serif;
  color: white;
  font-size: clamp(0.8rem, 1.4vw, 2rem);
  padding: 0;
  padding-left: 10px;
  min-width: 0;
}

.menu-board__join-box__input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.menu-board__join-box__button {
  padding: 6px 10px;
  font-size: clamp(0.9rem, 1.7vw, 1.5rem);
  color: rgba(50, 41, 47, 1);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid white;
}

@media (width <= 640px) {
  .menu-board {
    height: 320px;
    width: 430px;
  }
}

@media (width <= 475px) {
  .menu-board {
    height: 250px;
    width: 380px;
  }
}

@media (width <= 380px) {
  .menu-board {
    height: 200px;
    width: 310px;
  }

  .menu-board__status-header {
    font-size: 1.3rem;
  }

  .menu-board__buttons {
    font-size: 0.9rem;
  }

  .menu-board__join-box__input {
    font-size: 0.6rem;
  }

  .menu-board__join-box__button {
    font-size: 0.6rem;
    padding: 4px 5px;
  }
}
</style>
