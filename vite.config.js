import { defineConfig } from 'vite';
import os from 'os';

function getLocalIp() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return '127.0.0.1';
}

const localIp = getLocalIp();

export default defineConfig({
  server: {
    host: localIp,
    proxy: {
      '/v4': {
        target: `http://${localIp}:3000`,
        changeOrigin: true,
        headers: {
          'x-rewrite-url': '/v4',
          'x-forwarded-host': `${localIp}:5173`,
          'x-forwarded-proto': 'http',
        },
        rewrite: (path) => path.replace(/^\/v4/, '/v4'),
      },
    },
  },
});