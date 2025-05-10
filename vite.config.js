import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Allow access from other hosts
    proxy: {
      '/v4': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v4/, '/v4'),
      },
    },
  },
});