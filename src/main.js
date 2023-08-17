import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import "./assets/css/global.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

app.use(createPinia())
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
