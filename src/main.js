import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'WelcomePage', component: WelcomePage }]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
