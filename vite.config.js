import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [vue(), svgLoader()],
  // use @ instead of '../' or './'
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // When in development, make the /api route point directly to localhost:5000
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
    mode: 'development',
  },
  // path where the bundled files will be added after running "npm run build"
  build: {
    outDir: path.resolve(__dirname, '../seminee-bolovan-server/static'),
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/global.scss";`,
      },
    },
  },
});
