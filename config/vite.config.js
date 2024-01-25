import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss({
        config: './config/tailwind.config.js'
      }), autoprefixer]
    }
  }
})
