import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import {
  Globe, ShoppingCart, Smartphone,
  Database, Server, Settings,
  BarChart3, Shield, Zap, CheckCircle
} from 'lucide-react';
import servicesHeroBg from '../assets/shero-bg.jpg';

// ── Tech logos from existing assets ──
import reactLogo    from '@/assets/logos/react.svg';
import vueLogo      from '@/assets/logos/vue.svg';
import htmlLogo     from '@/assets/logos/html-5.svg';
import tailwindLogo from '@/assets/logos/tailwindcss.svg';
import typesLogo    from '@/assets/logos/typescript-icon.svg';
import nodeLogo     from '@/assets/logos/nodejs.svg';
import phpLogo      from '@/assets/logos/php.svg';
import wpressLogo   from '@/assets/logos/wordpress.svg';
import firebaseLogo from '@/assets/logos/firebase.svg';
import woocomLogo   from '@/assets/logos/woocommerce-icon.svg';
import awsLogo    from '@/assets/logos/aws.svg';
import doLogo     from '@/assets/logos/digitalocean.svg';
import vercelLogo from '@/assets/logos/vercel.svg';
import dockerLogo from '@/assets/logos/docker.svg';
import githubLogo from '@/assets/logos/github.svg';

const Services = () => {
  const webServices = [
    {
      icon: Globe,
      title: 'Custom Website Development',
      features: ['Responsive design for all devices', 'Modern frameworks (React, Vue, etc.)', 'SEO optimization', 'Performance optimization'],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      features: ['Online store development', 'Payment gateway integration', 'Inventory management', 'Order processing systems'],
    },
    {
      icon: Smartphone,
      title: 'Web Applications',
      features: ['Progressive Web Apps (PWAs)', 'Single Page Applications (SPAs)', 'Real-time applications', 'API-driven interfaces'],
    },
  ];

  const softwareServices = [
    {
      icon: Database,
      title: 'Custom Business Applications',
      features: ['Workflow automation tools', 'Data management systems', 'Customer relationship management', 'Inventory and project management'],
    },
    {
      icon: Server,
      title: 'API Development',
      features: ['RESTful API design', 'GraphQL implementations', 'Third-party integrations', 'Microservices architecture'],
    },
    {
      icon: Settings,
      title: 'Database Solutions',
      features: ['Database design and optimization', 'Data migration services', 'Performance tuning', 'Backup and recovery systems'],
    },
  ];

  const consultingServices = [
    {
      icon: BarChart3,
      title: 'Architecture Planning',
      features: ['System design and planning', 'Technology stack selection', 'Scalability assessment', 'Security audit and recommendations'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      features: ['Code review and optimization', 'Database performance tuning', 'Server configuration', 'Monitoring and analytics setup'],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      features: ['Security best practices implementation', 'Data protection compliance', 'Vulnerability assessments', 'Secure coding practices'],
    },
  ];

  // ── Technology stack with logos ──
  const technologies = [
    {
      category: 'Frontend',
      color: 'blue',
      items: [
        { name: 'React',       logo: reactLogo },
        { name: 'Vue.js',      logo: vueLogo },
        { name: 'HTML5',       logo: htmlLogo },
        { name: 'Tailwind',    logo: tailwindLogo },
        { name: 'TypeScript',  logo: typesLogo },
      ],
    },
    {
      category: 'Backend',
      color: 'green',
      items: [
        { name: 'Node.js',     logo: nodeLogo },
        { name: 'PHP',         logo: phpLogo },
        { name: 'WordPress',   logo: wpressLogo },
        { name: 'Firebase',    logo: firebaseLogo },
      ],
    },
    {
      category: 'E-commerce',
      color: 'purple',
      items: [
        { name: 'WooCommerce', logo: woocomLogo },
        { name: 'WordPress',   logo: wpressLogo },
        { name: 'Firebase',    logo: firebaseLogo },
      ],
    },
    {
  category: 'Cloud & DevOps',
  color: 'orange',
  items: [
    { name: 'AWS',          logo: awsLogo },
    { name: 'DigitalOcean', logo: doLogo },
    { name: 'Vercel',       logo: vercelLogo },
    { name: 'Docker',       logo: dockerLogo },
    { name: 'GitHub Actions', logo: githubLogo },
  ],
},
  ];

  const colorMap = {
    blue:   { badge: 'bg-blue-50 border-blue-100',   icon: 'bg-blue-100 text-blue-700',   pill: 'bg-blue-50 text-blue-700 border border-blue-100' },
    green:  { badge: 'bg-green-50 border-green-100',  icon: 'bg-green-100 text-green-700',  pill: 'bg-green-50 text-green-700 border border-green-100' },
    purple: { badge: 'bg-purple-50 border-purple-100',icon: 'bg-purple-100 text-purple-700',pill: 'bg-purple-50 text-purple-700 border border-purple-100' },
    orange: { badge: 'bg-orange-50 border-orange-100',icon: 'bg-orange-100 text-orange-700',pill: 'bg-orange-50 text-orange-700 border border-orange-100' },
  };

  const ServiceSection = ({ title, description, services, bgColor = 'bg-white' }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{service.title}</h3>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <SEO
        title="Services"
        description="Custom web development, e-commerce solutions, software development, API integration, and technical consulting — tailored to your business needs."
        url="https://www.veloratech.com.lk/services"
      />

      {/* ── Hero ── */}
      <section
        className="relative py-20 min-h-[60vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${servicesHeroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-white text-sm">
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-blue-300 transition-colors">HOME</Link></li>
                <li className="before:content-['/'] before:mx-2 before:text-gray-300">
                  <Link to="/services" className="text-blue-300 font-semibold">OUR SERVICES</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Software & Web Solutions{' '}
            <span className="text-blue-400">That Scale</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Comprehensive development services tailored to your business needs. From custom websites to
            complex software applications, we deliver solutions that drive growth.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>

      <ServiceSection
        title="Web Development"
        description="Modern, responsive websites and web applications built with cutting-edge technologies"
        services={webServices}
      />
      <ServiceSection
        title="Software Development"
        description="Custom business applications and backend solutions that streamline your operations"
        services={softwareServices}
        bgColor="bg-gray-50"
      />
      <ServiceSection
        title="Technical Consulting"
        description="Expert guidance to help you make the right technology decisions for your business"
        services={consultingServices}
      />

      {/* ── Technology Stack with Logos ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with modern, proven technologies to deliver robust and scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, i) => {
              const c = colorMap[tech.color];
              return (
                <div
                  key={i}
                  className={`rounded-2xl border p-6 ${c.badge} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Category header */}
                  <h3 className="text-base font-bold text-gray-900 mb-5 text-center tracking-wide uppercase text-xs">
                    {tech.category}
                  </h3>

                  {/* Tech items with logo + name */}
                  <div className="space-y-3">
                    {tech.items.map((item, j) => (
                      <div
                        key={j}
                        className="flex items-center gap-3 bg-white rounded-xl px-3 py-2.5 shadow-sm border border-white hover:shadow-md transition-all duration-200"
                      >
                        {/* Logo or fallback icon */}
                        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                          {item.logo ? (
                            <img
                              src={item.logo}
                              alt={item.name}
                              className="w-7 h-7 object-contain"
                            />
                          ) : (
                            <div className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-black ${c.icon}`}>
                              {item.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <span className="text-sm font-semibold text-gray-700">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your requirements and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-slate-800 border-slate-800 text-white hover:bg-white hover:text-blue-600">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;