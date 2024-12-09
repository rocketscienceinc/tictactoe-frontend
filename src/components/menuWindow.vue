<template>
  <div class="window">
    <!-- + state "it's a draw"(color: yellow), "you win!"(color: winner color), "you lose"(color: winner color) -->
    <div class="window__status-header">CHOOSE GAME TYPE</div>
    <button class="window__buttons window__buttons__take-revenge">take revenge</button>
    <button class="window__buttons">play with ai</button>
    <button class="window__buttons">public game</button>
    <button class="window__buttons">privat game</button>
    <div class="window__join-box">
      <input
        class="window__join-box__input"
        id="roomCode"
        name="roomCode"
        type="text"
        placeholder="   your room code"
      />
      <button class="window__join-box__button">join</button>
    </div>
  </div>
</template>

<script>
import '@/styles/window.css'
</script>

<style>
.window {
  display: grid;
  grid-gap: 3%;
  align-content: center;
  justify-content: center;
  justify-items: center;
}
.window__status-header {
  font-size: clamp(1.5rem, 2.7vw, 2.6rem);
  color: var(--yellow);
  margin-bottom: 5px;
}

.window__buttons {
  color: white;
  border: 1px solid transparent;
  background-color: transparent;
  padding: 2px 4px;
  font-size: clamp(1.1rem, 1.9vw, 1.7rem);
}

.window__buttons:hover {
  border: 1px solid white;
}

.window__buttons__take-revenge {
  /* Debug */
  display: none;
}

.window__join-box {
  display: flex;
  margin-top: 3px;
}

.window__join-box__input {
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

.window__join-box__input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.window__join-box__button {
  padding: 6px 10px;
  font-size: clamp(0.9rem, 1.7vw, 1.5rem);
  color: rgba(50, 41, 47, 1);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid white;
}

@media (width <= 380px) {
  .window__status-header {
    font-size: 1.3rem;
  }

  .window__buttons {
    font-size: 0.9rem;
  }

  .window__join-box__input {
    font-size: 0.6rem;
  }

  .window__join-box__button {
    font-size: 0.6rem;
    padding: 4px 5px;
  }
}
</style>
