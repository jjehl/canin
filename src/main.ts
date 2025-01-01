import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Vue Router
import router from './router'

// Components
import App from './App.vue'

//css
import './assets/canin.css'; // Chemin relatif vers votre fichier CSS

// Définir votre palette personnalisée
const customTheme = {
    dark: false,
    colors: {
        primary: '#ba175d',
        secondary: '#03dac6',
        background: '#ffffff',
        surface: '#ffffff',
        error: '#b00020',
        info: '#2196f3',
        success: '#4caf50',
        warning: '#fb8c00',
        text1: '#42504b',
        text3: '#319132',
        text2: '#155a16',
    },
};

// Configurer Vuetify
const vuetify = createVuetify({
    theme: {
        defaultTheme: 'customTheme',
        themes: {
            customTheme,
        },
    },
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi },
    },
});

// Créer l'application Vue
const app = createApp(App)

// Ajouter les plugins
app.use(vuetify)
app.use(router)

// Monter l'application
app.mount('#app')
