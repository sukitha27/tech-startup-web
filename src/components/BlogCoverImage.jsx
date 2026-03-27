// src/components/BlogCoverImage.jsx
// Renders a blog cover image when available, or a styled gradient fallback.
// Used by Blog.jsx, BlogPost.jsx and Home.jsx.

import { categoryGradients } from '@/data/posts';

/**
 * Props
 * -----
 * image        – imported image URL (or null / undefined for fallback)
 * category     – post category string, used to pick the fallback gradient
 * alt          – img alt text (defaults to category name)
 * className    – extra Tailwind classes applied to the outer wrapper
 * aspectClass  – Tailwind aspect/height class, e.g. "h-48" or "aspect-video"
 *                Defaults to "h-48"
 * overlay      – whether to add a dark gradient overlay on top of the image
 *                (useful when text is placed over the image). Default false.
 */
const BlogCoverImage = ({
  image,
  category = '',
  alt,
  className = '',
  aspectClass = 'h-48',
  overlay = false,
}) => {
  const gradient = categoryGradients[category] ?? categoryGradients.default;

  if (image) {
    return (
      <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
        <img
          src={image}
          alt={alt ?? category}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        )}
      </div>
    );
  }

  // Fallback — category-coloured gradient with initial letter
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center ${aspectClass} ${className}`}
    >
      <span className="text-white/20 text-7xl font-black select-none leading-none">
        {category.charAt(0)}
      </span>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      )}
    </div>
  );
};

export default BlogCoverImage;