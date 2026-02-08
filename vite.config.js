import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-react-compiler', {
            target: '18' // or '19' depending on your React version
          }]
        ],
      },
    }),
  ],
})