import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { htmlPrerender } from 'vite-plugin-html-prerender'  // ← named export ✓

export default defineConfig({
  plugins: [
    react(),
    mdx({ remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] }),
    tailwindcss(),
    htmlPrerender({
      staticDir: path.join(__dirname, 'dist'),
      routes: ['/', '/services', '/portfolio', '/about', '/contact', '/blog', '/privacy-policy'],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})