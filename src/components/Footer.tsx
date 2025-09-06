import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Products', href: '#products' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    { label: 'Manpower Supply', href: '#' },
    { label: 'Industrial Maintenance', href: '#' },
    { label: 'Software Development', href: '#' },
    { label: 'Automation Systems', href: '#' },
    { label: 'SaaS Solutions', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img className='h-10 m-2' src={Logo} alt="" />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Leading provider of engineering and IT solutions, serving industries across India
                with 35+ years of expertise in mechanical, civil engineering, and software development.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
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
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div className="col-span-1">
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
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <p>Nagpur, Maharashtra, India</p>
                    <p>Industrial Engineering Hub</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a href="tel:+91XXXXXXXXXX" className="text-gray-400 hover:text-white transition-colors text-sm">
                    +91 XXX XXX XXXX
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <a href="mailto:info@dhfulzele.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                    info@dhfulzele.com
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                  <div className="text-gray-400 text-sm">
                    <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
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
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© {currentYear} M/s D.H. Fulzele. All rights reserved.</p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>
                In collaboration with{' '}
                <span className="text-red-400 font-medium">M/s Vaibhav Enterprises</span>
              </p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;