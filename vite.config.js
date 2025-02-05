// vite.config.js


// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  root: './', // Set the root folder to the root of your project
  build: {
    outDir: 'dist', // Ensure the build output goes to the 'dist' folder
    rollupOptions: {
      input: './index.html' // Explicitly point to your index.html file outside the src folder
    }
  }
})
