// Autor: Kevin Cachaya — configuracion Vite, puerto 5180, build optimizado
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
  },
});
