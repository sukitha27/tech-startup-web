import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import RotatingText from '@/blocks/TextAnimations/RotatingText/RotatingText';
import logoImage from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">

      {/* ── Ordera Product Callout Strip ── */}
      <div className="bg-[#1e1b4b] border-b border-violet-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-white/80 text-sm text-center sm:text-left">
                <strong className="text-white">Ordera</strong> - Our free order management platform for Sri Lankan businesses is live
              </span>
            </div>
            <a
              href="https://ordera.veloratech.com.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-violet-300 hover:text-white text-sm font-semibold transition-colors whitespace-nowrap"
            >
              Try it free <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="Velora Tech Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We build fast, modern websites and software for growing businesses in
              Sri Lanka and beyond. Every project delivered with full attention,
              clean code, and 100% client satisfaction.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@veloratech.com.lk</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+94 (076) 114-8054</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Nagollagama, Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Quick{' '}
              <RotatingText
                texts={['Links', 'Pages', 'Nav']}
                mainClassName="px-2 bg-blue-400 text-black rounded-lg"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/products" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                  Products
                  <span className="text-[9px] bg-violet-500 text-white px-1.5 py-0.5 rounded-full font-bold leading-none">
                    NEW
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services & Social */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Our{' '}
              <RotatingText
                texts={['Services', 'Solutions', 'Expertise']}
                mainClassName="px-2 bg-blue-400 text-black rounded-lg"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>Web Development</li>
              <li>Software Solutions</li>
              <li>E-commerce Platforms</li>
              <li>API Development</li>
              <li>Technical Consulting</li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Follow{' '}
              <RotatingText
                texts={['Us', 'Along', 'Online']}
                mainClassName="px-2 bg-blue-400 text-black rounded-lg"
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2500}
              />
            </h3>
            <p className="text-gray-300 mb-4 text-sm">Stay connected with us on social media.</p>
            <ul className="flex space-x-4">
              {[
                { icon: 'fa-facebook-f',  label: 'Facebook'  },
                { icon: 'fa-instagram',   label: 'Instagram' },
                { icon: 'fa-twitter',     label: 'Twitter'   },
                { icon: 'fa-linkedin-in', label: 'LinkedIn'  },
              ].map(({ icon, label }) => (
                <li key={label}>
                  <a href="#" aria-label={label} className="text-gray-300 hover:text-blue-400 transition-colors">
                    <i className={`fab ${icon} text-xl`} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-gray-400">© {currentYear} Velora Technologies. All rights reserved.</p>
          <Link to="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;