import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Wrench, Users, Building, Shield, Cog, Truck,
  Code, Database, Cloud, Settings, Smartphone, BarChart3
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card');

      gsap.fromTo(cards, 
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const engineeringServices = [
    {
      icon: Users,
      title: 'Manpower Supply',
      description: 'Skilled engineers and technicians for industrial projects, maintenance, and operations across various sectors.',
      features: ['Mechanical Engineers', 'Civil Engineers', 'Technical Staff', 'Project Management']
    },
    {
      icon: Wrench,
      title: 'Industrial Maintenance',
      description: 'Comprehensive maintenance solutions for industrial equipment, machinery, and infrastructure.',
      features: ['Preventive Maintenance', 'Breakdown Services', 'Equipment Overhaul', 'Performance Optimization']
    },
    {
      icon: Building,
      title: 'Civil & Housekeeping',
      description: 'Complete civil engineering and housekeeping services for industrial facilities and commercial spaces.',
      features: ['Construction Services', 'Facility Management', 'Housekeeping', 'Infrastructure Development']
    },
    {
      icon: Shield,
      title: 'Safety Equipment',
      description: 'Safety compliance solutions and equipment supply for industrial safety standards.',
      features: ['Safety Audits', 'Equipment Supply', 'Training Programs', 'Compliance Management']
    },
    {
      icon: Cog,
      title: 'Automation Systems',
      description: 'Industrial automation solutions including bulk material handling and process optimization.',
      features: ['Process Automation', 'Material Handling', 'Control Systems', 'System Integration']
    },
    {
      icon: Truck,
      title: 'HEMM Services',
      description: 'Heavy Earth Moving Machinery services including dozers, excavators, and specialized equipment.',
      features: ['Equipment Rental', 'Operation Services', 'Maintenance', 'Project Execution']
    }
  ];

  const itServices = [
    {
      icon: Code,
      title: 'Application Development',
      description: 'Custom software applications tailored to industrial and business requirements.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
    },
    {
      icon: Database,
      title: 'IT Services & Development',
      description: 'Comprehensive IT services including system integration, database management, and technical support.',
      features: ['System Integration', 'Database Design', 'IT Consulting', 'Technical Support']
    },
    {
      icon: Cloud,
      title: 'SaaS Solutions',
      description: 'Cloud-based Software as a Service solutions for modern business operations.',
      features: ['Cloud Applications', 'Subscription Models', 'Scalable Solutions', 'Remote Access']
    },
    {
      icon: Settings,
      title: 'Manufacturing Execution Systems',
      description: 'MES solutions for production planning, scheduling, and manufacturing process control.',
      features: ['Production Planning', 'Quality Management', 'Inventory Control', 'Real-time Monitoring']
    },
    {
      icon: Smartphone,
      title: 'Design & Operations Software',
      description: 'Specialized software for design, operations, and workflow management in industrial environments.',
      features: ['CAD Integration', 'Workflow Management', 'Process Design', 'Operations Control']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Data analytics and business intelligence solutions for informed decision-making.',
      features: ['Data Analytics', 'Reporting Dashboards', 'Predictive Analysis', 'Performance Metrics']
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
              Our <span className="text-red-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive engineering and IT solutions designed to optimize industrial performance, 
              enhance operational efficiency, and drive technological advancement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-gray-300" />
              </div>
              <h2 className="text-4xl font-bold text-white">Engineering Services</h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl">
              Traditional engineering excellence with modern methodologies and proven industrial expertise.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {engineeringServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
                  <service.icon className="w-8 h-8 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* IT Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-left mb-16"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-4xl font-bold text-white">IT & Software Services</h2>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl">
              Innovative technology solutions that transform industrial operations and drive digital excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="service-card bg-gradient-to-br from-red-900/10 to-orange-900/10 p-6 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all group cursor-pointer"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-red-600/30 group-hover:to-orange-500/30 transition-all">
                  <service.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-y border-red-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your engineering and IT requirements. 
              Our expert team is ready to deliver customized solutions for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all"
            >
              Contact Our Experts
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

// import React, { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import {
//   Wrench, Users, Building, Shield, Cog, Truck,
//   Code, Database, Cloud, Settings, Smartphone, BarChart3
// } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const Services = () => {
//   const servicesRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (servicesRef.current) {
//       const cards = servicesRef.current.querySelectorAll('.service-card');

//       gsap.fromTo(cards,
//         {
//           opacity: 0,
//           y: 60,
//           scale: 0.9
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 0.8,
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: servicesRef.current,
//             start: 'top 70%',
//             end: 'bottom 30%',
//             toggleActions: 'play none none reverse'
//           }
//         }
//       );
//     }
//   }, []);

//   const engineeringServices = [
//     {
//       icon: Users,
//       title: 'Manpower Supply',
//       description: 'Skilled engineers and technicians for industrial projects, maintenance, and operations across various sectors.',
//       features: ['Mechanical Engineers', 'Civil Engineers', 'Technical Staff', 'Project Management']
//     },
//     {
//       icon: Wrench,
//       title: 'Industrial Maintenance',
//       description: 'Comprehensive maintenance solutions for industrial equipment, machinery, and infrastructure.',
//       features: ['Preventive Maintenance', 'Breakdown Services', 'Equipment Overhaul', 'Performance Optimization']
//     },
//     {
//       icon: Building,
//       title: 'Civil & Housekeeping',
//       description: 'Complete civil engineering and housekeeping services for industrial facilities and commercial spaces.',
//       features: ['Construction Services', 'Facility Management', 'Housekeeping', 'Infrastructure Development']
//     },
//     {
//       icon: Shield,
//       title: 'Safety Equipment',
//       description: 'Safety compliance solutions and equipment supply for industrial safety standards.',
//       features: ['Safety Audits', 'Equipment Supply', 'Training Programs', 'Compliance Management']
//     },
//     {
//       icon: Cog,
//       title: 'Automation Systems',
//       description: 'Industrial automation solutions including bulk material handling and process optimization.',
//       features: ['Process Automation', 'Material Handling', 'Control Systems', 'System Integration']
//     },
//     {
//       icon: Truck,
//       title: 'HEMM Services',
//       description: 'Heavy Earth Moving Machinery services including dozers, excavators, and specialized equipment.',
//       features: ['Equipment Rental', 'Operation Services', 'Maintenance', 'Project Execution']
//     }
//   ];

//   const itServices = [
//     {
//       icon: Code,
//       title: 'Application Development',
//       description: 'Custom software applications tailored to industrial and business requirements.',
//       features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
//     },
//     {
//       icon: Database,
//       title: 'IT Services & Development',
//       description: 'Comprehensive IT services including system integration, database management, and technical support.',
//       features: ['System Integration', 'Database Design', 'IT Consulting', 'Technical Support']
//     },
//     {
//       icon: Cloud,
//       title: 'SaaS Solutions',
//       description: 'Cloud-based Software as a Service solutions for modern business operations.',
//       features: ['Cloud Applications', 'Subscription Models', 'Scalable Solutions', 'Remote Access']
//     },
//     {
//       icon: Settings,
//       title: 'Manufacturing Execution Systems',
//       description: 'MES solutions for production planning, scheduling, and manufacturing process control.',
//       features: ['Production Planning', 'Quality Management', 'Inventory Control', 'Real-time Monitoring']
//     },
//     {
//       icon: Smartphone,
//       title: 'Design & Operations Software',
//       description: 'Specialized software for design, operations, and workflow management in industrial environments.',
//       features: ['CAD Integration', 'Workflow Management', 'Process Design', 'Operations Control']
//     },
//     {
//       icon: BarChart3,
//       title: 'Business Intelligence',
//       description: 'Data analytics and business intelligence solutions for informed decision-making.',
//       features: ['Data Analytics', 'Reporting Dashboards', 'Predictive Analysis', 'Performance Metrics']
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black pt-16">
//       {/* Hero Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-center">
//               Our <span className="text-red-500">Services</span>
//             </h1>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive engineering and IT solutions designed to optimize industrial performance,
//               enhance operational efficiency, and drive technological advancement.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Engineering Services */}
//       <section className="py-20" ref={servicesRef}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-left mb-16"
//           >
//             <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
//               <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
//                 <Wrench className="w-6 h-6 text-gray-300" />
//               </div>
//               <h2 className="text-4xl font-bold text-white text-center md:text-left">Engineering Services</h2>
//             </div>
//             <p className="text-gray-300 text-lg max-w-2xl text-center md:text-left mx-auto md:mx-0">
//               Traditional engineering excellence with modern methodologies and proven industrial expertise.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
//             {engineeringServices.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 className="service-card bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-600 transition-all group cursor-pointer"
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-700 transition-colors">
//                   <service.icon className="w-8 h-8 text-gray-300" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
//                 <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
//                       <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>

//           {/* IT Services */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-left mb-16"
//           >
//             <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
//               <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-full flex items-center justify-center">
//                 <Code className="w-6 h-6 text-white" />
//               </div>
//               <h2 className="text-4xl font-bold text-white text-center md:text-left">IT & Software Services</h2>
//             </div>
//             <p className="text-gray-300 text-lg max-w-2xl text-center md:text-left mx-auto md:mx-0">
//               Innovative technology solutions that transform industrial operations and drive digital excellence.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {itServices.map((service, index) => (
//               <motion.div
//                 key={service.title}
//                 className="service-card bg-gradient-to-br from-red-900/10 to-orange-900/10 p-6 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all group cursor-pointer"
//                 whileHover={{ y: -10 }}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-r from-red-600/20 to-orange-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-red-600/30 group-hover:to-orange-500/30 transition-all">
//                   <service.icon className="w-8 h-8 text-red-400" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
//                 <p className="text-gray-400 mb-4 leading-relaxed">{service.description}</p>
//                 <ul className="space-y-2">
//                   {service.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="text-sm text-gray-500 flex items-center space-x-2">
//                       <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-y border-red-500/20">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h3>
//             <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
//               Contact us today to discuss your engineering and IT requirements.
//               Our expert team is ready to deliver customized solutions for your business.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold text-lg hover:from-red-700 hover:to-orange-600 transition-all"
//             >
//               Contact Our Experts
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;