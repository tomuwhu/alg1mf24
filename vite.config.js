import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/alg1mf24/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
