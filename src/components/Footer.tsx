import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Clients', path: '/clients' },
    { label: 'Contact', path: '/contact' }
  ];

  const services = [
    { label: 'Manpower Supply', path: '/services' },
    { label: 'Industrial Maintenance', path: '/services' },
    { label: 'Software Development', path: '/services' },
    { label: 'Automation Systems', path: '/services' },
    { label: 'SaaS Solutions', path: '/services' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex justify-center md:justify-start">
                <img className='h-16 m-2' src={Logo} alt="D.H. Fulzele Logo" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 capitalize">
                Leading provider of engineering and IT solutions, serving industries across India
                with 35+ years of expertise in mechanical, civil engineering, and software development.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => handleNavigation(link.path)}
                      className="text-gray-400 hover:text-white transition-colors text-sm bg-transparent border-none outline-none cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div className="col-span-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => handleNavigation(service.path)}
                      className="text-gray-400 hover:text-white transition-colors text-sm bg-transparent border-none outline-none cursor-pointer"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 justify-center md:justify-start">
                  <MapPin className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                   <p> B1- Aahtavinayak Paradise,</p> 
                    <p>Beside Eden Garden Restaurant, </p>
                    <p>Koradi Road Nagpur - 441111</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a href="tel:+91 9960601763" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 9960601763, 9922931763
                  </a>
                </div>
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a href="mailto:info@dhfulzele.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    info@dhftechs.com
                  </a>
                </div>
                <div className="flex items-start space-x-3 justify-center md:justify-start">
                  <Clock className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <p>Mon - Sat: 10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} M/s D.H. Fulzele. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>
                In collaboration with{' '}
                <span className="text-red-400 font-medium">M/s Vaibhav Enterprises</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm justify-center">
              <button
                type="button"
                onClick={() => handleNavigation('/privacy')}
                className="text-gray-400 hover:text-white transition-colors bg-transparent border-none outline-none cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => handleNavigation('/terms')}
                className="text-gray-400 hover:text-white transition-colors bg-transparent border-none outline-none cursor-pointer"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;