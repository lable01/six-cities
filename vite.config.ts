/// <reference types='vitest' />
/// <reference types='vite/client' />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      components: '/src/components',
      pages: '/src/pages',
      layouts: '/src/layouts',
      types: '/src/types',
      hooks: '/src/hooks',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
