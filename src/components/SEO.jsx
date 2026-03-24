import { Helmet } from 'react-helmet-async';

/**
 * Drop <SEO /> into any page to set title, description, and OG tags.
 *
 * Usage:
 *   <SEO
 *     title="Services"
 *     description="Custom web development, software solutions and consulting."
 *   />
 */
const SEO = ({
  title,
  description = 'Expert software development and web solutions for growing businesses. Transforming ideas into powerful digital solutions.',
  image = '/og-image.png',
  url,
}) => {
  const siteTitle = 'Velora Tech';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const canonicalUrl = url || 'https://www.veloratech.com.lk';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
