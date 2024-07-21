import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/3D-portfolio/', // Adjust this to match your GitHub repository name
  assetsInclude: ['**/*.glb'],
});
