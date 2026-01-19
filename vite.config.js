import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path configuration
  // For Vercel: use '/' (default)
  // For GitHub Pages: use '/REPO_NAME/' where REPO_NAME is your repository name
  // You can override this with environment variable: VITE_BASE_PATH=/your-path/
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
})

