import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Set BASE_URL (e.g. "/itl-website") when deploying under a sub-path, such as GitHub Pages.
  base: process.env.BASE_URL ? `${process.env.BASE_URL}/` : '/',
  plugins: [tailwindcss()],
})
