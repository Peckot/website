import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/assets/style.css'

if (import.meta.env.DEV && import.meta.env.MODE === 'theme' && window.self === window.top) {
  import('@/dev/theme-preview').then(({ mountThemePreview }) => mountThemePreview())
} else {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
}
