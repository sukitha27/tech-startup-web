import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Database, 
  Lightbulb, 
  Globe, 
  ShoppingCart, 
  Smartphone,
  Server,
  Settings,
  BarChart3,
  Shield,
  Zap,
  CheckCircle
} from 'lucide-react';

// Import a background image - make sure to add your image to the assets folder
import servicesHeroBg from '../assets/shero-bg.jpg';

const Services = () => {
  const webServices = [
    {
      icon: Globe,
      title: 'Custom Website Development',
      features: [
        'Responsive design for all devices',
        'Modern frameworks (React, Vue, etc.)',
        'SEO optimization',
        'Performance optimization'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      features: [
        'Online store development',
        'Payment gateway integration',
        'Inventory management',
        'Order processing systems'
      ]
    },
    {
      icon: Smartphone,
      title: 'Web Applications',
      features: [
        'Progressive Web Apps (PWAs)',
        'Single Page Applications (SPAs)',
        'Real-time applications',
        'API-driven interfaces'
      ]
    }
  ];

  const softwareServices = [
    {
      icon: Database,
      title: 'Custom Business Applications',
      features: [
        'Workflow automation tools',
        'Data management systems',
        'Customer relationship management',
        'Inventory and project management'
      ]
    },
    {
      icon: Server,
      title: 'API Development',
      features: [
        'RESTful API design',
        'GraphQL implementations',
        'Third-party integrations',
        'Microservices architecture'
      ]
    },
    {
      icon: Settings,
      title: 'Database Solutions',
      features: [
        'Database design and optimization',
        'Data migration services',
        'Performance tuning',
        'Backup and recovery systems'
      ]
    }
  ];

  const consultingServices = [
    {
      icon: BarChart3,
      title: 'Architecture Planning',
      features: [
        'System design and planning',
        'Technology stack selection',
        'Scalability assessment',
        'Security audit and recommendations'
      ]
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      features: [
        'Code review and optimization',
        'Database performance tuning',
        'Server configuration',
        'Monitoring and analytics setup'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      features: [
        'Security best practices implementation',
        'Data protection compliance',
        'Vulnerability assessments',
        'Secure coding practices'
      ]
    }
  ];

  const technologies = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PHP', 'Express.js', 'Django', 'Laravel'] },
    { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Google Cloud', 'Digital Ocean', 'Docker', 'CI/CD'] },
  ];

  const ServiceSection = ({ title, description, services, bgColor = 'bg-white' }) => (
    <section className={`py-16 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 mx-auto">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
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
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-20 min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${servicesHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navigation Breadcrumb */}
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
            Comprehensive development services tailored to your business needs. 
            From custom websites to complex software applications, I deliver solutions that drive growth.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/contact">Discuss Your Project</Link>
          </Button>
        </div>
      </section>

      {/* Web Development Services */}
      <ServiceSection
        title="Web Development"
        description="Modern, responsive websites and web applications built with cutting-edge technologies"
        services={webServices}
      />

      {/* Software Development Services */}
      <ServiceSection
        title="Software Development"
        description="Custom business applications and backend solutions that streamline your operations"
        services={softwareServices}
        bgColor="bg-gray-50"
      />

      {/* Technical Consulting Services */}
      <ServiceSection
        title="Technical Consulting"
        description="Expert guidance to help you make the right technology decisions for your business"
        services={consultingServices}
      />

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I work with modern, proven technologies to deliver robust and scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                  {tech.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {tech.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
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