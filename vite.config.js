import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    mdx({ remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})