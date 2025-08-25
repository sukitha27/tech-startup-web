import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, Database, Lightbulb, MessageCircle, X, Palette, Smartphone, BarChart3 } from 'lucide-react';
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
import servicesBgImage from '../assets/services-bg.jpg'; // Add your image path
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
    { value: '58+', label: 'Projects Completed' },
    { value: '34+', label: 'Happy Customers' },
    { value: '17+', label: 'Web Solutions' },
    { value: '41+', label: 'Creative Designs' },
  ];

const servicesData = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Modern, responsive websites and web applications built with the latest technologies.',
    metrics: ['40% faster load times', '100% mobile responsive', '3x conversion improvement'],
  },
  {
    icon: Database,
    title: 'Software Solutions',
    description: 'Custom business applications, API development, and database optimization.',
    metrics: ['60% process automation', '99.9% uptime guarantee', 'Real-time analytics'],
  },
  {
    icon: Lightbulb,
    title: 'Technical Consulting',
    description: 'Architecture planning, technology selection, and performance optimization.',
    metrics: ['30% cost reduction', '2x performance boost', 'Future-proof architecture'],
  },
  {
    icon: Palette, // You might need to import this icon
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
    metrics: ['50% better user engagement', '75% faster task completion', 'Higher user satisfaction'],
  },
  {
    icon: Smartphone, // You might need to import this icon
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android.',
    metrics: ['Native performance', 'Offline capability', 'App store optimization'],
  },
  {
    icon: BarChart3, // You might need to import this icon
    title: 'Digital Marketing',
    description: 'SEO, content strategy, and digital marketing to grow your online presence.',
    metrics: ['3x more traffic', 'Higher conversion rates', 'Better ROI on ads'],
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

      {/* Hero Section with Stats Bar */}
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center min-h-screen py-16">
            
            
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
            
            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Expert software development and web solutions for growing businesses. 
              15+ projects delivered with 100% client satisfaction.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30">
                <Link to="/contact" className="flex items-center">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-slate-900 text-white hover:bg-slate-700 hover:text-white backdrop-blur-sm">
                <Link to="/portfolio" className="flex items-center">
                  View Portfolio
                </Link>
              </Button>
            </div>

            {/* Stats Bar - Positioned at the bottom of the hero section */}
            <div className="w-full max-w-5xl mt-auto mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm md:text-base font-medium">{stat.label}</div>
                  </div>
                ))}
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
<section 
  className="py-16 lg:py-20 relative overflow-hidden"
  style={{ 
    backgroundImage: `url(${servicesBgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
  {/* Dark overlay for better text readability */}
  <div className="absolute inset-0 bg-slate-900/90"></div>
  
  {/* Animated background elements */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-2000"></div>
    <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-4000"></div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
      {/* Left side - Main heading */}
      <div className="fade-in">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          WE SHAPE THE PERFECT{' '}
          <span className="text-white">SOLUTIONS</span>
          <span className="text-blue-500 text-6xl lg:text-7xl">.</span>
        </h2>
      </div>
      
      {/* Right side - Description */}
      <div className="fade-in">
        <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
          We are committed to provide web design Sri Lanka service to our customers 
          with the full potential of our web design Sri Lanka team.
        </p>
      </div>
    </div>
    
    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {servicesData.map((service, index) => (
        <div 
          key={index}
          className="fade-in group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-red-400/30 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {/* Service number */}
          <div className="absolute top-6 right-6 text-white/10 text-6xl font-bold">
            {(index + 1).toString().padStart(2, '0')}
          </div>
          
          {/* Icon container with gradient */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
              <service.icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
              {service.description}
            </p>
          </div>

          {/* Metrics list */}
          <div className="space-y-3">
            {service.metrics.map((metric, metricIndex) => (
              <div key={metricIndex} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-gray-300 text-sm lg:text-base">{metric}</span>
              </div>
            ))}
          </div>

          {/* Hover effect line */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500"></div>

          {/* Learn more link */}
          <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center text-blue-400 text-sm font-medium">
              <span>Learn more</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA Section */}
    <div className="text-center mt-16 fade-in">
      <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
          Ready to Transform Your Business?
        </h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Let's discuss your project and create a custom solution that drives real results.
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
        >
          <Link to="/contact" className="flex items-center justify-center">
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
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
              { src: logo354, alt: "logo354" },
              { src: logo369, alt: "logo369" },
              { src: logo393, alt: "logo393" },
              { src: logo398, alt: "logo398" },
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

      {/* Blog Section */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">From Our Blog</h2>
      <p className="text-xl text-gray-600">Insights and tips on web development and digital strategy</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((item) => (
        <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-6">
            <span className="text-sm text-blue-600 font-semibold">Web Development</span>
            <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-3">10 Trends Shaping Web Development in 2023</h3>
            <p className="text-gray-600 mb-4">Discover the latest technologies and approaches that are transforming how websites are built.</p>
            <a href="#" className="text-blue-600 font-semibold flex items-center">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-12">
      <Button asChild variant="outline">
        <Link to="/blog">View All Articles</Link>
      </Button>
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