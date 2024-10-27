import config from '@/config.js'
import appState from './state'

export const ws = new WebSocket(`${config.apiUrl}/ws`)
let handlers = {}

ws.addEventListener('open', () => {
  console.log('WebSocket соединение установлено')
  appState.connected = true
})

ws.addEventListener('close', () => {
  console.log('WebSocket соединение закрыто')
  appState.connected = false
})
ws.addEventListener('error', (err) => {
  console.error(`WebSocket ошибка: ${err}`)
})

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

// функция register
export function register(action, func) {
  handlers[action] = func
}
