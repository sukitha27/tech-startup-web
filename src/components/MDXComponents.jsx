// src/components/MDXComponents.jsx
// Custom renderers for MDX content — maps HTML elements to styled versions.

import { Link } from 'react-router-dom';

const MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-gray-900 mt-10 mb-4 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="text-2xl font-bold text-gray-900 mt-10 mb-4 leading-snug scroll-mt-24 pb-2 border-b border-gray-100"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      id={id}
      className="text-xl font-semibold text-gray-800 mt-8 mb-3 leading-snug scroll-mt-24"
    >
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-2">{children}</h4>
  ),

  // Paragraph
  p: ({ children }) => (
    <p className="text-gray-600 leading-relaxed mb-5 text-[1.05rem]">{children}</p>
  ),

  // Links — internal links use React Router, external open in new tab
  a: ({ href, children }) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    if (isInternal) {
      return (
        <Link
          to={href}
          className="text-blue-600 font-medium hover:text-blue-800 underline underline-offset-2 decoration-blue-200 hover:decoration-blue-600 transition-colors"
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium hover:text-blue-800 underline underline-offset-2 decoration-blue-200 hover:decoration-blue-600 transition-colors"
      >
        {children}
      </a>
    );
  },

  // Lists
  ul: ({ children }) => (
    <ul className="my-5 space-y-2 pl-0">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-5 space-y-2 list-decimal list-inside text-gray-600">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="flex items-start gap-3 text-gray-600 text-[1.05rem] leading-relaxed">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
      <span>{children}</span>
    </li>
  ),

  // Blockquote
  blockquote: ({ children }) => (
    <blockquote className="my-8 pl-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl py-4 pr-4">
      <div className="text-gray-700 italic text-lg leading-relaxed">{children}</div>
    </blockquote>
  ),

  // Horizontal rule
  hr: () => (
    <div className="my-12 flex items-center gap-4">
      <div className="flex-1 h-px bg-gray-200" />
      <div className="flex gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue-300" />
        <span className="w-1.5 h-1.5 rounded-full bg-blue-200" />
      </div>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  ),

  // Inline code
  code: ({ children, className }) => {
    // If it has a language className it's a fenced code block — handled by pre
    if (className) return <code className={className}>{children}</code>;
    return (
      <code className="bg-gray-100 text-blue-700 px-1.5 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    );
  },

  // Fenced code block
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm leading-relaxed shadow-lg">
      <code className="text-slate-200 font-mono">{children}</code>
    </pre>
  ),

  // Strong / bold
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),

  // Em / italic
  em: ({ children }) => (
    <em className="italic text-gray-700">{children}</em>
  ),

  // Table
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm text-left">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-gray-50 border-b border-gray-200">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="px-4 py-3 font-semibold text-gray-800">{children}</th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-gray-600 border-b border-gray-100">{children}</td>
  ),
};

export default MDXComponents;