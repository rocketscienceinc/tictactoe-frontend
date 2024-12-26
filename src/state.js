import { reactive } from 'vue'

const appState = reactive({
  connected: false,
  userId: '',
  board: ['', '', '', '', '', '', '', '', ''],
  gameId: '',
  gameStatus: '',
  playerMark: '',
  winner: '',
  playerTurn: '',
  gameType: ''
})

export default appState
