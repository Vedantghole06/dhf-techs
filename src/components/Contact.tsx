import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const contactFormRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate background patterns
    if (backgroundRef.current) {
      gsap.to('.blueprint-line', {
        strokeDashoffset: -1000,
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

      gsap.to('.grid-pulse', {
        opacity: 0.3,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });
    }

    // Form slide-up animation
    if (contactFormRef.current) {
      gsap.fromTo(contactFormRef.current,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: contactFormRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'M/s D.H. Fulzele',
        'Nagpur, Maharashtra, India',
        'Industrial Engineering Hub'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 XXX XXX XXXX',
        '+91 XXX XXX XXXX',
        'Toll Free: 1800 XXX XXXX'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@dhfulzele.com',
        'engineering@dhfulzele.com',
        'support@dhfulzele.com'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16 relative overflow-hidden">
      {/* Background Patterns */}
      <div ref={backgroundRef} className="absolute inset-0">
        {/* Engineering Blueprint Pattern */}
        <svg className="absolute left-0 top-0 w-1/2 h-full opacity-5" viewBox="0 0 400 400">
          <defs>
            <pattern id="blueprint-contact" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path 
                d="M 50 0 L 0 0 L 0 50" 
                fill="none" 
                stroke="#2C2C2C" 
                strokeWidth="1"
                className="blueprint-line"
                strokeDasharray="5,5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-contact)"/>
        </svg>

        {/* IT Digital Grid Pattern */}
        <svg className="absolute right-0 top-0 w-1/2 h-full opacity-5" viewBox="0 0 400 400">
          <defs>
            <pattern id="digital-grid-contact" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="#D62828" strokeWidth="1"/>
              <circle cx="20" cy="20" r="2" fill="#D62828" className="grid-pulse"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#digital-grid-contact)"/>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Get In <span className="text-red-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your industrial operations? Contact our expert team for 
              comprehensive engineering and IT solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-900/50 p-6 rounded-xl text-center border border-gray-800 hover:border-red-500/30 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-400 text-sm">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={contactFormRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 lg:p-12 rounded-2xl border border-gray-800"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-gray-300">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all ${
                        focusedField === 'name' 
                          ? 'border-orange-500 ring-2 ring-orange-500/20' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all ${
                        focusedField === 'email' 
                          ? 'border-orange-500 ring-2 ring-orange-500/20' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div className="relative">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField('')}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all ${
                        focusedField === 'phone' 
                          ? 'border-orange-500 ring-2 ring-orange-500/20' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Company Field */}
                <div className="relative">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField('')}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all ${
                      focusedField === 'company' 
                        ? 'border-orange-500 ring-2 ring-orange-500/20' 
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField('')}
                  required
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all ${
                    focusedField === 'subject' 
                      ? 'border-orange-500 ring-2 ring-orange-500/20' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                  placeholder="What can we help you with?"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    required
                    className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 resize-none transition-all ${
                      focusedField === 'message' 
                        ? 'border-orange-500 ring-2 ring-orange-500/20' 
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                    placeholder="Please describe your requirements or inquiry in detail..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all flex items-center justify-center space-x-3 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Find Us</h3>
              <p className="text-gray-300">Visit our office for in-person consultations and meetings.</p>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-96 bg-gray-800 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <p className="text-white text-lg font-semibold mb-2">Interactive Map</p>
                <p className="text-gray-400">Google Maps integration will be added here</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;