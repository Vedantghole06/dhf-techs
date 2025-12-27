import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Eye, Heart, Shield, Lightbulb, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');

      gsap.fromTo(timelineItems,
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const timelineData = [
    {
      year: '1988',
      title: 'Company Establishment',
      description: 'Founded with a vision to provide quality engineering solutions to industrial clients.'
    },
    {
      year: '1995',
      title: 'Industrial Expansion',
      description: 'Expanded services to include comprehensive manpower supply and maintenance solutions.'
    },
    {
      year: '2005',
      title: 'Technology Integration',
      description: 'Introduced automation and IT services, marking our entry into digital solutions.'
    },
    {
      year: '2015',
      title: 'Software Development',
      description: 'Launched dedicated software development division with focus on SaaS and MES solutions.'
    },
    {
      year: '2020',
      title: 'Partnership Growth',
      description: 'Strategic partnerships with leading companies, including collaboration with Vaibhav Enterprises.'
    },
    {
      year: '2025',
      title: 'Future Ready',
      description: 'Continuing innovation with advanced automation, AI integration, and sustainable solutions.'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Prioritizing safety in all our engineering and IT solutions'
    },
    {
      icon: Heart,
      title: 'Quality Commitment',
      description: 'Uncompromising quality standards in every project we deliver'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through reliable service and support'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously evolving with cutting-edge technology and methodologies'
    }
  ];

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
              About <span className="text-red-500">D.H. Fulzele</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Since 1988, we've been pioneering the perfect balance between traditional engineering
              excellence and cutting-edge IT innovation, serving industries across India with
              unwavering commitment to quality and reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <Target className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed text-center lg:text-left">
                To deliver comprehensive engineering and IT solutions that enhance industrial
                efficiency, safety, and sustainability. We strive to be the trusted partner
                for businesses seeking reliable technical expertise and innovative digital transformation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/20 to-orange-900/20 p-8 rounded-2xl border border-red-500/20"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <Eye className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed text-center lg:text-left">
                To be India's leading integrated engineering and IT solutions provider,
                recognized for our innovation, reliability, and commitment to creating
                sustainable industrial ecosystems that drive economic growth and technological advancement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Core Values</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide every decision, every project, and every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-gray-800/50 p-6 rounded-xl text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/10 to-orange-900/10 border-y border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Leadership</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Visionary leadership driving innovation and excellence in engineering and IT solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 lg:p-12 rounded-2xl border border-red-500/30">
              <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                {/* CEO Photo */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gradient-to-r from-red-500 to-orange-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                        alt="Mr. D.H. Fulzele - CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* CEO Info */}
                <div className="flex-grow text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">Mr. D.H. Fulzele</h3>
                  <p className="text-xl text-red-400 font-semibold mb-4">Chief Executive Officer & Founder</p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    With over three decades of visionary leadership, Mr. D.H. Fulzele has built the company
                    from the ground up, establishing it as a trusted name in engineering and IT solutions.
                    His commitment to innovation and quality has driven the company's growth from a small
                    engineering firm to a comprehensive industrial solutions provider.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm">
                      Engineering Excellence
                    </span>
                    <span className="px-4 py-2 bg-red-900/30 text-red-400 rounded-full text-sm">
                      IT Innovation
                    </span>
                    <span className="px-4 py-2 bg-orange-900/30 text-orange-400 rounded-full text-sm">
                      Strategic Leadership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Expert Team</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Meet the dedicated professionals who drive our success in engineering and IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Team Member 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all group"
            >
              <div className="w-60 h-60 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-700 group-hover:border-red-500/50 transition-all">
                <img
                  src="./vaibhav.jpg"
                  alt="Vaibhav Fulzele - Engineering Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-1">Vaibhav Fulzele</h3>
              <p className="text-red-400 text-sm text-center mb-3 font-medium">Engineering Manager</p>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                15+ years in mechanical engineering and industrial automation systems.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all group"
            >
              <div className="w-60 h-60 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-700 group-hover:border-red-500/50 transition-all">
                <img
                  src="./piyush.jpg"
                  alt="Piyush Awari - IT Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-1">Piyush Awari</h3>
              <p className="text-red-400 text-sm text-center mb-3 font-medium">IT Director</p>
              <p className="text-gray-400 text-sm text-center leading-relaxed">
                Expert in software development, SaaS solutions, and digital transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Three decades of growth, innovation, and excellence in engineering and IT solutions.
            </p>
          </motion.div>

          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-orange-500"></div>

            {timelineData.map((item, index) => (
              <div key={item.year} className="timeline-item relative flex items-start space-x-8 mb-12">
                {/* Year Circle */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold z-10">
                  <span className="text-sm">{item.year}</span>
                </div>

                {/* Content */}
                <div className="flex-grow bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Company Note */}
      <section className="py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-t border-red-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Strategic Partnership</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              In collaboration with <span className="text-red-400 font-semibold">M/s Vaibhav Enterprises</span>,
              we deliver advanced IT, Automation, and Software solutions, expanding our capabilities
              to serve diverse industrial needs with comprehensive technical expertise.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;