import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Changing base to '/' ensures it works on your main Netlify URL
  base: '/', 
})