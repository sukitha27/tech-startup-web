import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, Database, Lightbulb, MessageCircle, X } from 'lucide-react';
import heroBgImage from '../assets/hero-bg.jpg';
import testimonialBg from '../assets/testimonial-bg.jpg';
import webDevImage from '../assets/services_web_dev.png';
import softwareImage from '../assets/services_software.png';
import consultingImage from '../assets/services_consulting.png';
import reactLogo from "@/assets/logos/react.svg";
import nodeLogo from "@/assets/logos/nodejs.svg";
import tailwindLogo from "@/assets/logos/tailwindcss.svg";
import typesLogo from "@/assets/logos/typescript-icon.svg";
import phpLogo from "@/assets/logos/php.svg";
import wpressLogo from "@/assets/logos/wordpress.svg";
import firebaseLogo from "@/assets/logos/firebase.svg";
import woocomLogo from "@/assets/logos/woocommerce-icon.svg";
import htmlLogo from "@/assets/logos/html-5.svg";
import logo354 from "@/assets/logos/logoipsum-354.svg";
import logo369 from "@/assets/logos/logoipsum-369.svg";
import logo393 from "@/assets/logos/logoipsum-393.svg";
import logo398 from "@/assets/logos/logoipsum-398.svg";
import { useEffect, useState, useRef} from 'react';

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const typewriterTexts = useRef([
    "Web Applications",
    "E-commerce Solutions",
    "Business Software",
    "Mobile Apps",
    "Tourism Websites"
  ]);

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const current = textIndex % typewriterTexts.current.length;
      const fullText = typewriterTexts.current[current];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(typingSpeed / 1.5);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex(textIndex + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, typingSpeed]);

  // Testimonial carousel effect
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const stats = [
    { value: '15+', label: 'Projects Completed' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '40%', label: 'Avg. Performance Improvement' },
    { value: '2+', label: 'Years Experience' },
  ];

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

const features = [
  'Proven Track Record: 15+ successful client websites delivered with 100% satisfaction',
  'Full-Stack Expertise: 2+ years experience in frontend, backend, and database development',
  'Modern Technologies: Latest frameworks and best practices for optimal performance',
  'Client-Focused: Collaborative approach with 24/7 communication channel access',
];

// Update the testimonials to include logos or remove the logo reference
const testimonials = [
  {
    quote: "Velora Tech has saved us thousands of hours of work. We're able to spin up projects and features faster.",
    name: "Ammar Foley",
    role: "UX Designer",
    company: "GlobalBank",
    avatar: "AF",
    logo: logo354, // Add this
  },
  {
    quote: "Our SaaS dashboard is 3× faster and our churn dropped 28% after the redesign. Absolute game-changers.",
    name: "Marcus Lee",
    role: "Founder",
    company: "SaaSify",
    avatar: "ML",
    logo: logo369, // Add this
  },
  {
    quote: "From rough sketches to a pixel-perfect product in four weeks. Communication was seamless and the results stellar.",
    name: "Aisha Patel",
    role: "Product Lead",
    company: "InnovateX",
    avatar: "AP",
    logo: logo393, // Add this
  },
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
      {/* Live Chat Widget */}
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${isChatOpen ? 'w-80 h-96' : 'w-14 h-14'}`}>
        {isChatOpen ? (
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 h-full flex flex-col">
            <div className="bg-blue-600 text-white p-4 rounded-t-xl flex justify-between items-center">
              <h3 className="font-semibold">Chat with us</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 flex-grow overflow-y-auto">
              <div className="bg-gray-100 rounded-lg p-3 mb-4">
                <p className="text-sm">Hi there! How can we help you today?</p>
              </div>
              <div className="space-y-4">
                <p className="text-xs text-gray-500 text-center">Send us a message and we'll respond shortly</p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Type your message..." 
                  className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white rounded-lg px-4 py-2">
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </button>
        )}
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white text-sm font-medium">Currently accepting new projects</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                Transforming Ideas Into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Powerful Digital Solutions
                </span>
              </h1>
              
              {/* Typewriter text */}
              <div className="text-xl lg:text-2xl text-gray-200 mb-8">
                We build exceptional <span className="typewriter-text font-semibold text-blue-300 border-r-2 border-blue-400">{currentText}</span>
              </div>
              
              <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Expert software development and web solutions for growing businesses. 
                15+ projects delivered with 100% client satisfaction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30">
                  <Link to="/contact" className="flex items-center">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm">
                  <Link to="/portfolio" className="flex items-center">
                    View Portfolio
                  </Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2 counter" data-target={stat.value.replace('+', '')}>
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Testimonial card on the right */}
            <div className="hidden lg:block fade-in">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonials[index].avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonials[index].name}</h4>
                    <p className="text-gray-300 text-sm">{testimonials[index].role}, {testimonials[index].company}</p>
                  </div>
                </div>
                <p className="text-gray-200 italic">"{testimonials[index].quote}"</p>
                <div className="flex mt-4">
                  {testimonials.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full mr-1 transition-all duration-300 ${i === index ? 'w-6 bg-blue-400' : 'w-3 bg-white/30'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              What We Build
              <span className="absolute -bottom-2 left-1/4 w-1/2 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mt-4 lg:mt-6">
              Comprehensive development services tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="fade-in bg-white rounded-xl shadow-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 lg:mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-100 rounded-full transform scale-75 -z-10 group-hover:scale-100 transition-transform duration-300"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-3 lg:mb-4 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 lg:mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4 lg:mb-6 text-sm lg:text-base">
                  {service.description}
                </p>
                
                {/* Service metrics */}
                <ul className="space-y-2 mb-4 lg:mb-6">
                  {service.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center text-xs lg:text-sm text-gray-500">
                      <CheckCircle className="h-3 w-3 lg:h-4 lg:w-4 text-green-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 lg:mt-6 text-center">
                  <div className="inline-flex items-center text-blue-600 font-medium group-hover:underline text-sm lg:text-base">
                    Learn more
                    <ArrowRight className="ml-2 h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16 fade-in">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">Real projects with measurable outcomes</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index} 
                className="fade-in bg-white rounded-xl p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="mb-3 lg:mb-4">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs lg:text-sm font-medium">
                    Case Study
                  </span>
                </div>
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">{study.title}</h3>
                <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">{study.description}</p>
                
                <div className="p-3 lg:p-4 bg-blue-50 rounded-lg mb-3 lg:mb-4">
                  <div className="text-xl lg:text-2xl font-bold text-blue-700">{study.result}</div>
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center p-1 lg:p-2 bg-gray-50 rounded text-xs lg:text-sm">
                      <div className="font-semibold text-gray-900">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Middle CTA */}
          <div className="text-center mt-12 lg:mt-16 fade-in">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">Ready to achieve similar results?</h3>
            <p className="text-gray-600 mb-4 lg:mb-6 max-w-2xl mx-auto text-sm lg:text-base">Let's discuss how we can help you reach your business goals with a custom solution.</p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
              <Link to="/contact">
                Get Your Free Consultation <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 lg:py-20 bg-white relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-blue-50 to-transparent"></div>
          <div className="absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-indigo-50 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Why Choose <span className="text-blue-600">Velora Tech</span>?
              </h2>
              <p className="text-gray-600 mb-6 lg:mb-8 leading-relaxed text-base lg:text-lg">
                With a proven track record and expertise in modern technologies, 
                I deliver solutions that not only meet your requirements but exceed your expectations.
              </p>
              <div className="space-y-3 lg:space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="fade-in flex items-start space-x-3 p-3 lg:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 lg:h-6 lg:w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in bg-white rounded-xl shadow-lg p-6 lg:p-8 border border-blue-100 transform hover:-translate-y-1 transition-all duration-300">
              <div className="absolute -top-3 lg:-top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 lg:px-4 lg:py-1 rounded-full text-xs lg:text-sm font-semibold">
                Let's Connect
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-4 lg:mb-6 text-center mt-4 lg:mt-5">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-4 lg:mb-6 text-center text-sm lg:text-base">
                Let's discuss your project and create a solution that drives real results for your business.
              </p>
              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 py-4 lg:py-6 text-base lg:text-lg">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <p className="text-xs lg:text-sm text-gray-500 text-center mt-3 lg:mt-4">
                Schedule a free consultation - no obligations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">Technologies We Use</h2>
            <p className="text-gray-600 text-base lg:text-xl max-w-3xl mx-auto">Modern tools and frameworks for cutting-edge solutions</p>
          </div>

          <LogoLoop
            speed={60}
            direction="left"
            logos={[
              { src: reactLogo, alt: "React" },
              { src: nodeLogo, alt: "Node.js" },
              { src: tailwindLogo, alt: "Tailwind CSS" },
              { src: typesLogo, alt: "TypeScript" },
              { src: phpLogo, alt: "PHP" },
              { src: wpressLogo, alt: "WordPress" },
              { src: firebaseLogo, alt: "Firebase" },
              { src: woocomLogo, alt: "WooCommerce" },
              { src: htmlLogo, alt: "HTML5" },
            ]}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="relative bg-cover bg-center py-16 lg:py-20"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3">Loved by teams everywhere</h2>
          <p className="text-gray-200 mb-8 lg:mb-10 text-base lg:text-lg">
            Ship faster, look sharper, and delight users—without the extra hours.
          </p>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 p-6 lg:p-8">
                  <blockquote className="text-lg lg:text-xl xl:text-2xl text-white italic leading-snug">
                    “{t.quote}”
                  </blockquote>

                  <div className="mt-6 flex flex-col items-center">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gray-200 text-blue-600 flex items-center justify-center font-bold text-lg lg:text-xl">
                      {t.avatar}
                    </div>
                    <p className="mt-3 font-semibold text-white text-base lg:text-lg">{t.name}</p>
                    <p className="text-xs lg:text-sm text-gray-300">{t.role} · {t.company}</p>
                    <img
                      src={t.logo}
                      alt={t.company}
                      className="mt-3 lg:mt-4 h-5 lg:h-7 w-auto grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-colors ${
                  i === index ? 'bg-blue-400' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Trusted By</h2>
            <p className="text-gray-600 text-base lg:text-lg">
              Leading brands choose Velora Tech to power their digital success.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 xl:gap-12">
            {[
              { src: logo354, alt: "CEYLON" },
              { src: logo369, alt: "techrar" },
              { src: logo393, alt: "Nations" },
              { src: logo398, alt: "MEMORIES" },
            ].map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="h-8 lg:h-10 xl:h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-48 h-48 lg:w-64 lg:h-64 bg-white rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-48 h-48 lg:w-64 lg:h-64 bg-white rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 fade-in">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed text-base lg:text-xl">
            Let's discuss your project and create a solution that drives real results for your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="transition-all duration-300 hover:scale-105">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
            </Link>
          </Button>
          <p className="text-blue-100 text-xs lg:text-sm mt-4 lg:mt-6">
            No obligation quote. Response within 24 hours.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;