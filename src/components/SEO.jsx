import { Helmet } from 'react-helmet-async';

/**
 * Drop <SEO /> into any page to set title, description, and OG tags.
 *
 * Usage:
 *   <SEO
 *     title="Services"
 *     description="Custom web development, software solutions and consulting."
 *   />
 *
 *   // Blog post — pass the Vite-imported image:
 *   <SEO
 *     title={post.title}
 *     description={post.excerpt}
 *     url={`https://www.veloratech.com.lk/blog/${post.slug}`}
 *     image={post.image}   ← Vite hashed path, resolved to absolute below
 *   />
 */

const SITE_URL   = 'https://www.veloratech.com.lk';
const SITE_TITLE = 'Velora Tech';

// Vite-imported images are hashed relative paths like /assets/blog/foo.abc123.jpg
// OG/Twitter crawlers (Facebook, WhatsApp, LinkedIn) require a fully-qualified URL.
function toAbsoluteUrl(image) {
  if (!image) return `${SITE_URL}/og-image.png`;          // default fallback
  if (image.startsWith('http')) return image;              // already absolute
  return `${SITE_URL}${image}`;                            // prepend domain
}

const SEO = ({
  title,
  description = 'Expert software development and web solutions for growing businesses. Transforming ideas into powerful digital solutions.',
  image,                                                   // Vite path or absolute URL
  url,
}) => {
  const fullTitle    = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
  const canonicalUrl = url || SITE_URL;
  const ogImage      = toAbsoluteUrl(image);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph — Facebook, WhatsApp, LinkedIn previews */}
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url"         content={canonicalUrl} />
      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_TITLE} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  );
};

export default SEO;