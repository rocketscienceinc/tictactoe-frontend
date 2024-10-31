<template>
  <header><AppHeader /></header>
  <div class="menu-board">
    <button class="create-room-button" @click="create_room">create room</button>
    <button class="play-with-bot-button" @click="$router.push('/game')">play with bot</button>
    <div class="join-box">
      <input v-model="roomCode" class="join-input" type="text" placeholder="your room code" />
      <button class="join-button" @click="join_game">Join</button>
    </div>
  </div>
</template>

<script>
import { emit, register } from '@/websocket'
import AppHeader from '../components/AppHeader.vue'
import appState from '@/state'

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      roomCode: '' // Переменная для хранения введенного id комнаты с игрой
    }
  },
  methods: {
    create_room() {
      emit('game:new', { player: { id: appState.userId } }) //Делае запрос на создание игры с данными об id игрока, который делает этот запрос
    },
    join_game() {
      emit('game:join', { player: { id: appState.userId }, game: { id: this.roomCode } })
    }
  },
  mounted() {
    //Функция-обработчик для действия/события 'game:new'
    register('game:new', (payload) => {
      console.log('Получено действие game:new', payload)
      appState.board = payload.game.board
      appState.gameId = payload.game.id
      appState.gameStatus = payload.game.status
      //Сохраняем данные в appState
      this.$router.push(`/game/${payload.game.id}`)
      //Переходим в комнату игры
    })

    // Функция-обработчик для действия/события 'game:join'
    register('game:join', (payload) => {
      console.log('Получено действие game:join', payload)
      appState.board = payload.game.board
      appState.gameId = payload.game.id
      appState.gameStatus = payload.game.status
      // Сохраняем данные в appState
      this.$router.push(`/game/${payload.game.id}`)
      // Переходим в комнату игры
    })
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
