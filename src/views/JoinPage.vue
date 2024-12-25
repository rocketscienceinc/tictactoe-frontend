<script setup>
import { useRoute, useRouter } from 'vue-router'
import appState from '@/state'
import { emit, register, ws } from '@/websocket'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

const code = route.params.code
console.log(code)

ws.addEventListener('open', () => {
  emit('connect', { player: { id: appState.userId } })
})

onMounted(() => {
  register('connect', (payload) => {
    console.log('Получили сообщения от action connect', payload)

    appState.userId = payload.player.id
    appState.playerMark = payload.player.mark

    if (payload.game !== undefined) {
      appState.board = payload.game.board
      appState.gameId = payload.game.id
      appState.gameStatus = payload.game.status
      router.push('/game')
    } else {
      emit('game:join', {
        player: { id: appState.userId },
        game: { id: code }
      })
    }
  })
  register('game:join', (payload) => {
    console.log('Получено действие game:join', payload)
    if (payload.error) {
      router.push({ name: 'Error404Page' })
      return
    }
    appState.board = payload.game.board
    appState.gameId = payload.game.id
    appState.gameStatus = payload.game.status
    appState.playerMark = payload.player.mark

    router.push('/game')
  })
})
</script>
