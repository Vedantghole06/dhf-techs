import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Cog, Code, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';

const AnimatedCounter = ({ end, suffix = '', className = '' }) => {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    let startTime;
    const duration = 2000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end]);

  return <span className={className}>{count}{suffix}</span>;
};

const Hero = () => {
  const heroRef = useRef(null);
  const engineeringRef = useRef(null);
  const itRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Clean up previous animation if it exists
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const tl = gsap.timeline();
    animationRef.current = tl;

    // Animate background patterns with error handling
    const engineeringPatterns = document.querySelectorAll('.engineering-pattern');
    const itPatterns = document.querySelectorAll('.it-pattern');
    const floatingIcons = document.querySelectorAll('.floating-icon');

    if (engineeringPatterns.length > 0) {
      gsap.set(engineeringPatterns, { opacity: 0, scale: 0.8 });
      tl.to(engineeringPatterns, {
        opacity: 0.1,
        scale: 1,
        duration: 2,
        ease: 'power2.out'
      });
    }

    if (itPatterns.length > 0) {
      gsap.set(itPatterns, { opacity: 0, scale: 0.8 });
      tl.to(itPatterns, {
        opacity: 0.1,
        scale: 1,
        duration: 2,
        ease: 'power2.out'
      }, '-=1.5');
    }

    // Floating animation for icons with error handling
    if (floatingIcons.length > 0) {
      gsap.to(floatingIcons, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5
      });
    }

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleEngineeringClick = () => {
    // Add your navigation logic here
    console.log('Navigate to Engineering Services');
  };

  const handleITClick = () => {
    // Add your navigation logic here
    console.log('Navigate to IT Solutions');
  };

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-black">
      {/* Background Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-1/2 h-full">
          {/* Engineering Blueprint Pattern */}
          <svg
            className="engineering-pattern w-full h-full"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="blueprint"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 L 0 40"
                  fill="none"
                  stroke="#2C2C2C"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="2"
                  fill="#2C2C2C"
                  opacity="0.3"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint)" />
          </svg>
        </div>

        <div className="absolute right-0 top-0 w-1/2 h-full">
          {/* IT Digital Grid Pattern */}
          <svg
            className="it-pattern w-full h-full"
            viewBox="0 0 400 400"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="digital-grid"
                x="0"
                y="0"
                width="30"
                height="30"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="30"
                  height="30"
                  fill="none"
                  stroke="#D62828"
                  strokeWidth="1"
                  opacity="0.2"
                />
                <rect
                  x="10"
                  y="10"
                  width="10"
                  height="10"
                  fill="#D62828"
                  opacity="0.1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#digital-grid)" />
          </svg>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[70vh] items-center">
            {/* Left Side - Engineering */}
            <motion.div
              ref={engineeringRef}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <Cog
                  className="floating-icon w-8 h-8 text-gray-300"
                  aria-hidden="true"
                />
                <h2 className="text-xl font-semibold text-gray-300">
                  Engineering Excellence
                </h2>
              </div>

              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Precision.
                  <span className="block text-gray-400">Reliability.</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Industrial solutions built on 35+ years of mechanical and civil engineering expertise.
                  From manpower supply to automation systems.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEngineeringClick}
                  className="px-6 sm:px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Learn more about our engineering services"
                >
                  <span>Engineering Services</span>
                  <ArrowRight size={20} aria-hidden="true" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - IT */}
            <motion.div
              ref={itRef}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <Code
                  className="floating-icon w-8 h-8 text-red-500"
                  aria-hidden="true"
                />
                <h2 className="text-xl font-semibold text-red-500">
                  IT Innovation
                </h2>
              </div>

              <div className="text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Digital.
                  <span className="block text-orange-500">Future.</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Cutting-edge software development, SaaS solutions, and Manufacturing Execution Systems
                  that drive modern industry forward.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleITClick}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all duration-200 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Learn more about our IT solutions"
                >
                  <span>IT Solutions</span>
                  <ArrowRight size={20} aria-hidden="true" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Tagline */}
      <div className="relative z-10 py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center"
          >
            <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-4">
              Engineering + IT Excellence Since 1988
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-3xl mx-auto">
              Reliable Industrial Solutions. Innovative IT Systems. One Trusted Partner.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Statistics */}
      <div className="relative z-10 py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <Users
                  className="w-8 h-8 text-red-500"
                  aria-hidden="true"
                />
                <AnimatedCounter
                  end={85}
                  suffix="+"
                  className="text-3xl font-bold text-white"
                />
                <p className="text-gray-400">
                  Skilled Engineers & IT Experts
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <Award
                  className="w-8 h-8 text-orange-500"
                  aria-hidden="true"
                />
                <AnimatedCounter
                  end={35}
                  suffix="+"
                  className="text-3xl font-bold text-white"
                />
                <p className="text-gray-400">
                  Years of Experience
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <TrendingUp
                  className="w-8 h-8 text-red-500"
                  aria-hidden="true"
                />
                <span className="text-3xl font-bold text-white">
                  ₹5 Cr+
                </span>
                <p className="text-gray-400">
                  Annual Turnover
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;