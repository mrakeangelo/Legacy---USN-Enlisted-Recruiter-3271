import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAnchor, FiHeart, FiStar, FiShield } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "She served with pride. She led with heart.",
    "A recruiter plants seeds of legacy.",
    "Honor, courage, commitment - lived daily.",
    "Building tomorrow's leaders today.",
    "Service above self, always."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Mission */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center md:justify-start space-x-3 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <SafeIcon icon={FiAnchor} className="w-10 h-10 text-gold-300" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-playfair font-bold">Legacy</h3>
                <p className="text-sm text-gray-400">A Tribute to Service</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Honoring the dedication, leadership, and impact of PO1 Maria Elena Alvarez - 
              a sailor who doesn't just wear the uniform, but opens doors for others to wear it too.
            </p>
            
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <div className="flex items-center space-x-1">
                <SafeIcon icon={FiStar} className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-gray-400">E-6 Petty Officer</span>
              </div>
              <div className="flex items-center space-x-1">
                <SafeIcon icon={FiShield} className="w-4 h-4 text-gold-400" />
                <span className="text-sm text-gray-400">2018 - Present</span>
              </div>
            </div>
          </div>

          {/* Quote Carousel */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-32 flex items-center justify-center"
            >
              <motion.blockquote
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-playfair italic text-gold-300 leading-relaxed"
              >
                "{quotes[currentQuote]}"
              </motion.blockquote>
            </motion.div>
            
            {/* Quote Indicators */}
            <div className="flex justify-center space-x-2 mt-4">
              {quotes.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentQuote ? 'bg-gold-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="text-center md:text-right">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-playfair font-semibold text-gold-300 mb-6">
                Impact by the Numbers
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <div className="text-right">
                    <div className="text-2xl font-playfair font-bold text-white">215+</div>
                    <div className="text-sm text-gray-400">Lives Changed</div>
                  </div>
                  <SafeIcon icon={FiHeart} className="w-6 h-6 text-red-400" />
                </div>
                
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <div className="text-right">
                    <div className="text-2xl font-playfair font-bold text-white">6</div>
                    <div className="text-sm text-gray-400">Years of Service</div>
                  </div>
                  <SafeIcon icon={FiStar} className="w-6 h-6 text-gold-400" />
                </div>
                
                <div className="flex items-center justify-center md:justify-end space-x-3">
                  <div className="text-right">
                    <div className="text-2xl font-playfair font-bold text-white">5</div>
                    <div className="text-sm text-gray-400">Major Awards</div>
                  </div>
                  <SafeIcon icon={FiShield} className="w-6 h-6 text-blue-400" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-700 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            <p className="text-gray-400 text-sm">
              © 2024 Legacy Tribute. Created with honor and respect.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Proudly built by <span className="text-gold-400">Mrake Agency</span>
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-6"
          >
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Honor</p>
              <div className="w-8 h-1 bg-gold-400 mx-auto"></div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Courage</p>
              <div className="w-8 h-1 bg-gold-400 mx-auto"></div>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500 mb-1">Commitment</p>
              <div className="w-8 h-1 bg-gold-400 mx-auto"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navy Anchor Watermark */}
      <div className="absolute bottom-4 right-4 opacity-5 pointer-events-none">
        <SafeIcon icon={FiAnchor} className="w-32 h-32" />
      </div>
    </footer>
  );
};

export default Footer;