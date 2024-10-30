import config from '@/config.js'
import appState from './state'

export const ws = new WebSocket(`${config.apiUrl}/ws`)
let handlers = {} //Коротко: handlers это "карта" с 'действиями', у которых есть свои функции-обработчики
// (например: функция для собирания определенных данных из сообщений от сервера, функция которая вызывается при определенном действии и др)

//это объект, который будет хранить функции-обработчики, связанные с определёнными действиями (actions), получаемыми через WebSocket.
// ---------------------
//Например, если сервер отправляет действие 'connect', можно зарегистрировать функцию-обработчик для 'connect',
//чтобы она выполнялась при получении данного действия. Это позволяет гибко добавлять обработчики для новых типов сообщений без изменения основного кода

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
  const request = JSON.parse(event.data) //request = объект, который создается из данных, полученных через WebSocket-сообщение от сервера
  console.log('Received action:', request.action) // request.action = действие(action), обозначающее тип сообщения (например: 'game:new','connect')

  const handler = handlers[request.action] // handlers[request.action] = определяет, зарегистрирован ли обработчик для данного действия (по ключу).
  // Например если request.action равно 'game.turn', то handlers["game.turn"] вёрнет функцию (значение) для действия типа 'game.turn'.
  if (handler !== undefined) {
    // В handler записывается функция, связанная с этим действием (если такая функция есть в handlers),
    // или undefined, если для данного действия обработчик не был зарегистрирован.
    //---Если в handlers есть функция, соответствующая request.action, то handler будет содержать эту функцию, и условие выполнится (true).---
    handler(request.payload)
    // Если обработчик существует, он вызывается и получает payload в качестве параметра.
  }
})

export function emit(action, payload) {
  //emit(action, payload) - это функция, которая отправляет сообщение на сервер.
  ws.send(
    JSON.stringify({
      action: action,
      payload: payload
    })
    // JSON.stringify преобразует объект с action и payload в JSON-строку для отправки.
    // Это позволяет отправлять данные на сервер, указав тип действия и его содержание, которые сервер должен обработать.
  )
}

export function register(action, func) {
  //Коротко: регистрирует определенные функции-обработчики к определенным дейстиям.
  // register - предназначена для добавления обработчиков(функций, которые обрабатывают данные) в объект handlers по ключу action (свойством здесь является сама функция(func)).
  // При вызове обработчик будет принимать данные (обычно payload), которые приходят в сообщении от сервера.
  handlers[action] = func
}
