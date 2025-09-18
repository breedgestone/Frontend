import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Bbutton from './components/B-button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('B-button', Bbutton)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.use(createPinia())
app.use(router)

app.mount('#app')
