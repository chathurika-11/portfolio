import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    sourcemap: true
  },
  server: {
    port: 3000,
    host: true
  }
})