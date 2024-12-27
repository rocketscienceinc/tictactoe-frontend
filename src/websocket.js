import config from '@/config.js'
import appState from './state'

let ws
let handlers = {}
let reconnectIntervalId

function connect() {
  ws = new WebSocket(`${config.apiUrl}/ws`)
  ws.addEventListener('open', () => {
    console.log('WebSocket соединение установлено')
    appState.wsConnection = 'open'
    setTimeout(() => {
      appState.wsConnection = ''
    }, 5000)
    if (reconnectIntervalId) {
      clearInterval(reconnectIntervalId)
      reconnectIntervalId = undefined
    }
    emit('connect', { player: { id: appState.userId } })
  })
  ws.addEventListener('close', () => {
    console.log('WebSocket соединение  закрыто')
    appState.wsConnection = 'closed'
    if (!reconnectIntervalId) {
      reconnectIntervalId = setInterval(() => {
        connect()
      }, 1000)
    }
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
}

connect()

window.addEventListener('online', () => {
  appState.connectionStatus = 'established'
  setTimeout(() => {
    appState.connectionStatus = ''
  }, 5000)
  console.log('Became online')
})

window.addEventListener('offline', () => {
  appState.connectionStatus = 'offline'
  console.log('Became offline')
})

export function emit(action, payload) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(
      JSON.stringify({
        action: action,
        payload: payload
      })
    )
  }
}

export function register(action, func) {
  handlers[action] = func
}
