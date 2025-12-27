import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Handshake, Users, Building, CheckCircle, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Clients: React.FC = () => {
  const logoCarouselRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);

  const clients = [
    {
      name: 'MAHAGENCO',
      logo: './mahagenco.png',
      description: 'Maharashtra State Power Generation Company - Leading power generation solutions',
      sector: 'Power & Energy'
    },
    {
      name: 'Jai Shree Tools',
      logo: './jayshree-tools.png',
      description: 'Industrial tools and equipment manufacturing',
      sector: 'Manufacturing'
    },
    {
      name: 'Numac',
      logo: './numac.png',
      description: 'Industrial automation and control systems',
      sector: 'Automation'
    },
    {
      name: 'DNB Group of Engineering',
      logo: './DNB.png',
      description: 'Comprehensive engineering solutions and services',
      sector: 'Engineering'
    },
    {
      name: 'Jayshree Electrodevice',
      logo: './Jayshree.png',
      description: 'Electronic devices and industrial equipment',
      sector: 'Electronics'
    },
    {
      name: 'Adani Power',
      logo: './Adani.png',
      description: 'Adani Power Limited - Major player in the Indian power sector',
      sector: 'Power Generation'
    }
  ];


  const partners = [
    {
      name: 'M/s Vaibhav Enterprises',
      role: 'Strategic IT Partner',
      description: 'Advanced IT, Automation, and Software solutions collaboration',
      specialization: 'Software Development & Automation'
    },
    {
      name: 'M/s Jayshree Electrodevice Pvt. Ltd.',
      role: 'Technology Partner',
      description: 'Electronic systems and industrial equipment partnership',
      specialization: 'Industrial Electronics'
    },
    {
      name: 'DNB Group of Engineering',
      role: 'Engineering Partner',
      description: 'Comprehensive engineering solutions and project collaboration',
      specialization: 'Mechanical & Civil Engineering'
    }
  ];

  const achievements = [
    {
      title: '35+ Years of Excellence',
      description: 'Consistent service delivery since 1988',
      icon: Award
    },
    {
      title: '₹5 Cr+ Annual Turnover',
      description: 'Strong financial performance and growth',
      icon: CheckCircle
    },
    {
      title: '85+ Skilled Professionals',
      description: 'Expert team across engineering and IT domains',
      icon: Users
    },
    {
      title: 'ISO Certified Operations',
      description: 'Quality management systems certification',
      icon: Star
    }
  ];

  useEffect(() => {
    // Logo carousel animation
    if (logoCarouselRef.current) {
      const logos = logoCarouselRef.current.children;
      gsap.to(logos, {
        x: -100,
        duration: 20,
        repeat: -1,
        ease: 'none',
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % (100 * logos.length))
        }
      });
    }

    // Certificates fade-in animation
    if (certificatesRef.current) {
      const certificates = certificatesRef.current.querySelectorAll('.certificate-card');

      gsap.fromTo(certificates,
        {
          opacity: 0,
          y: 30,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: certificatesRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-red-500">Clients & Partners</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Trusted by leading organizations across industries. Building lasting partnerships
              through exceptional service delivery and innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Achievements</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Milestones that reflect our commitment to excellence and continuous growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800/50 p-6 rounded-xl text-center group cursor-pointer border border-gray-700 hover:border-red-500/30 transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Clients */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Major Clients</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Serving industry leaders across power generation, manufacturing, and automation sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all group cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{client.name}</h3>
                    <span className="text-sm text-red-400 font-medium">{client.sector}</span>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed">{client.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/10 to-orange-900/10 border-y border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Handshake className="w-8 h-8 text-red-500" />
              <h2 className="text-4xl font-bold text-white">Strategic Partners</h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Collaborative partnerships that enhance our capabilities and extend our service offerings.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-xl border border-red-500/30 hover:border-red-500/50 transition-all"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="w-6 h-6 text-red-400" />
                  <span className="text-sm text-red-400 font-medium">{partner.role}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{partner.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{partner.description}</p>
                <div className="pt-4 border-t border-red-500/20">
                  <span className="text-sm text-orange-400 font-medium">{partner.specialization}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates & CSR */}
      <section className="py-20" ref={certificatesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Certifications & CSR</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our commitment to quality, compliance, and social responsibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="certificate-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">ISO Certification</h3>
              <p className="text-gray-400">Quality management system certification ensuring consistent service delivery.</p>
            </div>

            <div className="certificate-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">Project Completion</h3>
              <p className="text-gray-400">Numerous work completion certificates from major industrial clients.</p>
            </div>

            <div className="certificate-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">CSR Initiatives</h3>
              <p className="text-gray-400">Active participation in corporate social responsibility programs and community development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-red-900/20 border-t border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Join Our Growing Network</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Become part of our trusted client network and experience the D.H. Fulzele difference.
              Let's build something great together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all"
            >
              Partner With Us
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;