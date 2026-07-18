import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const privacyDir = fileURLToPath(new URL('../privacy', import.meta.url))

export default defineConfig({
  plugins: [react()],
  base: '/Zanzsoftwares/',
  resolve: {
    alias: {
      '@privacy': privacyDir,
    },
  },
  server: {
    fs: {
      allow: [rootDir, privacyDir],
    },
  },
})
