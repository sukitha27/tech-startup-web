import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Code } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        font-['Space_Grotesk'] uppercase
        ${isScrolled ? 'bg-black shadow-lg' : 'bg-black'}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Code className="h-6 w-6 text-white" />
              <span className="text-xl font-bold text-white">Velora Tech</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`
                    relative px-1 py-2 text-sm font-semibold transition-colors duration-400
                    ${isActive(item.href) ? 'text-white' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  {item.name}
                  {/* Underline */}
                  <span
                    className={`
                      absolute left-0 -bottom-0.5 h-0.5 bg-blue-500 transition-all duration-400
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

                  {/* Gray swipe overlay */}
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
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden transition-all duration-300 ease-in-out
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
          `}
        >
          <div className="pt-2 pb-4 space-y-1 bg-black border-t border-gray-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  block px-4 py-3 text-base font-semibold transition-all duration-200 relative
                  ${isActive(item.href)
                    ? 'text-white bg-gray-900'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }
                `}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
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
