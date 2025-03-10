import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    plugins: [reactPlugin()],
    server: {
      port: 3000, 
      open: true, 
    },
    build: {
      outDir: 'dist', 
      sourcemap: true, 
    },
    resolve: {
      alias: {
        '@components': '/src/components',
      },
    },
  };
});
