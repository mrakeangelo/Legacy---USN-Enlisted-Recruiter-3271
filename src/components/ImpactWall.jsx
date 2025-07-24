import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHeart, FiUsers, FiTrendingUp, FiAward } = FiIcons;

const ImpactWall = () => {
  const testimonials = [
    {
      name: "Seaman Recruit Johnson",
      quote: "PO1 Alvarez believed in me when I didn't believe in myself. She showed me that the Navy wasn't just a job, but a calling to serve something greater.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: "E-2",
      year: "2023"
    },
    {
      name: "Petty Officer Martinez",
      quote: "Her guidance during my DEP period was invaluable. She prepared me not just for boot camp, but for a career I'm proud of.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c2a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: "E-4",
      year: "2022"
    },
    {
      name: "Seaman Thompson",
      quote: "PO1 Alvarez taught me that leadership isn't about rank - it's about lifting others up. She changed my perspective on service.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: "E-3",
      year: "2024"
    },
    {
      name: "Petty Officer Davis",
      quote: "She saw potential in me that I couldn't see in myself. Her mentorship helped me become the sailor I am today.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: "E-5",
      year: "2021"
    },
    {
      name: "Seaman Wilson",
      quote: "Her passion for the Navy is contagious. She made me excited about serving my country and building a career I love.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: "E-3",
      year: "2023"
    },
    {
      name: "Petty Officer Clark",
      quote: "PO1 Alvarez doesn't just recruit sailors - she shapes future leaders. Her impact on my life is immeasurable.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      rating: "E-4",
      year: "2022"
    }
  ];

  const impactStats = [
    {
      number: "215+",
      label: "Lives Changed",
      icon: FiUsers,
      description: "Young Americans inspired to serve"
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: FiTrendingUp,
      description: "Recruits who complete boot camp"
    },
    {
      number: "156",
      label: "Active Sailors",
      icon: FiHeart,
      description: "Currently serving in the fleet"
    },
    {
      number: "23",
      label: "Future Leaders",
      icon: FiAward,
      description: "Promoted to leadership positions"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
            Impact Wall
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            The voices of those she's inspired to serve with honor and pride
          </p>
          <div className="w-24 h-1 bg-gold-400 mx-auto"></div>
        </motion.div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-navy-50 dark:bg-navy-800 p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                <SafeIcon icon={stat.icon} className="w-12 h-12 text-navy-600 dark:text-gold-400 mx-auto" />
              </div>
              <div className="text-3xl font-playfair font-bold text-navy-900 dark:text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-inter font-semibold text-navy-700 dark:text-navy-300 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(0,0,0,0.1)" }}
              className="bg-gray-50 dark:bg-navy-800 p-6 rounded-lg shadow-lg relative"
            >
              {/* Quote */}
              <div className="mb-6">
                <div className="text-4xl text-gold-400 mb-2 font-playfair">"</div>
                <p className="text-gray-700 dark:text-gray-300 font-inter italic leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-inter font-semibold text-navy-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.rating} • {testimonial.year}
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gold-100 dark:bg-gold-900 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiHeart} className="w-4 h-4 text-gold-600 dark:text-gold-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-navy-900 dark:bg-navy-800 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              "Over 215 young lives changed forever."
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Each number represents a story, a dream fulfilled, and a life dedicated to service.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold-400 hover:bg-gold-500 text-navy-900 px-8 py-3 rounded-full font-inter font-semibold transition-all duration-300"
            >
              Share Your Story
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactWall;