import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import {
  Code, Users, Target, Award, CheckCircle, ArrowRight,
  Zap, Globe, Shield, Cpu, Database, Cloud, Palette, Smartphone, Server
} from 'lucide-react';

const TARGETS = { projects: 58, clients: 34, solutions: 17, designs: 41 };

const About = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [counterValues, setCounterValues] = useState({ projects: 0, clients: 0, solutions: 0, designs: 0 });
  const statsRef = useRef(null);
  const animatedRef = useRef(false); // only run once

  // ── Counter animates when the stats section scrolls into view ──────────────
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;

          const duration = 1500; // ms
          const steps = 60;
          const interval = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            // Ease out: fast at first, slows toward the end
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounterValues({
              projects:  Math.round(TARGETS.projects  * eased),
              clients:   Math.round(TARGETS.clients   * eased),
              solutions: Math.round(TARGETS.solutions * eased),
              designs:   Math.round(TARGETS.designs   * eased),
            });

            if (step >= steps) {
              clearInterval(timer);
              setCounterValues({ ...TARGETS }); // ensure exact final values
            }
          }, interval);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const companyStats = [
    { value: `${counterValues.projects}+`, label: 'Projects Completed', icon: Code },
    { value: `${counterValues.clients}+`,  label: 'Happy Clients',      icon: Users },
    { value: `${counterValues.solutions}+`,label: 'Web Solutions',      icon: Globe },
    { value: `${counterValues.designs}+`,  label: 'Creative Designs',   icon: Award },
  ];

  const values = [
    { icon: Target, title: 'Excellence in Execution',  description: 'We deliver superior quality solutions with attention to detail and commitment to exceeding client expectations.' },
    { icon: Users,  title: 'Client Partnership',       description: 'We view our clients as partners, working collaboratively to achieve their business objectives through technology.' },
    { icon: Zap,    title: 'Innovation & Agility',     description: 'We embrace cutting-edge technologies and agile methodologies to deliver solutions faster and more effectively.' },
    { icon: Shield, title: 'Reliability & Security',   description: 'We build secure, scalable solutions with robust architecture and comprehensive testing protocols.' },
  ];

  const services = [
    { icon: Cpu,        title: 'Custom Web Development',  technologies: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS'],         description: 'Modern web applications built with current frameworks' },
    { icon: Smartphone, title: 'Mobile App Development',  technologies: ['React Native', 'Flutter', 'iOS', 'Android'],           description: 'Cross-platform and native mobile applications' },
    { icon: Cloud,      title: 'Cloud & Hosting',         technologies: ['AWS', 'Firebase', 'DigitalOcean', 'Vercel'],           description: 'Scalable cloud infrastructure and deployment' },
    { icon: Palette,    title: 'UI/UX Design',            technologies: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],   description: 'User-centered design that enhances engagement' },
    { icon: Database,   title: 'E-commerce Solutions',    technologies: ['WooCommerce', 'Shopify', 'Custom', 'Stripe'],          description: 'Complete online store development and optimization' },
    { icon: Server,     title: 'API & Backend',           technologies: ['Node.js', 'Python', 'PHP', 'MySQL / PostgreSQL'],      description: 'Robust backend systems and third-party integrations' },
  ];

  const timeline = [
    {
      year: '2024–25',
      title: 'Growing Our Client Base',
      description: 'Expanded service offerings and delivered projects across multiple industries including tourism, retail, and professional services.',
      achievements: [
        'Crossed 50+ completed projects',
        'Added UI/UX and digital marketing services',
        'Started serving international clients',
      ],
    },
    {
      year: '2023',
      title: 'Establishing Our Reputation',
      description: 'Built a strong local presence with a focus on quality delivery and long-term client relationships.',
      achievements: [
        'Delivered first 20+ projects',
        'Achieved 100% client satisfaction rate',
        'Developed repeatable delivery processes',
      ],
    },
    {
      year: '2021–22',
      title: 'Company Founded',
      description: 'Velora Tech was founded with a vision to provide high-quality, affordable web and software solutions to Sri Lankan businesses and beyond.',
      achievements: [
        'Secured first clients',
        'Built core development stack',
        'Launched web development service line',
      ],
    },
  ];

  const toolsAndApproaches = [
    'React & Next.js Development',
    'WordPress & WooCommerce',
    'Mobile-First Responsive Design',
    'Agile Project Management',
    'Performance & SEO Optimisation',
    'Secure Coding Practices',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <SEO
        title="About Us"
        description="Learn about Velora Tech — a Sri Lankan web and software development company with 58+ projects delivered and a commitment to client success."
      />

      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-900/80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              About Velora Tech
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto">
              A Sri Lanka-based technology team crafting digital experiences that transform businesses and empower growth.
            </p>
          </div>

          {/* Stats grid — observed for counter animation */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {companyStats.map((stat, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 text-center border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-1">
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
              <Link to="/contact">Start a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap border-b border-slate-700 mb-12">
            {['mission', 'vision', 'approach'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-lg font-medium capitalize ${activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}
                onClick={() => setActiveTab(tab)}
              >
                Our {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {activeTab === 'mission' && (
                <>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Driving Digital Transformation</h2>
                  <p className="text-slate-300 mb-6 text-lg">Our mission is to empower businesses with technology solutions that solve real challenges, drive growth, and create competitive advantages in an increasingly digital world.</p>
                  <p className="text-slate-300 text-lg">We believe technology should be an enabler, not a barrier. Our team works to ensure every solution we deliver not only meets technical requirements but delivers tangible business value.</p>
                </>
              )}
              {activeTab === 'vision' && (
                <>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Shaping the Future of Technology</h2>
                  <p className="text-slate-300 mb-6 text-lg">Our vision is to be the most trusted technology partner for Sri Lankan businesses — and clients worldwide — seeking to innovate and lead through cutting-edge digital solutions.</p>
                  <p className="text-slate-300 text-lg">We aspire to create a world where technology seamlessly integrates with business strategy to create exceptional value and unforgettable user experiences.</p>
                </>
              )}
              {activeTab === 'approach' && (
                <>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">Collaborative & Agile Development</h2>
                  <p className="text-slate-300 mb-6 text-lg">We follow an agile, collaborative approach that puts our clients at the center of every decision. Our process is transparent, iterative, and focused on delivering measurable results.</p>
                  <p className="text-slate-300 text-lg">From discovery to deployment and beyond, we work as an extension of your team to ensure alignment with your business goals at every stage of the project.</p>
                </>
              )}
            </div>
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl p-8 border border-slate-700">
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, i) => (
                  <div key={i} className="bg-slate-800/50 rounded-2xl p-6 text-center">
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">Comprehensive technology services powered by modern tools and frameworks</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-500/10 rounded-xl mr-4 group-hover:bg-blue-500/20 transition-colors">
                    <service.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-slate-400 mb-4 text-sm">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, j) => (
                    <span key={j} className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full group-hover:bg-blue-500/20 transition-colors">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">From first project to trusted technology partner</p>
          </div>
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start relative">
                <div className="md:w-1/4 mb-6 md:mb-0">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold inline-block">{item.year}</div>
                </div>
                <div className="md:w-3/4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 relative">
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-slate-900" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.achievements.map((a, j) => (
                      <li key={j} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Approach */}
      <section className="py-20 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our approach is built on proven practices, modern tooling, and a genuine commitment to quality
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolsAndApproaches.map((item, i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 flex items-center hover:border-blue-500 transition-colors">
                <CheckCircle className="h-8 w-8 text-blue-400 mr-4 flex-shrink-0" />
                <span className="text-slate-200 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-8 text-center border border-slate-700">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Partner with Velora Tech and experience what dedicated, quality-focused development can do for your business.
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
              <Link to="/contact">Get Started Today <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;