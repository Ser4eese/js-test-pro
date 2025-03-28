import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './client',
  server: {
    port: 3001, // Порт для Vite, чтобы не конфликтовать с Express (3000)
  },
})
