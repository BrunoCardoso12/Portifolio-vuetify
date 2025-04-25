import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// i18n
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pt from './locales/pt.json'

import router from './router'

import store from '../src/stores/store'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: 'dark', // ou 'light'
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#F0F2F5',
          surface: '#FFFFFF ',
          primary: '#FFFFFF',
          secondary: '#4CAF50',
        },
      },
      dark: {
        dark: true,
        colors: {
          background: 'rgba(40, 13, 64, 1)',
          surface: 'rgba(61, 54, 54, 1)',
          primary: 'rgba(61, 54, 54, 1)',
          secondary: 'white',
        },
      },
    },
  },
})

const savedLang = localStorage.getItem('language') || 'pt';

const i18n = createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: { en, pt },
})

const pinia = createPinia()
const app = createApp(App)

app.use(store)
app.use(pinia)
app.use(vuetify)
app.use(router)
app.use(i18n)
app.mount('#app')
