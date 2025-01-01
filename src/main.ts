import { createApp } from 'vue'
import './style.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue Router
import router from './router'

// Components
import App from './App.vue'

// Configurer Vuetify
const vuetify = createVuetify({components, directives,})

// Créer l'application Vue
const app = createApp(App)

// Ajouter les plugins
app.use(vuetify)
app.use(router)

// Monter l'application
app.mount('#app')
