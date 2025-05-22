import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // For React component testing
    globals: true,
    outputFile: 'test-results/junit.xml', // For Jenkins JUnit reports
    reporter: ['default', 'junit']
  }
})