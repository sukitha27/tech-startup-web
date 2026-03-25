// src/data/posts.js
// Single source of truth for all blog posts.
// Import this in Blog.jsx and Home.jsx instead of duplicating the array.

export const posts = [
  {
    id: 1,
    slug: 'web-development-trends-2025',
    title: '10 Web Development Trends That Will Define 2025',
    excerpt: 'From AI-assisted coding to edge rendering and WebAssembly going mainstream — here are the shifts every developer and business owner should be watching this year.',
    category: 'Web Development',
    author: 'Velora Tech Team',
    date: 'March 10, 2025',
    readTime: '6 min read',
    tags: ['React', 'AI', 'Performance'],
    featured: true,
  },
  {
    id: 2,
    slug: 'sri-lankan-businesses-web-presence-2025',
    title: 'Why Sri Lankan Businesses Need a Proper Web Presence in 2025',
    excerpt: "With mobile internet penetration surpassing 80% locally, a Facebook page is no longer enough. Here's what a professional digital presence actually looks like and why it matters for revenue.",
    category: 'Digital Strategy',
    author: 'Velora Tech Team',
    date: 'February 28, 2025',
    readTime: '5 min read',
    tags: ['Sri Lanka', 'Business', 'Strategy'],
    featured: false,
  },
  {
    id: 3,
    slug: 'react-vs-nextjs-business-site',
    title: 'React vs Next.js: Which Should You Build Your Business Site With?',
    excerpt: 'A practical, no-jargon breakdown of when to pick plain React and when Next.js earns its complexity — told through real project examples.',
    category: 'Web Development',
    author: 'Velora Tech Team',
    date: 'February 14, 2025',
    readTime: '7 min read',
    tags: ['React', 'Next.js', 'Architecture'],
    featured: false,
  },
  {
    id: 4,
    slug: 'ecommerce-conversion-rate-optimisation',
    title: 'E-commerce Conversion Rate Optimisation: What Actually Moves the Needle',
    excerpt: "After working on a dozen online stores, we've identified the handful of changes that consistently lift sales — and the popular advice that rarely does.",
    category: 'E-commerce',
    author: 'Velora Tech Team',
    date: 'January 30, 2025',
    readTime: '8 min read',
    tags: ['E-commerce', 'CRO', 'UX'],
    featured: false,
  },
  {
    id: 5,
    slug: 'how-to-write-a-software-brief',
    title: 'How to Write a Software Brief That Saves You Money',
    excerpt: "Vague requirements are the single biggest driver of blown budgets and missed deadlines. This guide walks you through what to include before you approach any developer.",
    category: 'Project Management',
    author: 'Velora Tech Team',
    date: 'January 15, 2025',
    readTime: '5 min read',
    tags: ['Process', 'Client Tips', 'Budget'],
    featured: false,
  },
  {
    id: 6,
    slug: 'real-cost-of-cheap-website',
    title: 'The Real Cost of a Cheap Website (And How to Avoid the Trap)',
    excerpt: "Low quotes often lead to security vulnerabilities, poor SEO, and sites that need rebuilding in under two years. Here's how to evaluate a proposal properly.",
    category: 'Digital Strategy',
    author: 'Velora Tech Team',
    date: 'December 20, 2024',
    readTime: '6 min read',
    tags: ['Budget', 'Quality', 'Business'],
    featured: false,
  },
];

// The 3 most recent posts — used for the homepage blog preview section
export const blogPreviews = posts.slice(0, 3);

export const categoryColors = {
  'Web Development':    'bg-blue-100 text-blue-800',
  'Digital Strategy':   'bg-purple-100 text-purple-800',
  'E-commerce':         'bg-green-100 text-green-800',
  'Project Management': 'bg-orange-100 text-orange-800',
};