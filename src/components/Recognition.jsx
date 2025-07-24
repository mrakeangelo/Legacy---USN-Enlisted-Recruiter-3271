import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiStar, FiTrendingUp, FiShield, FiTarget } = FiIcons;

const Recognition = () => {
  const [hoveredAward, setHoveredAward] = useState(null);

  const awards = [
    {
      id: 1,
      name: "Navy Achievement Medal",
      description: "For professional achievement and meritorious service",
      date: "2023",
      icon: FiAward,
      color: "text-yellow-500",
      details: "Awarded for exceptional performance in recruiting duties and outstanding leadership in mentoring new sailors."
    },
    {
      id: 2,
      name: "Recruiting Excellence Award",
      description: "Outstanding performance in Navy recruiting",
      date: "2023",
      icon: FiTarget,
      color: "text-blue-500",
      details: "Recognized for exceeding recruiting goals and maintaining the highest standards of recruit quality."
    },
    {
      id: 3,
      name: "Good Conduct Medal",
      description: "For exemplary conduct and proficiency",
      date: "2022",
      icon: FiShield,
      color: "text-green-500",
      details: "Awarded for maintaining exemplary conduct, efficiency, and fidelity throughout naval service."
    },
    {
      id: 4,
      name: "Navy Unit Commendation",
      description: "For outstanding service as a unit member",
      date: "2021",
      icon: FiStar,
      color: "text-purple-500",
      details: "Recognized as part of a unit that demonstrated exceptional performance and dedication to mission success."
    },
    {
      id: 5,
      name: "Meritorious Unit Commendation",
      description: "For meritorious achievement in support of operations",
      date: "2020",
      icon: FiTrendingUp,
      color: "text-red-500",
      details: "Awarded for outstanding achievement and meritorious service in support of naval operations."
    }
  ];

  const rankProgression = [
    { rank: "E-1", title: "Seaman Recruit", date: "2018", active: false },
    { rank: "E-2", title: "Seaman Apprentice", date: "2018", active: false },
    { rank: "E-3", title: "Seaman", date: "2019", active: false },
    { rank: "E-4", title: "Petty Officer 3rd Class", date: "2020", active: false },
    { rank: "E-5", title: "Petty Officer 2nd Class", date: "2022", active: false },
    { rank: "E-6", title: "Petty Officer 1st Class", date: "2024", active: true }
  ];

  return (
    <section id="recognition" className="py-20 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
            Recognition & Awards
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Honoring excellence in service, leadership, and dedication to the Navy mission
          </p>
        </motion.div>

        {/* Awards Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-playfair font-semibold text-navy-900 dark:text-white mb-8 text-center"
          >
            Military Decorations
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredAward(award.id)}
                onHoverEnd={() => setHoveredAward(null)}
                className="bg-gray-50 dark:bg-navy-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full bg-white dark:bg-navy-700 ${award.color}`}>
                    <SafeIcon icon={award.icon} className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-playfair font-semibold text-navy-900 dark:text-white mb-2">
                      {award.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {award.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-navy-100 dark:bg-navy-700 text-navy-600 dark:text-navy-300 px-2 py-1 rounded">
                        {award.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredAward === award.id ? 'auto' : 0,
                    opacity: hoveredAward === award.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-navy-600">
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {award.details}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Rank Progression */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-playfair font-semibold text-navy-900 dark:text-white mb-8 text-center"
          >
            Rank Progression
          </motion.h3>

          <div className="relative">
            {/* Progress Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-navy-200 dark:bg-navy-700"></div>

            <div className="space-y-8">
              {rankProgression.map((rank, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                >
                  {/* Rank Node */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                    <div className={`w-8 h-8 rounded-full border-4 flex items-center justify-center ${
                      rank.active 
                        ? 'bg-gold-400 border-gold-500 animate-glow' 
                        : 'bg-white dark:bg-navy-800 border-navy-300 dark:border-navy-600'
                    }`}>
                      <div className={`w-3 h-3 rounded-full ${
                        rank.active ? 'bg-navy-900' : 'bg-navy-400'
                      }`}></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  } ml-12 md:ml-0`}>
                    <div className={`p-6 rounded-lg shadow-lg ${
                      rank.active 
                        ? 'bg-gold-50 dark:bg-gold-900/20 border-2 border-gold-200 dark:border-gold-800' 
                        : 'bg-gray-50 dark:bg-navy-800'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`text-2xl font-playfair font-bold ${
                          rank.active ? 'text-gold-600 dark:text-gold-400' : 'text-navy-600 dark:text-navy-400'
                        }`}>
                          {rank.rank}
                        </span>
                        {rank.active && (
                          <SafeIcon icon={FiStar} className="w-5 h-5 text-gold-500" />
                        )}
                      </div>
                      <h4 className="text-lg font-inter font-semibold text-navy-900 dark:text-white mb-2">
                        {rank.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {rank.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-navy-900 dark:bg-navy-800 text-white p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-playfair font-bold mb-4">
            Service Excellence
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Six years of distinguished service, leadership, and dedication to the Navy mission
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-playfair font-bold text-gold-400 mb-2">5</div>
              <div className="text-sm text-gray-300">Military Awards</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gold-400 mb-2">6</div>
              <div className="text-sm text-gray-300">Rank Advancements</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gold-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Mission Success</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-gold-400 mb-2">E-6</div>
              <div className="text-sm text-gray-300">Current Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Recognition;