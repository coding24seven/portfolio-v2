import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: { usePolling: true },
  },
  plugins: [
    react({
      // This tells Vite/React to handle the 'css' prop automatically
      jsxImportSource: '@emotion/react',
    }),
    babel({
      presets: [reactCompilerPreset()],
      // Adding the emotion plugin here helps with minification and developer experience
      plugins: ['@emotion/babel-plugin'],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
