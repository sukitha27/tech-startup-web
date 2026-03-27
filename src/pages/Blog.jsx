import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { Search, Clock, Tag, ChevronRight } from 'lucide-react';
import blogHeroBg from '../assets/blog-bg.jpg';
import { posts, categoryColors } from '@/data/posts';
import BlogCoverImage from '@/components/BlogCoverImage';

const categories = ['All', 'Web Development', 'Digital Strategy', 'E-commerce', 'Project Management'];

// ── Blog card ─────────────────────────────────────────────────────────────────
const BlogCard = ({ post, large = false }) => (
  <article
    className={`group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
      large ? 'md:flex-row' : ''
    }`}
  >
    {/* Cover image */}
    <BlogCoverImage
      image={post.image}
      category={post.category}
      alt={post.title}
      aspectClass={large ? 'md:w-2/5 min-h-[240px] h-52' : 'h-52'}
      className="flex-shrink-0"
    />

    {/* Content */}
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
        className={`font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors ${
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
        <Link
          to={`/blog/${post.slug}`}
          className="flex items-center text-blue-600 text-sm font-semibold gap-1 hover:gap-2 transition-all"
        >
          Read more <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </article>
);

// ── Page ──────────────────────────────────────────────────────────────────────
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
      <SEO
        title="Blog"
        description="Web development insights, digital strategy guides, and lessons from real client projects — written for business owners and developers alike."
      />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${blogHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-white text-sm">
              <ul className="flex space-x-2">
                <li>
                  <Link to="/" className="hover:text-blue-300 transition-colors uppercase tracking-wide">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400 before:content-['/'] before:mr-2">
                  <Link to="/blog" className="text-blue-300 font-semibold uppercase tracking-wide">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase border border-blue-400/30">
            Our Blog
          </span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Insights on Web &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Software
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Practical guides, industry trends, and lessons from real client projects — written for
            business owners and developers alike.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* ── Posts ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category filters */}
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
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
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

            {/* Grid */}
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
