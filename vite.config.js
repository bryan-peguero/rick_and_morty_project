import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://bryan-peguero.github.io/rick_and_morty_project/',
  plugins: [react()]
})
