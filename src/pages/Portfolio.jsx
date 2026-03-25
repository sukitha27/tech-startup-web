import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import anuradhapuraProject from '../assets/Portfolio1.svg';
import portfolioMockup2 from '../assets/portfolio_mockup2.png';
import portfolioHeroBg from '../assets/pp_bg.jpg';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
title: 'Anuradhapura Homestay Website',
category: 'Tourism Website',
description:
'A modern tourism website developed for a homestay in Anuradhapura. The site showcases accommodation, local experiences, photo gallery, and booking contact options for travelers visiting Sri Lanka.',
image: anuradhapuraProject,
technologies: ['React', 'Responsive Design', 'SEO Optimization'],
challenge:
'The client needed a professional website to attract international tourists and provide easy access to accommodation details.',
solution:
'Developed a fast, mobile friendly tourism website with clear information architecture, image galleries, and SEO optimization for travel searches.',
results: [
'Improved online visibility for the homestay',
'Better experience for international travelers',
'Mobile friendly design for travel bookings',
'Professional online presence'
],
liveUrl: 'https://www.anuradhapurahomestay.com/',
githubUrl: '#'
    },
    {
      id: 2,
      title: 'Business Management System',
      category: 'Software Development',
      description:
        'A comprehensive web application for managing business operations, including project tracking, client management, and automated reporting.',
      image: portfolioMockup2,
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker', 'Redis'],
      challenge:
        'Manual processes were slowing down operations and causing data inconsistencies across different departments.',
      solution:
        'Developed a centralized web application with role-based access, automated workflows, and real-time reporting.',
      results: [
        '60% reduction in processing time',
        '90% improvement in data accuracy',
        '50% decrease in manual errors',
        'Real-time collaboration across teams',
      ],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'RetailCorp',
      project: 'E-commerce Platform',
      quote: 'The new platform exceeded our expectations. Sales increased significantly, and our customers love the smooth shopping experience.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'BusinessFlow Inc',
      project: 'Management System',
      quote: 'This system transformed how we operate. Everything is now streamlined and we have real-time visibility into our operations.',
      rating: 5,
    },
  ];

  const stats = [
    { number: '58+',  label: 'Projects Completed' },
    { number: '34+',  label: 'Happy Clients' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Portfolio"
        description="Explore Velora Tech's project portfolio — e-commerce platforms, business management systems, and custom web applications with measurable results."
      />

      {/* ── Hero with background image ── */}
      <section
        className="relative py-20 min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${portfolioHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Indigo-tinted overlay — distinct from services (black/40) */}
        <div className="absolute inset-0 bg-indigo-900/70" />

        {/* Breadcrumb */}
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
                  <Link to="/portfolio" className="text-blue-300 font-semibold uppercase tracking-wide">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Decorative accent */}
          <div className="flex justify-center mb-6">
            <span className="inline-block w-12 h-1 bg-blue-400 rounded-full mr-2" />
            <span className="inline-block w-4 h-1 bg-blue-300 rounded-full" />
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Projects That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Drive Results
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Explore successful websites and applications we've built for clients. Each project
            showcases innovative solutions and measurable business impact.
          </p>

          {/* Inline stats in the hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-gray-300 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom fade into white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Featured Projects ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed case studies showcasing the development process and business impact
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden p-4">
                    <img src={project.image} alt={project.title} className="w-full object-contain" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-6">{project.description}</p>

                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">{tech}</span>
                      ))}
                    </div>

                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm mb-4">{project.challenge}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm mb-6">{project.solution}</p>

                    <h4 className="font-semibold text-gray-900 mb-3">Results:</h4>
                    <ul className="space-y-2 mb-6">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <ArrowRight className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex space-x-4">
                      <Button asChild variant="outline" size="sm">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" /> View Live
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" /> View Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real feedback from satisfied clients who've seen measurable results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <svg key={j} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">"{t.quote}"</blockquote>
                <div>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.company}</div>
                  <div className="text-blue-600 text-sm">{t.project}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and create a solution that delivers measurable results.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Start Your Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;