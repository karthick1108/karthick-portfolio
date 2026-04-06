import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { fa } from 'vuetify/iconsets/fa'

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'fa',
    sets: { fa },
  },
})
