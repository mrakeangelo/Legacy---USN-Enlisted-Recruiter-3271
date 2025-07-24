import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiCamera, FiMusic, FiBook, FiMapPin, FiCoffee } = FiIcons;

const PersonalSide = () => {
  const [activeTab, setActiveTab] = useState('hobbies');

  const hobbies = [
    {
      icon: FiHeart,
      title: "Fitness & Wellness",
      description: "Maintaining physical and mental health through regular exercise and mindfulness",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: FiBook,
      title: "Reading & Learning",
      description: "Continuous learning through leadership books and personal development",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: FiCoffee,
      title: "Mentoring",
      description: "Guiding young people beyond the recruiting office",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: FiCamera,
      title: "Photography",
      description: "Capturing moments and memories from service and personal life",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const travels = [
    {
      location: "San Diego, CA",
      description: "First duty station - where it all began",
      image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2018"
    },
    {
      location: "Norfolk, VA",
      description: "Advanced training and leadership development",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2020"
    },
    {
      location: "Chicago, IL",
      description: "Current recruiting station - making a difference",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      year: "2022"
    }
  ];

  const playlist = [
    { title: "Stronger", artist: "Kelly Clarkson", mood: "Motivation" },
    { title: "Roar", artist: "Katy Perry", mood: "Empowerment" },
    { title: "Fight Song", artist: "Rachel Platten", mood: "Inspiration" },
    { title: "Confident", artist: "Demi Lovato", mood: "Strength" },
    { title: "Unwritten", artist: "Natasha Bedingfield", mood: "Hope" }
  ];

  const tabs = [
    { id: 'hobbies', name: 'Hobbies & Interests', icon: FiHeart },
    { id: 'travels', name: 'Places & Memories', icon: FiMapPin },
    { id: 'music', name: 'Inspiration Playlist', icon: FiMusic }
  ];

  return (
    <section id="personal" className="py-20 bg-gradient-to-br from-blush-50 to-navy-50 dark:from-navy-800 dark:to-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
            Beyond the Uniform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discovering the person behind the service - passions, adventures, and the heart of a leader
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-navy-600 text-white shadow-lg'
                  : 'bg-white dark:bg-navy-700 text-navy-600 dark:text-gray-300 hover:bg-navy-50 dark:hover:bg-navy-600'
              }`}
            >
              <SafeIcon icon={tab.icon} className="w-5 h-5" />
              <span className="hidden sm:inline">{tab.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'hobbies' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-navy-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={hobby.image}
                      alt={hobby.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <SafeIcon icon={hobby.icon} className="w-6 h-6 text-navy-600 dark:text-gold-400" />
                      <h3 className="text-xl font-playfair font-semibold text-navy-900 dark:text-white">
                        {hobby.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {hobby.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'travels' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {travels.map((travel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-navy-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={travel.image}
                      alt={travel.location}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-playfair font-semibold text-navy-900 dark:text-white">
                        {travel.location}
                      </h3>
                      <span className="text-sm bg-navy-100 dark:bg-navy-700 text-navy-600 dark:text-navy-300 px-2 py-1 rounded">
                        {travel.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {travel.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'music' && (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-navy-800 rounded-lg shadow-lg p-8">
                <div className="text-center mb-8">
                  <SafeIcon icon={FiMusic} className="w-16 h-16 text-navy-600 dark:text-gold-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-playfair font-bold text-navy-900 dark:text-white mb-2">
                    Songs That Inspire
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Music that fuels motivation and strength during challenging times
                  </p>
                </div>

                <div className="space-y-4">
                  {playlist.map((song, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-navy-700 rounded-lg hover:bg-gray-100 dark:hover:bg-navy-600 transition-colors"
                    >
                      <div className="w-12 h-12 bg-navy-100 dark:bg-navy-600 rounded-full flex items-center justify-center">
                        <SafeIcon icon={FiMusic} className="w-6 h-6 text-navy-600 dark:text-gold-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-inter font-semibold text-navy-900 dark:text-white">
                          {song.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {song.artist}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-blush-100 dark:bg-blush-900 text-blush-800 dark:text-blush-200 px-2 py-1 rounded">
                          {song.mood}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-full font-inter font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto"
                  >
                    <SafeIcon icon={FiMusic} className="w-5 h-5" />
                    <span>Listen on Spotify</span>
                  </motion.button>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-navy-900 dark:bg-navy-800 text-white p-8 rounded-lg">
            <blockquote className="text-2xl font-playfair italic mb-4">
              "Balance is not something you find, it's something you create."
            </blockquote>
            <p className="text-gray-300">
              Finding harmony between service, leadership, and personal growth
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalSide;