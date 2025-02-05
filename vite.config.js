// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './', // Root is the project root directory (if index.html is outside src)
  build: {
    outDir: 'dist', // Build output directory (default is 'dist')
    rollupOptions: {
      input: './index.html' // Make sure this points to your index.html
    }
  }
})
