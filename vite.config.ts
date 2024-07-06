import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@shared': path.resolve(__dirname, 'src', 'shared'),
      '@styles': path.resolve(__dirname, 'src', 'shared', 'styles'),
      '@features': path.resolve(__dirname, 'src', 'features'),
      '@widgets': path.resolve(__dirname, 'src', 'widgets'),
    }
  }
})
