
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Store from './Store'


// Vuetify
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles'
import './assets/styles/tailwind.css'

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
    
const vuetify = createVuetify({
    components,
    directives
})


const app = createApp(App)

app.use(router)
app.use(Store)
app.use(vuetify)

app.mount('#app')
