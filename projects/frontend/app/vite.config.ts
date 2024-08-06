import { defineConfig } from 'vite';
import { default as react } from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
