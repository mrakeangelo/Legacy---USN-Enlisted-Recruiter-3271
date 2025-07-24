import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiAward, FiUsers, FiMapPin, FiStar } = FiIcons;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(null);

  const timelineData = [
    {
      date: "2018",
      title: "Boot Camp Graduation",
      description: "Great Lakes Naval Training Center",
      details: "Graduated with honors from Navy Boot Camp, demonstrating exceptional leadership potential and commitment to service.",
      icon: FiStar,
      type: "milestone"
    },
    {
      date: "2018",
      title: "A-School Completion",
      description: "Navy Technical Training",
      details: "Completed advanced technical training, specializing in personnel management and administrative operations.",
      icon: FiAward,
      type: "education"
    },
    {
      date: "2019",
      title: "First Duty Station",
      description: "USS Enterprise (CVN-65)",
      details: "Served aboard the legendary USS Enterprise, gaining invaluable experience in naval operations and crew management.",
      icon: FiMapPin,
      type: "assignment"
    },
    {
      date: "2020",
      title: "Promotion to E-4",
      description: "Petty Officer Third Class",
      details: "Advanced to Petty Officer Third Class, recognizing outstanding performance and leadership capabilities.",
      icon: FiAward,
      type: "promotion"
    },
    {
      date: "2021",
      title: "Recruiting School",
      description: "Navy Recruiting District Training",
      details: "Completed intensive recruiting training, learning to inspire and guide the next generation of sailors.",
      icon: FiUsers,
      type: "education"
    },
    {
      date: "2022",
      title: "Promotion to E-5",
      description: "Petty Officer Second Class",
      details: "Promoted to Petty Officer Second Class, demonstrating exceptional recruiting performance and leadership.",
      icon: FiAward,
      type: "promotion"
    },
    {
      date: "2023",
      title: "Recruiting Excellence Award",
      description: "Outstanding Performance Recognition",
      details: "Received the Recruiting Excellence Award for exceptional performance in inspiring young Americans to serve.",
      icon: FiStar,
      type: "award"
    },
    {
      date: "2024",
      title: "Promotion to E-6",
      description: "Petty Officer First Class",
      details: "Advanced to Petty Officer First Class, continuing to lead and inspire future sailors with dedication and pride.",
      icon: FiAward,
      type: "promotion"
    }
  ];

  const getIconColor = (type) => {
    switch (type) {
      case 'milestone': return 'text-gold-400';
      case 'education': return 'text-blue-400';
      case 'assignment': return 'text-green-400';
      case 'promotion': return 'text-purple-400';
      case 'award': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section id="timeline" className="py-20 bg-white dark:bg-navy-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
            Career Timeline
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey of dedication, growth, and service to our nation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 h-full bg-navy-200 dark:bg-navy-700"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-col sm:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-8 h-8 rounded-full bg-white dark:bg-navy-800 border-4 ${
                      activeItem === index ? 'border-gold-400' : 'border-navy-300 dark:border-navy-600'
                    } flex items-center justify-center cursor-pointer transition-all duration-300`}
                    onClick={() => setActiveItem(activeItem === index ? null : index)}
                  >
                    <SafeIcon icon={item.icon} className={`w-4 h-4 ${getIconColor(item.type)}`} />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`w-full sm:w-5/12 ${
                  index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'
                } ml-12 sm:ml-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-navy-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4 text-navy-500 dark:text-navy-400" />
                      <span className="text-sm font-inter font-medium text-navy-600 dark:text-navy-300">
                        {item.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-playfair font-semibold text-navy-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {item.description}
                    </p>
                    
                    {activeItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"
                      >
                        {item.details}
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-navy-50 dark:bg-navy-800 p-6 rounded-lg">
            <div className="text-3xl font-playfair font-bold text-navy-900 dark:text-white mb-2">6</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Years of Service</div>
          </div>
          <div className="bg-navy-50 dark:bg-navy-800 p-6 rounded-lg">
            <div className="text-3xl font-playfair font-bold text-navy-900 dark:text-white mb-2">215+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Lives Impacted</div>
          </div>
          <div className="bg-navy-50 dark:bg-navy-800 p-6 rounded-lg">
            <div className="text-3xl font-playfair font-bold text-navy-900 dark:text-white mb-2">E-6</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Current Rank</div>
          </div>
          <div className="bg-navy-50 dark:bg-navy-800 p-6 rounded-lg">
            <div className="text-3xl font-playfair font-bold text-navy-900 dark:text-white mb-2">5</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Major Awards</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;