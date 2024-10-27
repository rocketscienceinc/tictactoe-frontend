import { reactive } from 'vue'

const appState = reactive({
  connected: false,
  userId: '',
  board: null,
  gameId: '',
  gameStatus: ''
})

export default appState
