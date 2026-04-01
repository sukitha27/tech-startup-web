import { Helmet } from 'react-helmet-async';

const SITE_URL   = 'https://www.veloratech.com.lk';
const SITE_NAME  = 'Velora Tech';

function toAbsoluteUrl(image) {
  if (!image) return `${SITE_URL}/og-image.png`;
  if (image.startsWith('http')) return image;
  return `${SITE_URL}${image}`;
}

// JSON-LD generators — one per page type
function buildOrganizationLD() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description: 'Expert software development and web solutions for growing businesses. Based in Sri Lanka, serving clients worldwide.',
    address: { '@type': 'PostalAddress', addressCountry: 'LK' },
    areaServed: 'Worldwide',
    serviceType: ['Software Development', 'Web Development', 'Mobile App Development', 'UI/UX Design'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94-076-114-8054',
      contactType: 'customer service',
      email: 'hello@veloratech.com.lk',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://facebook.com/veloratech',
      'https://linkedin.com/company/veloratech',
      'https://instagram.com/veloratech',
    ],
  };
}

function buildWebPageLD(title, description, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  };
}

function buildArticleLD({ title, description, url, image, datePublished, dateModified, author }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image: toAbsoluteUrl(image),
    datePublished: datePublished || new Date().toISOString(),
    dateModified:  dateModified  || datePublished || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png` },
    },
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  };
}

/**
 * <SEO /> — drop into any page to set title, meta, OG, and JSON-LD.
 *
 * Props:
 *   title          string   — page title (appended with " | Velora Tech")
 *   description    string   — meta description
 *   url            string   — canonical URL (defaults to SITE_URL)
 *   image          string   — OG image (Vite path or absolute URL)
 *   type           string   — 'website' (default) | 'article'
 *   noindex        bool     — set true on thank-you / success pages
 *
 *   // Article-only props (used when type="article"):
 *   datePublished  string   — ISO 8601 date e.g. "2025-03-15"
 *   dateModified   string   — ISO 8601 date
 *   author         string   — author name (defaults to site name)
 */
const SEO = ({
  title,
  description = 'Expert software development and web solutions for growing businesses. Transforming ideas into powerful digital solutions.',
  image,
  url,
  type = 'website',
  noindex = false,
  datePublished,
  dateModified,
  author,
}) => {
  const fullTitle    = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = url || SITE_URL;
  const ogImage      = toAbsoluteUrl(image);

  // Build the right JSON-LD for each page type
  const jsonLd = [
    // Always include Organization on every page
    buildOrganizationLD(),
    // Page-level schema
    type === 'article'
      ? buildArticleLD({ title: fullTitle, description, url: canonicalUrl, image, datePublished, dateModified, author })
      : buildWebPageLD(fullTitle, description, canonicalUrl),
  ];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description"  content={description} />
      <link rel="canonical"     href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title"        content={fullTitle} />
      <meta property="og:description"  content={description} />
      <meta property="og:image"        content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url"          content={canonicalUrl} />
      <meta property="og:type"         content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:site_name"    content={SITE_NAME} />

      {/* Twitter Card */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />

      {/* JSON-LD structured data */}
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;