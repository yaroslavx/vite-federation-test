import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
  },
  server: {
    port: 5000,
  },
  plugins: [
    react(),
    federation({
      name: 'vite-federation-test-one',
      remotes: {
        sharedComponents: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
