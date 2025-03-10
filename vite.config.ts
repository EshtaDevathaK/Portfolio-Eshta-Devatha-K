// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: Number(process.env.PORT) || 3000,
    host: '0.0.0.0'
  },
});
