import config from '@/config.js'

let ws = new WebSocket(`${config.apiUrl}/ws`)

ws.addEventListener('open', () => {
  console.log('WebSocket соединение установлено')
  ws.send(
    JSON.stringify({
      action: 'connect',
      payload: {
        player: {
          id: ''
        }
      }
    })
  )
})
ws.addEventListener('close', () => {
  console.log('WebSocket соединение закрыто')
})
ws.addEventListener('error', (err) => {
  console.error(`WebSocket ошибка: ${err}`)
})
