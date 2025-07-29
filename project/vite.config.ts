import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.40', // allows access from network
    port: 4000       // or any port you prefer
  }
})