import '@/assets/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import directives from './directives'
import { loadImages } from './utils/setImages'
import './assets/tooltip.css'
const app = createApp(App)
loadImages()
directives(app)
app.mount('#app')
