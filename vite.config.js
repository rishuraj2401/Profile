import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages (use your repository name)
  // For root repository: base: '/'
  // For repository with name 'portfolio': base: '/portfolio/'
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
})

