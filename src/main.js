import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'
import NoInternetPage from '@/views/NoInternetPage.vue'
import Error404Page from '@/views/Error404Page.vue'
import GamePage from '@/views/GamePage.vue'
import JoinPage from '@/views/JoinPage.vue'
import QrPage from './views/QrPage.vue'

import VueQrcode from '@chenfengyuan/vue-qrcode'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'WelcomePage', component: WelcomePage },
    { path: '/about-us', name: 'AboutUsPage', component: AboutUsPage },
    { path: '/no-internet', name: 'NoInternetPage', component: NoInternetPage },
    { path: '/game', name: 'GamePage', component: GamePage },
    { path: '/qr', name: 'QrPage', component: QrPage },
    { path: '/join/:code', name: 'JoinPage', component: JoinPage },
    { path: '/:pathMatch(.*)*', name: 'Error404Page', component: Error404Page }
  ]
})

const app = createApp(App)
app.component(VueQrcode.name, VueQrcode)
app.use(router)
app.mount('#app')
