import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import { router } from './router'
import 'bootstrap/dist/css/bootstrap.css'
import './interceptor'

const app = createApp(App).use(store).use(router)

app.config.globalProperties.$baseUrl = process.env.VUE_APP_BASE_URL

app.mount('#app')
