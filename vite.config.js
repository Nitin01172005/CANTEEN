import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['slick-carousel/slick/slick.css']
    }
  }
});
