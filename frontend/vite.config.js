import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// default value is dist
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
