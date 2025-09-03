import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import RotatingText from '@/blocks/TextAnimations/RotatingText/RotatingText';
import logoImage from '@/assets/logo.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* Replace Code icon with your logo image */}
              <img 
                src={logoImage} 
                alt="Velora Tech Logo" 
                className="h-10 w-auto" // Adjust height as needed
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Expert software development and web solutions for growing businesses. 
              Transforming ideas into powerful digital solutions that drive results.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>hello@veloratech.com</span>
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
              Quick{" "}
              <RotatingText
                texts={["Links" , "Links"]}
                mainClassName="px-2 bg-blue-400 text-black rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services & Follow Us Combined */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Our{" "}
              <RotatingText
                texts={["Services" ,"Services"]}
                mainClassName="px-2 bg-blue-400 text-black rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              <li>Web Development</li>
              <li>Software Solutions</li>
              <li>E-commerce Platforms</li>
              <li>API Development</li>
              <li>Technical Consulting</li>
            </ul>
            
            {/* Follow Us Section - Added to Services */}
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              Follow{" "}
              <RotatingText
                texts={["Us", "Us"]}
                mainClassName="px-2 bg-blue-400 text-black rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h3>
            <p className="text-gray-300 mb-4 text-sm">
              Stay connected with us on social media.
            </p>
            <ul className="flex space-x-4">
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 Velora Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;