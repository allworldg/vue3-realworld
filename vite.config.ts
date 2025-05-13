import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),tailwindcss()],
  base:'/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  }
})
