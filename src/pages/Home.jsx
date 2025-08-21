import { useEffect, useState } from 'react';
import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, Database, Lightbulb, MessageCircle, X } from 'lucide-react';
import heroBgImage from '../assets/hero-bg.jpg';
import testimonialBg from '../assets/testimonial-bg.jpg';
import webDevImage from '../assets/services_web_dev.png';
import softwareImage from '../assets/services_software.png';
import consultingImage from '../assets/services_consulting.png';
import reactLogo   from "@/assets/logos/react.svg";
import nodeLogo    from "@/assets/logos/nodejs.svg";
import tailwindLogo    from "@/assets/logos/tailwindcss.svg";
import typesLogo    from "@/assets/logos/typescript-icon.svg";
import phpLogo    from "@/assets/logos/php.svg";
import wpressLogo    from "@/assets/logos/wordpress.svg";
import firebaseLogo    from "@/assets/logos/firebase.svg";
import woocomLogo    from "@/assets/logos/woocommerce-icon.svg";
import htmlLogo    from "@/assets/logos/html-5.svg";
import logo354    from "@/assets/logos/logoipsum-354.svg";
import logo369    from "@/assets/logos/logoipsum-369.svg";
import logo393    from "@/assets/logos/logoipsum-393.svg";
import logo398    from "@/assets/logos/logoipsum-398.svg";


const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);
  
  const services = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies.',
      image: webDevImage,
      metrics: ['40% faster load times', '100% mobile responsive', '3x conversion improvement'],
    },
    {
      icon: Database,
      title: 'Software Solutions',
      description: 'Custom business applications, API development, and database optimization.',
      image: softwareImage,
      metrics: ['60% process automation', '99.9% uptime guarantee', 'Real-time analytics'],
    },
    {
      icon: Lightbulb,
      title: 'Technical Consulting',
      description: 'Architecture planning, technology selection, and performance optimization.',
      image: consultingImage,
      metrics: ['30% cost reduction', '2x performance boost', 'Future-proof architecture'],
    },
  ];

  const features = [
    'Proven Track Record: 15+ successful client websites delivered with 100% satisfaction',
    'Full-Stack Expertise: 2+ years experience in frontend, backend, and database development',
    'Modern Technologies: Latest frameworks and best practices for optimal performance',
    'Client-Focused: Collaborative approach with 24/7 communication channel access',
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Redesign',
      result: 'Revenue increased by 127%',
      description: 'Complete redesign of product pages and checkout process',
      metrics: ['+127% revenue', '+83% conversions', '-40% bounce rate'],
    },
    {
      title: 'SaaS Dashboard Implementation',
      result: 'User engagement up by 64%',
      description: 'Custom dashboard with real-time analytics and reporting',
      metrics: ['+64% engagement', '+91% user retention', '2.3x faster workflows'],
    },
  ];

  const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '40%', label: 'Avg. Performance Improvement' },
    { value: '2+', label: 'Years Experience' },
  ];

  const testimonials = [
  {
    quote:
      "Untitled has saved us thousands of hours of work. We're able to spin up projects and features faster.",
    name: "Ammar Foley",
    role: "UX Designer",
    company: "GlobalBank",
    avatar: "AF",
    logo: logo354,
  },
  {
    quote:
      "Our SaaS dashboard is 3× faster and our churn dropped 28 % after the redesign. Absolute game-changers.",
    name: "Marcus Lee",
    role: "Founder",
    company: "SaaSify",
    avatar: "ML",
    logo: logo369 ,
  },
  {
    quote:
      "From rough sketches to a pixel-perfect product in four weeks. Communication was seamless and the results stellar.",
    name: "Aisha Patel",
    role: "Product Lead",
    company: "InnovateX",
    avatar: "AP",
    logo: logo393 ,
  },
];

const companyLogos = [
  { src: logo354, alt: "3Portals" },
  { src: logo369, alt: "CD Warpspeed" },
  { src: logo393, alt: "GlobalBank" },
  { src: logo398, alt: "Ikigai Labs" },
];

  useEffect(() => {
    // Add scroll animation effect
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          if (entry.target.classList.contains('counter')) {
            startCounterAnimation(entry.target);
          }
        }
      });
    }, observerOptions);

    // Observe all sections with the fade-in class
    document.querySelectorAll('.fade-in, .counter').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const startCounterAnimation = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const steps = 60;
    const stepValue = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + '+';
      }
    }, duration / steps);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Live Chat Widget - Fixed for mobile responsiveness */}
      <div className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ${
        isChatOpen 
          ? 'w-[calc(100vw-2rem)] max-w-sm h-96 sm:w-80' 
          : 'w-12 h-12 sm:w-14 sm:h-14'
      }`}>
        {isChatOpen ? (
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 h-full flex flex-col">
            <div className="bg-blue-600 text-white p-3 sm:p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-semibold text-sm sm:text-base">Chat with us</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-white">
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
            <div className="p-3 sm:p-4 flex-grow overflow-y-auto">
              <div className="bg-gray-100 rounded-lg p-2 sm:p-3 mb-4">
                <p className="text-xs sm:text-sm">Hi there! How can we help you today?</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs text-gray-500 text-center">Send us a message and we'll respond shortly</p>
              </div>
            </div>
            <div className="p-3 sm:p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-grow border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </button>
        )}
      </div>

      {/* Hero Section - Improved mobile responsiveness */}
      <section
        className="relative bg-cover bg-center py-16 sm:py-20 lg:py-32 overflow-hidden"
        style={{ backgroundImage: `url(${heroBgImage})` }}
      >
        {/* optional overlay for text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* left text block */}
            <div className="fade-in text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Transforming Ideas into{' '}
                <span className="text-blue-400 relative">
                  Powerful Digital Solutions
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Expert software development and web solutions for growing businesses.
                15+ projects delivered with 100% client satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <Link to="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>

              {/* Stats - Improved mobile layout */}
              <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 counter" data-target={stat.value.replace('+', '')}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Enhanced mobile responsiveness */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              What We Build
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
              Comprehensive development services tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="fade-in bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-75 -z-10 group-hover:scale-100 transition-transform duration-300"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-6 text-sm sm:text-base">
                  {service.description}
                </p>
                
                {/* Service metrics */}
                <ul className="space-y-2 mb-6">
                  {service.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-xs sm:text-sm text-gray-500">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center text-blue-600 font-medium group-hover:underline text-sm sm:text-base">
                    Learn more
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section - Mobile optimized */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Real projects with measurable outcomes</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="fade-in bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium">
                    Case Study
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{study.description}</p>
                
                <div className="p-3 sm:p-4 bg-blue-50 rounded-lg mb-4">
                  <div className="text-xl sm:text-2xl font-bold text-blue-700">{study.result}</div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-2 bg-gray-50 rounded">
                      <div className="text-xs sm:text-sm font-semibold text-gray-900">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Middle CTA */}
          <div className="text-center mt-12 sm:mt-16 fade-in">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Ready to achieve similar results?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm sm:text-base">Let's discuss how we can help you reach your business goals with a custom solution.</p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              <Link to="/contact">
                Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me - Mobile responsive improvements */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-blue-50 to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-indigo-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose <span className="text-blue-600">Velora Tech</span>?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                With a proven track record and expertise in modern technologies, 
                I deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm sm:text-base">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technology Stack - Mobile optimized */}
            <div className="fade-in">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                  Technologies I Use
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { src: reactLogo, alt: "React", name: "React" },
                    { src: nodeLogo, alt: "Node.js", name: "Node.js" },
                    { src: tailwindLogo, alt: "Tailwind", name: "Tailwind" },
                    { src: typesLogo, alt: "TypeScript", name: "TypeScript" },
                    { src: phpLogo, alt: "PHP", name: "PHP" },
                    { src: wpressLogo, alt: "WordPress", name: "WordPress" },
                    { src: firebaseLogo, alt: "Firebase", name: "Firebase" },
                    { src: woocomLogo, alt: "WooCommerce", name: "WooCommerce" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center p-2 sm:p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <img
                        src={tech.src}
                        alt={tech.alt}
                        className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:scale-110 transition-transform duration-300"
                      />
                      <span className="text-xs text-gray-600 text-center font-medium">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Mobile responsive */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="fade-in mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-blue-100">
              Real feedback from satisfied customers
            </p>
          </div>

          {/* Testimonial Carousel */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="mb-6">
                <img
                  src={testimonials[index].logo}
                  alt={testimonials[index].company}
                  className="h-8 sm:h-10 mx-auto mb-4 opacity-80"
                />
              </div>
              
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-white mb-6 sm:mb-8 leading-relaxed">
                "{testimonials[index].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm sm:text-base">
                  {testimonials[index].avatar}
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm sm:text-base">
                    {testimonials[index].name}
                  </div>
                  <div className="text-blue-200 text-xs sm:text-sm">
                    {testimonials[index].role}, {testimonials[index].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${
                    i === index ? 'bg-blue-400' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section - Mobile responsive */}
      <section className="py-12 sm:py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Trusted By Our Customers
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Leading brands choose Velora Tech to power their digital success.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
            {[
              { src: logo354, alt: "CEYLON" },
              { src: logo369, alt: "techrar" },
              { src: logo393, alt: "Nations" },
              { src: logo398, alt: "MEMORIES" },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={src}
                  alt={alt}
                  className="h-8 sm:h-10 lg:h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                />
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile responsive */}
      <section className="py-16 sm:py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss your project and create a solution that drives real results for your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="transition-all duration-300 hover:scale-105 w-full sm:w-auto">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
          <p className="text-blue-100 text-xs sm:text-sm mt-4 sm:mt-6">
            No obligation quote. Response within 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;