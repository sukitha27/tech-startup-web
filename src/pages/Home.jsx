import LogoLoop from "@/blocks/Animations/LogoLoop/LogoLoop";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Code, Database, Lightbulb, Palette, Smartphone, BarChart3, Clock, ChevronRight } from 'lucide-react';
import heroBgImage from '../assets/hero-bg.jpg';
import testimonialBg from '../assets/testimonial-bg.jpg';
import webDevImage from '../assets/services_web_dev.png';
import softwareImage from '../assets/services_software.png';
import consultingImage from '../assets/services_consulting.png';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
import logo393 from "@/assets/logos/homestay-logo1.png";
import logo398 from "@/assets/logos/logoipsum-398.svg";
import webdevImage from '../assets/webdev.jpg';
import sketchImage from '../assets/sketch.jpg';
import servicesBgImage from '../assets/services-bg.jpg';
import blogBg from "../assets/blog-bg.jpg";
import profilepic from '@/assets/pro_pic.png';
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import { useEffect, useState, useRef } from 'react';
import SEO from '@/components/SEO';

// ── Shared blog data — single source of truth ────────────────────────────────
import { blogPreviews, categoryColors } from '@/data/posts';
import BlogCoverImage from '@/components/BlogCoverImage';
// ─────────────────────────────────────────────────────────────────────────────

const Home = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const typewriterTexts = useRef([
    "Web Applications",
    "E-commerce Solutions",
    "Business Software",
    "Mobile Apps",
    "Tourism Websites",
  ]);

  // Typewriter effect
  useEffect(() => {
    const handleType = () => {
      const current = textIndex % typewriterTexts.current.length;
      const fullText = typewriterTexts.current[current];

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed((s) => s / 1.5);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTextIndex((i) => i + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, typingSpeed]);

  // Testimonial auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  // Animated stats counter
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, i) => {
              const target = parseInt(stat.value);
              const duration = 2000;
              const steps = 60;
              const increment = target / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  setAnimatedStats((prev) => {
                    const next = [...prev];
                    next[i] = target;
                    return next;
                  });
                  clearInterval(timer);
                } else {
                  setAnimatedStats((prev) => {
                    const next = [...prev];
                    next[i] = Math.floor(current);
                    return next;
                  });
                }
              }, duration / steps);
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const el = document.querySelector('.stats-bar');
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Fade-in scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const stats = [
  { value: '3+',   label: 'Projects Completed' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24h',  label: 'Response Time' },
  { value: '1+',   label: 'Years Experience' },
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
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces that enhance user experience and engagement.',
      metrics: ['50% better user engagement', '75% faster task completion', 'Higher user satisfaction'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      metrics: ['Native performance', 'Offline capability', 'App store optimization'],
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'SEO, content strategy, and digital marketing to grow your online presence.',
      metrics: ['3x more traffic', 'Higher conversion rates', 'Better ROI on ads'],
    },
  ];

  const testimonials = [
    {
      quote: "Velora Tech has saved us thousands of hours of work. We're able to spin up projects and features faster.",
      name: "Ammar Foley",
      role: "UX Designer",
      company: "GlobalBank",
      avatar: "AF",
      logo: logo354,
    },
    {
      quote: "Our SaaS dashboard is 3× faster and our churn dropped 28% after the redesign. Absolute game-changers.",
      name: "Marcus Lee",
      role: "Founder",
      company: "SaaSify",
      avatar: "ML",
      logo: logo369,
    },
    {
      quote: "Velora Tech built us a beautiful website that captures the warmth of authentic Sri Lankan hospitality. Guests now find us easily and bookings have grown significantly.",
      name: "Mrs. Thamara",
      role: "Owner",
      company: "Anuradhapura Homestay",
      avatar: "AH",
      brandName: "Anuradhapura Homestay",
      logo: logo393,
    },
  ];

  return (
    <div>
      <SEO
        title="Software & Web Development Company in Sri Lanka"
        description="Velora Tech — Fast, modern web development, e-commerce, and software solutions for growing businesses in Sri Lanka. 100% client satisfaction guaranteed."
        url="https://www.veloratech.com.lk/"
      />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${heroBgImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center justify-center min-h-screen py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Transforming Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Powerful Digital Solutions
              </span>
            </h1>

            <div className="text-xl lg:text-2xl text-gray-200 mb-8">
              We build exceptional{' '}
              <span className="typewriter-text font-semibold text-blue-300 border-r-2 border-blue-400">
                {currentText}
              </span>
            </div>

            <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              We build fast, modern websites and software for growing businesses in 
              Sri Lanka and beyond. Every project delivered with full attention, 
              clean code, and 100% client satisfaction.
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

            {/* Stats Bar */}
            <div className="w-full max-w-5xl mt-auto mb-8 stats-bar">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center p-4">
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

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{
          backgroundImage: `url(${servicesBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-500/20 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div className="fade-in">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                WE SHAPE THE PERFECT{' '}
                <span className="text-white">SOLUTIONS</span>
                <span className="text-blue-500 text-6xl lg:text-7xl">.</span>
              </h2>
            </div>
            <div className="fade-in">
              <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
                From startups to growing businesses, we build fast, modern digital 
                products that solve real problems. Every project we take on gets our 
                full attention — clean code, thoughtful design, and results that 
                actually matter to your bottom line.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {servicesData.map((service, i) => (
              <div
                key={i}
                className="fade-in group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-red-400/30 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="absolute top-6 right-6 text-white/10 text-6xl font-bold">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
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
                <div className="space-y-3">
                  {service.metrics.map((metric, j) => (
                    <div key={j} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm lg:text-base">{metric}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-500"></div>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/services" className="flex items-center text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-200">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

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

      {/* ── Why Choose Us ── */}
      <section className="py-16 lg:py-20 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="fade-in">
              <div className="text-blue-400 font-semibold text-sm mb-4 tracking-wider uppercase">
                WHY CHOOSE US?
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                WE ARE A{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">#1</span>
                </span>{' '}
                WEB<br />DEVELOPMENT COMPANY
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed text-base lg:text-lg">
                At our core, we specialize in custom web development and tailored software solutions.
                We empower entrepreneurs, startups, and expanding companies to turn their vision into
                reality and reach their business goals faster.
              </p>

              {/* ── Follow Us ── */}
              <div className="mb-8">
                <h3 className="text-white font-semibold text-lg mb-4">Follow Us:</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/share/17RF4han7K/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow Velora Tech on Facebook"
                    className="w-12 h-12 bg-gray-600 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <i className="fab fa-facebook-f text-white text-lg"></i>
                  </a>
                </div>
              </div>

              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-all duration-300 text-base font-semibold">
                <Link to="/about" className="flex items-center">
                  Discover More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="fade-in relative">
              <div className="relative h-[500px]">
                <div className="absolute top-0 left-0 w-[280px] h-[240px] rounded-2xl overflow-hidden shadow-2xl transform -rotate-2">
                  <img src={webdevImage} alt="Development workspace" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-[280px] h-[280px] rounded-2xl overflow-hidden shadow-2xl transform rotate-3">
                  <img src={sketchImage} alt="Content strategy and UI design" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
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
              { src: reactLogo,    alt: "React" },
              { src: nodeLogo,     alt: "Node.js" },
              { src: tailwindLogo, alt: "Tailwind CSS" },
              { src: typesLogo,    alt: "TypeScript" },
              { src: phpLogo,      alt: "PHP" },
              { src: wpressLogo,   alt: "WordPress" },
              { src: firebaseLogo, alt: "Firebase" },
              { src: woocomLogo,   alt: "WooCommerce" },
              { src: htmlLogo,     alt: "HTML5" },
            ]}
          />
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="relative bg-cover bg-center py-16 lg:py-20"
        style={{ backgroundImage: `url(${testimonialBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3">Real feedback from real projects.</h2>
          <p className="text-gray-200 mb-8 lg:mb-10 text-base lg:text-lg">
            Ship faster, look sharper, and delight users—without the extra hours.
          </p>

          <div className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 p-6 lg:p-8">
                  <blockquote className="text-lg lg:text-xl xl:text-2xl text-white italic leading-snug">
                    "{t.quote}"
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

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-2 h-2 lg:w-2.5 lg:h-2.5 rounded-full transition-colors ${
                  i === testimonialIndex ? 'bg-blue-400' : 'bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Trusted By ── */}
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

      {/* ── Blog Preview ── */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0">
          <img src={blogBg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">From Our Blog</h2>
            <p className="text-xl text-gray-200">Insights and tips on web development and digital strategy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPreviews.map((post) => (
              <div key={post.id} className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <BlogCoverImage
                  image={post.image}
                  category={post.category}
                  alt={post.title}
                  aspectClass="h-44"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full mb-3 w-fit ${
                    categoryColors[post.category] ?? 'bg-gray-100 text-gray-700'
                  }`}>
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex-1 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                </div>
                <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3" /> {post.readTime}
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center text-blue-600 font-medium text-sm gap-1 group-hover:gap-2 transition-all"
                  >
                    Read more <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Link to="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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

      <WhatsAppWidget
        phoneNo={import.meta.env.VITE_WHATSAPP_NUMBER}
        position="right"
        widgetWidth="300px"
        widgetWidthMobile="260px"
        autoOpen={false}
        autoOpenTimer={5000}
        messageBox={false}
        messageBoxTxt="Hi Team, is there any related service available?"
        iconSize="52"
        iconColor="#ffffff"
        iconBgColor="rgb(79, 206, 93)"
        headerIcon={profilepic}
        headerIconColor="rgb(100, 100, 100)"
        headerTxtColor="rgb(255, 255, 255)"
        headerBgColor="rgb(7, 94, 84)"
        headerTitle="Velora Tech"
        headerCaption="Typically replies in minutes"
        bodyBgColor="rgb(227, 220, 213)"
        chatPersonName="Tech Support"
        chatMessage={<>Hi there 👋 <br />How can we help you today?</>}
        footerBgColor="rgb(255, 255, 255)"
        placeholder="Type a message..."
        btnBgColor="rgb(79, 206, 93)"
        btnTxt="Start Chat"
        btnTxtColor="rgb(255, 255, 255)"
      />
    </div>
  );
};

export default Home;
