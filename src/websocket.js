let ws = new WebSocket('ws://tictactoe.kg:9090/ws')

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
