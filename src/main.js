import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Bbutton from './components/B-button.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('B-button', Bbutton)

app.use(createPinia())
app.use(router)

app.mount('#app')
