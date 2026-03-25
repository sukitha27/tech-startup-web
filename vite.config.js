import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeSlug from 'rehype-slug';
import path from 'path';

export default defineConfig({
  plugins: [
    // MDX must come BEFORE the React plugin
    mdx({
      remarkPlugins: [
        remarkGfm,
        remarkFrontmatter,          // parse the --- block
        remarkMdxFrontmatter,       // export it as `frontmatter` from each module
      ],
      rehypePlugins: [rehypeSlug],
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});