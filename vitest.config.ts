import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tsconfigPaths(), // This forces Vitest to respect your tsconfig.json settings!
    react()          // This handles the JSX/TSX transformations
  ],
  test: {
    environment: 'jsdom', // or 'node' depending on your test setup
  },
  optimizeDeps: {
    include: ['react/jsx-runtime', 'react/jsx-dev-runtime']
  }
})