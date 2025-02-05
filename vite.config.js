// https://vitejs.dev/config/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Razz-Portfolio/',  // Make sure this matches your repo name
  plugins: [react()],
});
