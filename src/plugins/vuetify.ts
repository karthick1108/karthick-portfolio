import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { fa } from 'vuetify/iconsets/fa'

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          background: '#0b0f14',
          surface: '#151b23',
          primary: '#2dd4bf',
          secondary: '#8a63db',
          teal: '#2dd4bf',
        },
      },
      light: {
        dark: false,
        colors: {
          background: '#f7f8fa',
          surface: '#ffffff',
          primary: '#0d9488',
          secondary: '#7c4dff',
          teal: '#0d9488',
        },
      },
    },
  },
  icons: {
    defaultSet: 'fa',
    sets: { fa },
  },
})
