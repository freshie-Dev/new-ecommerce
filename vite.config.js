import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/new-ecommerce/",
  server: {
    // host: "192.168.18.20",
  },
})
