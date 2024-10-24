import config from '@/config.js'

export const ws = new WebSocket(`${config.apiUrl}/ws`)

ws.addEventListener('close', () => {
  console.log('WebSocket соединение закрыто')
})
ws.addEventListener('error', (err) => {
  console.error(`WebSocket ошибка: ${err}`)
})
