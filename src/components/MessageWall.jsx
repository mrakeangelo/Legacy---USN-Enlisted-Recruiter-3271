import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiSend, FiHeart, FiMessageCircle, FiUser, FiMail } = FiIcons;

const MessageWall = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      message: "Thank you for believing in me when I didn't believe in myself. Your guidance changed my life forever.",
      timestamp: "2024-01-15",
      approved: true,
      category: "recruit"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "m.chen@email.com",
      message: "PO1 Alvarez is not just a recruiter, she's a mentor and inspiration. Her dedication to service is unmatched.",
      timestamp: "2024-01-14",
      approved: true,
      category: "peer"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      email: "maria.r@email.com",
      message: "Watching you lead with such grace and strength has been an honor. You make us all proud to serve.",
      timestamp: "2024-01-13",
      approved: true,
      category: "family"
    },
    {
      id: 4,
      name: "David Thompson",
      email: "d.thompson@email.com",
      message: "Your passion for the Navy is contagious. Thank you for showing me what true leadership looks like.",
      timestamp: "2024-01-12",
      approved: true,
      category: "recruit"
    },
    {
      id: 5,
      name: "Jennifer Wilson",
      email: "j.wilson@email.com",
      message: "You've touched so many lives and inspired countless young people to serve. Your legacy will live on forever.",
      timestamp: "2024-01-11",
      approved: true,
      category: "mentor"
    }
  ]);

  const [newMessage, setNewMessage] = useState({
    name: '',
    email: '',
    message: '',
    category: 'recruit'
  });

  const [showForm, setShowForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Messages' },
    { id: 'recruit', name: 'Recruits' },
    { id: 'peer', name: 'Peers' },
    { id: 'family', name: 'Family' },
    { id: 'mentor', name: 'Mentors' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      id: messages.length + 1,
      ...newMessage,
      timestamp: new Date().toISOString().split('T')[0],
      approved: false
    };
    setMessages([message, ...messages]);
    setNewMessage({ name: '', email: '', message: '', category: 'recruit' });
    setShowForm(false);
  };

  const filteredMessages = selectedCategory === 'all' 
    ? messages.filter(msg => msg.approved)
    : messages.filter(msg => msg.approved && msg.category === selectedCategory);

  const getCategoryColor = (category) => {
    switch (category) {
      case 'recruit': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'peer': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'family': return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      case 'mentor': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="messages" className="py-20 bg-gray-50 dark:bg-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-navy-900 dark:text-white mb-4">
            Message Wall
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Share your thoughts, memories, and gratitude with PO1 Alvarez
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-navy-600 hover:bg-navy-700 text-white px-8 py-3 rounded-full font-inter font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <SafeIcon icon={FiMessageCircle} className="w-5 h-5" />
            <span>Leave a Message</span>
          </motion.button>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-navy-600 text-white shadow-lg'
                  : 'bg-white dark:bg-navy-700 text-navy-600 dark:text-gray-300 hover:bg-navy-50 dark:hover:bg-navy-600'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Messages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <AnimatePresence>
            {filteredMessages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="bg-white dark:bg-navy-700 p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl"
                style={{
                  background: `linear-gradient(135deg, ${
                    message.category === 'recruit' ? '#e0f2fe' : 
                    message.category === 'peer' ? '#f0fdf4' :
                    message.category === 'family' ? '#fdf2f8' :
                    message.category === 'mentor' ? '#f3e8ff' : '#f8fafc'
                  } 0%, white 100%)`
                }}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-inter font-medium ${getCategoryColor(message.category)}`}>
                    {message.category}
                  </span>
                  <SafeIcon icon={FiHeart} className="w-4 h-4 text-red-400" />
                </div>

                {/* Message Content */}
                <p className="text-gray-700 dark:text-gray-300 font-inter leading-relaxed mb-4 italic">
                  "{message.message}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-navy-600">
                  <div className="w-8 h-8 bg-navy-100 dark:bg-navy-600 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="w-4 h-4 text-navy-600 dark:text-navy-300" />
                  </div>
                  <div>
                    <p className="font-inter font-medium text-navy-900 dark:text-white text-sm">
                      {message.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(message.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Message Form Modal */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
              onClick={() => setShowForm(false)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-navy-800 p-8 rounded-lg max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-playfair font-bold text-navy-900 dark:text-white mb-6">
                  Leave a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newMessage.name}
                      onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent dark:bg-navy-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={newMessage.email}
                      onChange={(e) => setNewMessage({...newMessage, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent dark:bg-navy-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={newMessage.category}
                      onChange={(e) => setNewMessage({...newMessage, category: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent dark:bg-navy-700 dark:text-white"
                    >
                      <option value="recruit">Recruit</option>
                      <option value="peer">Peer</option>
                      <option value="family">Family</option>
                      <option value="mentor">Mentor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newMessage.message}
                      onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-navy-600 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent dark:bg-navy-700 dark:text-white resize-none"
                      placeholder="Share your thoughts, memories, or gratitude..."
                    />
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-navy-600 hover:bg-navy-700 text-white py-3 rounded-lg font-inter font-semibold transition-colors flex items-center justify-center space-x-2"
                    >
                      <SafeIcon icon={FiSend} className="w-4 h-4" />
                      <span>Send Message</span>
                    </motion.button>
                    
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 bg-gray-200 dark:bg-navy-700 text-gray-700 dark:text-gray-300 rounded-lg font-inter font-medium hover:bg-gray-300 dark:hover:bg-navy-600 transition-colors"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Messages are reviewed before being published
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MessageWall;