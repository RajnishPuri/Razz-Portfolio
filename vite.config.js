// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Razz-Portfolio/',  // Ensure this matches your GitHub repo name
  plugins: [react()],
});
