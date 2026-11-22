import { readFileSync } from 'node:fs'
import { fileURLToPath, URL } from 'node:url'

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

function themedFavicon() {
  return {
    name: 'themed-favicon',
    transformIndexHtml() {
      const theme = readFileSync(new URL('./src/assets/style.css', import.meta.url), 'utf8')
      const favicon = readFileSync(new URL('./src/assets/favicon.svg', import.meta.url), 'utf8')
      const colors = new Map(
        [...theme.matchAll(/(--color-[\w-]+):\s*(#[\da-f]+);/gi)].map(([, token, color]) => [token, color]),
      )
      const svg = favicon.replace(/var\((--color-[\w-]+)\)/g, (_, token) => {
        if (!colors.has(token)) throw new Error(`Missing favicon theme color: ${token}`)
        return colors.get(token)
      })

      return [
        {
          tag: 'link',
          attrs: { rel: 'icon', type: 'image/svg+xml', href: `data:image/svg+xml,${encodeURIComponent(svg)}` },
        },
      ]
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(), vueJsx(), themedFavicon()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
