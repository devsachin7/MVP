import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Load your locally-trusted certificates (generated via mkcert or similar)
const certDir = path.resolve(__dirname, 'certs'); // adjust if your certs are elsewhere

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    https: {
      key: fs.readFileSync(path.join(certDir, 'localhost-key.pem')),
      cert: fs.readFileSync(path.join(certDir, 'localhost.pem')),
    },
  },
})
