import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/',
  esbuild: {},
  plugins: [vue()],
  server: {
    host: true,
    port: 8080,
    open: true,
  }
})
