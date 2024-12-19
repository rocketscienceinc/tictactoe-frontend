import config from '@/config.js'

export const ws = new WebSocket(`${config.apiUrl}/ws`)
// export const ws = new WebSocket(`https://tictactoe.kg/ws`)

ws.addEventListener('open', () => {
  console.log('WebSocket соединение установлено')
})
ws.addEventListener('close', () => {
  console.log('WebSocket соединение закрыто')
})
ws.addEventListener('error', (err) => {
  console.error(`WebSocket ошибка: ${err}`)
})

let handlers = {}

ws.addEventListener('message', (event) => {
  const request = JSON.parse(event.data)
  console.log('Received action:', request.action)

  const handler = handlers[request.action]

  if (handler !== undefined) {
    handler(request.payload)
  }
})

export function emit(action, payload) {
  ws.send(
    JSON.stringify({
      action: action,
      payload: payload
    })
  )
}

export function register(action, func) {
  handlers[action] = func
}
