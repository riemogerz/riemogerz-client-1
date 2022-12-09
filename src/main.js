import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueChartkick)

app.mount('#app')
