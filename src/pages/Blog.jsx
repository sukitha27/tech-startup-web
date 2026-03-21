import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Clock, Tag, ChevronRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: '10 Web Development Trends That Will Define 2025',
    excerpt:
      'From AI-assisted coding to edge rendering and WebAssembly going mainstream — here are the shifts every developer and business owner should be watching this year.',
    category: 'Web Development',
    author: 'Velora Tech Team',
    date: 'March 10, 2025',
    readTime: '6 min read',
    tags: ['React', 'AI', 'Performance'],
    featured: true,
  },
  {
    id: 2,
    title: 'Why Sri Lankan Businesses Need a Proper Web Presence in 2025',
    excerpt:
      "With mobile internet penetration surpassing 80% locally, a Facebook page is no longer enough. Here's what a professional digital presence actually looks like and why it matters for revenue.",
    category: 'Digital Strategy',
    author: 'Velora Tech Team',
    date: 'February 28, 2025',
    readTime: '5 min read',
    tags: ['Sri Lanka', 'Business', 'Strategy'],
    featured: false,
  },
  {
    id: 3,
    title: 'React vs Next.js: Which Should You Build Your Business Site With?',
    excerpt:
      'A practical, no-jargon breakdown of when to pick plain React and when Next.js earns its complexity — told through real project examples.',
    category: 'Web Development',
    author: 'Velora Tech Team',
    date: 'February 14, 2025',
    readTime: '7 min read',
    tags: ['React', 'Next.js', 'Architecture'],
    featured: false,
  },
  {
    id: 4,
    title: 'E-commerce Conversion Rate Optimisation: What Actually Moves the Needle',
    excerpt:
      "After working on a dozen online stores, we've identified the handful of changes that consistently lift sales — and the popular advice that rarely does.",
    category: 'E-commerce',
    author: 'Velora Tech Team',
    date: 'January 30, 2025',
    readTime: '8 min read',
    tags: ['E-commerce', 'CRO', 'UX'],
    featured: false,
  },
  {
    id: 5,
    title: 'How to Write a Software Brief That Saves You Money',
    excerpt:
      "Vague requirements are the single biggest driver of blown budgets and missed deadlines. This guide walks you through what to include before you approach any developer.",
    category: 'Project Management',
    author: 'Velora Tech Team',
    date: 'January 15, 2025',
    readTime: '5 min read',
    tags: ['Process', 'Client Tips', 'Budget'],
    featured: false,
  },
  {
    id: 6,
    title: 'The Real Cost of a Cheap Website (And How to Avoid the Trap)',
    excerpt:
      "Low quotes often lead to security vulnerabilities, poor SEO, and sites that need rebuilding in under two years. Here's how to evaluate a proposal properly.",
    category: 'Digital Strategy',
    author: 'Velora Tech Team',
    date: 'December 20, 2024',
    readTime: '6 min read',
    tags: ['Budget', 'Quality', 'Business'],
    featured: false,
  },
];

const categories = ['All', 'Web Development', 'Digital Strategy', 'E-commerce', 'Project Management'];

const categoryColors = {
  'Web Development': 'bg-blue-100 text-blue-800',
  'Digital Strategy': 'bg-purple-100 text-purple-800',
  'E-commerce': 'bg-green-100 text-green-800',
  'Project Management': 'bg-orange-100 text-orange-800',
};

const BlogCard = ({ post, large = false }) => (
  <article
    className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 ${
      large ? 'md:flex-row' : ''
    }`}
  >
    <div
      className={`bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center flex-shrink-0 ${
        large ? 'md:w-2/5 min-h-[240px]' : 'h-48'
      }`}
    >
      <span className="text-white/30 text-6xl font-bold select-none">
        {post.category.charAt(0)}
      </span>
    </div>

    <div className="p-6 flex flex-col flex-1">
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full ${
            categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'
          }`}
        >
          {post.category}
        </span>
        <span className="text-gray-400 text-xs flex items-center gap-1">
          <Clock className="h-3 w-3" /> {post.readTime}
        </span>
      </div>

      <h2
        className={`font-bold text-gray-900 mb-3 leading-snug hover:text-blue-600 transition-colors cursor-pointer ${
          large ? 'text-2xl' : 'text-lg'
        }`}
      >
        {post.title}
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded flex items-center gap-1"
          >
            <Tag className="h-2.5 w-2.5" /> {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
        <div>
          <p className="text-sm font-medium text-gray-800">{post.author}</p>
          <p className="text-xs text-gray-400">{post.date}</p>
        </div>
        <button className="flex items-center text-blue-600 text-sm font-semibold gap-1 hover:gap-2 transition-all">
          Read more <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  </article>
);

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch =
      searchQuery === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  const showFeatured = featured && activeCategory === 'All' && searchQuery === '';
  const gridPosts = showFeatured ? rest : filtered;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Our Blog
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Insights on Web &amp; Software
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Practical guides, industry trends, and lessons from real client projects — written for
            business owners and developers alike.
          </p>

          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">No articles match your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
              }}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            {/* Featured post */}
            {showFeatured && (
              <div className="mb-10">
                <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Featured
                </h2>
                <BlogCard post={featured} large />
              </div>
            )}

            {/* Post grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-3">Stay in the Loop</h3>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Get new articles, project case studies, and web tips delivered to your inbox — no spam, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
