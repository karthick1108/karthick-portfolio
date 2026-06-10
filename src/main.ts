import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { reveal } from './directives/reveal'
import { initAnalytics } from './plugins/firebase'
import './styles/main.css'

// Fire-and-forget: record the visit hit. Never blocks the app from mounting.
void initAnalytics()

// Always land on the hero after a refresh instead of restoring scroll position.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

createApp(App).use(vuetify).directive('reveal', reveal).mount('#app')
