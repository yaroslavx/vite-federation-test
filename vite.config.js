import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from 'vite-tsconfig-paths';
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
                vite_federation_test_two: "http://localhost:5001/assets/vite_federation_test_two.js",
            },
            shared: ['react', 'react-dom']
        }),
        tsconfigPaths(),
    ],
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
        rollupOptions: {
            external: [
              "vite_federation_test_two/SecondAppComponent",
            ],
        },
    }
});
