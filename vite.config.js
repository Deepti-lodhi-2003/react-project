// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/react-project/', // ✅ must match the repo name exactly
  plugins: [react(), tailwindcss()],
})
