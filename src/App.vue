<script>
// import getCookie from './utils/cookies.js'
// import config from '@/config.js'

// const uid = getCookie(config.cookieName)
// import { ws } from '@/websocket'

// ws.addEventListener('open', () => {
//   console.log('WebSocket соединение установлено')
//   ws.send(
//     JSON.stringify({
//       action: 'connect',
//       payload: {
//         player: {
//           id: uid
//         }
//       }
//     })
//   )
// })

// ws.addEventListener('message', (event) => {
//   const message = JSON.parse(event.data)
//   console.log(message)
// })
</script>

<template>
  <main><router-view></router-view></main>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'HomeVideoFont';
  src: url('/assets/fonts/home_video/HomeVideo.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
</style>
