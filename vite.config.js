import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/deepti-lodhi-2003.github.io/react project',
  plugins: [react(),tailwindcss()],
})
