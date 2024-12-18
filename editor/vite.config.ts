import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    autoprefixer(),
    tailwind(),
  ],
  server: {
    open: "/index.html",
    port: 6401,
  },
})
