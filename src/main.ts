import '@/assets/reset.css'
import { createApp } from 'vue'
import App from './App.vue'
import directives from './directives'
import './assets/tooltip.css'
const app = createApp(App)
directives(app)
app.mount('#app')
