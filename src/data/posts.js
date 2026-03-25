// src/lib/posts.js
// Auto-generated post registry — reads frontmatter from all MDX files at
// build time via Vite's import.meta.glob. No manual list to maintain.
//
// Usage: import { getAllPosts, getPostBySlug, blogPreviews, categoryColors } from '@/lib/posts'

// Grab every MDX file's frontmatter eagerly (not the full module — just meta)
// Each MDX file must export a `frontmatter` object (handled by @mdx-js/rollup).
const modules = import.meta.glob('../content/posts/*.mdx', { eager: true });

// Build a normalised post list sorted by date descending
function buildPosts() {
  return Object.entries(modules)
    .map(([filepath, mod]) => {
      const fm = mod.frontmatter ?? {};

      // Derive slug from filename if not set in frontmatter
      const slug =
        fm.slug ??
        filepath
          .split('/')
          .pop()
          .replace(/\.mdx$/, '');

      return {
        // Required fields with safe fallbacks
        id:       slug,
        slug,
        title:    fm.title    ?? 'Untitled',
        excerpt:  fm.excerpt  ?? '',
        category: fm.category ?? 'General',
        author:   fm.author   ?? 'Velora Tech Team',
        date:     fm.date     ?? '',
        readTime: fm.readTime ?? '5 min read',
        tags:     Array.isArray(fm.tags) ? fm.tags : [],
        featured: fm.featured ?? false,
      };
    })
    .sort((a, b) => {
      // Sort newest first — parse the date strings
      const da = a.date ? new Date(a.date) : new Date(0);
      const db = b.date ? new Date(b.date) : new Date(0);
      return db - da;
    });
}

export const posts = buildPosts();

// The 3 most recent posts — used for the homepage blog preview section
export const blogPreviews = posts.slice(0, 3);

// Category → Tailwind colour classes
export const categoryColors = {
  'Web Development':    'bg-blue-100 text-blue-800',
  'Digital Strategy':   'bg-purple-100 text-purple-800',
  'E-commerce':         'bg-green-100 text-green-800',
  'Project Management': 'bg-orange-100 text-orange-800',
};

// Helper — find a single post by slug
export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug) ?? null;
}