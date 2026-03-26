// src/pages/BlogPost.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import SEO from '@/components/SEO';
import MDXComponents from '@/components/MDXComponents';
import { posts, categoryColors } from '@/data/posts';   // ← consistent @/ alias
import {
  Clock, Tag, ArrowLeft, Twitter, Linkedin,
  Link2, CheckCircle, ChevronRight, User,
} from 'lucide-react';
import blogHeroBg from '../assets/blog-bg.jpg';

// ── Dynamically import each MDX file keyed by slug ───────────────────────────
const postModules = import.meta.glob('../content/posts/*.mdx');

function getModuleKey(slug) {
  return `../content/posts/${slug}.mdx`;
}

// ── Share button ─────────────────────────────────────────────────────────────
const ShareButton = ({ href, label, icon: Icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:scale-105 ${color}`}
  >
    <Icon className="h-4 w-4" />
    <span className="hidden sm:inline">{label}</span>
  </a>
);

// ── Copy-link button ──────────────────────────────────────────────────────────
const CopyLinkButton = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button
      onClick={handleCopy}
      aria-label="Copy link"
      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-200 hover:scale-105"
    >
      {copied ? (
        <><CheckCircle className="h-4 w-4 text-green-500" /><span className="hidden sm:inline">Copied!</span></>
      ) : (
        <><Link2 className="h-4 w-4" /><span className="hidden sm:inline">Copy link</span></>
      )}
    </button>
  );
};

// ── Related post card ─────────────────────────────────────────────────────────
const RelatedCard = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
  >
    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 h-28 flex items-center justify-center">
      <span className="text-white/25 text-5xl font-black select-none">
        {post.category.charAt(0)}
      </span>
    </div>
    <div className="p-5 flex-1 flex flex-col">
      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit mb-2 ${categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'}`}>
        {post.category}
      </span>
      <h4 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors flex-1">
        {post.title}
      </h4>
      <div className="flex items-center gap-1 mt-3 text-blue-600 text-xs font-medium">
        Read more <ChevronRight className="h-3 w-3" />
      </div>
    </div>
  </Link>
);

// ── Loading skeleton ──────────────────────────────────────────────────────────
const ContentSkeleton = () => (
  <div className="animate-pulse space-y-4 py-8">
    {[80, 95, 70, 88, 75, 92].map((w, i) => (
      <div key={i} className="h-4 bg-gray-200 rounded" style={{ width: `${w}%` }} />
    ))}
    <div className="h-4 bg-gray-200 rounded w-1/2 mt-8" />
    {[65, 90, 78, 85].map((w, i) => (
      <div key={i} className="h-4 bg-gray-200 rounded" style={{ width: `${w}%` }} />
    ))}
  </div>
);

// ── Main component ────────────────────────────────────────────────────────────
const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug);

  const [PostContent, setPostContent] = useState(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPostContent(null);
    setLoadError(false);

    const key = getModuleKey(slug);
    const loader = postModules[key];

    if (!loader) {
      setLoadError(true);
      return;
    }

    loader()
      .then((mod) => setPostContent(() => mod.default))
      .catch(() => setLoadError(true));
  }, [slug]);

  // Related: same category first, then fill from others
  const related = posts.filter((p) => p.slug !== slug && p.category === post?.category).slice(0, 3);
  const relatedFilled =
    related.length < 3
      ? [...related, ...posts.filter((p) => p.slug !== slug && !related.includes(p)).slice(0, 3 - related.length)]
      : related;

  const canonicalUrl = `https://www.veloratech.com.lk/blog/${slug}`;
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post?.title ?? '')}&url=${encodeURIComponent(canonicalUrl)}`;
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`;

  // ── 404 ───────────────────────────────────────────────────────────────────
  if (!post || loadError) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <SEO title="Post Not Found" description="This blog post could not be found." />
        <div className="text-center max-w-md">
          <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-indigo-600 mb-6 select-none">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Post not found</h1>
          <p className="text-gray-500 mb-8">This article doesn't exist or may have been moved.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="h-4 w-4" /> Go back
            </button>
            <Link to="/blog" className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors text-sm font-medium">
              All articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title={post.title} description={post.excerpt} url={canonicalUrl} />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[52vh] flex items-end"
        style={{ backgroundImage: `url(${blogHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-white text-sm flex items-center gap-2">
              <Link to="/" className="hover:text-blue-300 transition-colors uppercase tracking-wide text-xs">Home</Link>
              <span className="text-gray-500">/</span>
              <Link to="/blog" className="hover:text-blue-300 transition-colors uppercase tracking-wide text-xs">Blog</Link>
              <span className="text-gray-500">/</span>
              <span className="text-blue-300 text-xs truncate max-w-[200px]">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-blue-100 text-blue-800'}`}>
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs">
              <Clock className="h-3.5 w-3.5" /> {post.readTime}
            </span>
            <span className="text-gray-400 text-xs">{post.date}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-6">{post.excerpt}</p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="flex items-center gap-1 text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Tag className="h-3 w-3" /> {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent" />
      </section>

      {/* ── Content grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Article */}
          <article className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 sm:px-10 py-10">

              {/* Share — top */}
              <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-gray-100">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mr-1">Share</span>
                <ShareButton href={twitterShare} label="Twitter" icon={Twitter} color="bg-sky-500" />
                <ShareButton href={linkedinShare} label="LinkedIn" icon={Linkedin} color="bg-blue-700" />
                <CopyLinkButton />
              </div>

              {/* MDX */}
              <div className="prose-container">
                {PostContent ? (
                  <MDXProvider components={MDXComponents}>
                    <PostContent />
                  </MDXProvider>
                ) : (
                  <ContentSkeleton />
                )}
              </div>

              {/* Share — bottom */}
              <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500 mr-1">Found this useful? Share it:</span>
                <ShareButton href={twitterShare} label="Twitter" icon={Twitter} color="bg-sky-500" />
                <ShareButton href={linkedinShare} label="LinkedIn" icon={Linkedin} color="bg-blue-700" />
                <CopyLinkButton />
              </div>
            </div>

            {/* Author bio */}
            <div className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                  <User className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-bold text-gray-900">{post.author}</h3>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">Author</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  The Velora Tech team is a group of developers, designers, and digital strategists based in Sri Lanka.
                  We build production-grade websites and web applications for businesses across Asia and beyond, and
                  write honestly about the industry from years of hands-on experience.
                </p>
                <Link to="/about" className="text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  About Velora Tech →
                </Link>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-6">
              <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to all articles
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-24 space-y-8">

              <div>
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedFilled.map((p) => <RelatedCard key={p.id} post={p} />)}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Ready to start your project?</h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Get a free consultation with our team. No obligation, just straight answers.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 bg-white text-blue-700 text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-blue-50 transition-colors">
                  Get in touch <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <Link to="/blog" className="flex items-center justify-between w-full bg-white border border-gray-100 shadow-sm rounded-2xl px-5 py-4 text-sm font-medium text-gray-700 hover:text-blue-600 hover:border-blue-100 transition-all duration-200 group">
                <span>Browse all articles</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
