import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/proxy': {
        target: 'https://www.swiggy.com',
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    },
  }
})
