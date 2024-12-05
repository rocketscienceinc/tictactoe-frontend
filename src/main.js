import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'
import AboutUsPage from '@/views/AboutUsPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'WelcomePage', component: WelcomePage },
    { path: '/about-us', name: 'AboutUsPage', component: AboutUsPage }
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
