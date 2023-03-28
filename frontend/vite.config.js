import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://booking-app-5v9c.onrender.com",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  }
})
