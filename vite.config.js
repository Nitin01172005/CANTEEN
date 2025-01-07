import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      css: {
        additionalData: '@import "slick-carousel/slick/slick.css";'
      }
    }
  }
});
