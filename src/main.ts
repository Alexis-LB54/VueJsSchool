import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia(); //création de la constante
const app = createApp(App)

pinia.use(piniaPluginPersistedstate); //pour utiliser le plugin

app.use(createPinia())
app.use(pinia)
app.use(router)

app.mount('#app')
