import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
import NoInternetPage from '@/views/NoInternetPage.vue'
import Error404Page from '@/views/Error404Page.vue'
import GamePage from '@/views/GamePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'WelcomePage', component: WelcomePage },
    { path: '/about-us', name: 'AboutUsPage', component: AboutUsPage },
    { path: '/no-internet', name: 'NoInternetPage', component: NoInternetPage },
    { path: '/error404', name: 'Error404Page', component: Error404Page },
    { path: '/game', name: 'GamePage', component: GamePage }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
