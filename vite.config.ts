// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',   // listen on all interfaces (needed in Docker)
    port: 5173,
    watch: {
      usePolling: true, // <– key fix for Docker/Windows
      interval: 300,    // ms, you can lower to 100 if you want faster
    },
    hmr: {
      host: 'localhost', // browser connects back to localhost on Windows
      port: 5173,
    },
  },
})
