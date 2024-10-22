import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainMenuPage from '@/views/MainMenuPage.vue'
import GameBoardPage from '@/views/GameBoardPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'MainMenuPage', component: MainMenuPage },
    { path: '/game', name: 'GameBoardPage', component: GameBoardPage }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
