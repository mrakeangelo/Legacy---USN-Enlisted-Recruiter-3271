import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlay, FiPause, FiVolume2, FiVolumeX } = FiIcons;

const StoryBlock = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="story" className="py-20 bg-gradient-to-br from-navy-50 to-blush-50 dark:from-navy-800 dark:to-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
            Why I Recruit
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            In her own words - the passion, purpose, and pride behind the uniform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Quote Header */}
            <div className="relative">
              <div className="text-6xl text-gold-400 font-playfair absolute -top-4 -left-4 opacity-50">"</div>
              <h3 className="text-2xl font-playfair font-semibold text-navy-900 dark:text-white pl-8">
                My Journey, My Purpose
              </h3>
            </div>

            {/* Story Text */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-inter">
                When I first put on this uniform, I thought I was just starting a career. 
                What I discovered was a calling that would shape not just my life, but the 
                lives of hundreds of young Americans who would follow in my footsteps.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-inter">
                Every day, I meet young people who are searching for something more - 
                purpose, direction, the chance to be part of something bigger than themselves. 
                I see the spark in their eyes when they realize the Navy isn't just about 
                serving their country; it's about discovering who they're meant to become.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-inter">
                I recruit because I believe in the transformative power of service. 
                I've watched shy teenagers become confident leaders, uncertain young adults 
                find their calling, and dreamers turn their aspirations into reality. 
                That's not just a job - that's a privilege.
              </p>
              
              <blockquote className="border-l-4 border-gold-400 pl-6 italic text-xl text-navy-800 dark:text-navy-200 font-playfair">
                "I don't just wear the uniform. I open the door for others to wear it too, 
                and in doing so, I help them discover the leader they never knew they could be."
              </blockquote>
            </div>

            {/* Audio Controls */}
            <div className="bg-white dark:bg-navy-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlayback}
                  className="w-12 h-12 bg-navy-600 hover:bg-navy-700 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  <SafeIcon icon={isPlaying ? FiPause : FiPlay} className="w-6 h-6" />
                </motion.button>
                
                <div className="flex-1">
                  <p className="text-sm font-inter font-medium text-navy-900 dark:text-white mb-1">
                    Listen to PO1 Alvarez's Story
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-navy-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isPlaying ? "60%" : "0%" }}
                      transition={{ duration: 30 }}
                      className="bg-gold-400 h-2 rounded-full"
                    />
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="w-10 h-10 bg-gray-100 dark:bg-navy-700 hover:bg-gray-200 dark:hover:bg-navy-600 text-navy-600 dark:text-gray-300 rounded-full flex items-center justify-center transition-colors"
                >
                  <SafeIcon icon={isMuted ? FiVolumeX : FiVolume2} className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="PO1 Alvarez in uniform"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gold-400 text-navy-900 p-4 rounded-full shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold">215+</div>
                <div className="text-xs font-inter">Lives Changed</div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-navy-800 p-4 rounded-full shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-navy-900 dark:text-white">6</div>
                <div className="text-xs font-inter text-gray-600 dark:text-gray-300">Years Service</div>
              </div>
            </motion.div>

            {/* Decorative Pattern */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-12 left-12 w-20 h-20 bg-gold-200 dark:bg-gold-800 rounded-full opacity-20"></div>
              <div className="absolute bottom-12 right-12 w-16 h-16 bg-navy-200 dark:bg-navy-600 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>

        {/* Key Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Mentorship",
              description: "Guiding young minds toward their potential",
              icon: "👥"
            },
            {
              title: "Leadership",
              description: "Leading by example, inspiring through action",
              icon: "⭐"
            },
            {
              title: "Legacy",
              description: "Building tomorrow's leaders today",
              icon: "🏛️"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white dark:bg-navy-800 p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-playfair font-semibold text-navy-900 dark:text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoryBlock;