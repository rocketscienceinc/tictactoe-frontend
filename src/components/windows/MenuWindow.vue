<template>
  <div v-if="isVisible" class="game-menu modal">
    <p class="status-text">choose game type</p>
    <!-- * менять в зависимости от состояния игры. * "choose game type" - дефолтное значение -->
    <div class="menu-buttons">
      <button class="play-with-ai-button" @click="play_with_ai">play with ai</button>
      <button class="public-game" @click="public_game">public game</button>
      <button class="privat-game" @click="privat_game">privat game</button>
      <div class="join-box">
        <input v-model="roomCode" class="join-input" type="text" placeholder="your room code" />
        <button class="join-button" @click="join_game">Join</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import appState from '@/state'
import { emit, register } from '@/websocket'
import { ref, onMounted } from 'vue'

const isVisible = ref(true)
let roomCode = ref('')

const play_with_ai = () => {}
const public_game = () => {}
const privat_game = () => {
  emit('game:new', { player: { id: appState.userId }, game: { type: 'private' } })
}
const join_game = () => {
  emit('game:join', {
    player: { id: appState.userId },
    game: { id: roomCode.value, type: 'private' }
  })
}

onMounted(() => {
  //Функция-обработчик для действия/события 'game:new'
  register('game:new', (payload) => {
    console.log('Получено действие game:new', payload)
    appState.board = payload.game.board
    appState.gameId = payload.game.id
    appState.gameStatus = payload.game.status
    appState.playerMark = payload.player.mark
    //Сохраняем данные в appState
    isVisible.value = false
  })

  register('game:join', (payload) => {
    console.log('Получено действие game:join', payload)
    appState.board = payload.game.board
    appState.gameId = payload.game.id
    appState.gameStatus = payload.game.status
    appState.playerMark = payload.player.mark
    // Сохраняем данные в appState
    isVisible.value = false
  })
})
</script>
<style>
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.game-menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(101, 101, 101, 0.5);
  backdrop-filter: blur(10px);
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.status-text {
  font-family: 'HomeVideoFont';
  font-size: 3rem;
  color: rgba(249, 173, 54, 1);
  margin: 0%;
  margin-bottom: 3%;
}

.play-with-ai-button {
  font-family: 'HomeVideoFont';
  background-color: transparent;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 1);
  font-size: 2rem;
  margin-bottom: 6.2%;
  padding: 1px 4px;
}
.play-with-ai-button:hover {
  border: 1px solid rgba(255, 255, 255, 1);
}

.public-game {
  font-family: 'HomeVideoFont';
  background-color: transparent;
  border: 1px solid transparent;
  color: rgba(255, 255, 255);
  font-size: 2rem;
  margin-bottom: 6.2%;
  padding: 1px 4px;
}
.public-game:hover {
  border: 1px solid rgba(255, 255, 255, 1);
}

.privat-game {
  font-family: 'HomeVideoFont';
  background-color: transparent;
  border: 1px solid transparent;
  color: rgba(255, 255, 255, 1);
  padding: 1px 4px;
  font-size: 2rem;
  margin-bottom: 6.2%;
}
.privat-game:hover {
  border: 1px solid rgba(255, 255, 255, 1);
}

.join-input {
  font-family: 'HomeVideoFont';
  border: 1px solid rgb(255, 255, 255);
  background-color: rgba(217, 217, 217, 0);
  color: rgb(255, 255, 255);
  font-size: 1.25rem;
  text-align: center;
  padding: 0%;
  padding-top: 1px;
}

.join-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.5rem;
  text-align: center;
}

.join-box {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.join-button {
  font-family: 'HomeVideoFont';
  padding: 6px 10px;
  font-size: 1.7rem;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(50, 41, 47, 1);
  border: transparent;
}

@media (max-width: 768px) {
  .status-text {
    font-size: 2.5rem;
  }

  .play-with-ai-button {
    font-size: 1.5rem;
  }

  .public-game {
    font-size: 1.5rem;
  }

  .privat-game {
    font-size: 1.5rem;
  }

  .join-input {
    font-size: 1rem;
    padding: 0%;
    padding-top: 1px;
  }

  .join-input::placeholder {
    font-size: 1.2rem;
  }

  .join-button {
    font-size: 1.2rem;
  }
}

@media (max-width: 600px) {
  .status-text {
    font-size: 2.2rem;
  }
}

@media (max-width: 480px) {
  .status-text {
    font-size: 1.5rem;
  }

  .play-with-ai-button {
    font-size: 1rem;
  }

  .public-game {
    font-size: 1rem;
  }

  .privat-game {
    font-size: 1rem;
  }

  .join-input {
    font-size: 0.7rem;
    padding: 0%;
    padding-top: 1px;
  }

  .join-input::placeholder {
    font-size: 0.8rem;
  }

  .join-button {
    font-size: 0.7rem;
  }
}

@media (max-width: 320px) {
  .status-text {
    font-size: 1.1rem;
  }

  .play-with-ai-button {
    font-size: 0.7rem;
  }

  .public-game {
    font-size: 0.7rem;
  }

  .privat-game {
    font-size: 0.7rem;
  }

  .join-input {
    font-size: 0.5rem;
    padding: 0%;
    padding-top: 1px;
  }

  .join-input::placeholder {
    font-size: 0.6rem;
  }

  .join-button {
    font-size: 0.5rem;
  }
}
</style>
