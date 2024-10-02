// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,  // or any other port you want to use
    host: '0.0.0.0', // Allows deployment to listen on all network interfaces
  },
  build: {
    outDir: 'dist', // Make sure this matches your Vercel build config
  },
});
