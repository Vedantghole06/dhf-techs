import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Monitor, Cpu, Gauge, Zap, Network, Smartphone,
  Cloud, Database, Code, BarChart3, Settings, Layers
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const productsRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'software', label: 'IT & Software' },
    { id: 'automation', label: 'Automation' }
  ];

  const products = [
    // Industrial Products
    {
      id: 1,
      category: 'industrial',
      icon: Gauge,
      title: 'Condition Monitoring & I/O',
      description: 'Advanced monitoring systems for real-time equipment condition assessment and input/output management.',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Alert Systems', 'Data Logging'],
      image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg'
    },
    {
      id: 2,
      category: 'industrial',
      icon: Network,
      title: 'Distributed Control Systems',
      description: 'Comprehensive DCS solutions for process control and automation in industrial environments.',
      features: ['Process Control', 'System Integration', 'HMI Integration', 'Safety Systems'],
      image: 'https://images.pexels.com/photos/3964424/pexels-photo-3964424.jpeg'
    },
    {
      id: 3,
      category: 'industrial',
      icon: Zap,
      title: 'Drives & Motion Control',
      description: 'High-performance motor drives and motion control systems for precise industrial operations.',
      features: ['Variable Speed Drives', 'Servo Systems', 'Motion Controllers', 'Energy Efficiency'],
      image: 'https://images.pexels.com/photos/162568/gears-machine-mechanical-mechanical-engineering-162568.jpeg'
    },
    {
      id: 4,
      category: 'industrial',
      icon: Monitor,
      title: 'Human Machine Interfaces',
      description: 'Intuitive HMI solutions for effective human-machine interaction in industrial settings.',
      features: ['Touch Interfaces', 'SCADA Integration', 'Custom Dashboards', 'Remote Access'],
      image: 'https://images.pexels.com/photos/442151/pexels-photo-442151.jpeg'
    },
    {
      id: 5,
      category: 'industrial',
      icon: Cpu,
      title: 'Industrial Sensors & Networks',
      description: 'Comprehensive sensor solutions and industrial networking for smart manufacturing.',
      features: ['Smart Sensors', 'Wireless Networks', 'IoT Integration', 'Data Acquisition'],
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg'
    },

    // Software Products
    {
      id: 6,
      category: 'software',
      icon: Cloud,
      title: 'SaaS Services',
      description: 'Scalable cloud-based software solutions designed for modern business operations.',
      features: ['Cloud Hosting', 'Subscription Models', 'Multi-tenant Architecture', 'API Integration'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },
    {
      id: 7,
      category: 'software',
      icon: Settings,
      title: 'Manufacturing Execution Systems',
      description: 'Comprehensive MES solutions for production planning, quality management, and operational excellence.',
      features: ['Production Planning', 'Quality Control', 'Inventory Management', 'Real-time Analytics'],
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg'
    },
    {
      id: 8,
      category: 'software',
      icon: Code,
      title: 'Application Development Tools',
      description: 'Professional development frameworks and tools for creating robust industrial applications.',
      features: ['Custom Frameworks', 'Development IDE', 'Testing Tools', 'Deployment Solutions'],
      image: 'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg'
    },
    {
      id: 9,
      category: 'software',
      icon: BarChart3,
      title: 'Design & Operations Software',
      description: 'Specialized software for engineering design, operations planning, and workflow optimization.',
      features: ['CAD Integration', 'Workflow Management', 'Design Tools', 'Process Optimization'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg'
    },

    // Automation Products
    {
      id: 10,
      category: 'automation',
      icon: Layers,
      title: 'Process Automation Systems',
      description: 'Complete automation solutions for industrial processes and manufacturing operations.',
      features: ['PLC Systems', 'SCADA', 'Process Control', 'System Integration'],
      image: 'https://images.pexels.com/photos/3964424/pexels-photo-3964424.jpeg'
    },
    {
      id: 11,
      category: 'automation',
      icon: Database,
      title: 'Data Management Systems',
      description: 'Advanced data collection, storage, and analysis systems for industrial automation.',
      features: ['Data Acquisition', 'Real-time Processing', 'Analytics Engine', 'Reporting Tools'],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg'
    },
    {
      id: 12,
      category: 'automation',
      icon: Smartphone,
      title: 'Mobile Automation Apps',
      description: 'Mobile applications for remote monitoring and control of automated industrial systems.',
      features: ['Remote Monitoring', 'Control Interface', 'Alert Notifications', 'Data Visualization'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  useEffect(() => {
    if (productsRef.current) {
      const cards = productsRef.current.querySelectorAll('.product-card');
      
      gsap.fromTo(cards, 
        {
          opacity: 0,
          y: 40,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }
      );
    }
  }, [filteredProducts]);

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
              Our <span className="text-red-500">Products</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cutting-edge industrial and software products designed to revolutionize manufacturing, 
              automation, and digital transformation across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20" ref={productsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="product-card bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  {/* Product Image */}
                  <div className="h-48 bg-gray-800 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        product.category === 'software' 
                          ? 'bg-gradient-to-r from-red-600/20 to-orange-500/20' 
                          : 'bg-gray-800'
                      }`}>
                        <product.icon className={`w-6 h-6 ${
                          product.category === 'software' ? 'text-red-400' : 'text-gray-300'
                        }`} />
                      </div>
                      <div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          product.category === 'industrial' ? 'bg-gray-700 text-gray-300' :
                          product.category === 'software' ? 'bg-red-900/30 text-red-400' :
                          'bg-orange-900/30 text-orange-400'
                        }`}>
                          {categories.find(cat => cat.id === product.category)?.label}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white mb-3">{product.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{product.description}</p>

                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            product.category === 'software' ? 'bg-red-500' : 'bg-gray-600'
                          }`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover Effect */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className={`w-full py-2 rounded-lg font-medium transition-all ${
                        product.category === 'software'
                          ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-700 hover:to-orange-600'
                          : 'bg-gray-700 text-white hover:bg-gray-600'
                      }`}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900/50 to-red-900/20 border-y border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Interested in Our Products?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get detailed specifications, pricing, and implementation guidance for our industrial and software products. 
              Our technical team is ready to assist with your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all"
              >
                Request Catalog
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 text-white rounded-lg font-semibold text-lg hover:bg-gray-700 transition-all"
              >
                Schedule Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;