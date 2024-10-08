import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '@/views/MainMenu.vue'
import GameBoard from '@/views/GameBoard.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'MainMenu', component: MainMenu },
    { path: '/game', name: 'GameBoard', component: GameBoard }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
