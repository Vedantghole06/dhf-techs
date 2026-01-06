import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

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
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      // Using Web3Forms (Free service - requires API key)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '14154388-4e03-442c-9c2c-a760d54c96bb',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          from_name: formData.name,
          replyto: formData.email
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.');

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Oops! Something went wrong. Please try again or contact us directly at info@dhftechs.com');

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'B1 - Aahtavinayak Paradise,',
        'Beside Eden Garden Restaurant,',
        'Koradi Road, Nagpur - 441111'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+91 9960601763',
        '+91 9922931763'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@dhftechs.com',
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Mon - Sat: 10:00 AM - 6:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black pt-16 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 w-1/2 h-full opacity-5" viewBox="0 0 400 400">
          <defs>
            <pattern id="blueprint-contact" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 L 0 50"
                fill="none"
                stroke="#2C2C2C"
                strokeWidth="1"
                strokeDasharray="5,5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-contact)" />
        </svg>

        <svg className="absolute right-0 top-0 w-1/2 h-full opacity-5" viewBox="0 0 400 400">
          <defs>
            <pattern id="digital-grid-contact" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" stroke="#D62828" strokeWidth="1" />
              <circle cx="20" cy="20" r="2" fill="#D62828" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#digital-grid-contact)" />
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed capitalize">
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

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-lg flex items-start space-x-3"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-green-400">{statusMessage}</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start space-x-3"
              >
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-400">{statusMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      disabled={submitStatus === 'loading'}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'name'
                          ? 'border-orange-500 ring-2 ring-orange-500/20'
                          : 'border-gray-700 hover:border-gray-600'
                        }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

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
                      disabled={submitStatus === 'loading'}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'email'
                          ? 'border-orange-500 ring-2 ring-orange-500/20'
                          : 'border-gray-700 hover:border-gray-600'
                        }`}
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      disabled={submitStatus === 'loading'}
                      className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'phone'
                          ? 'border-orange-500 ring-2 ring-orange-500/20'
                          : 'border-gray-700 hover:border-gray-600'
                        }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

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
                    disabled={submitStatus === 'loading'}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'company'
                        ? 'border-orange-500 ring-2 ring-orange-500/20'
                        : 'border-gray-700 hover:border-gray-600'
                      }`}
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

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
                  disabled={submitStatus === 'loading'}
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'subject'
                      ? 'border-orange-500 ring-2 ring-orange-500/20'
                      : 'border-gray-700 hover:border-gray-600'
                    }`}
                  placeholder="What can we help you with?"
                />
              </div>

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
                    disabled={submitStatus === 'loading'}
                    className={`w-full pl-12 pr-4 py-3 bg-gray-800 border rounded-lg text-white placeholder-gray-400 resize-none transition-all disabled:opacity-50 disabled:cursor-not-allowed ${focusedField === 'message'
                        ? 'border-orange-500 ring-2 ring-orange-500/20'
                        : 'border-gray-700 hover:border-gray-600'
                      }`}
                    placeholder="Please describe your requirements or inquiry in detail..."
                  />
                </div>
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  whileHover={submitStatus !== 'loading' ? { scale: 1.05 } : {}}
                  whileTap={submitStatus !== 'loading' ? { scale: 0.95 } : {}}
                  disabled={submitStatus === 'loading'}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all flex items-center justify-center space-x-3 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitStatus === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Maps */}
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
              <p className="text-gray-300">
                Visit our office for in-person consultations and meetings.
              </p>
            </div>

            <div className="w-full h-96 rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.0695768708633!2d79.07461907427826!3d21.211268981486928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c16322a95531%3A0x27f1c6908442da67!2sAshtavinayak%20Paradise%20Society%2C%201%2C%20Smruti%20Nagar%2C%20Bhokara%2C%20Nagpur%2C%20Maharashtra%20441111!5e1!3m2!1sen!2sin!4v1766475306372!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;