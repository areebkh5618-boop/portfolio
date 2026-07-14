import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: replace 'practice-site' with your actual GitHub repo name.
  // If deploying to a user/org page (e.g. username.github.io), set base to '/'.
  base: '/practice-site/',
})
