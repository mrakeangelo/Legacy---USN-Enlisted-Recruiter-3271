import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiArrowDown, FiStar } = FiIcons;

const Hero = () => {
  const scrollToTimeline = () => {
    document.querySelector('#timeline').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-navy"></div>
      <div className="absolute inset-0 bg-flag-pattern opacity-20"></div>
      
      {/* Hero Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-navy-900/20 to-navy-900/60">
          <img 
            src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Navy Service Member"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      {/* Floating Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity 
            }}
            className={`absolute ${
              i === 0 ? 'top-1/4 left-1/4' :
              i === 1 ? 'top-1/3 right-1/4' :
              i === 2 ? 'bottom-1/3 left-1/3' :
              i === 3 ? 'top-1/2 right-1/3' :
              'bottom-1/4 right-1/5'
            }`}
          >
            <SafeIcon icon={FiStar} className="w-4 h-4 text-gold-300" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
            Petty Officer First Class
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-semibold text-gold-300 mb-6">
            Maria Elena Alvarez
          </h2>
          <div className="w-24 h-1 bg-gold-300 mx-auto mb-6"></div>
          <p className="text-xl sm:text-2xl text-gray-200 font-inter mb-8">
            U.S. Navy Enlisted Recruiter
          </p>
          <p className="text-lg text-gray-300 font-inter mb-8">
            Serving with Pride • 2018 - Present
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-playfair italic text-white leading-relaxed">
            "I don't just wear the uniform.<br />
            I open the door for others to wear it too."
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(248, 233, 161, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTimeline}
            className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-8 py-3 rounded-full font-inter font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>See Her Legacy</span>
            <SafeIcon icon={FiArrowDown} className="w-5 h-5" />
          </motion.button>
          
          <div className="text-center sm:text-left">
            <p className="text-gold-300 font-inter font-medium">
              Over 215 Lives Changed
            </p>
            <p className="text-gray-400 text-sm">
              Through dedicated service and mentorship
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <SafeIcon icon={FiArrowDown} className="w-6 h-6 text-gold-300" />
      </motion.div>
    </section>
  );
};

export default Hero;