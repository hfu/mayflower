import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Allow access from other hosts
    proxy: {
      '/v4': {
        target: 'http://127.0.0.1:3000', // localhost を IP アドレスに変更
        changeOrigin: true,
        headers: {
          'x-rewrite-url': '/v4',
        },
        rewrite: (path) => path.replace(/^\/v4/, '/v4'),
      },
    },
  },
});