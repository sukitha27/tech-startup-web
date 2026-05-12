import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from '@/assets/logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home',       href: '/' },
    { name: 'About Us',   href: '/about' },
    { name: 'Services',   href: '/services' },
    { name: 'Portfolio',  href: '/portfolio' },
    { name: 'Products',   href: '/products', badge: 'NEW' },
    { name: 'Blog',       href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        font-['Space_Grotesk'] uppercase
        ${isScrolled ? 'bg-black shadow-lg' : 'bg-black'}
      `}
    >
      {/* ── Top Contact Bar ── */}
      <div className="hidden md:block bg-slate-800 border-b border-white/10 py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-6">
              <a
                href="tel:+94761148054"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <i className="fas fa-phone text-blue-500 text-xs" />
                +94 75 642 5773
              </a>
              <a
                href="mailto:hello@veloratech.com.lk"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
              >
                <i className="fas fa-envelope text-blue-500 text-xs" />
                hello@veloratech.com.lk
              </a>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-map-marker-alt text-blue-500 text-xs" />
              <span>Nugegoda, Sri Lanka</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={logoImage}
                alt="Velora Tech Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`
                    relative px-1 py-2 text-sm font-semibold transition-colors duration-300
                    flex items-center gap-1.5
                    ${isActive(item.href) ? 'text-white' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  {item.name}

                  {/* NEW badge for Products */}
                  {item.badge && (
                    <span className="text-[9px] bg-violet-500 text-white px-1.5 py-0.5 rounded-full font-bold leading-none normal-case tracking-normal">
                      {item.badge}
                    </span>
                  )}

                  {/* Underline — violet for Products, blue for others */}
                  <span
                    className={`
                      absolute left-0 -bottom-0.5 h-0.5 transition-all duration-300
                      ${item.badge ? 'bg-violet-500' : 'bg-blue-500'}
                      ${isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </Link>
              </div>
            ))}

            {/* CTA Button */}
            <Button
              asChild
              className="relative overflow-hidden rounded-full border-2 border-blue-500 bg-blue-500 px-8 py-3 font-extrabold uppercase text-white group"
            >
              <Link to="/contact">
                <span className="relative z-10">Request a Quote</span>
                <span
                  className="
                    absolute top-0 left-0 h-full
                    w-[calc(100%+1.2rem)]
                    -translate-x-[calc(100%+1.2rem)]
                    bg-gray-700
                    [clip-path:polygon(0_0,calc(100%-1.2rem)_0,100%_100%,0_100%)]
                    transition-transform duration-500 ease-out
                    group-hover:translate-x-0
                  "
                />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`
            md:hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
        >
          <div className="pt-2 pb-4 space-y-1 bg-black border-t border-gray-800">

            {/* Mobile contact info */}
            <div className="px-4 py-3 border-b border-gray-800 flex flex-col gap-2 normal-case">
              <a
                href="tel:+94761148054"
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition-colors"
              >
                <i className="fas fa-phone text-blue-500 text-xs" />
                +94 76 114 8054
              </a>
              <a
                href="mailto:hello@veloratech.com.lk"
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-blue-400 transition-colors"
              >
                <i className="fas fa-envelope text-blue-500 text-xs" />
                hello@veloratech.com.lk
              </a>
            </div>

            {/* Nav links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-2 px-4 py-3 text-base font-semibold
                  transition-all duration-200
                  ${isActive(item.href)
                    ? 'text-white bg-gray-900'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }
                `}
              >
                {item.name}
                {item.badge && (
                  <span className="text-[9px] bg-violet-500 text-white px-1.5 py-0.5 rounded-full font-bold leading-none normal-case tracking-normal">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="px-4 py-3">
              <Button
                asChild
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md shadow-md transition-all duration-200"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Request a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;