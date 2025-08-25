import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Users, 
  Target, 
  Award, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Zap,
  Globe,
  Shield,
  BarChart3,
  Rocket,
  Calendar,
  Cpu,
  Database,
  Cloud,
  Palette,
  Smartphone,
  Server
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [counterValues, setCounterValues] = useState({
    projects: 0,
    clients: 0,
    solutions: 0,
    designs: 0
  });

  useEffect(() => {
    // Animate counters
    const interval = setInterval(() => {
      setCounterValues(prev => ({
        projects: Math.min(prev.projects + 2, 58),
        clients: Math.min(prev.clients + 1, 34),
        solutions: Math.min(prev.solutions + 1, 17),
        designs: Math.min(prev.designs + 2, 41)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const companyStats = [
    { value: `${counterValues.projects}+`, label: 'Projects Completed', icon: Code },
    { value: `${counterValues.clients}+`, label: 'Happy Clients', icon: Users },
    { value: `${counterValues.solutions}+`, label: 'Web Solutions', icon: Globe },
    { value: `${counterValues.designs}+`, label: 'Creative Designs', icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence in Execution',
      description: 'We deliver superior quality solutions with attention to detail and commitment to exceeding client expectations.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We view our clients as partners, working collaboratively to achieve their business objectives through technology.'
    },
    {
      icon: Zap,
      title: 'Innovation & Agility',
      description: 'We embrace cutting-edge technologies and agile methodologies to deliver solutions faster and more effectively.'
    },
    {
      icon: Shield,
      title: 'Reliability & Security',
      description: 'We build secure, scalable solutions with robust architecture and comprehensive testing protocols.'
    }
  ];

  const services = [
    {
      icon: Cpu,
      title: 'Custom Web Development',
      technologies: ['React', 'Next.js', 'Vue.js', 'Angular'],
      description: 'Enterprise-grade web applications with modern frameworks'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Cross-platform and native mobile applications'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker'],
      description: 'Scalable cloud infrastructure and deployment'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      description: 'User-centered design that enhances engagement'
    },
    {
      icon: Database,
      title: 'E-commerce Solutions',
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom'],
      description: 'Complete online store development and optimization'
    },
    {
      icon: Server,
      title: 'DevOps & Automation',
      technologies: ['CI/CD', 'Kubernetes', 'Testing', 'Monitoring'],
      description: 'Streamlined development processes and automation'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded our team internationally and served clients across 12 countries',
      achievements: [
        'Opened European office',
        'Added 15 new team members',
        'Served clients in 12+ countries'
      ]
    },
    {
      year: '2022',
      title: 'Specialization Growth',
      description: 'Developed specialized practices in AI/ML and cloud-native applications',
      achievements: [
        'Launched AI/ML division',
        'Achieved AWS Advanced Tier partnership',
        'Grew revenue by 150%'
      ]
    },
    {
      year: '2021',
      title: 'Company Foundation',
      description: 'Founded Velora Tech with a vision to deliver exceptional digital solutions',
      achievements: [
        'Secured first 10 clients',
        'Built core development team',
        'Established development processes'
      ]
    }
  ];

  const certifications = [
    'AWS Advanced Consulting Partner',
    'Google Cloud Premier Partner',
    'Microsoft Gold Partner',
    'React Certified Development',
    'ISO 27001 Certified',
    'Agile Scrum Certified Team'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900/80"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Velora Tech
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
              We're a forward-thinking technology company crafting digital experiences 
              that transform businesses and empower growth.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {companyStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 text-center border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl">
              <Link to="/contact">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap border-b border-slate-700 mb-12">
            <button
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'mission' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'vision' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button
              className={`px-6 py-3 text-lg font-medium ${activeTab === 'approach' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}
              onClick={() => setActiveTab('approach')}
            >
              Our Approach
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {activeTab === 'mission' && (
                <>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Driving Digital Transformation</h2>
                  <p className="text-slate-300 mb-6 text-lg">
                    Our mission is to empower businesses with innovative technology solutions that solve complex 
                    challenges, drive growth, and create sustainable competitive advantages in an increasingly digital world.
                  </p>
                  <p className="text-slate-300 text-lg">
                    We believe that technology should be an enabler, not a barrier. Our team works tirelessly to ensure 
                    that every solution we deliver not only meets technical requirements but also delivers tangible business value.
                  </p>
                </>
              )}
              {activeTab === 'vision' && (
                <>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Shaping the Future of Technology</h2>
                  <p className="text-slate-300 mb-6 text-lg">
                    Our vision is to be the most trusted technology partner for businesses seeking to innovate, 
                    transform, and lead in their respective industries through cutting-edge digital solutions.
                  </p>
                  <p className="text-slate-300 text-lg">
                    We aspire to create a world where technology seamlessly integrates with business strategy to 
                    create exceptional value and unforgettable user experiences.
                  </p>
                </>
              )}
              {activeTab === 'approach' && (
                <>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Collaborative & Agile Development</h2>
                  <p className="text-slate-300 mb-6 text-lg">
                    We follow an agile, collaborative approach that puts our clients at the center of every decision. 
                    Our process is transparent, iterative, and focused on delivering measurable results.
                  </p>
                  <p className="text-slate-300 text-lg">
                    From discovery to deployment and beyond, we work as an extension of your team to ensure 
                    alignment with your business goals and objectives at every stage of the project.
                  </p>
                </>
              )}
            </div>
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-2xl p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <value.icon className="h-10 w-10 text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-slate-400 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Comprehensive technology services powered by cutting-edge tools and frameworks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <service.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full group-hover:bg-blue-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From startup to trusted technology partner for businesses worldwide
            </p>
          </div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start relative">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold inline-block">
                    {item.year}
                  </div>
                </div>
                <div className="md:w-3/4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 relative">
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900"></div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our commitment to excellence is validated by industry recognition and partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 flex items-center hover:border-blue-500 transition-colors"
              >
                <Award className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />
                <span className="text-slate-200 font-medium">{cert}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 text-center border border-slate-700">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Partner with Velora Tech and experience the difference that expertise, 
              dedication, and cutting-edge technology can make for your business.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;