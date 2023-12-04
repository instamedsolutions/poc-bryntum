import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
  },
  plugins: [reactRefresh()],
  build: {
    commonjsOptions: {
      include: [
        /node_modules/,
      ]
    },

    sourcemap: true
  },
});