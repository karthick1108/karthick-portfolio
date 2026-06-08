import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { reveal } from './directives/reveal'
import './styles/main.css'

// Always land on the hero after a refresh instead of restoring scroll position.
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

createApp(App).use(vuetify).directive('reveal', reveal).mount('#app')
